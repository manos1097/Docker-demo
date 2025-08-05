FROM node:lts-jod

COPY package*.json ./

COPY /src .

RUN npm install

CMD ["node", "server.js"]
