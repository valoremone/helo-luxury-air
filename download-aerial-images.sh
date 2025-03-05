#!/bin/bash

# Create directory structure if it doesn't exist
mkdir -p public/assets/images/fleet
mkdir -p public/assets/images/aerial

# Download high-quality aerial images for Miami
echo "Downloading aerial images of Miami..."

# Miami aerial images - from Unsplash
curl -L -o public/assets/images/aerial/miami-aerial-1.jpg "https://images.unsplash.com/photo-1503618745413-8cc712b1511e?w=1600&q=80"
curl -L -o public/assets/images/aerial/miami-aerial-2.jpg "https://images.unsplash.com/photo-1512864148376-ebaffea22593?w=1600&q=80"
curl -L -o public/assets/images/aerial/miami-aerial-3.jpg "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1600&q=80"
curl -L -o public/assets/images/aerial/miami-aerial-4.jpg "https://images.unsplash.com/photo-1572466673937-5ecbd5a4f837?w=1600&q=80"
curl -L -o public/assets/images/aerial/miami-aerial-5.jpg "https://images.unsplash.com/photo-1603621760159-9a1855fac258?w=1600&q=80"

# Download helicopter images
echo "Downloading helicopter images..."
curl -L -o public/assets/images/fleet/luxury-helicopter-1.jpg "https://images.unsplash.com/photo-1608322368730-d31bd8371d3f?w=1600&q=80"
curl -L -o public/assets/images/fleet/luxury-helicopter-2.jpg "https://images.unsplash.com/photo-1509929029898-91e511a99d82?w=1600&q=80"
curl -L -o public/assets/images/fleet/luxury-helicopter-3.jpg "https://images.unsplash.com/photo-1544001709-e37b9a21a09a?w=1600&q=80"
curl -L -o public/assets/images/fleet/luxury-helicopter-4.jpg "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80"

# Overwrite the missing hero images
echo "Updating hero images..."
curl -L -o public/assets/images/hero/hero-helicopter.jpg "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=1920&q=80"
curl -L -o public/assets/images/hero/fleet-hero.jpg "https://images.unsplash.com/photo-1608322368730-d31bd8371d3f?w=1920&q=80"

# Overwrite missing facility images
echo "Updating facility images..."
curl -L -o public/assets/images/facilities/hangar.jpg "https://images.unsplash.com/photo-1568589085101-ebd4f98f6236?w=1600&q=80"
curl -L -o public/assets/images/facilities/miami-marine-stadium.jpg "https://images.unsplash.com/photo-1578679742888-9ef519f590bf?w=1600&q=80"
curl -L -o public/assets/images/facilities/feature-x-hangar-detail.jpg "https://images.unsplash.com/photo-1553293559-de8c3e4aee45?w=1600&q=80"

# Overwrite missing experience images
echo "Updating experience images..."
curl -L -o public/assets/images/experiences/f1-experience.jpg "https://images.unsplash.com/photo-1541086095944-f4c9088a191b?w=1600&q=80"

echo "All aerial images downloaded successfully!" 