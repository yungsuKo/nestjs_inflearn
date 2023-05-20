import { Module } from '@nestjs/common';
import { PointTransactionService } from './pointTransaction.service';
import { PointTransactionResolver } from './pointTransaction.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { PointTransaction } from './entities/pointTransaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, PointTransaction])],
  providers: [PointTransactionResolver, PointTransactionService],
  exports: [],
})
export class PointTransactionModule {}
