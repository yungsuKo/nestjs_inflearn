"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploaderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const image_uploader_service_1 = require("./image-uploader.service");
const image_uploader_entity_1 = require("./entities/image-uploader.entity");
const update_image_uploader_input_1 = require("./dto/update-image-uploader.input");
const graphql_upload_1 = require("graphql-upload");
let ImageUploaderResolver = class ImageUploaderResolver {
    constructor(imageUploaderService) {
        this.imageUploaderService = imageUploaderService;
    }
    createImageUploader(files) {
        console.log('ddddddddddd');
        return this.imageUploaderService.create({ files });
    }
    findAll() {
        return this.imageUploaderService.findAll();
    }
    findOne(id) {
        return this.imageUploaderService.findOne(id);
    }
    updateImageUploader(updateImageUploaderInput) {
        return this.imageUploaderService.update(updateImageUploaderInput.id, updateImageUploaderInput);
    }
    removeImageUploader(id) {
        return this.imageUploaderService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => [String]),
    __param(0, (0, graphql_1.Args)({ name: 'files', type: () => [graphql_upload_1.GraphQLUpload] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ImageUploaderResolver.prototype, "createImageUploader", null);
__decorate([
    (0, graphql_1.Query)(() => [image_uploader_entity_1.ImageUploader], { name: 'imageUploader' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageUploaderResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => image_uploader_entity_1.ImageUploader, { name: 'imageUploader' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImageUploaderResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => image_uploader_entity_1.ImageUploader),
    __param(0, (0, graphql_1.Args)('updateImageUploaderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_image_uploader_input_1.UpdateImageUploaderInput]),
    __metadata("design:returntype", void 0)
], ImageUploaderResolver.prototype, "updateImageUploader", null);
__decorate([
    (0, graphql_1.Mutation)(() => image_uploader_entity_1.ImageUploader),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImageUploaderResolver.prototype, "removeImageUploader", null);
ImageUploaderResolver = __decorate([
    (0, graphql_1.Resolver)(() => image_uploader_entity_1.ImageUploader),
    __metadata("design:paramtypes", [image_uploader_service_1.ImageUploaderService])
], ImageUploaderResolver);
exports.ImageUploaderResolver = ImageUploaderResolver;
//# sourceMappingURL=image-uploader.resolver.js.map