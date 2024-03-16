import { ResolveField, Resolver } from "@nestjs/graphql";

import { UserDTO } from "./models/UserDTO";

@Resolver(() => UserDTO)
export class UserParent {

  @ResolveField(() => String)
  async testField() {
    return 'Hi';
  }
}