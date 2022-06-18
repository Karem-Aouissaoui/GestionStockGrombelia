import { Module } from '@nestjs/common';
import { MailingService } from './mailing.service';
import { MailingController } from './mailing.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { sender } from './coordonnees';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'Gmail',
        auth: {
          user: sender.email,
          pass: sender.password,
        },
      },
      defaults: {
        from: `"Municipalite Grombalia" <${sender.email}>`,
      },
    }),
  ],
  controllers: [MailingController],
  providers: [MailingService],
  exports: [MailingService],
})
export class MailingModule {}
