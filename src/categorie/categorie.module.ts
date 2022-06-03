import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CategorieController } from './categorie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorie } from './entities/categorie.entity';
import { ArticlesService } from 'src/articles/articles.service';
import { ArticlesModule } from 'src/articles/articles.module';

@Module({
  imports: [TypeOrmModule.forFeature([Categorie]), ArticlesModule],
  controllers: [CategorieController],
  providers: [CategorieService],
})
export class CategorieModule {}
