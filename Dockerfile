# Use an official Node.js runtime as a parent image
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS application dependencies
RUN npm install

# Copy the rest of the application source code to the container
FROM node:alpine as main
COPY . .

# Expose port 3000
EXPOSE 3000
COPY --from=build /app /


# Define the command to run your NestJS application
CMD ["npm", "run", "dev"]


