import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'bbb' })
  fetchBoards() {
    // 데이터 조회하기
    return 'board data return success';
  }
}
