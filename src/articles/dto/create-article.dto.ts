import { Categorie } from 'src/categorie/entities/categorie.entity';

export class CreateArticleDto {
  designation: string;
  reference: string;
  qte: number;
  categorie: Categorie;
}
