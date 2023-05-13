import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocation/entities/productSlaeslocation.entity';
import { ProductTags } from '../productsTags/entities/productTags.entity';
export declare class ProductService {
    private readonly productRepository;
    private readonly productSaleslocationRepository;
    private readonly productTagsRepository;
    constructor(productRepository: Repository<Product>, productSaleslocationRepository: Repository<ProductSaleslocation>, productTagsRepository: Repository<ProductTags>);
    fetchAll(): Promise<Product[]>;
    fetchOne({ productId }: {
        productId: any;
    }): Promise<Product>;
    update({ productId, updateProductInput }: {
        productId: any;
        updateProductInput: any;
    }): Promise<any>;
    checkSoldOut({ productId }: {
        productId: any;
    }): Promise<void>;
    create({ createProductInput }: {
        createProductInput: any;
    }): Promise<any>;
    delete({ productId }: {
        productId: any;
    }): Promise<boolean>;
}
