const BPromise = require('bluebird');
const requestPromise = require('request-promise');
const uuid = require('node-uuid');
const s3 = require('../utils/aws').s3;
const config = require('../config');

function uploadToS3(image, opts) {
  const bucketName = opts.bucketName;
  const key = `tmp/${uuid.v4()}`;

  const params = {
    Bucket: bucketName,
    Key: key,
    ACL: 'public-read',
    Body: new Buffer(image, 'binary'),
    ContentType: opts.contentType,
  };

  console.log(params);

  return s3.putObjectAsync(params)
    .then(() => `https://${bucketName}.${s3.endpoint.hostname}/${key}`);
}

function main(event, context) {
  //console.log(`Received event: ${JSON.stringify(event, null, 2)}`);

  const inputs = {
    url: event.query.url,
  };

  const opts = {
    url: inputs.url,
    encoding: 'binary',
    resolveWithFullResponse: true,
  };

  return requestPromise(opts)
    .then(res => uploadToS3(res.body, {
      bucketName: event.stageVariables.bucketName,
      contentType: res.headers['content-type'],
    }))
    .then((s3Url) => {
      context.fail(s3Url);
    });
}

function promisify(f) {
  return function wrapper(event, context, cb) {
    try {
      BPromise.resolve(f(event, context))
        .asCallback(cb);
    } catch (e) {
      cb(e);
    }
  };
}

module.exports = {
  main: promisify(main),
};
