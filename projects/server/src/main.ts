import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app.module";

const logger = new Logger('global');

logger.log('Init');

Promise.resolve()
  .then(async () => {
    const app = await NestFactory.create<NestExpressApplication>(
      AppModule, {
      rawBody: true
    });

    app.useBodyParser("text", { limit: "5mb" });
    app.useBodyParser("json", { limit: "50mb" });

    await app.listen(3000);
  })
  .catch(logger.error);
