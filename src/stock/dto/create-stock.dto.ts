import { Article } from 'src/articles/entities/article.entity';
import { Depot } from 'src/depots/entities/depot.entity';

export class CreateStockDto {
  article: Article;
  qtemvm: number;
  datemvm: Date;
  depot: Depot;
}
