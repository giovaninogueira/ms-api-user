import { IMessagerBrokerAccess } from "../../providers/messager-broker-access/implementations/imessager-broker-access.interface";
import { ICreateUserDTO } from "./icreate-user-dto.interface";

export class CreateUserApplication {
    constructor(private readonly messagerBroker: IMessagerBrokerAccess) { }

    /**
     * Handle
     * @param userSend 
     */
    async handle(userSend: ICreateUserDTO): Promise<any> {
        await this.messagerBroker.sendPubSub({
            queue: 'send-email-new-user',
            message: {
                email: userSend.email,
            }
        });
        return true;
    }
}