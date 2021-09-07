export interface IMessagerAccess {
    queue: string;
    message: any;
}

export interface IResponseAccess {
    code: number;
    response: any;
}

export interface IMessagerAccessRequest {
    body: any;
    message: string;
}

export interface IRouterMessageBroker {
    handle(messagerBorker: IMessagerBrokerAccess): void;
}

export interface IMessagerBrokerAccess {
    /**
     * Connect with messager broker
     */
    connect(): Promise<any>;

    /**
     * Create Queue
     * @param channel 
     * @param queue 
     */
    createQueue(channel: any, queue: string): Promise<any>;

    /**
     * Listen RPC Queue
     * @param queue 
     * @param callback 
     */
     listenRPC(queue: string, callback: CallableFunction): void;

    /**
     * Send Pub/Sub
     * @param message 
     */
    sendPubSub(message: IMessagerAccess): Promise<any>;

    /**
     * Send RPC
     * @param message 
     */
    sendRPC(message: IMessagerAccess): Promise<IResponseAccess>;

    /**
     * Response RPC
     * @param objResponse 
     */
    responseCallRPC(objResponse: { queue: string; replyTo: string, correlationId: string, response: IResponseAccess }): Promise<void>;

    /**
     * Message Convert
     * @param message 
     */
    messageConvert(message: any): IResponseAccess;

    /**
     * Message Request
     * @param message 
     */
    messageConvertRequest(message: any): IMessagerAccessRequest;
}