import { Article } from 'src/articles/entities/article.entity';

export class CreateStockDto {
  qtemvm: number;
  datemvm: Date;
  mouvement: string;
  article: Article;
}
