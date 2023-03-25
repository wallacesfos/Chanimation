import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateAnimeDto } from "./dto/create-anime.dto";
import { UpdateAnimeDto } from "./dto/update-anime.dto";
import { Anime } from "./entities/anime.entity";

@Injectable()
export class AnimesService {
  constructor(
    @Inject("ANIME_REPOSITORY")
    private animesRepository: Repository<Anime>
  ) {}

  create(createAnimeDto: CreateAnimeDto) {
    createAnimeDto.like = 0;
    createAnimeDto.deslike = 0;
    return this.animesRepository.save(createAnimeDto);
  }

  findAll() {
    return this.animesRepository.find();
  }

  findOne(id: string) {
    return this.animesRepository.findOneByOrFail({ IDAnime: id });
  }

  async update(id: string, updateAnimeDto: UpdateAnimeDto) {
    try {
      const anime = this.animesRepository.findOneByOrFail({ IDAnime: id });

      const newAnime = { ...anime, ...updateAnimeDto };

      return await this.animesRepository.save(newAnime);
    } catch (error) {
      throw error;
    }
  }

  remove(id: string) {
    return this.animesRepository.delete(id);
  }
}
