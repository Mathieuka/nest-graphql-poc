import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { NewAuthorInput } from "./dto/new-author.input";
import { AuthorArgs } from "./dto/author.args";
import { Author } from "./models/author.model";
import { AuthorService } from "./author.service";

const pubSub = new PubSub();

@Resolver((of) => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query((returns) => Author)
  async author(@Args("id") id: string): Promise<Author> {
    const author = await this.authorService.findOneById(id);
    if (!author) {
      throw new NotFoundException(id);
    }
    return author;
  }

  @Query((returns) => [Author])
  authors(@Args() authorArgs: AuthorArgs): Promise<Author[]> {
    return this.authorService.findAll(authorArgs);
  }

  @Mutation((returns) => Author)
  async addAuthor(
    @Args("newRecipeData") newAuthorData: NewAuthorInput
  ): Promise<Author> {
    const author = await this.authorService.create(newAuthorData);
    pubSub.publish("recipeAdded", { authorAdded: author });
    return author;
  }

  @Mutation((returns) => Boolean)
  async removeAuthor(@Args("id") id: string) {
    return this.authorService.remove(id);
  }

  @Subscription((returns) => Author)
  authorAdded() {
    return pubSub.asyncIterator("authorAdded");
  }
}
