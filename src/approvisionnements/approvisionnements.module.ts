import { Module } from '@nestjs/common';
import { ApprovisionnementsService } from './approvisionnements.service';
import { ApprovisionnementsController } from './approvisionnements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Approvisionnement } from './entities/approvisionnement.entity';
import { ArticlesModule } from 'src/articles/articles.module';
import { Imputation } from './entities/imputation.entity';
import { Demandeur } from './entities/demandeur.entity';
import { LigneAppro } from './entities/ligneAppro.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Approvisionnement,
      Imputation,
      Demandeur,
      LigneAppro,
    ]),
    ArticlesModule,
  ],
  controllers: [ApprovisionnementsController],
  providers: [ApprovisionnementsService],
})
export class ApprovisionnementsModule {}
