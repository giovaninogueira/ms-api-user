import { IMessageRequest, IMessageResponse } from "../../repositories/messager-broker/imessager-broker.interface";
import { CreateUserApplication } from "./create-user.application";

export class CreateUserController {
    constructor(private readonly createUserApp: CreateUserApplication) {}

    /**
     * Handle
     * @param req 
     * @returns 
     */
    async handle(req: IMessageRequest): Promise<IMessageResponse> {
        const result = await this.createUserApp.handle(req.body);
        return {
            code: 201,
            response: {
                message: 'Usuário cadastrado com sucesso!'
            }
        }
    }
}