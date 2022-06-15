import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticlesService } from 'src/articles/articles.service';
import { Repository } from 'typeorm';
import { CreateApproDTO } from './dto/create-approvisionnement.dto';
import { UpdateApproDto } from './dto/update-approvisionnement.dto';
import { Approvisionnement } from './entities/approvisionnement.entity';
import { Demandeur } from './entities/demandeur.entity';
import { Imputation } from './entities/imputation.entity';

@Injectable()
export class ApprovisionnementsService {
  constructor(
    @InjectRepository(Approvisionnement)
    private approRep: Repository<Approvisionnement>,
    @InjectRepository(Imputation)
    private imputRep: Repository<Imputation>,
    @InjectRepository(Demandeur)
    private demandRep: Repository<Demandeur>,
    private articleservice: ArticlesService,
  ) {}

  async create(newAppro: CreateApproDTO) {
    return this.approRep.save(newAppro);
  }

  async findAll() {
    return this.approRep.find({
      relations: ['ligneAppros', 'demandeur', 'imputation'],
    });
  }

  async findById(id: number) {
    return this.approRep.findOne({
      relations: ['ligneAppros', 'demandeur', 'imputation'],
    });
  }

  async update(id: number, newAppro: UpdateApproDto) {
    return this.approRep.update(id, newAppro);
  }

  remove(id: number) {
    return this.approRep.delete(id);
  }
}
