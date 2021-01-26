FROM node:8.10-alpine

RUN mkdir -p /src/Photos

WORKDIR /src/Photos

COPY . /src/Photos

RUN yarn install

RUN yarn global add nodemon

EXPOSE 3000

CMD [ "npm", "run", "startdev" ]