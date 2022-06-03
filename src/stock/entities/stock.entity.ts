import { Article } from 'src/articles/entities/article.entity';
import { Depot } from 'src/depots/entities/depot.entity';
import {
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

  @ManyToOne((type) => Article, (article) => article.stocks, {
    onDelete: 'CASCADE',
  })
  article: Article;

  @Column()
  qtemvm: number;

  @CreateDateColumn()
  datemvm: Date;

  @Column({ enum: ['E', 'S'] })
  mouvement: string;

  @Column({ nullable: true })
  demandeur: string;

  @Column({ nullable: true })
  utilisation: string;

  @ManyToOne((type) => Depot, (depot) => depot.stocks, { eager: true })
  depot: Depot;
}
