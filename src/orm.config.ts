import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Article } from './articles/entities/article.entity';
import { Categorie } from './categorie/entities/categorie.entity';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'karem',
  database: 'Gstock',
  entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
};
