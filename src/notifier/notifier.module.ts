import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { SmsService } from './sms.service';
import { NotifierStrategy } from './notifier.strategy';
import { NOTIFIER_TOKEN } from './notifier.interface';
import { NotificationType } from './notification-type.enum';

@Module({
  providers: [
    EmailService,
    SmsService,
    NotifierStrategy,
    {
      provide: NOTIFIER_TOKEN,
      useFactory: (smsService: SmsService, emailService: EmailService) => ({
        [NotificationType.SMS]: smsService,
        [NotificationType.EMAIL]: emailService,
      }),
      inject: [SmsService, EmailService],
    },
  ],
  exports: [NotifierStrategy, NOTIFIER_TOKEN],
})
export class NotifierModule {
  constructor() {
    console.log('building ' + this.constructor.name);
  }
}
