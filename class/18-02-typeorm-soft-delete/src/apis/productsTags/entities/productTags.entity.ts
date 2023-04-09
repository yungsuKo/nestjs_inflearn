import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductTags {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToMany(() => Product, (product) => product.productTags)
  @Field(() => Product)
  products: Product[];
}
