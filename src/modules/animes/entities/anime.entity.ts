import { Episode } from "src/modules/episodes/entities/episode.entity";
import { Favorite } from "src/modules/favorites/entities/favorite.entity";
import { Historic } from "src/modules/historic/entities/historic.entity";
import { Users } from "src/modules/users/entities/user.entity";
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Anime {
  @PrimaryGeneratedColumn("uuid")
  IDAnime: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  trailer?: string;

  @Column()
  like: number;

  @Column()
  deslike: number;

  @Column()
  launch: string;

  @ManyToMany(() => Users, (user) => user.favorites)
  users: Users[];

  @OneToMany(() => Favorite, (favorite) => favorite.anime)
  favoriteItems: Favorite[];

  @OneToMany(() => Episode, (episode) => episode.anime)
  episodes: Episode[];

  @OneToMany(() => Historic, (historic) => historic.anime)
  historicos: Historic[];
}
