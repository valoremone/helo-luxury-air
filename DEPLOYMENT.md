# Deployment Guide for dev.flyhelo.one

This guide explains how to deploy the HELO Luxury Air application to the dev.flyhelo.one subdomain.

## Prerequisites

- A server with Docker and Docker Compose installed
- Domain name (flyhelo.one) with DNS configured to point the subdomain (dev.flyhelo.one) to your server's IP address
- Port 80 and 443 open on your server's firewall

## DNS Configuration

Before deploying, ensure that you have set up the following DNS record:

```
Type: A
Name: dev
Value: <Your Server IP Address>
TTL: 3600 (or as preferred)
```

## Deployment Steps

1. Clone the repository to your server:

```bash
git clone <repository-url>
cd helo-luxury-air
```

2. Update the email address in the `init-letsencrypt.sh` script:

```bash
# Open the file
nano init-letsencrypt.sh

# Update the email variable with your email address
email="your-actual-email@example.com"

# Save and exit
```

3. Make the initialization script executable:

```bash
chmod +x init-letsencrypt.sh
```

4. Run the initialization script to set up SSL certificates:

```bash
./init-letsencrypt.sh
```

This script will:
- Create necessary directories
- Generate dummy SSL certificates
- Start Nginx
- Request real SSL certificates from Let's Encrypt
- Reload Nginx with the new certificates
- Start all services

5. Verify the deployment:

Open your browser and navigate to https://dev.flyhelo.one. You should see the HELO Luxury Air application running with a valid SSL certificate.

## Maintenance

### Updating the Application

To update the application with new changes:

```bash
# Pull the latest changes
git pull

# Rebuild and restart the containers
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d
```

### SSL Certificate Renewal

SSL certificates from Let's Encrypt are valid for 90 days. The Certbot container is configured to automatically attempt renewal every 12 hours when certificates are close to expiration.

### Checking Logs

To check logs for troubleshooting:

```bash
# App logs
docker-compose -f docker-compose.prod.yml logs app

# Nginx logs
docker-compose -f docker-compose.prod.yml logs nginx

# Certbot logs
docker-compose -f docker-compose.prod.yml logs certbot
```

## Troubleshooting

### SSL Certificate Issues

If you encounter SSL certificate issues:

1. Verify that your DNS is correctly configured
2. Check that ports 80 and 443 are open on your server
3. Review the Certbot logs for specific errors:

```bash
docker-compose -f docker-compose.prod.yml logs certbot
```

### Application Not Loading

If the application is not loading:

1. Check if all containers are running:

```bash
docker-compose -f docker-compose.prod.yml ps
```

2. Check the app logs for errors:

```bash
docker-compose -f docker-compose.prod.yml logs app
```

3. Verify Nginx configuration:

```bash
docker-compose -f docker-compose.prod.yml exec nginx nginx -t
``` 