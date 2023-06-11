import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './boards/entities/board.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BoardsModule, //
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST, // 도커 사용시 도커에 정의된 이름을 사용해야함.
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [Board],
      logging: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
