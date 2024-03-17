import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUserDTO {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  image?: string;
}