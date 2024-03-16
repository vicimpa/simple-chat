import { Controller, Get, UseGuards } from "@nestjs/common";

import { SessionGuard } from "./guard/session.guard";

@UseGuards(SessionGuard)
@Controller()
export class AppController {
  @Get()
  async index() {
    return 'Its work.';
  }
}