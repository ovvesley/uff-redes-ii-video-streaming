FROM node:20

USER root
WORKDIR /var/www

COPY . .

RUN chown -R node:node /var/www
RUN chmod -R g+w /var/www

RUN npm install

EXPOSE 80
ENTRYPOINT [ "npm", "run", "start-prod"]