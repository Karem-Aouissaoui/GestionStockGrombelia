import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Depot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomDep: string;

  @Column()
  description: string;
}
