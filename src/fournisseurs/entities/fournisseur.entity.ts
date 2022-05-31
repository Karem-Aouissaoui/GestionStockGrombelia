import { Article } from 'src/articles/entities/article.entity';
import { LigneCommande } from 'src/commandes/entities/ligneCommande.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Fournisseur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomFournisseur: string;

  @Column()
  tel: string;

  @OneToOne(
    (type) => LigneCommande,
    (lignecommande) => lignecommande.fournisseur,
  )
  lignecommande: LigneCommande;
}
