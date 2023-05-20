import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ImageUploader {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
