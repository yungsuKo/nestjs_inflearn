import { CreateImageUploaderInput } from './create-image-uploader.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImageUploaderInput extends PartialType(CreateImageUploaderInput) {
  @Field(() => Int)
  id: number;
}
