@echo off
echo Starting deployment process for cPanel...

REM Check if we're in the correct directory
if not exist package.json (
  echo Error: package.json not found!
  echo Make sure you're running this script from the helo-luxury-air directory.
  exit /b 1
)

REM Set Node.js options to fix OpenSSL issues with newer Node versions
echo Setting Node.js options for compatibility...
set NODE_OPTIONS=--openssl-legacy-provider

REM Install dependencies
echo Installing dependencies...
call npm install

REM Build the application
echo Building the application...
call npm run build

REM Check if build was successful
if not exist build (
  echo Error: Build failed! The 'build' directory was not created.
  exit /b 1
)

REM Create a deployment directory
echo Creating deployment directory...
if not exist cpanel-deploy mkdir cpanel-deploy

REM Copy build files to deployment directory
echo Copying build files...
xcopy /E /Y build\* cpanel-deploy\

REM Ensure .htaccess is included
echo Ensuring .htaccess is included...
if exist public\.htaccess (
  copy public\.htaccess cpanel-deploy\
) else (
  echo ^<IfModule mod_rewrite.c^> > cpanel-deploy\.htaccess
  echo   RewriteEngine On >> cpanel-deploy\.htaccess
  echo   RewriteBase /app >> cpanel-deploy\.htaccess
  echo   RewriteRule ^index\.html$ - [L] >> cpanel-deploy\.htaccess
  echo   RewriteCond %%{REQUEST_FILENAME} !-f >> cpanel-deploy\.htaccess
  echo   RewriteCond %%{REQUEST_FILENAME} !-d >> cpanel-deploy\.htaccess
  echo   RewriteCond %%{REQUEST_FILENAME} !-l >> cpanel-deploy\.htaccess
  echo   RewriteRule . /app/index.html [L] >> cpanel-deploy\.htaccess
  echo ^</IfModule^> >> cpanel-deploy\.htaccess
)

echo Deployment preparation complete!
echo Files are ready in the 'cpanel-deploy' directory.
echo Upload these files to the 'app' directory in your cPanel.

pause 