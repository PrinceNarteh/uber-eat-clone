# Base image
FROM node:18-alpine3.18 As dev

# creating group and user and adding user to the group
RUN addgroup app && adduser -S -G app app

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --only=dev

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build


# Creating production build
FROM node:18-alpine3.18 As prod

# creating group and user and adding user to the group
RUN addgroup app && adduser -S -G app app

ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=dev /app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main" ]
