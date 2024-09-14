FROM node:20.17-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

CMD [ "node", "dist/index.js" ]