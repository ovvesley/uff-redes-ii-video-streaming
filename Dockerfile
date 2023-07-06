FROM node:20-alpine

USER root
WORKDIR /var/www

COPY . .

RUN npm install

EXPOSE 80
