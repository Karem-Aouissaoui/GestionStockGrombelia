import { PartialType } from '@nestjs/mapped-types';
import { EtatBesoinDto } from './create-approvisionnement.dto';

export class UpdateApprovisionnementDto extends PartialType(EtatBesoinDto) {}

export class updateEtatbesoin extends PartialType(EtatBesoinDto) {}
