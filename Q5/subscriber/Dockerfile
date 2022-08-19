FROM node:alpine

LABEL maintainer = "ganesh"

WORKDIR /home/gm

COPY subscriber.js /home/gm/

RUN npm install mqtt

CMD ["node","subscriber.js"]