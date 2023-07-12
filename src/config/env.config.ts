import { EnvConfig } from './typed';
import { localhostEnvConfig } from './localhost.env.config';

const LOCALHOST_URL = 'localhost';

let envConfig: EnvConfig;

const hostName: string = window.location.hostname;

if (hostName.startsWith(LOCALHOST_URL)) {
  envConfig = localhostEnvConfig;
} else {
  throw 'Unrecognised environment.';
}

export { envConfig };
