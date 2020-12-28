FROM node:slim
WORKDIR /web
COPY . .
RUN npm install && chmod 744 ./startup.sh
CMD ["./startup.sh"]
