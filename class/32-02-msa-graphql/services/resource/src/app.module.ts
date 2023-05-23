import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
    }),
  ],
  providers: [AppResolver, AppService],
})
export class AppModule {}
