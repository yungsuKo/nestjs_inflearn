import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateBoardInput } from './dto/createBoard.input';
import { BoardService } from './boards.service';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll();
  }
  @Mutation(() => String)
  createBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ) {
    // console.log('writer :', writer, 'title :', title, 'contents :', contents);
    // console.log(args);
    console.log(createBoardInput);
    return this.boardService.createBoard();
  }
}
