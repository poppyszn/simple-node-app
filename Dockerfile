FROM node:lts-alpine

WORKDIR /app

COPY package.json ./package.json

RUN npm install

COPY . .

CMD ["node", "app.js"]

EXPOSE 3000