import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticlesService } from 'src/articles/articles.service';
import { Repository } from 'typeorm';
import { EtatBesoinDto } from './dto/create-approvisionnement.dto';
import { UpdateApprovisionnementDto } from './dto/update-approvisionnement.dto';
import { Approvisionnement } from './entities/approvisionnement.entity';
import { Demandeur } from './entities/demandeur.entity';
import { Imputation } from './entities/imputation.entity';

@Injectable()
export class ApprovisionnementsService {
  constructor(
    @InjectRepository(Approvisionnement)
    private approRep: Repository<Approvisionnement>,
    private articleservice: ArticlesService,
  ) {}

  async createEtatBesoin(createApproDto: EtatBesoinDto) {
    //console.log(createApproDto);
    const approDto: Approvisionnement = await this.approRep.create();
    approDto.reference = createApproDto.reference;
    approDto.article = await this.articleservice.findOne(
      createApproDto.articleId,
    );
    approDto.qte_demande = createApproDto.qte_demande;
    approDto.imputation = new Imputation(createApproDto.imputation);
    approDto.demandeur = new Demandeur(createApproDto.demandeur);

    console.log(approDto);
    return this.approRep.save(approDto);
  }

  async updateEtatbesoin(id, updateEtatbesoin) {
    return this.approRep.update(id, updateEtatbesoin);
  }

  findAll() {
    return `This action returns all approvisionnements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} approvisionnement`;
  }

  update(id: number, updateApprovisionnementDto: UpdateApprovisionnementDto) {
    return `This action updates a #${id} approvisionnement`;
  }

  remove(id: number) {
    return `This action removes a #${id} approvisionnement`;
  }
}
