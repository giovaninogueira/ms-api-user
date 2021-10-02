import { ErroCustom } from "../../errors/error-custom";
import { UserEntity } from "../../models/user/user.entity";
import { IEncrypt } from "../../providers/encrypt/iencrypt.interface";
import { IMessagerBrokerAccess } from "../../providers/messager-broker-access/implementations/imessager-broker-access.interface";
import { ICreateUserDTO } from "./icreate-user-dto.interface";

export class CreateUserApplication {
    constructor(
        private readonly messagerBroker: IMessagerBrokerAccess,
        private readonly userEntity: typeof UserEntity,
        private readonly encrypt: IEncrypt
    ) { }

    /**
     * Handle
     * @param userSend 
     */
    async execute(userSend: ICreateUserDTO): Promise<any> {
        await this.emailExist(userSend.email);
        const pwd = await this.encrypt.hashPassword(userSend.password);
        
        await this.userEntity.create({
            name: userSend.name,
            email: userSend.email,
            password: pwd,
            cellPhone: userSend.cellPhone
        });

        await this.messagerBroker.sendPubSub({
            queue: 'send-email-new-user',
            message: {
                email: userSend.email,
                name: userSend.name
            }
        });
    }

    /**
     * Email Exist
     * @param email 
     */
    private async emailExist(email: string) {
        const { count } = await this.userEntity.findAndCountAll({
            where: {
                email
            }
        });
        if (count) {
            throw new ErroCustom({
                code: 400,
                error: 'E-mail em uso.'
            })
        }
    }
}