import { Article } from '../entities/article.entity';

export class OutStockDto {
  qtemvm: number;
  datemvm: Date;
  mouvement: string;
  demandeur: string;
  utilisation: string;
  article: Article;
  depotId: number;
}
