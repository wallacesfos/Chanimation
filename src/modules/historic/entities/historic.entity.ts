import { Anime } from "src/modules/animes/entities/anime.entity";
import { Users } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Historic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  dataAssistido: Date;

  @Column()
  stopTime: string;

  @Column()
  stopEpisode: string;

  @ManyToOne(() => Anime, (anime) => anime.historicos)
  anime: Anime;

  @ManyToOne(() => Users, (user) => user.historico)
  user: Users;
}
