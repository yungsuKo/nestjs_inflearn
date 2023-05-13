import { ProductCategory } from './entities/productCategory.entity';
import { Repository } from 'typeorm';
export declare class ProductCategorySevice {
    private readonly productCategoryRepository;
    constructor(productCategoryRepository: Repository<ProductCategory>);
    create({ name }: {
        name: any;
    }): Promise<{
        name: any;
    } & ProductCategory>;
}
