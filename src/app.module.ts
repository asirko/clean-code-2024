import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsFileStorageService } from './aws-file-storage.service';
import { FileStorage } from './file.storage';
import { NotifierModule } from './notifier/notifier.module';

@Module({
  imports: [NotifierModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: FileStorage, useClass: AwsFileStorageService },
  ],
})
export class AppModule {}
