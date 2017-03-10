FROM mhart/alpine-node:6.10.0

WORKDIR /src
ADD . .

# node_modules is expected to exist otherwise running npm install within container within TAI requires proxy config
# and is too slow
RUN ./node_modules/@angular/cli/bin/ng build --prod --aot --vendor-chunk false
RUN npm run server:build 

# Run MEAN.JS server
CMD ["node", "dist/app.js"]
