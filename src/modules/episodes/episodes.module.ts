import { Module } from "@nestjs/common";
import { EpisodesService } from "./episodes.service";
import { EpisodesController } from "./episodes.controller";
import { EpisodesProvider } from "./episodes.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [EpisodesController],
  providers: [...EpisodesProvider, EpisodesService],
})
export class EpisodesModule {}
