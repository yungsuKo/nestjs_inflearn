import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { ProductCategory } from 'src/apis/productsCategory/entities/productCategory.entity';
import { ProductSaleslocationInput } from 'src/apis/productsSaleslocation/dto/productSaleslocation.input';
import { Column } from 'typeorm';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Field(() => ProductSaleslocationInput)
  productSaleslocationInput: ProductSaleslocationInput;

  @Field(() => String)
  productCategoryId: string;

  @Field(() => [String])
  productTags: string[];
}
