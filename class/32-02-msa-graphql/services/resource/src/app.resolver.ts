import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Query } from '@nestjs/graphql';

@Controller()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  // @Get('/aaa')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Query()
  fetchBoards() {
    return 'board 조회 성공!!';
  }
}
