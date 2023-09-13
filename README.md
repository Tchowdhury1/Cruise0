## Setup of environment
This project uses yarn to install dependencies

To install dependencies run the following:
yarn install


## Setup
Create a file named auth_config.json under /src with the following:

{
  "domain": "{YOUR AUTH0 DOMAIN}",
  "clientId": "{YOUR AUTH0 CLIENT ID}",
  "audience": "{YOUR AUTH0 API_IDENTIFIER}",
}

substitute the variables above with you environment credentials

## Run the sample

To run, enter the following:
yarn run dev


## Deployment
For deployment to production run the following:
yarn run build
