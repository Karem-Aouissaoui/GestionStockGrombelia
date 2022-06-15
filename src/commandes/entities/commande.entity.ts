import { realpath } from 'fs';
import { Imputation } from 'src/approvisionnements/entities/imputation.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import {
  AfterInsert,
  AfterLoad,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LigneCommande } from './ligneCommande.entity';

@Entity()
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reference: string;

  @Column({ type: 'real', nullable: true })
  totalHt: string;

  @Column({ type: 'real', nullable: true })
  totalTTc: string;

  @Column({ default: new Date() })
  date_commande: Date;

  @Column({ nullable: true })
  date_reception: Date;

  @Column({ default: 'false', nullable: true })
  etat: boolean;

  //relations:
  @ManyToOne((type) => Fournisseur, (fournisseur) => fournisseur.commandes, {
    onDelete: 'CASCADE',
  })
  fournisseur: Fournisseur;

  @OneToMany(
    (type) => LigneCommande,
    (ligneCommande) => ligneCommande.commande,
    { cascade: ['insert'], onDelete: 'CASCADE' },
  )
  ligneCommandes: LigneCommande[];

  @AfterLoad()
  calcul() {
    console.log('after load');
    console.log(this);

    /*
    this.totalHt = this.ligneCommandes
      .reduce((a, b) => a + parseFloat(b.totalPrixHT), 0)
      .toString();
    this.totalTTc = this.ligneCommandes
      .reduce((a, b) => a + parseFloat(b.totalPrixTTC), 0)
      .toString();
      */
  }
}
