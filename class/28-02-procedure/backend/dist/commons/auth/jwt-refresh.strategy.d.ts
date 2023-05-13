import { Strategy } from 'passport-jwt';
declare const jwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class jwtRefreshStrategy extends jwtRefreshStrategy_base {
    constructor();
    validate(payload: any): {
        email: any;
    };
}
export {};
