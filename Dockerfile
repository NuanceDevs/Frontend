# Use an official Node.js runtime as a parent image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS application dependencies
RUN npm install 

# Copy the rest of the application source code to the container
FROM node:18-alpine as main
COPY . .
COPY --from=build /app /

# Expose port 3000
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]


