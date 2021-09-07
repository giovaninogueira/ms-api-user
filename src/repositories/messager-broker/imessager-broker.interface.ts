export interface IMessage {
    queue: string;
    message: any;
}

export interface IMessageResponse {
    code: number;
    response: any;
}

export interface IMessageRequest {
    body: any;
    message: string;
}

export interface IMessagerBroker {
    /**
     * Send RPC
     * @param message 
     */
    sendRPC(message: IMessage): Promise<IMessageResponse>;

    /**
     * Send Pub/Sub
     * @param message 
     */
    sendPubSub(message: IMessage): Promise<void>;

    /**
     * Listen RPC
     * @param queue 
     * @param callback 
     */
     listenRPC(queue: string, callback: CallableFunction): void;
}