import { Article } from 'src/articles/entities/article.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Approvisionnement } from './approvisionnement.entity';
import { Imputation } from './imputation.entity';

@Entity()
export class LigneAppro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qte_demande: number;

  @Column({ nullable: true })
  qte_livree: number;

  // direct ou par confirmation enum: DIRECT, CONFIRMATION,
  @Column({ nullable: true })
  type_sortie: string;

  @Column({ nullable: true })
  confirmation: boolean;

  @ManyToOne((type) => Article, (article) => article.ligneAppros)
  article: Article;

  @ManyToOne((type) => Imputation, (imputation) => imputation.ligneAppros, {
    cascade: ['insert'],
    onDelete: 'CASCADE',
  })
  imputation: Imputation;

  @ManyToOne((type) => Approvisionnement, (appro) => appro.ligneAppros)
  appro: Approvisionnement;
}
