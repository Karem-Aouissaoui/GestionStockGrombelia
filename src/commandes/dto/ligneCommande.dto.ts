import { Article } from 'src/articles/entities/article.entity';

export class CreateLigneCommandeDTO {
  qte: number;
  prixUnitaireHt: string;
  tva: number;
  etat: boolean;
  article: Article;
}
