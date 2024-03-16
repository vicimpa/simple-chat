import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "@prisma/client";

@ObjectType()
export class UserDTO {
  @Field(() => String)
  id: string;

  @Field()
  name?: string;

  @Field()
  email?: string;

  @Field()
  image?: string;
}