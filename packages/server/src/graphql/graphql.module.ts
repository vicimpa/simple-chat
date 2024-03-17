import { join } from "path";

import { env } from "@/utils/env";
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
      path: env.NEST_GRAPHQL_PATH,
      autoSchemaFile: join(process.cwd(), '../../schema.gql'),
      sortSchema: true,
    }),
  ]
})
export class GraphQLModule { }