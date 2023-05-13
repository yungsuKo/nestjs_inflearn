import { UserService } from './user.service';
import { User } from './entities/user.entity';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(email: string, password: string, name: string, age: number): Promise<{
        email: any;
        password: any;
        name: any;
        age: any;
    } & User>;
    fetchUser(currentUser: any): any;
}
