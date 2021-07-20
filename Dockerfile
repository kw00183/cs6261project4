FROM node:14.17.3

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli@9.1.6
RUN npm install -g http-server

COPY ./docker_commands.sh .

RUN chmod a+x ./docker_commands.sh

CMD ./docker_commands.sh
