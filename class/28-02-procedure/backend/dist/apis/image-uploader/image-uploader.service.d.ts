import { UpdateImageUploaderInput } from './dto/update-image-uploader.input';
export declare class ImageUploaderService {
    create({ files }: {
        files: any;
    }): Promise<unknown[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateImageUploaderInput: UpdateImageUploaderInput): string;
    remove(id: number): string;
}
