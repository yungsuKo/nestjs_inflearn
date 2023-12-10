import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // post, get 등이 아닌 messagepattern을 사용해서 요청을 파악함.
  @MessagePattern({ cmd: 'aaa' })
  login(data) {
    console.log(data);
    return 'login success';
  }

  @Post('/auth/logout')
  logout() {
    // 로그아웃 진행
    return 'logout success';
  }
}
