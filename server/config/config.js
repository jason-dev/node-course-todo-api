var env = process.env.NODE_ENV || 'development';
if (env) {
  // Need to trim whitespace for windows
  env = env.trim();
}

if (env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });

}
