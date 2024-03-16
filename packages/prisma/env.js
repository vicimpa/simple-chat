const { cleanEnv, url } = require('envalid');

exports.env = cleanEnv(process.env, {
  POSTGRES_URL: url({ desc: 'Postgres url' })
});