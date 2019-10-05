FROM nginx:1.16.0-alpine
WORKDIR /app
RUN apk update
RUN apk add git
RUN apk add npm
RUN apk add nodejs
RUN git clone https://github.com/pshoultz/seManagement.git
WORKDIR /app/seManagement/
EXPOSE 8080
RUN npm install express --save
CMD ["node", "api.js", "&"]
CMD ["nginx", "-g", "daemon off;"]
