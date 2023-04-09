import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSlaeslocation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductSaleslocation])],
  providers: [
    ProductResolver, //
    ProductService, //
  ],
})
export class ProductModule {}
