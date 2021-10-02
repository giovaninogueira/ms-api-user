import { Sequelize } from "sequelize-typescript";
import { UserEntity } from "../../../models/user/user.entity";

const sequelizeConnection = new Sequelize({
    database: 'mms_user',
    dialect: 'postgres',
    username: 'postgres',
    password: 'Postgres2021!',
    logging: false,
    pool: {
        max: 3,
        min: 1
    },
    models: [UserEntity]
});

sequelizeConnection.sync().catch((e) => {
    return;
})

export { sequelizeConnection }