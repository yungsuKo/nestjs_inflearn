import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './boards/entities/board.entity';

@Module({
  imports: [
    BoardsModule, //
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // 도커 사용시 도커에 정의된 이름을 사용해야함.
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'myproject',
      entities: [Board],
      logging: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
