import { PartialType } from '@nestjs/mapped-types';
import {
  EtatBesoinDto,
  EtatDemandeTarif,
} from './create-approvisionnement.dto';

export class UpdateApproDto extends PartialType(EtatDemandeTarif) {}
