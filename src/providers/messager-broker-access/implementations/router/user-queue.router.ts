import { createUserController } from "../../../../app/create-user";
import { IMessageRequest } from "../../../../repositories/messager-broker/imessager-broker.interface";
import { IMessagerBrokerAccess, IRouterMessageBroker } from "../imessager-broker-access.interface";

export class UserQueueRouter implements IRouterMessageBroker {
    /**
     * Handle
     * @param messagerBorker 
     */
    handle(messagerBorkerT: IMessagerBrokerAccess) {
        messagerBorkerT.listenRPC('user-create', async (data: IMessageRequest) => {
            const response = await createUserController.handle(data);
            return response;
        })
    }
}