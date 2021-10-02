import { RabbitMQ } from "../../providers/messager-broker-access/implementations/rabbit-mq/rabbit-mq.provider";
import { CreateUserApplication } from "./create-user.application";
import { CreateUserController } from "./create-user.controller";
import { UserEntity } from "./../../models/user/user.entity";
import { encrypt } from "../../providers/encrypt";

const messagerBrokerAccess = new RabbitMQ();
const createUserApp = new CreateUserApplication(
    messagerBrokerAccess, 
    UserEntity, 
    encrypt
);
const createUserController = new CreateUserController(createUserApp);

export { createUserApp, createUserController }