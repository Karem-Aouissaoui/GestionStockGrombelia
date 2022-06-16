import { Commande } from 'src/commandes/entities/commande.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Approvisionnement } from './approvisionnement.entity';
import { LigneAppro } from './ligneAppro.entity';

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

  @OneToMany((type) => LigneAppro, (appro) => appro.imputation)
  ligneAppros: LigneAppro[];
}
