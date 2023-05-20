import { Module } from '@nestjs/common';
import { ImageUploaderService } from './image-uploader.service';
import { ImageUploaderResolver } from './image-uploader.resolver';

@Module({
  providers: [ImageUploaderResolver, ImageUploaderService],
})
export class ImageUploaderModule {}
