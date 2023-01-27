FROM node:12.18.1-slim
#RUN adduser --disabled-password karanth
#USER karanth
WORKDIR /app 
COPY package*.json .
RUN npm install
COPY . .
RUN chmod -R 777 /app
EXPOSE 5000
CMD ["npm","run","server"]




