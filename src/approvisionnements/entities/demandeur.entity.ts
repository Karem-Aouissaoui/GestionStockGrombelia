import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Approvisionnement } from './approvisionnement.entity';

@Entity()
export class Demandeur {
  constructor(nomDemandeur: string) {
    this.nomDemandeur = nomDemandeur;
  }
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  nomDemandeur: string;
  @Column({ nullable: true })
  email: string;

  @OneToMany((type) => Approvisionnement, (appro) => appro.demandeur)
  appro: Approvisionnement[];
}
