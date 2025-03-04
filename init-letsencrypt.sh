#!/bin/bash

# Replace these variables with your domain and email
domains=(dev.flyhelo.one)
email="your-email@example.com" # Adding a valid email is recommended
staging=0 # Set to 1 if you're testing your setup to avoid hitting request limits

# Create required directories
mkdir -p ./nginx/certbot/conf ./nginx/certbot/www

# Create dummy certificates for the first run
if [ ! -e "./nginx/certbot/conf/live/$domains" ]; then
  echo "Creating dummy certificate for $domains..."
  mkdir -p "./nginx/certbot/conf/live/$domains"
  openssl req -x509 -nodes -newkey rsa:4096 -days 1 \
    -keyout "./nginx/certbot/conf/live/$domains/privkey.pem" \
    -out "./nginx/certbot/conf/live/$domains/fullchain.pem" \
    -subj "/CN=localhost"
fi

echo "Starting nginx..."
docker-compose -f docker-compose.prod.yml up --force-recreate -d nginx

echo "Deleting dummy certificate for $domains..."
docker-compose -f docker-compose.prod.yml run --rm --entrypoint "\
  rm -Rf /etc/letsencrypt/live/$domains && \
  rm -Rf /etc/letsencrypt/archive/$domains && \
  rm -Rf /etc/letsencrypt/renewal/$domains.conf" certbot

echo "Requesting Let's Encrypt certificate for $domains..."
# Join domains to -d args
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Select appropriate email arg
case "$email" in
  "") email_arg="--register-unsafely-without-email" ;;
  *) email_arg="--email $email" ;;
esac

# Enable staging mode if needed
if [ $staging != "0" ]; then staging_arg="--staging"; fi

docker-compose -f docker-compose.prod.yml run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size 4096 \
    --agree-tos \
    --force-renewal" certbot

echo "Reloading nginx..."
docker-compose -f docker-compose.prod.yml exec nginx nginx -s reload

# Start all services
echo "Starting all services..."
docker-compose -f docker-compose.prod.yml up -d 