import { join } from "path";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule as ApolloModule } from "@nestjs/graphql";

import { UserModule } from "./user/user.module";

@Module({
  imports: [
    UserModule,
    ApolloModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      path: '/graphql',
      autoSchemaFile: join(process.cwd(), '../../schema.gql'),
      context: ({ req }): any => {
        return { req };
      },
    }),
  ]
})
export class GraphQLModule { }