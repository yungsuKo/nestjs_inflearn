import { ImageUploaderService } from './image-uploader.service';
import { UpdateImageUploaderInput } from './dto/update-image-uploader.input';
import { FileUpload } from 'graphql-upload';
export declare class ImageUploaderResolver {
    private readonly imageUploaderService;
    constructor(imageUploaderService: ImageUploaderService);
    createImageUploader(files: FileUpload[]): Promise<unknown[]>;
    findAll(): string;
    findOne(id: number): string;
    updateImageUploader(updateImageUploaderInput: UpdateImageUploaderInput): string;
    removeImageUploader(id: number): string;
}
