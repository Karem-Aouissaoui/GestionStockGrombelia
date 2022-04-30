import { Module } from '@nestjs/common';
import { FournisseursService } from './fournisseurs.service';
import { FournisseursController } from './fournisseurs.controller';
import { Fournisseur } from './entities/fournisseur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Fournisseur])],
  controllers: [FournisseursController],
  providers: [FournisseursService],
})
export class FournisseursModule {}
