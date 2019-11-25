FROM nginx:1.16.0-alpine
WORKDIR /app
COPY . .
RUN apk update
RUN apk add npm
RUN apk add nodejs
RUN npm install express --save
RUN npm install fs --save
CMD ["node", "inventory.js"]
EXPOSE 8083
