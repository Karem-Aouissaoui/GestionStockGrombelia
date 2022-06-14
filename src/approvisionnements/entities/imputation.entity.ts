import { Commande } from 'src/commandes/entities/commande.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Approvisionnement } from './approvisionnement.entity';

@Entity()
export class Imputation {
  constructor(imputation: string) {
    this.nomImputation = imputation;
  }
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  nomImputation: string;

  //relations

  @OneToMany((type) => Approvisionnement, (appro) => appro.imputation)
  appro: Approvisionnement[];
  /*
  @OneToMany((type) => Commande, (commande) => commande.imputation)
  commandes: Commande[];
*/
}
