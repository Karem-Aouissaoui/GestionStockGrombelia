import { Article } from 'src/articles/entities/article.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Depot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomDep: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany((type) => Stock, (stock) => stock.depot)
  stocks: Stock[];
}
