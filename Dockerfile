FROM node:13-alpine

COPY package*.json /usr/app/
COPY app/* /usr/app/

WORKDIR /usr/app

RUN npm install
EXPOSE 3000
CMD ["node","server.js"]
