import { Strategy } from 'passport-jwt';
declare const jwtAccessStrategy_base: new (...args: any[]) => Strategy;
export declare class jwtAccessStrategy extends jwtAccessStrategy_base {
    constructor();
    validate(payload: any): {
        email: any;
        id: any;
        age: any;
    };
}
export {};
