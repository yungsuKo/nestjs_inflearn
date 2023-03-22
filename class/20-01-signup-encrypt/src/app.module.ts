import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './apis/boards/entities/board.entity';
import { UserModule } from './apis/users/user.module';
import { User } from './apis/users/entities/user.entity';

@Module({
  imports: [
    UserModule,
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'basketball2@',
      database: 'myproject03',
      entities: [Board, User],
      synchronize: true,
      logging: true,
      // ORM이 실제 쿼리로 어떻게 돌아가는지 로그를 남겨줌
    }),
  ],
})
export class AppModule {}
