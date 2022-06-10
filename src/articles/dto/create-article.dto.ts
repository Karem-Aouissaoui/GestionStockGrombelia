import { Approvisionnement } from 'src/approvisionnements/entities/approvisionnement.entity';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { LigneCommande } from 'src/commandes/entities/ligneCommande.entity';
import { Depot } from 'src/depots/entities/depot.entity';
import { Fournisseur } from 'src/fournisseurs/entities/fournisseur.entity';
import { Stock } from 'src/stock/entities/stock.entity';
import { Unite } from 'src/unites/entities/unite.entity';

export class CreateArticleDto {
  reference: string;
  designation: string;
  qte_alert: number;
  description: string;
  model: string;
  marque: string;
  uniteId: number;
  categorieId: number;
  approvisionnement: Approvisionnement;
}
