import { User } from 'src/apis/users/entities/user.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    isSoldout: boolean;
    deletedAt: Date;
    user: User;
}
