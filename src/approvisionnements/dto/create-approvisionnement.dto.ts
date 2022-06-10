export class EtatBesoinDto {
  reference: string;
  articleId: number;
  qte_demande: number;
  imputation: string;
  demandeur: string;
}

export class EtatDemandeTarif extends EtatBesoinDto {
  fournisseurId: number;
  qte_commande: number;
}
