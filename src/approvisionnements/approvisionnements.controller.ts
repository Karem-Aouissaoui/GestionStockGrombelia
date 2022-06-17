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
import { CreateApproDTO } from './dto/create-approvisionnement.dto';
import { UpdateApproDto } from './dto/update-approvisionnement.dto';

@Controller('appros')
export class ApprovisionnementsController {
  constructor(
    private readonly approvisionnementsService: ApprovisionnementsService,
  ) {}

  //section etat de besoin
  @Post()
  create(@Body() createApproDto: CreateApproDTO) {
    return this.approvisionnementsService.create(createApproDto);
  }

  @Get('all')
  findAll() {
    return this.approvisionnementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.approvisionnementsService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApproDto: UpdateApproDto) {
    return this.approvisionnementsService.update(+id, updateApproDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.approvisionnementsService.remove(+id);
  }

  //demandeur

  @Get('demandeur/all')
  findAllDemandeur() {
    return this.approvisionnementsService.findAllDemandeur();
  }
}
