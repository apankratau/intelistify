type Environment = 'development' | 'production' | 'test';

interface Config {
  env: Environment;
  websocketUrl: string;
}

const config: Config = {
  env: process.env.NODE_ENV,
  websocketUrl: process.env.REACT_APP_WS_URL ?? '',
};

export default config;
