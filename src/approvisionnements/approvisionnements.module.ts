import { Module } from '@nestjs/common';
import { ApprovisionnementsService } from './approvisionnements.service';
import { ApprovisionnementsController } from './approvisionnements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Approvisionnement } from './entities/approvisionnement.entity';
import { ArticlesModule } from 'src/articles/articles.module';

@Module({
  imports: [TypeOrmModule.forFeature([Approvisionnement]), ArticlesModule],
  controllers: [ApprovisionnementsController],
  providers: [ApprovisionnementsService],
})
export class ApprovisionnementsModule {}
