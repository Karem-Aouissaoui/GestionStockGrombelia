import { Imputation } from 'src/approvisionnements/entities/imputation.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';

export class CreateCommandeDto {
  fournisseur: Fournisseur;
  date_commande: Date;
  date_reception: Date;
  reference: string;
  imputation: Imputation;
  article: Article;
}
