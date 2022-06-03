import { Article } from 'src/articles/entities/article.entity';
import { Depot } from 'src/depots/entities/depot.entity';

export class CreateStockDto {
  qtemvm: number;
  datemvm: Date;
  mouvement: string;
  article: Article;
  depotId: number;
}
