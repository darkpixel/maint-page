FROM node:12-alpine
RUN apk add --no-cache tini
ADD . /app
WORKDIR /app
RUN apk add --update --no-cache --virtual .gyp make g++ git && npm install && apk del .gyp
RUN npm install
ENTRYPOINT ["tini", "--"]
CMD ["npm", "start"]
