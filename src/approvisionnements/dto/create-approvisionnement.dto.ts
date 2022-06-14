import { Demandeur } from '../entities/demandeur.entity';
import { Imputation } from '../entities/imputation.entity';

export class EtatBesoinDto {
  reference: string;
  articleId: number;
  qte_demande: number;
  //imputation: Imputation;
  //demandeur: Demandeur;
}

export class EtatDemandeTarif extends EtatBesoinDto {
  fournisseurId: number;
  qte_commande: number;
}
