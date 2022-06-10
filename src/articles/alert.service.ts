import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AlertService {
  //datasource usage
  @Cron(CronExpression.EVERY_WEEK)
  handleCron() {
    console.log('hello');
  }
}
