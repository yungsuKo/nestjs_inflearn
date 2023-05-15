import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: number;
}
