import { Anime } from "src/modules/animes/entities/anime.entity";
import { Users } from "src/modules/users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, (user) => user.favoriteItems)
  user: Users;

  @ManyToOne(() => Anime, (anime) => anime.favoriteItems)
  anime: Anime;
}
