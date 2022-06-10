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

  @OneToMany((type) => Approvisionnement, (appro) => appro.imputation)
  appro: Approvisionnement[];
}
