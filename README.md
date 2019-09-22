# Graphql Knowledge Share

You will need an AWS account and an Octopus Deploy Cloud instance.

Please ensure that you node version matches the version in `.nvmrc` - use nvm to install the right one. 

* Step 1: Create a admin user in your AWS account and ensure that user has CLI creds. Setup the creds in .aws/credentails (see AWS docs)
* Step 2: `npm install`
* Step 3: rename `.env.example` to `.env`, and replace the placeholders with the actual values
* Step 4: `npm run deploy:dev`
* Step 5: If everything ran as expected, you should now see your graphql endpoint and the appsync api key in the output
