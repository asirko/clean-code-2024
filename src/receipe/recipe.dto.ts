import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class IngredientCreateDto {
  @IsNotEmpty()
  @IsString()
  label!: string;

  @IsNotEmpty()
  @IsNumber()
  recipeId!: number;
}

export class RecipeCreateDto {
  @IsNotEmpty() @MaxLength(200) name: string;
  @IsNotEmpty() description: string;
  @IsInt() @Min(0) @Max(5) level: number;
  @IsBoolean() isPublished: boolean;
  @IsArray()
  @Type(() => IngredientCreateDto)
  ingredients?: IngredientCreateDto[];
}
