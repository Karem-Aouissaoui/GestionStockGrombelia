import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Commande } from './commande.entity';

@Entity()
export class LigneCommande {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Article, (article) => article.lignecommande)
  article: Article;

  @ManyToOne((type) => Commande, (commande) => commande.lignecommandes)
  commande: Commande;

  @OneToOne((type) => Fournisseur, (fournisseur) => fournisseur.lignecommande)
  fournisseur: Fournisseur;

  @Column()
  qte: number;

  @Column({ type: 'real' })
  prixHT: string;

  @Column({ type: 'real' })
  prixTTC: string;

  @Column({ type: 'real' })
  total: string;

  @Column()
  etat: boolean;
}
