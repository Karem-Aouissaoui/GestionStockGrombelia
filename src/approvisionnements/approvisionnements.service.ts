import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticlesService } from 'src/articles/articles.service';
import { Repository } from 'typeorm';
import { EtatBesoinDto } from './dto/create-approvisionnement.dto';
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

  async createEtatBesoin(createApproDto: EtatBesoinDto) {
    //console.log(createApproDto);
    /*  const approDto: Approvisionnement = await this.approRep.create();
    approDto.reference = createApproDto.reference;
    approDto.article = await this.articleservice.findOne(
      createApproDto.articleId,
    );
    approDto.qte_demande = createApproDto.qte_demande;
    approDto.imputation = createApproDto.imputation;
    approDto.demandeur = createApproDto.demandeur;
    console.log(approDto);
    return this.approRep.save(approDto);*/
  }

  async updateEtatbesoin(id, updateEtatbesoin) {
    //return this.approRep.update(id, updateEtatbesoin);
  }

  findAll() {
    return this.approRep.find();
  }

  findOne(id: number) {
    return this.approRep.findOne(id);
  }

  update(id: number, updateApproDto: UpdateApproDto) {
    //return this.approRep.update(id,);
  }

  remove(id: number) {
    return this.approRep.delete(id);
  }

  //services imputation:

  async create(newImput: Imputation) {
    return this.demandRep.save(newImput);
  }

  async findAllImput() {
    return this.imputRep.find();
  }

  async findOneImput(id: number) {
    return this.imputRep.findOne(id);
  }

  async removeImput(id: number) {
    return this.imputRep.delete(id);
  }

  //Services Demandeur:

  async createDemandeur(newDemandeur: Demandeur) {
    return this.demandRep.save(newDemandeur);
  }

  async findAllDemand() {
    return this.demandRep.find();
  }

  async findOneDemand(id: number) {
    return this.demandRep.findOne(id);
  }

  async removeDemand(id: number) {
    return this.demandRep.delete(id);
  }
}
