import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStockDto } from 'src/stock/dto/create-stock.dto';
import { Stock } from 'src/stock/entities/stock.entity';
import { StockService } from 'src/stock/stock.service';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRep: Repository<Article>,
    private stockService: StockService,
  ) {}

  /*
  create(createArticleDto: CreateArticleDto){

  }*/

  async create(createArticleDto: CreateArticleDto) {
    const article: Article = await this.articleRep.save(createArticleDto);
    const newStock = new CreateStockDto();
    newStock.qtemvm = createArticleDto.qte;
    newStock.mouvement = 'K';
    newStock.article = article;
    const stock: Stock = await this.stockService.create(newStock);
  }

  //find all articles
  findAll(): Promise<Article[]> {
    return this.articleRep.find({ relations: ['stocks'] });
  }
  findByStocks() {
    return this.articleRep.find({ relations: ['stocks'] });
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
