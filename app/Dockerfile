FROM node:9.6.1
MAINTAINER Tyler Ross

RUN npm install -g webpack

EXPOSE 3000


WORKDIR /tmp
COPY package.json /tmp/
COPY yarn.lock /tmp/
RUN yarn install

ENV APP_HOME /code
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
RUN cp -a /tmp/node_modules $APP_HOME
RUN webpack

ENV NODE_ENV=dev \
  PATH=$APP_HOME/node_modules/.bin:$PATH


# ADD package.json $APP_HOME

ADD . $APP_HOME


# Write the bundle.js static asset file
# RUN npm run start:dev

CMD ["npm", "start:dev"]
