FROM nginx:1.16.0-alpine
WORKDIR /app
RUN apk update
RUN apk add git
RUN apk add npm
RUN apk add nodejs
RUN git clone https://github.com/pshoultz/seManagement.git
WORKDIR /app/seManagement/
RUN npm install express --save
RUN npm install fs --save
CMD ["nginx", "-g", "daemon off;"]
CMD ["node", "api.js"]
EXPOSE 8080
