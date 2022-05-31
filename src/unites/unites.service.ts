import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUniteDto } from './dto/create-unite.dto';
import { UpdateUniteDto } from './dto/update-unite.dto';
import { Unite } from './entities/unite.entity';

@Injectable()
export class UnitesService {
  constructor(@InjectRepository(Unite) private uniteRep: Repository<Unite>) {}
  create(createUniteDto: CreateUniteDto) {
    return this.uniteRep.save(createUniteDto);
  }

  findAll() {
    return this.uniteRep.find();
  }

  findOne(id: number) {
    return this.uniteRep.findOne(id);
  }

  update(id: number, updateUniteDto: UpdateUniteDto) {
    return this.uniteRep.update(id, updateUniteDto);
  }

  remove(id: number) {
    return this.uniteRep.delete(id);
  }
}
