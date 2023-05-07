import { Injectable } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
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

    private readonly connection: Connection,
  ) {}
  async create({ impUid, amount, currentUser }) {
    const queryRunner = await this.connection.createQueryRunner();
    await queryRunner.connect();

    // =====트랜잭션 시작=====
    await queryRunner.startTransaction();
    // ====================

    try {
      // 1. pointTransaction 생성
      const pointTransaction = this.pointTransactionRepository.create({
        impUid: impUid,
        amount: amount,
        user: currentUser,
        status: POINT_TRANSACTION_STATUS.PAYMENT,
      });
      await queryRunner.manager.save(pointTransaction);

      // 2. user의 point 찾아오기
      const user = await this.userRepository.findOne({ id: currentUser.id });

      // 3. user의 point 증가
      // await this.userRepository.update(
      //   { id: currentUser.id },
      //   { point: user.point + amount },
      // );
      const updatedUser = this.userRepository.create({
        ...user,
        point: user.point + amount,
      });
      await queryRunner.manager.save(updatedUser);

      // ===== commit 성공 확정 =====
      await queryRunner.commitTransaction();
      // ==========================

      // 4. 최종 결과 프론트엔드에 돌려주기
      return pointTransaction;
    } catch (e) {
      // ===== rollback 되돌리기 =====
      await queryRunner.rollbackTransaction();
      // ===========================
      throw e;
    } finally {
      await queryRunner.release();
    }
  }
}
