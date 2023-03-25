import { Anime } from "src/modules/animes/entities/anime.entity";
import { Favorite } from "src/modules/favorites/entities/favorite.entity";
import { Historic } from "src/modules/historic/entities/historic.entity";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  IDUser: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Anime, (anime) => anime.users)
  @JoinTable()
  favorites: Anime[];

  @OneToMany(() => Favorite, (favorite) => favorite.user)
  favoriteItems: Favorite[];

  @OneToMany(() => Historic, (historic) => historic.user)
  historico: Historic[];
}
