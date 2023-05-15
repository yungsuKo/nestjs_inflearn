import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';
@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product>{
    constructor(connection: Connection) {
        connection.subscribers.push(this);

    }

    listenTo() {
        return Product
    }

    afterInsert(event: InsertEvent<Product>) {
        console.log(event.entity);
        const bigQuery = new BigQuery({
            keyFilename: 'codecamp-386223-1e7463b65fb0.json',
            projectId: 'codecamp-386223'
        });

        // 로그는 mysql에 남기지 않음 >> bigquery
        bigQuery.dataset("mybigquery03").table("productLog").insert([{
            id: event.entity.id,
            name: event.entity.name,
            description: event.entity.description,
            price: event.entity.price
        }]);


        // 아래에 입력한 데이터가 들어가있음
        // event.entity


    }
}