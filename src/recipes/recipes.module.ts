import { Module } from "@nestjs/common";
import { DateScalar } from "../common/scalars/date.scalar";
import { RecipesResolver } from "./recipes.resolver";
import { RecipesService } from "./recipes.service";
import { ComplexityPlugin } from "../common/plugins/complexity.plugin";

@Module({
  providers: [RecipesResolver, RecipesService, DateScalar],
})
export class RecipesModule {}
