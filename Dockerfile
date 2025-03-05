# Use Node.js as the base image for building
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV REACT_APP_API_URL=https://api.heloluxuryair.com

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install && \
    npm cache clean --force

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Use nginx to serve the static files with a non-root user
FROM nginx:alpine

# Install security packages
RUN apk add --no-cache \
    openssl \
    curl \
    ca-certificates \
    tzdata

# Create a non-root user to own the files and run our server
RUN adduser -D -u 1000 appuser && \
    mkdir -p /var/cache/nginx /var/run && \
    chown -R appuser:appuser /var/cache/nginx /var/run && \
    chmod -R 755 /var/cache/nginx /var/run

# Copy the build output to replace the default nginx contents
COPY --from=build --chown=appuser:appuser /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY --chown=appuser:appuser nginx.conf /etc/nginx/conf.d/default.conf

# Copy CSS files directly
COPY --from=build --chown=appuser:appuser /app/public/styles.css /usr/share/nginx/html/
COPY --from=build --chown=appuser:appuser /app/public/custom.css /usr/share/nginx/html/

# Set proper permissions
RUN chown -R appuser:appuser /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    # Remove unnecessary files that could contain sensitive information
    find /usr/share/nginx/html -type f -name "*.map" -delete

# Configure nginx to run with reduced privileges
RUN echo 'worker_processes auto;' > /etc/nginx/nginx.conf && \
    echo 'pid /tmp/nginx.pid;' >> /etc/nginx/nginx.conf && \
    echo 'events { worker_connections 1024; }' >> /etc/nginx/nginx.conf && \
    echo 'http { include /etc/nginx/conf.d/*.conf; server_tokens off; }' >> /etc/nginx/nginx.conf

# Create a health check endpoint
RUN echo "OK" > /usr/share/nginx/html/health.txt && \
    chown appuser:appuser /usr/share/nginx/html/health.txt

# Expose port 80
EXPOSE 80

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health.txt || exit 1

# Switch to non-root user
USER appuser

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 