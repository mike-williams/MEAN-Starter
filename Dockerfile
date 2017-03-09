FROM mhart/alpine-node:6.10.0

WORKDIR /src
ADD . .

RUN npm install
RUN ./node_modules/@angular/cli/bin/ng build 
RUN npm run server:build 

# Run MEAN.JS server
CMD ["node", "dist/app.js"]
