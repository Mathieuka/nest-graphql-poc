import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, Length, MaxLength } from "class-validator";

@InputType()
export class NewRecipeInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true, description: "The recipe description" })
  @IsOptional()
  @Length(30, 255)
  description?: string;

  @Field((type) => [String])
  ingredients: string[];
}
