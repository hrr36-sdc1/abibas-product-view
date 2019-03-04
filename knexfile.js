module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '',
      database: 'products_test',
      charset: 'utf8',
    },
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds/test`,
    },
  },
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: '',
      database: 'products',
      charset: 'utf8',
    },
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds/development`,
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME || 'postgres',
    },
    migrations: {
      directory: `${__dirname}/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/database/seeds/production`,
    },
  },
};
