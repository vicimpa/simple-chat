import { PrismaService } from "nestjs-prisma";

import { SessionGuard, CurrentUserId } from "@/guard/session.guard";
import { UseGuards } from "@nestjs/common";
import { Query, Resolver, Args, Mutation } from "@nestjs/graphql";

import { UserDTO } from "./dto/UserDTO";

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

  @Mutation(() => UserDTO, { nullable: true })
  async updateMe(
    @CurrentUserId()
    userId: string | null,
    @Args('name', { nullable: true })
    name: string | null,
    @Args('email', { nullable: true })
    email: string | null,
    @Args('image', { nullable: true })
    image: string | null,
  ) {
    if (!userId)
      return null;

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        name: name ?? undefined,
        email: email ?? undefined,
        image: image ?? undefined
      }
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