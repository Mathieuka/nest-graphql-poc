import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "autor " })
export class Author {
  @Field((type) => ID)
  id: string;

  @Directive("@upper")
  name: string;
}
