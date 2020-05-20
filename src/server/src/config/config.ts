import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URI || `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`

console.log(process.env.NODE_ENV || 'development');

export default {
  database: {
    connectionString: connectionString
  },
  usermap: {
    credentials: process.env.USERMAP_CREDENTIALS,
    tokenEndpoint: 'https://auth.fit.cvut.cz/oauth/token'
  },
  server: {
    port: process.env.APP_PORT
  }
};
