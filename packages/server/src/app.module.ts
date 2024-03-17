import { PrismaModule } from "nestjs-prisma";

import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

import { GraphQLModule } from "./graphql/graphql.module";
import { SessionStrategy } from "./guard/session.strategy";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        prismaOptions: {
          log: [
            {
              emit: "event",
              level: "query",
            },
          ],
        },
      },
    }),
    GraphQLModule,
  ],
  controllers: [],
  providers: [
    SessionStrategy
  ],
})
export class AppModule { }
