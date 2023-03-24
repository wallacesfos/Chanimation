import { Anime } from "src/modules/animes/entities/anime.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Episode {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  EpisodeName: string;

  @Column()
  NameAnime: string;

  @Column()
  Episode: number;

  @Column()
  season: number;

  @Column()
  description: string;

  @Column()
  urlVideo: string;

  @Column()
  imageURL: string;

  @ManyToOne(() => Anime, (anime) => anime.episodes)
  anime: Anime;
}
