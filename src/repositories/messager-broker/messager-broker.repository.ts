import { IMessagerBrokerAccess } from "../../providers/messager-broker-access/implementations/imessager-broker-access.interface";
import { IMessage, IMessagerBroker, IMessageResponse } from "./imessager-broker.interface";

export class MessagerBoker implements IMessagerBroker {

    constructor(
        private readonly messagerBroker: IMessagerBrokerAccess
    ) {}

    /**
     * Listen Queue
     * @param queue 
     * @param callback 
     */
    listenRPC(queue: string, callback: CallableFunction) {
        this.messagerBroker.listenRPC(queue, callback);
    }

    /**
     * Messager Broker RPC
     * @param message 
     */
    async sendRPC(message: IMessage): Promise<IMessageResponse> {
        return await this.messagerBroker.sendRPC(message);
    }

    /**
     * Send Pub/Sub
     * @param message 
     */
    async sendPubSub(message: IMessage): Promise<void> {
        await this.messagerBroker.sendPubSub(message);
    }
}