import { RabbitMQ } from "../../providers/messager-broker-access/implementations/rabbit-mq/rabbit-mq.provider";
import { MessagerBoker } from "../../repositories/messager-broker/messager-broker.repository";
import { CreateUserApplication } from "./create-user.application";
import { CreateUserController } from "./create-user.controller";

const messagerBrokerAccess = new RabbitMQ();
const messagerBroker = new MessagerBoker(messagerBrokerAccess);
const createUserApp = new CreateUserApplication(messagerBroker);
const createUserController = new CreateUserController(createUserApp);

export { createUserApp, createUserController }