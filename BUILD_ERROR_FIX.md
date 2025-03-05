# Fixing the OpenSSL Build Error

If you're encountering the following error when trying to build the application:

```
Error: error:0308010C:digital envelope routines::unsupported
```

This is because you're using Node.js v17 or higher, which has changed the default OpenSSL implementation. This change is incompatible with older versions of React Scripts.

## Solution 1: Set OpenSSL Legacy Provider

### For Mac/Linux:

```bash
# Set the environment variable
export NODE_OPTIONS=--openssl-legacy-provider

# Then run the build
npm run build
```

### For Windows:

```cmd
# Set the environment variable
set NODE_OPTIONS=--openssl-legacy-provider

# Then run the build
npm run build
```

## Solution 2: Use the Deployment Scripts

We've provided deployment scripts that automatically set the required environment variables:

- For Mac/Linux: `./deploy-cpanel.sh`
- For Windows: `deploy-cpanel.bat`

Make sure to make the shell script executable first:

```bash
chmod +x deploy-cpanel.sh
```

## Solution 3: Downgrade Node.js

If the above solutions don't work, you can downgrade to Node.js v16, which doesn't have this issue:

### Using NVM (Node Version Manager):

```bash
# Install NVM if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Install and use Node.js v16
nvm install 16
nvm use 16

# Then run the build
npm run build
```

## Solution 4: Update React Scripts

Alternatively, you can update to a newer version of React Scripts that's compatible with the newer Node.js versions:

```bash
npm install react-scripts@5.0.1 --save
```

Then try building again:

```bash
npm run build
```

## TypeScript Version Warning

If you also see warnings about TypeScript version compatibility, you can either:

1. Ignore them if the build completes successfully
2. Install the specific TypeScript version that's compatible with your React Scripts version
3. Update React Scripts to a newer version that supports your TypeScript version 