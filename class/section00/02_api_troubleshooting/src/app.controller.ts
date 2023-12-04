import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // 연산이 오래걸리는 qqq에 요청이 들어왔을 때, qqq2를 동시에 요청하면 qqq가 끝날때까지 기다린 후 qqq2가 실행됨
  // single thread 이기 때문에 발생하는 현상.
  // javascript에서는 워커쓰레드라는 것을 통해서 위 현상을 해소할 수 있음
  @Get('/qqq')
  getHello(): string {
    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) {
      sum += i;
    }
    return '철수 성공';
  }

  @Get('/qqq2')
  getHello2(): string {
    return '영희 성공';
  }
}
