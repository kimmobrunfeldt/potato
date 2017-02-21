# Problems to consider

1. Postgres connection pooling?
  http://stackoverflow.com/questions/34886940/aws-lambda-function-lifetime

2. Personal projects: Heroku is fixed priced

3. Internal Server Error because lambda function response was in bad format, nothing in logs
4. API Gateway errors are not logged
5. Serverless: api gateway configuration seems like it will be shit ton big
6. "There is no way to run the API gateway locally, unfortunately.""
7. You can't respond binary encoding via api gateway
8. http://stackoverflow.com/questions/36913196/401-return-from-an-api-gateway-custom-authorizer-is-missing-access-control-allo

API gateway shitness:
https://aws.amazon.com/blogs/compute/redirection-in-a-serverless-api-with-aws-lambda-and-amazon-api-gateway/
https://aws.amazon.com/blogs/compute/error-handling-patterns-in-amazon-api-gateway-and-aws-lambda/

9. Bad error messages
  remote:

  ```
  Syntax error in module 'src/functions/scale': SyntaxError
      at require (internal/module.js:12:17)

                            ^ what is this file??
  ```

  local:

  ```
  ➜  potato git:(master) ✗ sls invoke local -f scale -p event.json

  Syntax Error -------------------------------------------

     Unexpected token {

     For debugging logs, run again after setting SLS_DEBUG env var.

  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues

     Please report this error. We think it might be a bug.

  Your Environment Information -----------------------------
  ```

10. Debugging API gateway

  1.Edit code, 2.deploy lambda, 3.try

  1 -> 3 takes ~minute


11. Cloudformation errors

  ```
  Serverless: Updating Stack…

  Serverless Error ---------------------------------------

     Template format error: Unresolved resource dependencies
     [potato-service-dev] in the Resources block of the template

  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues

  Your Environment Information -----------------------------
     OS:                 darwin
     Node Version:       4.2.6
     Serverless Version: 1.1.0
  ```

12. Cloudformation jams

```
Serverless: Packaging service…
Serverless: Uploading CloudFormation file to S3…
Serverless: Uploading service .zip file to S3…
Serverless: Updating Stack…
Serverless: Checking Stack update progress…
.................Serverless: Deployment failed!

  Serverless Error ---------------------------------------

     An error occurred while provisioning your stack: NewResource
     - The bucket you tried to delete is not empty.

  Get Support --------------------------------------------
     Docs:          docs.serverless.com
     Bugs:          github.com/serverless/serverless/issues

  Your Environment Information -----------------------------
     OS:                 darwin
     Node Version:       4.2.6
     Serverless Version: 1.1.0
```

after that, -> UPDATE_COMPLETE_CLEANUP_IN_PROGRESS for 5 minutes


13. Handling secrets: too many options

Update: now env vars are built into lambda



