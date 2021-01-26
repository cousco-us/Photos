FROM node:15.6.0-alpine3.10
FROM mongo

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm run server-dev
RUN npm run db:seed

# RUN npm global add nodemon

EXPOSE 5000

CMD [ "npm", "run", "react-dev" ]
