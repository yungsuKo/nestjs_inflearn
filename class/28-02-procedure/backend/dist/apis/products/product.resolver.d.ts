import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    fetchProducts(): Promise<Product[]>;
    fetchProduct(productId: string): Promise<Product>;
    updateProduct(productId: string, updateProductInput: UpdateProductInput): Promise<any>;
    createProduct(createProductInput: CreateProductInput): Promise<any>;
    deleteProduct(productId: string): Promise<boolean>;
}
