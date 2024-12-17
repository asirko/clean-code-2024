import { IsDate, IsNotEmpty } from 'class-validator';

export class BookCreateDto {
  @IsNotEmpty() title: string;
  @IsNotEmpty() author: string;
  @IsDate() publishedDate: Date;
}
