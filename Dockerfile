FROM node:10

WORKDIR /usr/src/app

#ARG PORT
#ARG HOST
#
#ENV PORT=$PORT
#ENV HOST=$HOST

COPY package*.json ./

RUN npm install

COPY . .

#CMD [ "npm", "start", "--host", "0.0.0.0" ]