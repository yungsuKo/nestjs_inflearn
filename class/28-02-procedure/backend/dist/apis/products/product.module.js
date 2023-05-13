"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_resolver_1 = require("./product.resolver");
const product_service_1 = require("./product.service");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const productSlaeslocation_entity_1 = require("../productsSaleslocation/entities/productSlaeslocation.entity");
const productTags_entity_1 = require("../productsTags/entities/productTags.entity");
const product_subscriber_1 = require("./entities/product.subscriber");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product, productSlaeslocation_entity_1.ProductSaleslocation, productTags_entity_1.ProductTags]),
        ],
        providers: [
            product_resolver_1.ProductResolver,
            product_service_1.ProductService,
            product_subscriber_1.ProductSubscriber
        ],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map