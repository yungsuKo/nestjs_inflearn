import { Module } from '@nestjs/common';
import { ProductCategoryResolver } from './productCategory.resolver';
import { ProductCategorySevice } from './productCategory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/productCategory.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  providers: [
    ProductCategoryResolver, //
    ProductCategorySevice, //
    Repository,
  ],
})
export class ProductCategoryModule {}
