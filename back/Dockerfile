FROM node:14
WORKDIR /app
RUN mkdir tmp
RUN mkdir assets
COPY ./package*.json /app/
RUN apt-get update
RUN apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
RUN npm install
COPY *.js /app/
COPY assets/* /app/assets/
COPY tmp /app/
CMD ["node", "/app"]