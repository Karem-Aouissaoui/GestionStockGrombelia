import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { ArticlesService } from 'src/articles/articles.service';
import { Article } from 'src/articles/entities/article.entity';
import { DepotsService } from 'src/depots/depots.service';
import { Depot } from 'src/depots/entities/depot.entity';
import { Repository } from 'typeorm';
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
    const depot: Depot = await this.depotService.findOne(
      createStockDto.depotId,
    );
    const { depotId, ...input } = createStockDto;
    return this.stockRep.save({ ...input, depot: depot });
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
