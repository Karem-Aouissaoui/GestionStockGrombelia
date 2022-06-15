import { PartialType } from '@nestjs/mapped-types';
import { CreateLigneCommandeDTO } from './ligneCommande.dto';

export class UpdateLigneCommandeDTO extends PartialType(
  CreateLigneCommandeDTO,
) {}
