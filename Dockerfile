# FROM alpine:latest

FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

COPY ./api ./api

RUN npm install 

EXPOSE 8080

CMD [ "node", "api/index.js" ]
