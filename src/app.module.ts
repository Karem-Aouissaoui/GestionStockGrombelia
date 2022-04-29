import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles/entities/article.entity';
import { config } from './orm.config';
import { UsersModule } from './users/users.module';
import { StockModule } from './stock/stock.module';
import { CategorieModule } from './categorie/categorie.module';
import { CommandesModule } from './commandes/commandes.module';
import { FournisseursModule } from './fournisseurs/fournisseurs.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ArticlesModule,
    UsersModule,
    StockModule,
    CategorieModule,
    CommandesModule,
    FournisseursModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
