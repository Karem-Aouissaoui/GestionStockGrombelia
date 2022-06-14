import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { Fournisseur } from './entities/fournisseur.entity';

@Injectable()
export class FournisseursService {
  constructor(
    @InjectRepository(Fournisseur) private fourRep: Repository<Fournisseur>,
  ) {}
  create(createFournisseurDto: CreateFournisseurDto) {
    return this.fourRep.save(createFournisseurDto);
  }

  findAll() {
    return this.fourRep.find({ relations: ['commandes'] });
  }

  findOne(id: number) {
    return this.fourRep.findOne(id);
  }

  update(id: number, updateFournisseurDto: UpdateFournisseurDto) {
    return this.fourRep.update(id, updateFournisseurDto);
  }

  remove(id: number) {
    return this.fourRep.delete(id);
  }
}
