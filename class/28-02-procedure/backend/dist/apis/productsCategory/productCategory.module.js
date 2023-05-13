"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const productCategory_resolver_1 = require("./productCategory.resolver");
const productCategory_service_1 = require("./productCategory.service");
const typeorm_1 = require("@nestjs/typeorm");
const productCategory_entity_1 = require("./entities/productCategory.entity");
const typeorm_2 = require("typeorm");
let ProductCategoryModule = class ProductCategoryModule {
};
ProductCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([productCategory_entity_1.ProductCategory])],
        providers: [
            productCategory_resolver_1.ProductCategoryResolver,
            productCategory_service_1.ProductCategorySevice,
            typeorm_2.Repository,
        ],
    })
], ProductCategoryModule);
exports.ProductCategoryModule = ProductCategoryModule;
//# sourceMappingURL=productCategory.module.js.map