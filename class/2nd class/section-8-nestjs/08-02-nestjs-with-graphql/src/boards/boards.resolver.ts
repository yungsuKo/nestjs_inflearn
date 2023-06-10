import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Query, Resolver } from '@nestjs/graphql';

// @Controller()
@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {}

  // @Get()
  @Query(() => String, { nullable: true })
  fetchBoards(): string {
    return this.boardsService.getHello();
  }
}
