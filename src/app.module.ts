import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { AnimesModule } from "./modules/animes/animes.module";
import { EpisodesModule } from "./modules/episodes/episodes.module";
import { FavoritesModule } from "./modules/favorites/favorites.module";
import { HistoricModule } from "./modules/historic/historic.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    UsersModule,
    HistoricModule,
    FavoritesModule,
    EpisodesModule,
    AnimesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
