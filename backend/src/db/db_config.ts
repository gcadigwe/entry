import { Client, harperDbConfigOptions } from 'harperive';

const harperive = Client;

const DB_CONFIG: harperDbConfigOptions = {
  harperHost: process.env.INSTANCE_URL as string,
  username: process.env.INSTANCE_USERNAME as string,
  password: process.env.INSTANCE_PASSWORD as string,
  schema: process.env.INSTANCE_SCHEMA as string,
  token: '',
};

const client = new harperive(DB_CONFIG);

export default client;
