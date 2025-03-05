# Deploying HELO Luxury Air to dev.flyhelo.one/app using cPanel

This guide provides instructions for deploying the HELO Luxury Air application to the subdirectory `/app` on the domain `dev.flyhelo.one` using cPanel.

## Prerequisites

- Access to cPanel on your hosting server
- Node.js installed on your local development machine (v16 recommended for best compatibility)
- Git repository with the HELO Luxury Air application code

## Dependency Setup

Before building the application, ensure you have the correct dependencies installed:

```bash
# Install the correct version of react-router-dom
npm uninstall react-router-dom react-router
npm install react-router-dom@6.22.3
```

This step is crucial as the application requires a specific version of react-router-dom to build correctly.

## Building the Application

1. Navigate to the project directory:
   ```bash
   cd path/to/helo-luxury-air
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set the NODE_OPTIONS environment variable to fix OpenSSL issues with newer Node versions:
   ```bash
   # On Mac/Linux
   export NODE_OPTIONS=--openssl-legacy-provider
   
   # On Windows
   set NODE_OPTIONS=--openssl-legacy-provider
   ```

4. Build the application:
   ```bash
   npm run build
   ```

   This will create a `build` directory with the production-ready files.

## Automated Deployment Script

For convenience, you can use the provided deployment script:

```bash
# Make the script executable (Mac/Linux)
chmod +x deploy-cpanel.sh

# Run the script
./deploy-cpanel.sh
```

For Windows users:
```bash
# Run the batch file
deploy-cpanel.bat
```

The script will:
- Set the necessary Node.js options
- Install dependencies
- Build the application
- Create a `cpanel-deploy` directory with all the necessary files
- Include the `.htaccess` file for proper routing

## Manual Configuration (if not using the script)

### Configure for Subdirectory Deployment

1. Add the `homepage` property to your `package.json`:
   ```json
   {
     "name": "helo-luxury-air",
     "version": "0.1.0",
     "homepage": "/app",
     // ... other properties
   }
   ```

2. Create a `.htaccess` file in the `public` directory with the following content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /app
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /app/index.html [L]
   </IfModule>
   ```

## Uploading to cPanel

1. Log in to your cPanel account.

2. Navigate to the File Manager.

3. Go to the public_html directory (or the document root of your domain).

4. Create a new directory named `app` if it doesn't already exist.

5. Upload the contents of the `cpanel-deploy` directory (or the `build` directory if you built manually) to the `app` directory.

   You can do this by:
   - Using the File Manager's upload feature
   - Using an FTP client like FileZilla
   - Using the cPanel's File Manager to extract a zip file containing the build files

## Testing the Deployment

1. Visit `https://dev.flyhelo.one/app` in your browser.

2. Verify that the application loads correctly and all routes work as expected.

3. Test navigation to different pages to ensure the routing is working properly.

## Troubleshooting

### OpenSSL Error During Build

If you encounter an error related to OpenSSL during the build process:

```
Error: error:0308010C:digital envelope routines::unsupported
```

This is due to Node.js v17+ using a newer version of OpenSSL that is incompatible with the webpack version used by Create React App.

Solutions:

1. Set the NODE_OPTIONS environment variable before building:
   ```bash
   # On Mac/Linux
   export NODE_OPTIONS=--openssl-legacy-provider
   
   # On Windows
   set NODE_OPTIONS=--openssl-legacy-provider
   ```

2. Use the provided deployment scripts which already include this setting.

3. Downgrade to Node.js v16, which is compatible with the default webpack configuration.

### React Router Dependency Issues

If you encounter errors related to react-router or react-router-dom during the build:

```
Cannot find module: 'react-router/dom'. Make sure this package is installed.
```

Fix by installing the correct version:

```bash
npm uninstall react-router-dom react-router
npm install react-router-dom@6.22.3
```

### TypeScript Version Mismatch

If you see warnings about TypeScript version compatibility:

```
WARNING: You are currently running a version of TypeScript which is not officially supported by typescript-estree.
```

This warning can usually be ignored as long as the build completes successfully.

### 404 Errors When Navigating

If you can load the main page but get 404 errors when navigating to other routes:

1. Verify that the `.htaccess` file is properly uploaded to the `app` directory.
2. Check that the RewriteBase in the `.htaccess` file is set to `/app`.
3. Ensure that mod_rewrite is enabled on your server.

## Additional Resources

- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [React Router Documentation](https://reactrouter.com/en/main) 