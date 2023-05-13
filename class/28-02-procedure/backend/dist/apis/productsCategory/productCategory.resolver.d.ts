import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategorySevice } from './productCategory.service';
export declare class ProductCategoryResolver {
    private readonly productCategoryService;
    constructor(productCategoryService: ProductCategorySevice);
    createProductCategory(name: string): Promise<{
        name: any;
    } & ProductCategory>;
}
