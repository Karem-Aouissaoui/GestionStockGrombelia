import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApprovisionnementsService } from './approvisionnements.service';
import { EtatBesoinDto } from './dto/create-approvisionnement.dto';
import { UpdateApproDto } from './dto/update-approvisionnement.dto';

@Controller('appro')
export class ApprovisionnementsController {
  constructor(
    private readonly approvisionnementsService: ApprovisionnementsService,
  ) {}

  //section etat de besoin
  @Post()
  create(@Body() createApprovisionnementDto: EtatBesoinDto) {
    return this.approvisionnementsService.createEtatBesoin(
      createApprovisionnementDto,
    );
  }

  @Get('etatbesoin/all')
  findAll() {
    return this.approvisionnementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.approvisionnementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtatbesoin: UpdateApproDto) {
    return this.approvisionnementsService.update(+id, updateEtatbesoin);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.approvisionnementsService.remove(+id);
  }
}
