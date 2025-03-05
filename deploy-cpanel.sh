#!/bin/bash

# Deployment script for cPanel

echo "Starting deployment process for cPanel..."

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found!"
  echo "Make sure you're running this script from the helo-luxury-air directory."
  exit 1
fi

# Set Node.js options to fix OpenSSL issues with newer Node versions
echo "Setting Node.js options for compatibility..."
export NODE_OPTIONS=--openssl-legacy-provider

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the application
echo "Building the application..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
  echo "Error: Build failed! The 'build' directory was not created."
  exit 1
fi

# Create a deployment directory
echo "Creating deployment directory..."
mkdir -p cpanel-deploy

# Copy build files to deployment directory
echo "Copying build files..."
cp -r build/* cpanel-deploy/

# Ensure .htaccess is included
echo "Ensuring .htaccess is included..."
if [ -f "public/.htaccess" ]; then
  cp public/.htaccess cpanel-deploy/
else
  echo "<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /app
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /app/index.html [L]
</IfModule>" > cpanel-deploy/.htaccess
fi

echo "Deployment preparation complete!"
echo "Files are ready in the 'cpanel-deploy' directory."
echo "Upload these files to the 'app' directory in your cPanel." 