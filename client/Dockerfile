#  build stage
FROM node:latest as buid

WORKDIR /usr/src

ENV PATH /node_modules/.bin:$PATH

COPY package.json /usr/src/package.json

RUN npm install

RUN npm install react-scripts@latest -g

COPY . .

RUN npm run build

# deployment stage
FROM node:latest

RUN mkdir app

WORKDIR /app

COPY --from=build /usr/src/build /app/build

RUN cd build && ls

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "build", "-l", "80"]
