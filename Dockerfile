FROM node:8.9.4-alpine

ENV APPDIR /usr/app

RUN mkdir $APPDIR
WORKDIR $APPDIR
ENV PATH $APPDIR/node_modules/.bin:$PATH

ADD yarn.lock ./yarn.lock
ADD package.json ./package.json
RUN yarn

ADD . $APPDIR