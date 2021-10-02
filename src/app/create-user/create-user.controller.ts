import { IMessagerAccessRequest, IResponseAccessResponse } from "../../providers/messager-broker-access/implementations/imessager-broker-access.interface";
import { CreateUserApplication } from "./create-user.application";

export class CreateUserController {
    constructor(private readonly createUserApp: CreateUserApplication) { }

    /**
     * Handle
     * @param req 
     * @returns 
     */
    async handle(req: IMessagerAccessRequest): Promise<IResponseAccessResponse> {
        await this.createUserApp.execute(req.body);
        return {
            code: 201,
            response: {
                message: 'Usuário cadastrado com sucesso!'
            }
        }
    }
}