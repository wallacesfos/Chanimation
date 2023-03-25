import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateEpisodeDto } from "./dto/create-episode.dto";
import { UpdateEpisodeDto } from "./dto/update-episode.dto";
import { Episode } from "./entities/episode.entity";

@Injectable()
export class EpisodesService {
  constructor(
    @Inject("EPISODE_REPOSITORY")
    private episodeRepository: Repository<Episode>
  ) {}

  create(createEpisodeDto: CreateEpisodeDto) {
    try {
      return this.episodeRepository.save(createEpisodeDto);
    } catch (error) {
      throw error;
    }
  }

  async findAll(animeID) {
    return await this.episodeRepository.find({
      where: {
        anime: {
          IDAnime: animeID,
        },
      },
    });
  }

  update(id: string, updateEpisodeDto: UpdateEpisodeDto) {
    return this.episodeRepository.update(id, updateEpisodeDto);
  }

  remove(id: string) {
    return this.episodeRepository.delete(id);
  }
}
