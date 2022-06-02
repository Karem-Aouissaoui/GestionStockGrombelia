import { Approvisionnement } from 'src/approvisionnements/entities/approvisionnement.entity';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Commande } from 'src/commandes/entities/commande.entity';
import { LigneCommande } from 'src/commandes/entities/ligneCommande.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Unite } from 'src/unites/entities/unite.entity';
import {
  AfterInsert,
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

  @Column()
  qte: number;

  @Column()
  qte_alert: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  marque: string;

  @ManyToOne((type) => Unite, (unite) => unite.articles)
  unite: Unite;

  @ManyToMany((type) => Fournisseur, (fournisseur) => fournisseur.articles)
  @JoinTable()
  fournisseurs: Fournisseur[];

  @OneToOne((type) => LigneCommande, (lignecommande) => lignecommande.article)
  lignecommande: LigneCommande;

  @ManyToOne(() => Categorie, (categorie) => categorie.articles, {
    eager: true,
  })
  categorie: Categorie;

  @OneToMany((type) => Stock, (stock) => stock.article)
  stocks: Stock[];

  @ManyToOne((type) => Approvisionnement, (appro) => appro.articles)
  approvisionnement: Approvisionnement;

  @CreateDateColumn()
  date_creation: string;

  @UpdateDateColumn()
  date_modification: string;
}
