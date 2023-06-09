# FROM alpine:latest

FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

# RUN cd ./api
# COPY package*.json ./

# COPY ./api ./api

COPY ./api .
# RUN cd api

RUN npm install 

EXPOSE 8080

CMD [ "npm", "run","dev"]
