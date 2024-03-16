import { cleanEnv, port } from "envalid";

export const env = cleanEnv(process.env, {
  NEST_PORT: port({ desc: 'Starting port' })
});