import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticlesService } from 'src/articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { Repository } from 'typeorm';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Categorie } from './entities/categorie.entity';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private catRep: Repository<Categorie>,
  ) {}

  create(createCategorieDto: CreateCategorieDto) {
    return this.catRep.save(createCategorieDto);
  }

  findAll() {
    return this.catRep.find({ where: { categorie: 'article.id' } });
  }

  async findOne(id: number) {
    const cat: Categorie = await this.catRep.findOne(id);
    return cat;
  }

  findByCategorie() {
    return this.catRep.find({ relations: ['articles'] });
  }

  async update(id: number, updateCategorieDto: UpdateCategorieDto) {
    return this.catRep.update(id, updateCategorieDto);
  }

  remove(id: number) {
    return this.catRep.delete(id);
  }
}
