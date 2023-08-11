import { ArgsType, Field } from "@nestjs/graphql";
import { Min } from "class-validator";

@ArgsType()
export class AuthorArgs {
  @Field((type) => String)
  @Min(3)
  name = "john doe";
}
