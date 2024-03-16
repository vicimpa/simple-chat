import { Request } from "express";
import { PrismaService } from "nestjs-prisma";
import { Strategy } from "passport-custom";

import { Injectable } from "@nestjs/common";
import { AuthGuard, PassportStrategy } from "@nestjs/passport";
import { Session } from "@prisma/client";

export const STRATEGY_NAME = 'session' as const;

export const SessionAuthGuard = () => (
  AuthGuard(STRATEGY_NAME)
);

@Injectable()
export class SessionStrategy extends PassportStrategy(Strategy, STRATEGY_NAME) {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async validate({ cookies, headers }: Request): Promise<Session> {
    const sessionToken = headers['authorization'] ?? cookies['next-auth.session-token'] ?? null;

    return this.prisma.session.findUnique({
      where: { sessionToken },
    });
  }
}
