import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSlaeslocation.entity';
import { ProductTags } from '../productsTags/entities/productTags.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductSaleslocation, ProductTags]),
  ],
  providers: [
    ProductResolver, //
    ProductService, //
  ],
})
export class ProductModule {}
