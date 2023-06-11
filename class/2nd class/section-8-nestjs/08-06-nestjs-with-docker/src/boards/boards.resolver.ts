import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dtos/create-board.input';

// @Controller()
@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {}

  // @Get()
  @Query(() => [Board], { nullable: true })
  fetchBoards(): Board[] {
    return this.boardsService.findAll();
  }

  @Mutation(() => String, { nullable: true })
  createBoard(
    // @Args('writer') writer: string, //
    // @Args('title') title: string, //
    // @Args({ name: 'contents', nullable: true }) contents: string, //
    @Args('createBoardInput') createBoardInput: CreateBoardInput, //
  ): string {
    return this.boardsService.create({ createBoardInput });
  }
}
