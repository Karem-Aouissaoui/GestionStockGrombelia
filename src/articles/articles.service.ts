import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategorieService } from 'src/categorie/categorie.service';
import { DepotsService } from 'src/depots/depots.service';
import { Depot } from 'src/depots/entities/depot.entity';
import { CreateStockDto } from 'src/stock/dto/create-stock.dto';
import { Stock } from 'src/stock/entities/stock.entity';
import { StockService } from 'src/stock/stock.service';
import { UnitesService } from 'src/unites/unites.service';
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
    private catService: CategorieService,
    private uniteService: UnitesService,
    private stockService: StockService,
  ) {}

  async create(newArticle: CreateArticleDto) {
    /*const article: Article = await this.articleRep.create();
    article.categorie = await this.catService.findOne(newArticle.categorieId);
    article.unite = await this.uniteService.findOne(newArticle.uniteId);
    article.reference = newArticle.reference;
    article.designation = newArticle.designation;
    article.qte_alert = newArticle.qte_alert;
    article.model = newArticle.model;
    article.marque = newArticle.marque;*/
    return this.articleRep.save(newArticle);
  }
  /*
  async create(createArticleDto: CreateArticleDto) {
    if (createArticleDto.qte === undefined) {
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
*/

  //post to AddArticle route using article id, we need to find the article then update its qte and location
  /*
  async addStock(newStock: CreateStockDto) {
    if (newStock.qtemvm <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          error: 'quantité invalide (négative)',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    const article: Article = await this.findOne(newStock.article.id);
    //update article qte
    let newQte = article.qte + newStock.qtemvm;
    newStock.mouvement = 'E';
    await this.update(article.id, { qte: newQte });
    return this.stockService.create(newStock);
  }

  async outStock(outStock: OutStockDto) {
    if (outStock.qtemvm <= 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          error: 'quantité invalide (négative)',
        },
        HttpStatus.FORBIDDEN,
      );
    }
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
*/
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
  async update(id: number, newArticle: UpdateArticleDto) {
    /*const article: Article = await this.articleRep.create();
    article.categorie = await this.catService.findOne(newArticle.categorieId);
    article.unite = await this.uniteService.findOne(newArticle.uniteId);
    article.reference = newArticle.reference;
    article.designation = newArticle.designation;
    article.qte_alert = newArticle.qte_alert;
    article.model = newArticle.model;
    article.marque = newArticle.marque;*/

    return this.articleRep.update(id, newArticle);
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
