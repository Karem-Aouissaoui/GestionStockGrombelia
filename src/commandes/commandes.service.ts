import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { UpdateLigneCommandeDTO } from './dto/update-ligneCommande.dto';
import { Commande } from './entities/commande.entity';
import { LigneCommande } from './entities/ligneCommande.entity';

@Injectable()
export class CommandesService {
  constructor(
    @InjectRepository(Commande) private commandeRep: Repository<Commande>,
  ) {}

  async create(createCommandeDto: CreateCommandeDto) {
    const commande: Commande = await this.commandeRep.create(createCommandeDto);
    const result = await this.commandeRep.save(commande);
    result.ligneCommandes.forEach((a) => a.calcul());
    result.totalHt = commande.ligneCommandes
      .reduce((a, b) => a + parseFloat(b.totalPrixHT), 0)
      .toString();
    result.totalTTc = commande.ligneCommandes
      .reduce((a, b) => a + parseFloat(b.totalPrixTTC), 0)
      .toString();
    return await this.commandeRep.save(result);
  }

  findAll() {
    return this.commandeRep.find({ relations: ['ligneCommandes'] });
  }

  findOne(id: number) {
    return this.commandeRep.findOne(id, { relations: ['ligneCommandes'] });
  }

  update(id: number, updateCommandeDto: UpdateCommandeDto) {
    return this.commandeRep.save({ id, updateCommandeDto });
  }

  remove(id: number) {
    return this.commandeRep.delete(id);
  }

  updateLigne(id: number, updateLigne: UpdateLigneCommandeDTO) {
    return getRepository(LigneCommande).update(id, updateLigne);
  }
}
