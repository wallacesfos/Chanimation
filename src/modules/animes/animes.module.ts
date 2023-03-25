import { Module } from "@nestjs/common";
import { AnimesService } from "./animes.service";
import { AnimesController } from "./animes.controller";
import { DatabaseModule } from "src/database/database.module";
import { AnimesProvider } from "./animes.provider";

@Module({
  imports: [DatabaseModule],
  controllers: [AnimesController],
  providers: [...AnimesProvider, AnimesService],
})
export class AnimesModule {}
