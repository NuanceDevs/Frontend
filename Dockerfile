# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install NestJS application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose port 3000
EXPOSE 3000


# Define the command to run your NestJS application
CMD ["npm", "run", "dev"]


