FROM node:14.17.3

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli@9.1.6
RUN npm install -g http-server

CMD ./docker_commands.sh
