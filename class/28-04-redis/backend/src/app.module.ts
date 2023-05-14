import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './apis/boards/entities/board.entity';
import { UserModule } from './apis/users/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { User } from './apis/users/entities/user.entity';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { PointTransaction } from './apis/pointTransaction/entities/pointTransaction.entity';
import { ImageUploaderModule } from './apis/image-uploader/image-uploader.module';
import { ProductModule } from './apis/products/product.module';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { Product } from './apis/products/entities/product.entity';
import { ProductSaleslocation } from './apis/productsSaleslocation/entities/productSlaeslocation.entity';
import { ProductCategory } from './apis/productsCategory/entities/productCategory.entity';
import { ProductTags } from './apis/productsTags/entities/productTags.entity';
import { RedisClientOptions } from 'redis';
const redisStore = require('cache-manager-redis-store');

@Module({
  imports: [
    AuthModule,
    UserModule,
    BoardModule,
    ProductModule,
    ProductCategoryModule,
    PointTransactionModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'mydocker03',
      entities: [
        Board,
        User,
        PointTransaction,
        Product,
        ProductSaleslocation,
        ProductCategory,
        ProductTags,
      ],
      synchronize: true,
      logging: true,
      // ORM이 실제 쿼리로 어떻게 돌아가는지 로그를 남겨줌
    }),
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      url: 'redis://my-redis:6379',
      isGlobal: true,
    }),
    ImageUploaderModule,
  ],
})
export class AppModule {}
