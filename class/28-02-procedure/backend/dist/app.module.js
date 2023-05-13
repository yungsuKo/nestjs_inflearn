"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const boards_module_1 = require("./apis/boards/boards.module");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("./apis/boards/entities/board.entity");
const user_module_1 = require("./apis/users/user.module");
const auth_module_1 = require("./apis/auth/auth.module");
const user_entity_1 = require("./apis/users/entities/user.entity");
const pointTransaction_module_1 = require("./apis/pointTransaction/pointTransaction.module");
const pointTransaction_entity_1 = require("./apis/pointTransaction/entities/pointTransaction.entity");
const image_uploader_module_1 = require("./apis/image-uploader/image-uploader.module");
const product_module_1 = require("./apis/products/product.module");
const productCategory_module_1 = require("./apis/productsCategory/productCategory.module");
const product_entity_1 = require("./apis/products/entities/product.entity");
const productSlaeslocation_entity_1 = require("./apis/productsSaleslocation/entities/productSlaeslocation.entity");
const productCategory_entity_1 = require("./apis/productsCategory/entities/productCategory.entity");
const productTags_entity_1 = require("./apis/productsTags/entities/productTags.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            boards_module_1.BoardModule,
            product_module_1.ProductModule,
            productCategory_module_1.ProductCategoryModule,
            pointTransaction_module_1.PointTransactionModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: 'src/commons/graphql/schema.gql',
                context: ({ req, res }) => ({ req, res }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '0000',
                database: 'myproject03',
                entities: [board_entity_1.Board, user_entity_1.User, pointTransaction_entity_1.PointTransaction, product_entity_1.Product, productSlaeslocation_entity_1.ProductSaleslocation, productCategory_entity_1.ProductCategory, productTags_entity_1.ProductTags],
                synchronize: true,
                logging: true,
            }),
            image_uploader_module_1.ImageUploaderModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map