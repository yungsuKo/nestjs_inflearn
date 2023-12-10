import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH-SERVICE')
    private readonly clientAuthService: ClientProxy,
    @Inject('RESOURCE-SERVICE')
    private readonly clientResourceService: ClientProxy,
  ) {}

  // @Get('/aaa')
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get('/auth/login')
  login() {
    return this.clientAuthService.send(
      { cmd: 'aaa' },
      // 2번째 파라미터에서 데이터를 넘김
      { email: 'aa@aa.aa', password: 'aa' },
    );
  }

  @Get('/boards')
  fetchBoards() {
    return this.clientResourceService.send({ cmd: 'bbb' }, { title: 'bbb' });
  }
}
