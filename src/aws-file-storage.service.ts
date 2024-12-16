import { Injectable } from '@nestjs/common';
import { FileStorage } from './file.storage';

@Injectable()
export class AwsFileStorageService implements FileStorage {
  constructor() {
    console.log('building ' + this.constructor.name);
  }

  async save(file: File): Promise<unknown> {
    console.log('file saved');
    return;
  }

  async get(name: string): Promise<unknown> {
    console.log('file returned');
    return;
  }
}
