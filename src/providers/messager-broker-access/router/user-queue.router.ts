import { createUserController } from "../../../app/create-user";
import { IMessagerAccessRequest, IMessagerBrokerAccess, IRouterMessageBroker } from "../implementations/imessager-broker-access.interface";

export class UserQueueRouter implements IRouterMessageBroker {
    /**
     * Handle
     * @param messagerBorker 
     */
    handle(messagerBorkerT: IMessagerBrokerAccess) {
        messagerBorkerT.listenRPC('user-create', async (data: IMessagerAccessRequest) => {
            const response = await createUserController.handle(data);
            return response;
        })
    }
}