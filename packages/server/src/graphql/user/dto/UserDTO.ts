import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('User')
export class UserDTO {
  @Field(() => String)
  id: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  image?: string;
}