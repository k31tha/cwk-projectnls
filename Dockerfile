# Use the official Node.js image
FROM node:latest

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN yarn install
RUN npx playwright install       

# Copy the rest of the application code
COPY . .

# Build the ViteJS React project
RUN yarn run build

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["yarn", "run", "serve"]
