import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { StockModule } from 'src/stock/stock.module';
import { AlertService } from './alert.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article]),
    StockModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService, AlertService],
  exports: [ArticlesService],
})
export class ArticlesModule {}
