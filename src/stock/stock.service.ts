import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/articles/entities/article.entity';
import { Repository } from 'typeorm';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Stock)
    private stockRep: Repository<Stock>,
  ) {}
  create(createStockDto: CreateStockDto, article: Article) {
    //control existing article
    console.log(article);
    createStockDto.articleId = article.id;
    return article;
  }

  findAll() {
    return this.stockRep.find();
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
