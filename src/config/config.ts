export interface AppConfig {
  host: string;
  port: number;
  uri: string;
  debug: boolean;
}

export interface DbConfig {
  host: string;
  port: number;
  name: string;
  user: string;
  password: string;
}

export interface Configuration {
  app: AppConfig;
  database: DbConfig;
}

const host = process.env.API_HOST ?? 'localhost';
const port = process.env.API_PORT ? +process.env.API_PORT : 8000;

let uri = `https://${host}`;

if (host == 'localhost') {
  uri = `http://localhost:${port}`;
}

export default () => ({
  app: {
    host,
    port,
    uri,
    debug: process.env.API_DEBUG,
  },
  database: {
    name: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
});
