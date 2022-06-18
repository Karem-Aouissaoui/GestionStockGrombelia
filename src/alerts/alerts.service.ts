import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { Alert } from './entities/alert.entity';

@Injectable()
export class AlertsService {
  constructor(@InjectRepository(Alert) private alertRep: Repository<Alert>) {}

  create(createAlertDto: CreateAlertDto) {
    return this.alertRep.save(createAlertDto);
  }

  findAll() {
    return this.alertRep.find({});
  }

  findOne(id: number) {
    return this.alertRep.findOne(id, {});
  }

  update(id: number, updateAlertDto: UpdateAlertDto) {
    return this.alertRep.update(id, updateAlertDto);
  }

  remove(id: number) {
    return this.alertRep.delete(id);
  }
}
