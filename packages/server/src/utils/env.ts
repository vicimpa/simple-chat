import { cleanEnv, port, str } from "envalid";

export const env = cleanEnv(process.env, {
  NEST_PORT: port({ desc: 'Starting port' }),
  NEST_GRAPHQL_PATH: str({ desc: 'Graphql path' }),
  NEST_GRAPHQL_SCHEMA: str({ desc: 'Schema path' }),
});