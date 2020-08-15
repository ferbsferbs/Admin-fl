FROM node:10


WORKDIR /code



COPY package.json  ./

RUN npm install --silent

COPY . .

EXPOSE 5004

CMD ["npm", "start"]
