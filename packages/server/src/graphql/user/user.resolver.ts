import { PrismaService } from "nestjs-prisma";

import { SessionGuard, CurrentUserId } from "@/guard/session.guard";
import { UseGuards } from "@nestjs/common";
import { Query, Resolver, Args } from "@nestjs/graphql";

import { UserDTO } from "./models/UserDTO";

@UseGuards(SessionGuard)
@Resolver('User')
export class UserResolver {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  @Query(() => UserDTO, { nullable: true })
  async getMe(
    @CurrentUserId() userId?: string
  ) {
    if (!userId)
      return null;

    return this.prisma.user.findUnique({
      where: { id: userId }
    });
  }

  @Query(() => UserDTO, { nullable: true })
  async getUserById(
    @Args('userId') findUserId: string,
    @CurrentUserId() userId?: string,
  ) {

    return this.prisma.user.findUnique({
      where: { id: findUserId }
    });
  }
}