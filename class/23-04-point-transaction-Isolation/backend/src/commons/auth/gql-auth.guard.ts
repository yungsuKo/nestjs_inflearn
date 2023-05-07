import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthAccessGuard extends AuthGuard('access') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    // graphql 전용을 변경해줘야함.
    // restapi에서는 변경하지 않아도됨
    return ctx.getContext().req;
  }
}

export class GqlAuthRefreshGuard extends AuthGuard('refresh') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    // graphql 전용을 변경해줘야함.
    // restapi에서는 변경하지 않아도됨
    return ctx.getContext().req;
  }
}
