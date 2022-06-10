import { Controller, Get } from '@nestjs/common';
import { InjectMailer, Mailer, template } from 'nestjs-mailer';
import { MailingService } from './mailing.service';

@Controller('mailing')
export class MailingController {
  constructor(private readonly mailingService: MailingService) {}

  @Get()
  async getHello() {
    return this.mailingService.sendMsg();
  }
}
