import { Approvisionnement } from 'src/approvisionnements/entities/approvisionnement.entity';
import {
  Column,
  Entity,
  Generated,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from './role.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, unique: true })
  public username: string;

  @Column({ nullable: false })
  public password: string;
  /*
  @Column({ name: 'reset_token', nullable: false })
  @Generated('uuid')
  public resetToken: string;
*/
  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({ name: 'user_role' })
  public roles: Role[];

  @ManyToMany((type) => Approvisionnement, (appro) => appro.users)
  @JoinTable()
  approvisionnements: Approvisionnement[];
  /*
  @Column({
    name: 'reset_token_expiration',
    nullable: false,
    type: 'timestamp with time zone',
  })
  public resetTokenExpiration: Date;
*/
  /*
  @OneToOne((type) => Account, { nullable: false })
  @JoinColumn({ name: 'account_id' })
  public account: Account;

  @OneToMany((type) => RefreshToken, (token) => token.id)
  public refreshTokens: RefreshToken[];
  */
}
