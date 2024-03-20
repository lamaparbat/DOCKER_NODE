FROM node:16

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]
