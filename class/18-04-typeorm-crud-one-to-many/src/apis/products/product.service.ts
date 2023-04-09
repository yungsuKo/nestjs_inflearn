import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Args } from '@nestjs/graphql';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSlaeslocation.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
  ) {}

  async fetchAll() {
    const result = await this.productRepository.find();
    return result;
  }

  async fetchOne({ productId }) {
    const result = await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation'],
    });
    return result;
  }

  async update({ productId, updateProductInput }) {
    const myproduct = await this.productRepository.findOne({
      where: { id: productId },
    });
    const newProduct = {
      ...myproduct,
      id: productId,
      ...updateProductInput,
    };

    return await this.productRepository.save(newProduct);
  }

  async checkSoldOut({ productId }) {
    const result = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (result.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
    // if (result.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }

  async create({ createProductInput }) {
    // 1. 상품만 등록하는 경우
    // const result = this.productRepository.save({
    //   ...createProductInput,
    // });

    // 2. 상품과 상품거래위치를 같이 등록하는 경우
    const { productSaleslocationInput, productCategoryId, ...product } =
      createProductInput;
    const result = await this.productSaleslocationRepository.save({
      ...productSaleslocationInput,
    });
    const newProduct = await this.productRepository.save({
      ...product,
      productSaleslocation: result,
      productCategory: {
        id: productCategoryId,
      },
    });
    return newProduct;
  }

  async delete({ productId }) {
    // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId });
    // return result.affected ? true : false;
    // 2. 소프트 삭제 - 직접 구현 - 불린
    // this.productRepository.update({ id: productId }, { isDeleted: true });
    // 3. 소프트 삭제 - 직접 구현 - 시간
    // this.productRepository.update({ id: productId }, { deletedAt: new Date() });
    // 4. 소프트 삭제 - typeorm 제공 - softRemove
    // this.productRepository.softRemove({ id: productId });
    // 5. 소프트 삭제 - typeorm 제공 - softDelete
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}
