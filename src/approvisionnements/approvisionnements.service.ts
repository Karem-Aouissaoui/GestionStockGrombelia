import { Injectable } from '@nestjs/common';
import { CreateApprovisionnementDto } from './dto/create-approvisionnement.dto';
import { UpdateApprovisionnementDto } from './dto/update-approvisionnement.dto';

@Injectable()
export class ApprovisionnementsService {
  create(createApprovisionnementDto: CreateApprovisionnementDto) {
    return 'This action adds a new approvisionnement';
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
