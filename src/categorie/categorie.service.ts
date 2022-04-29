import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private catRep: Repository<Categorie>, //
  ) {}

  create(createCategorieDto: CreateCategorieDto) {
    return this.catRep.save(createCategorieDto);
  }

  findAll() {
    return this.catRep.find();
  }

  findOne(id: number) {
    return this.catRep.findOne(id);
  }

  findByCategorie() {
    return this.catRep.find({ relations: ['article'] });
  }

  update(id: number, updateCategorieDto: UpdateCategorieDto) {
    return `This action updates a #${id} categorie`;
  }

  remove(id: number) {
    return this.catRep.delete(id);
  }
}
