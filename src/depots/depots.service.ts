import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import { Depot } from './entities/depot.entity';

@Injectable()
export class DepotsService {
  constructor(
    @InjectRepository(Depot)
    private depotRep: Repository<Depot>,
  ) {}
  create(createDepotDto: CreateDepotDto) {
    return this.depotRep.save(createDepotDto);
  }

  findAll() {
    return this.depotRep.find();
  }

  findOne(id: number) {
    return this.depotRep.findOne(id);
  }

  update(id: number, updateDepotDto: UpdateDepotDto) {
    return this.depotRep.update(id, updateDepotDto);
  }

  remove(id: number) {
    return this.depotRep.delete(id);
  }
}
