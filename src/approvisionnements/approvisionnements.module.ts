import { Module } from '@nestjs/common';
import { ApprovisionnementsService } from './approvisionnements.service';
import { ApprovisionnementsController } from './approvisionnements.controller';

@Module({
  controllers: [ApprovisionnementsController],
  providers: [ApprovisionnementsService]
})
export class ApprovisionnementsModule {}
