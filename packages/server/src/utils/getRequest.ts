import { ExecutionContext } from "@nestjs/common";
import { GqlContextType, GqlExecutionContext } from "@nestjs/graphql";

export const getRequest = (context: ExecutionContext) => {
  const type = context.getType<GqlContextType>();

  if (type === "graphql") {
    return GqlExecutionContext.create(context).getContext().req;
  }

  return context.switchToHttp().getRequest();
};