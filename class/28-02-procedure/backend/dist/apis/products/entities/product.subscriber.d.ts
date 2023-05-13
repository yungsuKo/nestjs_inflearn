import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductSubscriber implements EntitySubscriberInterface<Product> {
    constructor(connection: Connection);
    listenTo(): typeof Product;
    afterInsert(event: InsertEvent<Product>): void;
}
