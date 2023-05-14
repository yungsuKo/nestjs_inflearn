import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImageUploaderService } from './image-uploader.service';
import { ImageUploader } from './entities/image-uploader.entity';
import { CreateImageUploaderInput } from './dto/create-image-uploader.input';
import { UpdateImageUploaderInput } from './dto/update-image-uploader.input';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver(() => ImageUploader)
export class ImageUploaderResolver {
  constructor(private readonly imageUploaderService: ImageUploaderService) {}

  @Mutation(() => [String])
  createImageUploader(
    @Args({ name: 'files', type: () => [GraphQLUpload] }) files: FileUpload[],
  ) {
    console.log('ddddddddddd');
    return this.imageUploaderService.create({ files });
  }

  @Query(() => [ImageUploader], { name: 'imageUploader' })
  findAll() {
    return this.imageUploaderService.findAll();
  }

  @Query(() => ImageUploader, { name: 'imageUploader' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageUploaderService.findOne(id);
  }

  @Mutation(() => ImageUploader)
  updateImageUploader(
    @Args('updateImageUploaderInput')
    updateImageUploaderInput: UpdateImageUploaderInput,
  ) {
    return this.imageUploaderService.update(
      updateImageUploaderInput.id,
      updateImageUploaderInput,
    );
  }

  @Mutation(() => ImageUploader)
  removeImageUploader(@Args('id', { type: () => Int }) id: number) {
    return this.imageUploaderService.remove(id);
  }
}
