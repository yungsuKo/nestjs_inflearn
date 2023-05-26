import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
  ) {}
  setRefreshService({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id, age: user.age }, //
      { secret: 'myRefreshKey', expiresIn: '2w' },
    );

    // 이후 보안 설정 추가 필요함.
    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);
    // 실제 배포 환경
    // 백, 프론트 domain 설정도 추가됨
  }

  getAccesstoken({ user }) {
    const token = this.jwtService.sign(
      { email: user.email, sub: user.id, age: user.age }, //
      { secret: 'myAccessKey', expiresIn: '3h' },
    );

    return token;
  }
}
