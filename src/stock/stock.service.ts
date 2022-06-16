import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { ArticlesService } from 'src/articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { DepotsService } from 'src/depots/depots.service';
import { Depot } from 'src/depots/entities/depot.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRep: Repository<Stock>,
    private depotService: DepotsService,
  ) {}

  async create(createStockDto: CreateStockDto) {
    const getArticle = await getRepository(Article).findOne(
      createStockDto.article.id,
    );
    if (getArticle.qte_stock + createStockDto.qtemvm <= getArticle.qte_alert) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_ACCEPTABLE,
          error: 'quantité insuffaisante!!!',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    let { article, ...rest } = createStockDto;
    let newStock = await this.stockRep.create(rest);
    getArticle.stocks.push(newStock);
    getArticle.qte_stock = getArticle.stocks
      .map((a) => a.qtemvm)
      .reduce((a, b) => a + b);
    console.log(getArticle);
    return await getRepository(Article).save(getArticle);
  }

  async findAll() {
    return await this.stockRep.find({ relations: ['Depot'] });
  }

  findOne(id: number) {
    return this.stockRep.findOne(id);
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return this.stockRep.update(id, updateStockDto);
  }

  remove(id: number) {
    return this.stockRep.delete(id);
  }
}
