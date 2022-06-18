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
  //relations

  @OneToMany((type) => Approvisionnement, (appro) => appro.demandeur)
  appros: Approvisionnement[];
}
