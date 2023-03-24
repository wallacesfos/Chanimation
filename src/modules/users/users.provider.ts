import { DataSource } from "typeorm";
import { Users } from "./entities/user.entity";

export const UsersProvider = [
  {
    provide: "USER_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ["DATA_SOURCE"],
  },
];
