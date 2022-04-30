import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return this.articleRep.save(createArticleDto);
  }

  //find all articles
  findAll(): Promise<Article[]> {
    return this.articleRep.find();
  }

  //find article by id
  findOne(id: number) {
    return this.articleRep.findOne(id);
  }

  // update article
  async update(id: number, updateArticleDto: UpdateArticleDto) {
    return this.articleRep.update(id, updateArticleDto);
  }

  //delete article using id
  remove(id: number) {
    return this.articleRep.delete(id);
  }

  //delete all articles
  async deleteAll() {
    const arts = await this.articleRep.find();
    for (var art of arts) {
      this.articleRep.delete(art.id);
    }
  }
}
