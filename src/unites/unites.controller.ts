import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnitesService } from './unites.service';
import { CreateUniteDto } from './dto/create-unite.dto';
import { UpdateUniteDto } from './dto/update-unite.dto';

@Controller('unites')
export class UnitesController {
  constructor(private readonly unitesService: UnitesService) {}

  @Post()
  create(@Body() createUniteDto: CreateUniteDto) {
    return this.unitesService.create(createUniteDto);
  }

  @Get('all')
  findAll() {
    return this.unitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUniteDto: UpdateUniteDto) {
    return this.unitesService.update(+id, updateUniteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitesService.remove(+id);
  }
}
