import { Approvisionnement } from 'src/approvisionnements/entities/approvisionnement.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Commande } from 'src/commandes/entities/commande.entity';
import { LigneCommande } from 'src/commandes/entities/ligneCommande.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Fournisseur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nomFournisseur: string;

  @Column({ nullable: true })
  tel: string;

  @Column({ nullable: true })
  adresse: string;

  //relations
  /*
  @OneToMany((type) => Approvisionnement, (appro) => appro.fournisseur)
  appro: Approvisionnement[];
*/
  @OneToMany((type) => Commande, (commande) => commande.fournisseur)
  commandes: Commande[];
}
