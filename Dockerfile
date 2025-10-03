FROM node:20-alpine

WORKDIR /src

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 4321

# Start the application
CMD ["npm", "run", "start"]