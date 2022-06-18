import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailingService {
  constructor(private mailerService: MailerService) {}

  async sendMsg() {
    await this.mailerService.sendMail({
      to: 'karemaouissaoui@gmail.com',
      subject: 'Welcome to Nice App! Confirm your Email',
      html: '<p>helloooooooooooooo </p>',
    });
  }
}
