import { DataSource } from "typeorm";
import { Anime } from "./entities/anime.entity";

export const AnimesProvider = [
  {
    provide: "ANIME_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Anime),
    inject: ["DATA_SOURCE"],
  },
];
