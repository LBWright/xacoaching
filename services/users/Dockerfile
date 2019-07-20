FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm i -g jest

COPY . .

EXPOSE 5000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm run dev