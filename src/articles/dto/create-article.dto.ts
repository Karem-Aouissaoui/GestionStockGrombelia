import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Stock } from 'src/stock/entities/stock.entity';

export class CreateArticleDto {
  reference: string;
  designation: string;
  qte: number;
  prixHT: string;
  prixTTC: string;
  description: string;
  model: string;
  marque: string;
  unity: string; //to do===========
  categorie: Categorie;
  stocks: Stock[];
}
