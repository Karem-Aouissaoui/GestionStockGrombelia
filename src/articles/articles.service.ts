import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRep: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    //const cat = new Categorie();

    return this.articleRep.save(createArticleDto);
  }

  findAll(): Promise<Article[]> {
    return this.articleRep.find();
  }

  findOne(id: number) {
    return this.articleRep.findOne(id);
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {
    /*const art = await this.findOne(id);
    art.designation = updateArticleDto.designation;
    art.reference = updateArticleDto.reference;
    art.qte = updateArticleDto.qte;
    art.categorie = updateArticleDto.categorie;*/
    return this.articleRep.update(id, updateArticleDto);
  }
  catch(error) {
    throw new HttpException('Error updating article', HttpStatus.BAD_REQUEST);
  }

  remove(id: number) {
    return this.articleRep.delete(id);
  }
}
