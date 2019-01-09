FROM node:latest AS build
LABEL maintainer="docker@hoelweb.com"

ENV HOME=/home/app

# Get our REACT webclient files, and build out static html files..
WORKDIR /web
COPY . .

RUN npm install --production
RUN npm run build

# Setup NginX to serve our now static files..
FROM nginx:stable

COPY --from=build /web/build /var/www
COPY ./nginx.conf /etc/nginx/

# Expose the port we want to serve our config on?
EXPOSE 8080

CMD service nginx start

# docker build -t jkhoel/microservices_web .
# docker run -p 8080:80