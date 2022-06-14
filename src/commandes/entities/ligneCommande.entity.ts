import { type } from 'os';
import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Commande } from './commande.entity';

@Entity()
export class LigneCommande {
  @PrimaryGeneratedColumn()
  id: number;
  /*
  @OneToOne((type) => Article, (article) => article.lignecommande)
  @JoinColumn()
  article: Article;
*/

  @Column()
  qte: number;

  @Column({ type: 'real' })
  prixHT: string;

  @Column({ default: 0 })
  tva: number;

  @Column({ type: 'real' })
  prixTTC: string;
  /*
  @Column({ type: 'real' })
  total: string;
*/
  @Column()
  etat: boolean;

  //relations
  @ManyToOne((type) => Commande, (commande) => commande.ligneCommandes)
  commande: Commande;

  @ManyToOne((type) => Article, (article) => article.ligneCommandes)
  article: Article;
}
