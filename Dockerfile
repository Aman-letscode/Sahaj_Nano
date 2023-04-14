# FROM alpine:latest

FROM node:slim

RUN mkdir -p /api

WORKDIR /api

# RUN cd ./api
# COPY package*.json ./

# COPY ./api ./api

COPY . .
RUN cd api
RUN npm install 

EXPOSE 8080

CMD [ "npm", "run","dev"]
