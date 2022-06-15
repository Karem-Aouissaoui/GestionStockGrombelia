import { Imputation } from 'src/approvisionnements/entities/imputation.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import { LigneCommande } from '../entities/ligneCommande.entity';

export class CreateCommandeDto {
  reference: string;
  date_commande: Date;
  date_reception: Date;
  etat: boolean;
  fournisseur: Fournisseur;
  ligneCommandes: LigneCommande[];
}
