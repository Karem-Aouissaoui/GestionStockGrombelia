import { Module } from '@nestjs/common';
import { DepotsService } from './depots.service';
import { DepotsController } from './depots.controller';
import { Depot } from './entities/depot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Depot])],
  controllers: [DepotsController],
  providers: [DepotsService],
})
export class DepotsModule {}
