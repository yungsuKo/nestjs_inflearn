"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploaderService = void 0;
const common_1 = require("@nestjs/common");
const storage_1 = require("@google-cloud/storage");
let ImageUploaderService = class ImageUploaderService {
    async create({ files }) {
        const waitedFiles = await Promise.all(files);
        const storage = new storage_1.Storage({
            projectId: 'codecamp-386223',
            keyFilename: 'codecamp-386223-89eb7af08f6b.json',
        }).bucket('codecamp-tom2');
        return await Promise.all(waitedFiles.map((file) => {
            return new Promise((resolve, reject) => {
                file
                    .createReadStream()
                    .pipe(storage.file(file.filename).createWriteStream())
                    .on('finish', () => {
                    resolve(`codecamp-tom2/${file.filename}`);
                })
                    .on('error', (err) => {
                    reject();
                });
            });
        }));
        return ['This action adds a new imageUploader'];
    }
    findAll() {
        return `This action returns all imageUploader`;
    }
    findOne(id) {
        return `This action returns a #${id} imageUploader`;
    }
    update(id, updateImageUploaderInput) {
        return `This action updates a #${id} imageUploader`;
    }
    remove(id) {
        return `This action removes a #${id} imageUploader`;
    }
};
ImageUploaderService = __decorate([
    (0, common_1.Injectable)()
], ImageUploaderService);
exports.ImageUploaderService = ImageUploaderService;
//# sourceMappingURL=image-uploader.service.js.map