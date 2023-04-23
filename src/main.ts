import { NestFactory } from "@nestjs/core";
import * as dotenv from "dotenv";

import { AppModule } from "./app.module";

const start = async () => {
  dotenv.config({ path: `.${process.env.NODE_ENV}.env` });
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`server started at ${PORT} port`));
};

start();
