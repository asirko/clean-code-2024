import { Injectable } from '@nestjs/common';
import { Notifier } from './notifier.interface';

@Injectable()
export class EmailService implements Notifier {
  constructor() {
    console.log('building ' + this.constructor.name);
  }
  send(): void {
    console.log('sending email');
  }
}
