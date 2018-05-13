FROM node:9.6.1
MAINTAINER Tyler Ross

ENV APP_HOME /code
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

RUN npm install -g webpack


ENV NODE_ENV=production \
  PATH=$APP_HOME/node_modules/.bin:$PATH


# ADD package.json $APP_HOME

ADD . $APP_HOME


# Write the bundle.js static asset file
# RUN npm run build


# CMD ["npm", "start"]
