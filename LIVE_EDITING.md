# Connecting Cursor to Your Dev Site for Live Updates

This guide explains how to set up your development environment to make live updates to your cPanel-hosted application at dev.flyhelo.one/app.

## Method 1: Using Cursor's Remote Development Feature

Cursor has a built-in Remote Development feature that allows you to connect directly to your server.

### Step 1: Set Up SSH Access to Your cPanel Server

1. Check if your cPanel hosting supports SSH access
2. Generate an SSH key pair if you don't already have one:
   ```bash
   ssh-keygen -t rsa -b 4096
   ```
3. Upload your public key to cPanel:
   - Log in to cPanel
   - Navigate to "SSH Access" or "SSH/Shell Access"
   - Add your public key

### Step 2: Connect Cursor to Your Remote Server

1. In Cursor, click on the Remote Development icon in the sidebar
2. Click "Connect to Host..."
3. Enter your SSH connection details:
   ```
   ssh username@your-cpanel-host.com
   ```
4. Select the directory where your application is deployed (/public_html/app)

### Step 3: Make Live Edits

Once connected, you can:
1. Browse and edit files directly on the server
2. Use Cursor's features like AI assistance while working on remote files
3. Changes are saved directly to the server

### Step 4: Using Cursor's Terminal for Remote Commands

Cursor provides an integrated terminal that connects to your remote server:

1. Open the terminal in Cursor (View > Terminal or use the keyboard shortcut)
2. The terminal will automatically connect to your remote server
3. Run commands directly on the server:
   ```bash
   # Restart services if needed
   sudo systemctl restart apache2
   
   # Check logs
   tail -f /var/log/apache2/error.log
   
   # Fix permissions if needed
   chmod -R 755 /public_html/app
   ```

4. You can also run build commands directly on the server if needed

## Method 2: Setting Up a Mirrored Development Environment

This method creates a local environment that closely mirrors your production setup.

### Step 1: Configure Local Environment Variables

Create a `.env.development` file in your project root:

```
REACT_APP_API_URL=https://dev.flyhelo.one/api
REACT_APP_BASE_PATH=/app
```

### Step 2: Update package.json Scripts

Modify your start script to use the correct base path:

```json
"scripts": {
  "start": "PUBLIC_URL=/app react-scripts start",
  "build": "react-scripts build",
  // ... other scripts
}
```

### Step 3: Set Up Local Development Server

1. Install the `serve` package:
   ```bash
   npm install -g serve
   ```

2. Create a development script in your project root:
   ```bash
   # dev-server.sh
   npm run build
   serve -s build -l 3000
   ```

3. Make it executable:
   ```bash
   chmod +x dev-server.sh
   ```

### Step 4: Develop in Cursor

1. Run your development server:
   ```bash
   ./dev-server.sh
   ```

2. Make changes in Cursor
3. Rebuild and restart the server to see changes
4. When ready, deploy to cPanel using the deployment script

## Method 3: Local Development with Proxy Configuration

This method allows you to develop locally while pointing API requests to your dev server.

### Step 1: Configure Proxy in package.json

Add a proxy configuration to your package.json file:

```json
{
  "name": "helo-luxury-air",
  "version": "0.1.0",
  "private": true,
  "homepage": "/app",
  "proxy": "https://dev.flyhelo.one",
  // ... rest of your package.json
}
```

### Step 2: Run the Development Server

```bash
npm start
```

This will start a local development server, typically at http://localhost:3000, that will proxy API requests to your dev site.

### Step 3: Make Changes in Cursor

1. Edit your files in Cursor
2. Save the changes
3. The local development server will automatically reload with your changes
4. Test your changes locally

### Step 4: Deploy Changes to cPanel

Once you're satisfied with your changes:

```bash
./deploy-cpanel.sh  # or deploy-cpanel.bat on Windows
```

Then upload the updated files to your cPanel server.

## Method 4: Direct FTP Integration with Cursor

For more direct editing of files on the server:

### Step 1: Install an FTP Extension for Cursor

