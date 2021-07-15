FROM node:14.17.3 as builder

LABEL "maintainer"="kw00183@my.westga.edu"

USER root

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install -g @angular/cli@9.1.6
RUN npm install -g http-server

COPY . /app

CMD sh docker_commands.sh

# Production container
#FROM scratch
#COPY --from=builder /dist/cs6261project4 /testimage
#EXPOSE 4200
