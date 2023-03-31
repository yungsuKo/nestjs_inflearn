import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategorySevice } from './productCategory.service';
import { InjectRepository } from '@nestjs/typeorm';

@Resolver()
export class ProductCategoryResolver {
  constructor(private readonly productCategoryService: ProductCategorySevice) {}
  @Mutation(() => ProductCategory)
  createProductCategory(@Args('name') name: string) {
    // DB 카테고리 등록
    // 리턴을 2개 해줄 수 있음
    // 1. 성공 여부
    // 2. 등록된 카테고리 정보
    return this.productCategoryService.create({ name });
  }
}
