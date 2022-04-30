import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  designation: string;

  @Column()
  reference: string;

  @Column()
  qte: number;

  @ManyToOne(() => Categorie, (categorie) => categorie.articles, {
    eager: true,
  })
  categorie: Categorie;

  @ManyToMany(() => Fournisseur, (fournisseur) => fournisseur.article)
  @JoinTable({ name: 'article_fournisseur' })
  fournisseur: Fournisseur[];

  @OneToOne(() => Stock)
  stock: Stock;
}
