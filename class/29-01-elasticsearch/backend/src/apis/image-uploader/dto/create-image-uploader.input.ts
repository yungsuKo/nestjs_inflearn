import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImageUploaderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
