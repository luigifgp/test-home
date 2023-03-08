# Getting Started Test-home React App (node -v 16.19.0)

This project is base on `react-TS` as a client that the depends on a server
base on `nestjs` that handle API request to Github.

the expectation from the client is to show commits from this project and also
from others users (if it is allow to show those commits).

this required the following environment variables:

```bash
REACT_APP_API=
REACT_APP_API_KEY=
```

Please remember to use the `.env.example` file that we have in our dir folder
rename this file deleting ".example".

##How to run: 

We have set on this app aws repositories with docker images to make faster to 
build on local using `docker-compose-yml` we have 2 repositories for each environments.
run:
```bash
#  docker compose up -d 
```

we also have this application on live using vercel to deploy our client.

## link: https://test-home-delta.vercel.app/

Vercel is a platform for frontend frameworks and static sites, 
built to integrate with your headless content, commerce, or database.

##How to run without Docker

(only if we also wish to run our server on local)
we need to change this environment variable to a localhost i.e. `http://localhost:4000/`:

```bash
REACT_APP_API=
```

Use following command with node -v 16.19.0:

## pnpm install

## npm start
