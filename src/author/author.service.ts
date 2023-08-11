import { Injectable } from "@nestjs/common";
import { NewAuthorInput } from "./dto/new-author.input";
import { AuthorArgs } from "./dto/author.args";
import { Author } from "./models/author.model";

@Injectable()
export class AuthorService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewAuthorInput): Promise<Author> {
    console.log("%c LOG create data", "background: #222; color: #bada55", data);
    return {
      id: "1",
      ...data,
    } as any;
  }

  async findOneById(id: string): Promise<Author> {
    return {
      id: "1",
      title: "title",
      description: "description",
      creationDate: new Date(),
      ingredients: ["ingredients"],
    } as any;
  }

  async findAll(recipesArgs: AuthorArgs): Promise<Author[]> {
    return [] as Author[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
