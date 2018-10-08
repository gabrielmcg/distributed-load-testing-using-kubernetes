FROM node:10

ENV HTTPS_PROXY http://proxy.am2.hpelabs.net:8080
ENV HTTP_PROXY http://proxy.am2.hpelabs.net:8080
ENV N0_PROXY "localhost,127.0.0.0,am2.cloudra.local"	
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8999

CMD [ "npm", "start" ]




