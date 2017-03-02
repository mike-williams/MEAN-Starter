# Hello MEAN

This documentation is a work in progress


## Prerequisites

If using Europa v1.0.0 it is advisable to update both npm and node for this project to build and run.

Identify versions with commands `npm --version` and `node -v`.

 * npm 4.1.2
 * Nodejs 7.6.0

If an update is required in Europa/CentOs then try these commands:

 * `sudo npm update -g npm`
 * `sudo npm install -g n`
 * `sudo n latest`
 * Restart terminal then verify updated version with `node -v` 
 
## Dev Setup
(work in progress)
- Clone from GitHub
- Run `npm install` from the root of the project
- Start a mongo docker container: `docker run -p 27017:27017 -d -v ~/Documents/mongo-data:/data/db --name mongo-db mongo`
- Run `npm run build` to start

- Install sequelize cli `sudo npm install -g sequelize-cli`
- `sequelize init`

## Deploying locally
This project is currently designed to run in Docker. To run locally, you will need to change the database location:
- In app.js, change `mongodb://db_1:27017/hello-mean` to point to your local mongo instance

Then run the following command
```
npm run build
```

Use `npm run build:watch` to get code changes on page refresh.

## Deploying with Docker

* Install [Docker](https://docs.docker.com/installation/#installation)

Run the following commands in order

```bash
$ docker build -t mean .
$ docker run -p 27017:27017 -d --name db mongo
$ docker run -p 80:3000 --link db:db_1 mean
```
