import { sum } from 'lodash';
import { Approvisionnement } from 'src/approvisionnements/entities/approvisionnement.entity';
import { LigneAppro } from 'src/approvisionnements/entities/ligneAppro.entity';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Commande } from 'src/commandes/entities/commande.entity';
import { LigneCommande } from 'src/commandes/entities/ligneCommande.entity';
import { Depot } from 'src/depots/entities/depot.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Unite } from 'src/unites/entities/unite.entity';
import {
  AfterInsert,
  AfterUpdate,
  BeforeUpdate,
  Column,
  ColumnTypeUndefinedError,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  reference: string;

  @Column()
  designation: string;

  @Column({ default: 0 })
  qte_stock: number;

  @Column({ default: 10 })
  qte_alert: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  marque: string;

  @CreateDateColumn()
  date_creation: string;

  @UpdateDateColumn()
  date_modification: string;

  // relations:
  @ManyToOne((type) => Unite, (unite) => unite.articles, {
    cascade: ['insert'],
  })
  @JoinColumn()
  unite: Unite;

  @ManyToOne(() => Categorie, (categorie) => categorie.articles, {
    eager: true,
    cascade: true,
  })
  categorie: Categorie;

  @OneToMany((type) => Stock, (stock) => stock.article, {
    onDelete: 'CASCADE',
    eager: true,
    cascade: ['insert'],
  })
  stocks: Stock[];

  @OneToMany((type) => LigneCommande, (ligneCommande) => ligneCommande.article)
  ligneCommandes: LigneCommande[];

  @OneToMany((type) => LigneAppro, (ligneAppro) => ligneAppro.article)
  ligneAppros: LigneAppro[];
}
