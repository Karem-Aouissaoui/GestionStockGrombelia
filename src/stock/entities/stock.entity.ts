import { Article } from 'src/articles/entities/article.entity';
import { Depot } from 'src/depots/entities/depot.entity';
import {
  AfterInsert,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qtemvm: number;
  /*
  @Column({ enum: ['E', 'S'] })
  mouvement: string;
*/
  @Column({ nullable: true })
  datemvm: Date;

  //relations
  @ManyToOne((type) => Depot, (depot) => depot.stocks, { eager: true })
  depot: Depot;

  @ManyToOne((type) => Article, (article) => article.stocks, {
    onDelete: 'CASCADE',
  })
  article: Article;
}