If Cursor supports VSCode extensions, you can install an FTP extension like "SFTP" by liximomo.

### Step 2: Configure the FTP Connection

Create a `.vscode/sftp.json` file in your project:

```json
{
    "name": "Dev Server",
    "host": "your-cpanel-host.com",
    "protocol": "ftp",
    "port": 21,
    "username": "your-cpanel-username",
    "password": "your-cpanel-password",
    "remotePath": "/public_html/app",
    "uploadOnSave": true,
    "ignore": [
        ".vscode",
        ".git",
        "node_modules",
        "build",
        "cpanel-deploy"
    ]
}
```

Replace the host, username, password, and remotePath with your actual cPanel credentials.

### Step 3: Edit and Save

With this configuration, when you save a file in Cursor, it will automatically be uploaded to your cPanel server.

## Method 5: Git-Based Workflow with Automated Deployment

Set up a Git-based workflow with automated deployment to your cPanel server.

### Step 1: Set Up a Git Repository

If you haven't already, initialize a Git repository for your project and push it to GitHub or another Git hosting service.

### Step 2: Configure cPanel Git Version Deployment

1. Log in to cPanel
2. Navigate to "Git Version Control"
3. Click "Create" to set up a new repository
4. Configure the repository to pull from your GitHub repository
5. Set the deployment path to your app directory

### Step 3: Develop in Cursor and Push Changes

1. Make changes in Cursor
2. Commit your changes to Git
3. Push to your remote repository
4. cPanel will automatically pull and deploy the changes

## Method 6: Using cPanel's File Manager Code Editor

For quick fixes directly on the server:

1. Log in to cPanel
2. Navigate to File Manager
3. Browse to your app directory
4. Right-click on a file and select "Edit"
5. Make your changes and save

## Best Practices for Live Editing

1. **Always back up your files before making changes** to the live site
2. **Test changes locally first** whenever possible
3. **Use version control** to track changes and enable rollbacks if needed
4. **Consider setting up a staging environment** separate from your production environment
5. **Document your changes** to maintain a clear history of modifications

## Troubleshooting

### Changes Not Appearing on the Site

1. **Clear your browser cache** - Press Ctrl+F5 or Cmd+Shift+R
2. **Check file permissions** - Files should be readable by the web server
3. **Verify file paths** - Ensure files are uploaded to the correct location
4. **Check for JavaScript errors** in the browser console

### FTP Connection Issues

1. **Verify credentials** - Double-check username, password, and server details
2. **Check firewall settings** - Ensure your firewall allows FTP connections
3. **Try a different FTP client** if the extension isn't working

## Need More Help?

Contact your hosting provider or development team for specific assistance with your cPanel configuration.

## Conclusion and Recommendations

After reviewing all the methods for connecting Cursor to your dev site, here are our recommendations based on different scenarios:

### For Quick Fixes and Small Changes

**Recommended Method**: Method 1 (Cursor's Remote Development Feature)

This approach provides the most direct way to make quick changes to your live site. With SSH access properly configured, you can edit files directly on the server while still leveraging Cursor's AI assistance and other features.

### For Larger Development Work

**Recommended Method**: Method 2 (Mirrored Development Environment) or Method 3 (Local Development with Proxy)

These approaches allow you to develop locally with a proper development workflow while ensuring your environment closely matches the production setup. This is safer for larger changes as you can test thoroughly before deploying.

### For Team Collaboration

**Recommended Method**: Method 5 (Git-Based Workflow)

This provides the best approach for team environments, ensuring changes are tracked, reviewed, and deployed consistently. It also provides rollback capabilities if issues arise.

### For Beginners

**Recommended Method**: Method 6 (cPanel's File Manager)

If you're new to web development or uncomfortable with command-line tools, using cPanel's built-in file editor is the simplest approach, though it lacks the advanced features of the other methods.

Remember that regardless of which method you choose, always back up your files before making changes to a live site, and consider setting up a staging environment for testing changes before applying them to production. 