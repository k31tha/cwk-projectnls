# Use the official Node.js image
#FROM mcr.microsoft.com/playwright:v1.40.0-jammy
FROM node:latest

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN yarn install
#RUN npx playwright install --with-deps       

# Copy the rest of the application code
COPY . .

# Build the ViteJS React project
RUN yarn run build-testing

# Expose port
#EXPOSE 3000

#RUN npm install serve -g

# Command to run the application
#CMD ["yarn","run","serve"]
CMD ["yarn","run","preview"]
