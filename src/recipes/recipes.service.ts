import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    console.log('%c LOG create data', 'background: #222; color: #bada55', data);
    return {
      id: '1',
      title: 'title',
      description: 'description',
      creationDate: new Date(),
      ingredients: ['ingredients'],
    } as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {
      id: '1',
      title: 'title',
      description: 'description',
      creationDate: new Date(),
      ingredients: ['ingredients'],

    } as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
