# Use an official Node.js runtime as a parent image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS application dependencies
RUN npm install 

# Copy the rest of the application source code to the container
COPY . .

# Start a development server with hot-reloading
CMD ["npm", "run", "start:dev"]
