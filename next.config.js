// module.exports = {
//   webpack: config => {
//     // Fixes npm packages that depend on `fs` module
//     config.node = {
//       fs: 'empty'
//     }

//     return config
//   }
// }
// https://stackoverflow.com/questions/68038511/validationerror-invalid-configuration-object-webpack-has-been-initialized-usin
require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` });

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
  env: {
    API_URL: process.env.API_URL,
    PUBLIC_KEY: process.env.PUBLIC_KEY
  },
};