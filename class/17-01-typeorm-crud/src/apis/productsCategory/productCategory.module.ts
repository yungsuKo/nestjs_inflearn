import { Module } from '@nestjs/common';
import { ProductCategoryResolver } from './productCategory.resolver';
import { ProductCategorySevice } from './productCategory.service';

@Module({
  providers: [ProductCategoryResolver, ProductCategorySevice],
})
export class ProductCategoryModule {}
