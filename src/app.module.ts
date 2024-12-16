import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AwsFileStorageService } from './aws-file-storage.service';
import { FILE_STORAGE_TOKEN } from './file.storage';
import { NotifierModule } from './notifier/notifier.module';
import { RecipeModule } from './receipe/recipe.module';
import { BooksModule } from './hexa-book/book.module';

@Module({
  imports: [NotifierModule, RecipeModule, BooksModule],
  controllers: [AppController],
  providers: [AppService, { provide: FILE_STORAGE_TOKEN, useClass: AwsFileStorageService }],
})
export class AppModule {}
