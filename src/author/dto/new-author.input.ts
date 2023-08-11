import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class NewAuthorInput {
  @Field()
  @MaxLength(30)
  name: string;
}
