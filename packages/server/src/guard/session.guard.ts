import { getRequest } from "@/utils/getRequest";
import { ExecutionContext, Injectable, createParamDecorator } from "@nestjs/common";
import { Session } from "@prisma/client";

import { SessionAuthGuard } from "./session.strategy";

@Injectable()
export class SessionGuard extends SessionAuthGuard() {
  getRequest(context: ExecutionContext) {
    return getRequest(context);
  }

  handleRequest<Session>(_err: any, session: Session) {
    return session ?? null;
  }
}

export const CurrentUserId = createParamDecorator(
  async (_data: unknown, context: ExecutionContext) => {
    const session = getRequest(context).user as Session;
    return session?.userId ?? null;
  }
);