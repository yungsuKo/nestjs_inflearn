import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { Product } from './product.entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product>{
    constructor(connection: Connection) {
        connection.subscribers.push(this);

    }

    listenTo() {
        return Product
    }

    afterInsert(event: InsertEvent<Product>) {
        console.log(event);
    }
}