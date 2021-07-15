FROM node:14.17.3

LABEL "maintainer"="kw00183@my.westga.edu"

USER root

ENV AP /data/app
ENV SCPATH /etc/supervisor/conf.d

RUN apt-get -y update

# The daemons
RUN apt-get -y install supervisor
RUN mkdir -p /var/log/supervisor

# Supervisor Configuration
ADD ./supervisord/conf.d/* $SCPATH/

# Application Code
ADD *.js* $AP/

WORKDIR $AP

RUN npm install -g @angular/cli
RUN npm install -g http-server
//RUN ng run build
RUN http-server -p 4200


CMD ng serve --port 4200

//RUN docker_commands.sh

# Build container
FROM golang:alpine as builder
RUN apk update && \
    apk add git && \
    CGO_ENABLED=0 go get -a -ldflags '-s' github.com/kw00183/cs6261project4

# Production container
FROM scratch
COPY --from=builder /go/bin/cs6261project4 /cs6261project4
EXPOSE 4200
CMD ["/cs6261project4"]

CMD ["supervisord", "-n"]
