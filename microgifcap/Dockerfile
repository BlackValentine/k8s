FROM node:14
RUN mkdir -p /app && chown -R node:node /app
WORKDIR /app
USER node
COPY ./package*.json /app/
RUN npm install
COPY ./*.js /app/
CMD ["node", "/app"]


