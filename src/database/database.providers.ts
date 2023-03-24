import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: "0.0.0.0",
        port: 5432,
        username: "wallace",
        password: "wallace",
        database: "chanimationDB",
        entities: [__dirname + "/../modules/**/entities/*.entity.{js,ts}"],
        synchronize: false,
      });
      console.log(__dirname + "/../modules/**/entities/*.entity.{js,ts}");
      return dataSource.initialize();
    },
  },
];
