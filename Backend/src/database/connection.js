import knex from 'knex';

import config from '../../knexfile';

const env = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = knex(env);

export default connection;
