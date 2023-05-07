import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  POINT_TRANSACTION_STATUS,
  PointTransaction,
} from './entities/pointTransaction.entity';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PointTransactionService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create({ impUid, amount, currentUser }) {
    // 1. pointTransaction 생성
    const pointTransaction = this.pointTransactionRepository.create({
      impUid: impUid,
      amount: amount,
      user: currentUser,
      status: POINT_TRANSACTION_STATUS.PAYMENT,
    });
    await this.pointTransactionRepository.save(pointTransaction);

    // 2. user의 point 찾아오기
    const user = await this.userRepository.findOne({ id: currentUser.id });

    // 3. user의 point 증가
    await this.userRepository.update(
      { id: currentUser.id },
      { point: user.point + amount },
    );

    // 4. 최종 결과 프론트엔드에 돌려주기
    return pointTransaction;
  }
}
