import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { DirectiveLocation, GraphQLDirective } from "graphql";
import { upperDirectiveTransformer } from "./common/directives/upper-case.directive";
import { RecipesModule } from "./recipes/recipes.module";
import { AuthorModule } from "./author/author.module";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { join } from "path";
import { ComplexityPlugin } from "./common/plugins/complexity.plugin";
import { LoggingPlugin } from "./common/plugins/logging.plugin";

@Module({
  imports: [
    RecipesModule,
    AuthorModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      validationRules: [],
      driver: ApolloDriver,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault(),
        new LoggingPlugin(),
      ],
      playground: false,
      autoSchemaFile: join(process.cwd(), "src/Schema/schema.gql"),
      transformSchema: (schema) => {
        console.log(
          "%c LOG schema",
          "background: #222; color: #bada55",
          schema
        );
        return upperDirectiveTransformer(schema, "upper");
      },
      sortSchema: false,
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: "upper",
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
  ],
})
export class AppModule {}
