import { Article } from 'src/articles/entities/article.entity';
import { Depot } from 'src/depots/entities/depot.entity';
import {
  AfterInsert,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Article, (article) => article.stocks, {
    onDelete: 'CASCADE',
  })
  article: Article;

  @Column()
  qtemvm: number;

  @CreateDateColumn()
  datemvm: Date;

  @Column({ enum: ['E', 'S'] })
  mouvement: string;

  @Column({ nullable: true })
  demandeur: string;

  @Column({ nullable: true })
  utilisation: string;

  @ManyToOne((type) => Depot, (depot) => depot.stocks, { eager: true })
  depot: Depot;

  @BeforeInsert()
  test() {
    console.log('before test');
  }
  @AfterInsert()
  alertfunc() {
    /*if (this.article.qte < this.article.qte_alert) {
      console.log('alert!!!!!!!!!!!!!!!!');
    }*/
    console.log('listener test');
  }
}
