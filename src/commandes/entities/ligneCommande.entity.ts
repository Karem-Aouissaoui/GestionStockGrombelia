import { type } from 'os';
import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import {
  AfterInsert,
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateLigneCommandeDTO } from '../dto/ligneCommande.dto';
import { Commande } from './commande.entity';

@Entity()
export class LigneCommande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qte: number;

  @Column({ nullable: true })
  qte_recept: number;

  @Column({ nullable: true })
  quality: string;

  @Column({ type: 'real' })
  prixUnitaireHt: string;

  @Column({ default: 0 })
  tva: number;

  @Column({ type: 'real', nullable: true })
  totalPrixHT: string;

  @Column({ type: 'real', nullable: true })
  totalPrixTTC: string;

  @Column({ nullable: true })
  reception: boolean;

  //relations
  @ManyToOne((type) => Commande, (commande) => commande.ligneCommandes)
  commande: Commande;

  @ManyToOne((type) => Article, (article) => article.ligneCommandes, {
    onDelete: 'CASCADE',
  })
  article: Article;

  calcul() {
    this.totalPrixHT = (parseFloat(this.prixUnitaireHt) * this.qte).toString();
    this.totalPrixTTC = (
      (parseFloat(this.totalPrixHT) * this.tva) / 100 +
      parseFloat(this.totalPrixHT)
    ).toString();
  }

  toStock() {
    return {
      article: this.article,
      qtemvm: this.qte,
      datemvm: this.commande.date_reception,
    };
  }

  receptionStatus() {
    return this.qte == this.qte_recept;
  }
}
