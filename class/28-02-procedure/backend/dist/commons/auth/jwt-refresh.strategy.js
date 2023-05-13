"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtRefreshStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class jwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'refresh') {
    constructor() {
        super({
            jwtFromRequest: (req) => {
                const cookie = req.headers.cookie;
                const refreshToken = cookie.replace('refreshToken=', '');
                console.log(refreshToken);
                return refreshToken;
            },
            secretOrKey: 'myRefreshKey',
        });
    }
    validate(payload) {
        console.log(payload);
        return {
            email: payload.email,
        };
    }
}
exports.jwtRefreshStrategy = jwtRefreshStrategy;
//# sourceMappingURL=jwt-refresh.strategy.js.map