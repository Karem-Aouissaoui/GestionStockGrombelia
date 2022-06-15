import { Demandeur } from '../entities/demandeur.entity';
import { Imputation } from '../entities/imputation.entity';
import { LigneAppro } from '../entities/ligneAppro.entity';

export class CreateApproDTO {
  reference: string;
  etat: boolean;
  imputation: Imputation;
  demandeur: Demandeur;
  ligneAppros: LigneAppro[];
}
