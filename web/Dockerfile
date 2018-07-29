FROM python:3
ENV PYTHONUNBUFFERED 1

MAINTAINER Tyler Ross

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client-9.4

ENV APP_HOME /web
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ADD requirements.txt $APP_HOME
RUN pip install -r requirements.txt

ADD . $APP_HOME/
