import { type } from 'os';
import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import {
  AfterInsert,
  AfterLoad,
  BeforeInsert,
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
  prixUnitaireHt: string;

  @Column({ default: 0 })
  tva: number;

  @Column({ type: 'real', nullable: true })
  totalPrixHT: string;

  @Column({ type: 'real', nullable: true })
  totalPrixTTC: string;
  /*
  @Column({ type: 'real' })
  total: string;
*/
  @Column({ nullable: true })
  etat: boolean;

  //relations
  @ManyToOne((type) => Commande, (commande) => commande.ligneCommandes)
  commande: Commande;

  @ManyToOne((type) => Article, (article) => article.ligneCommandes)
  article: Article;

  @BeforeInsert()
  @AfterInsert()
  calcul() {
    this.totalPrixHT = (parseFloat(this.prixUnitaireHt) * this.qte).toString();
    console.log(this.totalPrixHT);

    this.totalPrixTTC = (
      (parseFloat(this.totalPrixHT) * this.tva) / 100 +
      parseFloat(this.totalPrixHT)
    ).toString();
  }
}
