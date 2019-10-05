FROM nginx:1.16.0-alpine
RUN apk update
RUN apk add git
RUN apk add npm
RUN apk add nodejs
WORKDIR /usr/share/nginx/html/
RUN git clone https://github.com/pshoultz/seManagement.git
EXPOSE 80
WORKDIR /usr/share/nginx/html/seManagement
RUN npm install express --save
CMD ["node", "api.js", "&"]
CMD ["nginx", "-g", "daemon off;"]
