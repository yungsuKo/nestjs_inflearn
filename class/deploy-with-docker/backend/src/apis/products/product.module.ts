import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSlaeslocation.entity';
import { ProductTags } from '../productsTags/entities/productTags.entity';
import { ProductSubscriber } from './entities/product.subscriber';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductSaleslocation, ProductTags]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [
    ProductResolver, //
    ProductService, //
    ProductSubscriber,
  ],
})
export class ProductModule {}
