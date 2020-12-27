FROM node:slim
WORKDIR /app
RUN npm install && npm cache clean --force
CMD ["node", "server.js"]
