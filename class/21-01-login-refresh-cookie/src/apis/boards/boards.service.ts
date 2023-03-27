import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  // aaa() {
  //   return 'Hello word';
  // }

  findAll() {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 값을 가져옴
    const result = [
      { number: 1, writer: '철수' },
      { number: 2, writer: '영수' },
    ];
    // 2. 꺼내온 결과 응답주기
    return result;
  }
  createBoard() {
    // 1. 등록하는 로직
    // 2. 저장 결과 응답 주기
    const result = '결과물 등록이 완료되었습니다';
    return result;
  }
}
