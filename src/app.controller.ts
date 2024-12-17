import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { NotifierStrategy } from './notifier/notifier.strategy';
import { FileStorage } from './file.storage';
import { Notifier, NOTIFIER_TOKEN } from './notifier/notifier.interface';
import { NotificationType } from './notifier/notification-type.enum';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly notifierStrategy: NotifierStrategy,
    private readonly fileStorageService: FileStorage,
    @Inject(NOTIFIER_TOKEN)
    private readonly notifierMap: { [key in NotificationType]: Notifier },
  ) {
    console.log('building ' + this.constructor.name);
  }

  @Get()
  createUser(): string {
    // save new User
    // ...
    // send notification
    const notifier = this.notifierStrategy.getNotifier('email');
    notifier.send();
    const notifier2 = this.notifierMap[NotificationType.EMAIL];
    notifier2.send();
    return this.appService.getHello();
  }
}
