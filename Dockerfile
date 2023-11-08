FROM node:16

WORKDIR /home/node/app
COPY . .
RUN npm install
RUN npm rebuild bcrypt --build-from-source
EXPOSE 3000
CMD ["npm", "start"]
