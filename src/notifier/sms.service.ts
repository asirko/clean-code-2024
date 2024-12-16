import { Injectable } from '@nestjs/common';
import { Notifier } from './notifier.interface';

@Injectable()
export class SmsService implements Notifier {
  constructor() {
    console.log('building ' + this.constructor.name);
  }

  send(): void {
    console.log('sending sms');
  }
}
