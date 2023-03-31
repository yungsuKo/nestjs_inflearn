import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTags {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => Product, (product) => product.productTags)
  products: Product[];
}
