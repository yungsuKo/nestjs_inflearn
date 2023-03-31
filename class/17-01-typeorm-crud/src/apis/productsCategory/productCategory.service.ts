import { Injectable } from '@nestjs/common';
import { ProductCategory } from './entities/productCategory.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductCategorySevice {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  async create({ name }) {
    const result = await this.productCategoryRepository.save({ name });
    console.log(result);
    return result;
  }
}
