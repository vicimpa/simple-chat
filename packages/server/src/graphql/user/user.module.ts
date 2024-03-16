import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

import { UserParent } from "./user.parent";
import { UserResolver } from "./user.resolver";

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [UserResolver, UserParent],
  controllers: []
})
export class UserModule { }