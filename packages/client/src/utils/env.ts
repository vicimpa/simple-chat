import { bool, cleanEnv, num, str, url } from "envalid";

export const env = cleanEnv(process.env, {
  NEXT_PORT: num({ desc: 'Starting port' }),
  // Auth
  NEXTAUTH_SECRET: str({ desc: 'Secret for auth' }),
  NEXTAUTH_URL: url({ desc: 'Next auth url' }),
  // Graphql
  NEST_GRAPHQL_SCHEMA: str({ desc: 'Schema path' }),
});