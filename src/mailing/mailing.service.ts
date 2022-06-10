import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailingService {
  constructor(private mailerService: MailerService) {}

  async sendMsg() {
    await this.mailerService.sendMail({
      to: 'karemaouissaoui@gmail.com',
      from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      html: '<p>helloooooooooooooo </p>',
    });
  }
}
