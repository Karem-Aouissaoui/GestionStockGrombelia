import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApprovisionnementsService } from './approvisionnements.service';
import { CreateApprovisionnementDto } from './dto/create-approvisionnement.dto';
import { UpdateApprovisionnementDto } from './dto/update-approvisionnement.dto';

@Controller('approvisionnements')
export class ApprovisionnementsController {
  constructor(private readonly approvisionnementsService: ApprovisionnementsService) {}

  @Post()
  create(@Body() createApprovisionnementDto: CreateApprovisionnementDto) {
    return this.approvisionnementsService.create(createApprovisionnementDto);
  }

  @Get()
  findAll() {
    return this.approvisionnementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.approvisionnementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApprovisionnementDto: UpdateApprovisionnementDto) {
    return this.approvisionnementsService.update(+id, updateApprovisionnementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.approvisionnementsService.remove(+id);
  }
}
