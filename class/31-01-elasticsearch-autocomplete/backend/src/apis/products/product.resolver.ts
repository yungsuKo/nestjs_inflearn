import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  @Query(() => [Product])
  async fetchProducts(
    @Args({ name: 'search', nullable: true }) search: string,
  ) {
    const result = await this.elasticsearchService.search({
      index: 'myboardnew',
      query: {
        match: { description: search },
      },
    });
    console.log(JSON.stringify(result, null, ' '));
    console.log(result.hits.hits[0]);
    return;
    // return this.productService.fetchAll();
  }

  @Query(() => Product)
  fetchProduct(@Args('productId') productId: string) {
    return this.productService.fetchOne({ productId });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매완료가 되었는지 확인해보기
    await this.productService.checkSoldOut({ productId });
    return await this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    // this.elasticsearchService.create({
    //   id: 'myid',
    //   index: 'myproduct03',
    //   document: {
    //     ...createProductInput,
    //   },
    // });

    return await this.productService.create({ createProductInput });
  }

  @Mutation(() => Boolean)
  deleteProduct(@Args('productId') productId: string) {
    return this.productService.delete({ productId });
  }
}
