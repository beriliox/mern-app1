FROM node:18.6-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 9000

# CMD [ "server.js" ]

CMD tail -f /etc/issue