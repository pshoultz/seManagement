FROM nginx:1.16.0-alpine
USER root
WORKDIR /app
COPY . .
RUN apk update
RUN apk add npm
RUN apk add nodejs
RUN npm install express --save
RUN npm install fs --save
CMD ["nginx", "-g", "daemon off;"]
CMD ["node", "user.js"]
EXPOSE 8082
