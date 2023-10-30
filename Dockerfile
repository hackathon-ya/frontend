FROM node:18-alpine as build
WORKDIR /front_career
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD cp -r dist result_build