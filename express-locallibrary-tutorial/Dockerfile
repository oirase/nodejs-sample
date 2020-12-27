FROM node:slim
WORKDIR /web
COPY . .
RUN npm install && node populatedb db
CMD ["node", "./bin/www"]
