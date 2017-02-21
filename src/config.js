/* eslint-disable no-process-env */

require('dotenv').config();

// Env vars should be casted to correct types
const config = {
  NODE_ENV: process.env.NODE_ENV,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
};

module.exports = config;
