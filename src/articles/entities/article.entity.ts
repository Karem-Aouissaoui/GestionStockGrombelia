import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
