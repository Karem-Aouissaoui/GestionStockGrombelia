import { Approvisionnement } from 'src/approvisionnements/entities/approvisionnement.entity';
import { Roles } from 'src/auth/models/roles.enum';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false, length: 8 })
  tel: string;
  /*
  @Column({ name: 'reset_token', nullable: false })
  @Generated('uuid')
  public resetToken: string;
*/

  @ManyToOne((type) => Role, (role) => role.users)
  @JoinColumn()
  role: Role;

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
