FROM mongo:latest
RUN apk --no-cache add npm
COPY ./mongo_connect.js ./package.json ./
RUN npm install

FROM mongo:latest
COPY --from=0 ./
EXPOSE 27017
CMD ["mongod"]
