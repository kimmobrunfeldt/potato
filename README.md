# Potato

Potato as a Service.

## Install a new Potato

* Create IAM user, save access tokens, add multifactor authentication (MFA)
* Create IAM role with admin rights, add above user as trusted entity and require MFA
* Configure .env.sample
* Install https://github.com/remind101/assume-role
* Install https://aws.amazon.com/cli/
* `source ./tools/mfa.sh` and input mfa

