import { Injectable, Scope } from '@nestjs/common';

// 인젝션-스코프 => 싱글톤(new 한번)으로 할래 말래? Request 스코프(매 요청마다 new 실행)로 할래?
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
