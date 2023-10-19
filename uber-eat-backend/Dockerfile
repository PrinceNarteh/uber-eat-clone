# Base image
FROM node:18-alpine3.18

# creating group and user and adding user to the group
RUN addgroup app && adduser -S -G app app

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
#RUN npm run build

# Start the server using the production build
CMD [ "npm", "start:dev" ]
