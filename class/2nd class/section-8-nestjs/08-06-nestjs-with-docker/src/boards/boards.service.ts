import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dtos/create-board.input';
import { IBoardsServiceCreate } from './interfaces/boards-services.interface';

// 인젝션-스코프 => 싱글톤(new 한번)으로 할래 말래? Request 스코프(매 요청마다 new 실행)로 할래?
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    const result = [
      {
        id: 1,
        writer: '김지원',
        title: '안녕하세요',
        contents: '내용입니다',
      },
      {
        id: 2,
        writer: '김지원2',
        title: '안녕하세요2',
        contents: '내용입니다2',
      },
      {
        id: 3,
        writer: '김지원3',
        title: '안녕하세요3',
        contents: '내용입니다3',
      },
    ];
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    console.log(createBoardInput.writer);
    return '게시물 등록에 성공';
  }
}
