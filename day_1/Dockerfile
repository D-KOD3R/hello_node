FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the entire application
COPY . .

EXPOSE 5000

CMD ["node", "app.js"]