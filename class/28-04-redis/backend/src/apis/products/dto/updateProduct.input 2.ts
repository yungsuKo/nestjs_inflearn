import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { Column } from 'typeorm';
import { CreateProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
// export class UpdateProductInput {
//   @Field(() => String, { nullable: true })
//   name: string;

//   @Field(() => String, { nullable: true })
//   description: string;

//   @Min(0)
//   @Field(() => Int, { nullable: true })
//   price: number;
// }
