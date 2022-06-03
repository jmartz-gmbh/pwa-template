FROM nginx:stable-alpine

RUN apk update && apk upgrade
RUN apk add nodejs npm yarn

WORKDIR /usr/share/nginx/html
COPY . .

RUN cd app && yarn && yarn build

EXPOSE 80