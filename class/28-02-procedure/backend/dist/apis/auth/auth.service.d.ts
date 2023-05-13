import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    setRefreshService({ user, res }: {
        user: any;
        res: any;
    }): void;
    getAccesstoken({ user }: {
        user: any;
    }): string;
}
