# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.20 --save-dev

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install a simple server to serve the static files
RUN npm install -g serve

# Expose the port
EXPOSE 8080

# Start the server
CMD ["serve", "-s", "build", "-l", "8080"] 