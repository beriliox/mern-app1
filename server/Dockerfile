FROM node:18.6-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

RUN npm i -g nodemon

COPY . .

EXPOSE 9000

# CMD [ "server.js" ]

CMD tail -f /etc/issue