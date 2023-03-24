FROM node:18.14-alpine

RUN apk add --no-cache bash

RUN yarn global add @nestjs/schematics

RUN yarn global add @nestjs/cli

USER node

WORKDIR /home/node/app