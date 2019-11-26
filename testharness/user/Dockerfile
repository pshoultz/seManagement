FROM alpine
WORKDIR /app
COPY . .
RUN apk update
RUN apk add npm
RUN apk add nodejs
RUN npm install express --save
CMD ["node", "user.js"]
EXPOSE 8082
