import { Injectable } from '@nestjs/common';
import { SmsService } from './sms.service';
import { EmailService } from './email.service';
import { Notifier } from './notifier.interface';

@Injectable()
export class NotifierStrategy {
  constructor(
    private readonly smsService: SmsService,
    private readonly emailService: EmailService,
  ) {
    console.log('building ' + this.constructor.name);
  }

  getNotifier(type: 'sms' | 'email'): Notifier {
    switch (type) {
      case 'sms':
        return this.smsService;
      default:
        return this.emailService;
    }
  }
}
