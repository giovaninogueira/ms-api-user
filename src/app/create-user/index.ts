import { RabbitMQ } from "../../providers/messager-broker-access/implementations/rabbit-mq/rabbit-mq.provider";
import { CreateUserApplication } from "./create-user.application";
import { CreateUserController } from "./create-user.controller";

const messagerBrokerAccess = new RabbitMQ();
const createUserApp = new CreateUserApplication(messagerBrokerAccess);
const createUserController = new CreateUserController(createUserApp);

export { createUserApp, createUserController }