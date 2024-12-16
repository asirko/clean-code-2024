import { Body, Controller, Post } from '@nestjs/common';
import { RecipeCreateDto } from './recipe.dto';

@Controller('recipes')
export class RecipeController {
  constructor() {}

  @Post()
  create(@Body() recipe: RecipeCreateDto) {
    console.log(recipe);
  }
}
