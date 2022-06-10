import { Module } from '@nestjs/common';
import { UnitesService } from './unites.service';
import { UnitesController } from './unites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unite } from './entities/unite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Unite])],
  controllers: [UnitesController],
  providers: [UnitesService],
  exports: [UnitesService],
})
export class UnitesModule {}
