import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateStockDto } from 'src/stock/dto/create-stock.dto';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { OutStockDto } from './dto/outstock.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }
  /*
  @Post('addStock')
  addStock(@Body() createStockDto: CreateStockDto) {
    return this.articlesService.addStock(createStockDto);
  }

  @Post('outStock')
  outStock(@Body() outStockDto: OutStockDto) {
    return this.articlesService.outStock(outStockDto);
  }
*/
  /*@UseGuards(JwtAuthGuard)*/

  @Get('all')
  findAll() {
    return this.articlesService.findAll();
  }
  @Get('stocks')
  findByStocks() {
    return this.articlesService.findByStocks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }

  @Delete()
  removeAll() {
    return this.articlesService.deleteAll();
  }
}
