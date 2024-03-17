import { env } from "./src/utils/env";

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // ...
  generates: {
    'src/graphql/gql.ts': {
      schema: env.NEST_GRAPHQL_SCHEMA,
      documents: 'src/graphql/schema/**/*.gql',
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node'
      ],
      config: {
        printFieldsOnNewLines: true
      }
    },
  },
};
export default config;