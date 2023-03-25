import { Injectable, Inject } from '@nestjs/common';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { Animes } from "./entities/anime.entity";

@Injectable()
export class AnimesService {
  constructor(
    @Inject("ANIME_REPOSITORY")
    private animesRepository: Repository<Anime>
  )
  
  create(createAnimeDto: CreateAnimeDto) {
    return;
  }

  findAll() {
    return `This action returns all animes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anime`;
  }

  update(id: number, updateAnimeDto: UpdateAnimeDto) {
    return `This action updates a #${id} anime`;
  }

  remove(id: number) {
    return `This action removes a #${id} anime`;
  }
}
