import { ResolveField, Resolver } from "@nestjs/graphql";

import { UserDTO } from "./dto/UserDTO";

@Resolver(() => UserDTO)
export class UserParent {

}