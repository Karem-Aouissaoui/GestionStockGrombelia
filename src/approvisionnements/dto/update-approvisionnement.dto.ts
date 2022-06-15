import { PartialType } from '@nestjs/mapped-types';
import { CreateApproDTO } from './create-approvisionnement.dto';

export class UpdateApproDto extends PartialType(CreateApproDTO) {}
