const AWS = require('aws-sdk');
const BPromise = require('bluebird');

console.log(AWS.config);
module.exports = {
  s3: BPromise.promisifyAll(new AWS.S3({ apiVersion: '2006-03-01' })),
};
