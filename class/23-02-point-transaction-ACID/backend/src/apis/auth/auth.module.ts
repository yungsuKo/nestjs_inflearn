import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { jwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';

@Module({
  providers: [jwtRefreshStrategy, AuthResolver, AuthService, UserService],
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([User]),
  ],
})
export class AuthModule {}
