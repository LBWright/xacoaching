FROM node:12

RUN apt-get update && apt-get install -y build-essential && apt-get install -y python

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm run dev