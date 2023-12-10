import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH-SERVICE',
        transport: Transport.TCP,
        options: { host: 'auth-service', port: 3001 },
        // 게이트웨이와 서비스를 동일하게 입력
      },
      {
        name: 'RESOURCE-SERVICE',
        transport: Transport.TCP,
        options: { host: 'resource-service', port: 3002 },
        // 게이트웨이와 서비스를 동일하게 입력
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
