import cookieParser from "cookie-parser";

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app.module";
import { env } from "./utils/env";

const logger = new Logger('global');

Promise.resolve()
  .then(async () => {
    const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
      {
        rawBody: true
      }
    );

    app.useBodyParser("text", { limit: "5mb" });
    app.useBodyParser("json", { limit: "50mb" });

    await app.startAllMicroservices();
    await app.listen(env.NEST_PORT);
  })
  .catch((error) => logger.error(error));
