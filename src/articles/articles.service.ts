import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepotsService } from 'src/depots/depots.service';
import { Depot } from 'src/depots/entities/depot.entity';
import { CreateStockDto } from 'src/stock/dto/create-stock.dto';
import { Stock } from 'src/stock/entities/stock.entity';
import { StockService } from 'src/stock/stock.service';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { OutStockDto } from './dto/outstock.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRep: Repository<Article>,
    private stockService: StockService,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    if (createArticleDto.qte == null) {
      return this.articleRep.save(createArticleDto);
    } else if (createArticleDto.qte > 0) {
      const article: Article = await this.articleRep.save(createArticleDto);
      this.stockService.create({
        qtemvm: article.qte,
        datemvm: null,
        mouvement: 'E',
        article: article,
        depotId: createArticleDto.depotId,
      });
    }
  }

  //post to AddArticle route using article id, we need to find the article then update its qte and location
  async addStock(newStock: CreateStockDto) {
    const article: Article = await this.findOne(newStock.article.id);
    //update article qte
    let newQte = article.qte + newStock.qtemvm;
    newStock.mouvement = 'E';
    await this.update(article.id, { qte: newQte });
    return this.stockService.create(newStock);
  }

  async outStock(outStock: OutStockDto) {
    const article: Article = await this.findOne(outStock.article.id);
    let newQte = article.qte - outStock.qtemvm;
    if (newQte < 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          error: 'quantité en stock insuffaisante',
        },
        HttpStatus.FORBIDDEN,
      );
    }

    outStock.mouvement = 'S';
    await this.update(article.id, { qte: newQte });
    return this.stockService.create(outStock);
  }

  //find all articles
  findAll(): Promise<Article[]> {
    return this.articleRep.find();
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
