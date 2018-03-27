FROM node:boron
MAINTAINER David Dyke (david.dyke@nebulr.com.au)
COPY package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /usr/src/app && mv -v /tmp/node_modules /usr/src
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV SOCKET_PORT 8080
ENV API_PORT 80
EXPOSE 80
EXPOSE 8080
CMD npm start