import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Article } from './articles/entities/article.entity';
import { Categorie } from './categorie/entities/categorie.entity';
import { Depot } from './depots/entities/depot.entity';
import { Fournisseur } from './fournisseurs/entities/fournisseur.entity';
import { Stock } from './stock/entities/stock.entity';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'karem',
  database: 'Gstock',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  autoLoadEntities: true,
};
//__dirname + './**/entities/*.entity{.ts,.js}'
// __dirname + '/../**/*.entity{.ts,.js}' from nestjs official site
//entities: [Article, Categorie, Fournisseur, Depot, Stock, Stockk]
