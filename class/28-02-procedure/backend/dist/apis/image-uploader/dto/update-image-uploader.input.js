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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateImageUploaderInput = void 0;
const create_image_uploader_input_1 = require("./create-image-uploader.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateImageUploaderInput = class UpdateImageUploaderInput extends (0, graphql_1.PartialType)(create_image_uploader_input_1.CreateImageUploaderInput) {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateImageUploaderInput.prototype, "id", void 0);
UpdateImageUploaderInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateImageUploaderInput);
exports.UpdateImageUploaderInput = UpdateImageUploaderInput;
//# sourceMappingURL=update-image-uploader.input.js.map