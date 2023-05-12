import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
} from 'typeorm';
import { Product } from './product.entity';
import { connect } from 'http2';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Product;
  }
}
