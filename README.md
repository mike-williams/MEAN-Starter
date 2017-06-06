# MEAN Starter MK2
Hello! This is a quick reference project for creating an application based on the MEAN stack. The intention is to explore the stack and provide a reference point for creating any future templates.

TypeScript is used for both client (Angular2) and server (express). 

## Technologies
 * AngularJS 2
 * NodeJS Express
 * TypeScript

## Prerequisites
If using Europa v1.0.0 it is advisable to update both npm and node for this project to build and run.

Identify versions with commands `npm --version` and `node -v`.

 * npm 4.1.2
 * Nodejs 7.6.0

If an update is required in Europa/CentOS then try these commands:

 * `sudo npm update -g npm`
 * `sudo npm install -g n`
 * `sudo n latest`
 * Restart terminal then verify updated version with `node -v` 

## Development Environment
 * Europa v1.0.0
 * Visual Studio Code
 * `sudo npm install -g typescript` and `sudo npm install -g typings`
 

## Deploying locally
```
npm install
```

Use `npm run start` to get the application to start in development mode. This mode uses `nodemon` to monitor changes to both client and server modules. The client can be accessed at `http://localhost:4200` while api `http://localhost:4300`. In production mode both client and server are on the same port.
