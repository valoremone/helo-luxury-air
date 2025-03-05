#!/bin/bash

# Create directory structure if it doesn't exist
mkdir -p public/assets/images/fleet
mkdir -p public/assets/images/facilities
mkdir -p public/assets/images/experiences
mkdir -p public/assets/images/logos
mkdir -p public/assets/images/hero

# Hero images
echo "Downloading hero images..."
curl -o public/assets/images/hero/hero-helicopter.jpg "https://images.unsplash.com/photo-1607453949789-d7123427628b?q=80&w=2000&auto=format&fit=crop"
curl -o public/assets/images/hero/fleet-hero.jpg "https://images.unsplash.com/photo-1608322368730-d31bd8371d3f?q=80&w=2000&auto=format&fit=crop"
curl -o public/assets/images/hero/infrastructure-hero.jpg "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?q=80&w=2000&auto=format&fit=crop"
curl -o public/assets/images/hero/membership-hero.jpg "https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=2000&auto=format&fit=crop"

# Fleet images - Agusta Helicopters
echo "Downloading fleet images..."
curl -o public/assets/images/fleet/agusta-1.jpg "https://images.unsplash.com/photo-1608322368730-d31bd8371d3f?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/fleet/agusta-2.jpg "https://images.unsplash.com/photo-1586829773636-bfa64ccd7685?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/fleet/agusta-3.jpg "https://images.unsplash.com/photo-1544001709-e37b9a21a09a?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/fleet/maintenance.jpg "https://images.unsplash.com/photo-1565043943095-9b6c9e1c4991?q=80&w=1200&auto=format&fit=crop"

# Facilities images
echo "Downloading facilities images..."
curl -o public/assets/images/facilities/miami-marine-stadium.jpg "https://images.unsplash.com/photo-1578679742888-9ef519f590bf?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/facilities/member-lounge.jpg "https://images.unsplash.com/photo-1623718649591-311775a30c43?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/facilities/hangar.jpg "https://images.unsplash.com/photo-1568589085101-ebd4f98f6236?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/facilities/escalade.jpg "https://images.unsplash.com/photo-1614026480418-bd11fdb9fa06?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/facilities/feature-x-hangar-detail.jpg "https://images.unsplash.com/photo-1553293559-de8c3e4aee45?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/facilities/vertical-integration.jpg "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/facilities/helo-model.jpg "https://images.unsplash.com/photo-1655310398998-419b6f9079ab?q=80&w=1200&auto=format&fit=crop"

# Experiences images
echo "Downloading experiences images..."
curl -o public/assets/images/experiences/f1-experience.jpg "https://images.unsplash.com/photo-1541086095944-f4c9088a191b?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/experiences/ultra-experience.jpg "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/experiences/private-gala.jpg "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop"
curl -o public/assets/images/experiences/authorized-users.jpg "https://images.unsplash.com/photo-1534385842125-8c9ad0bd123c?q=80&w=1200&auto=format&fit=crop"

# Testimonials
echo "Downloading testimonial images..."
curl -o public/assets/images/experiences/testimonial-1.jpg "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop"
curl -o public/assets/images/experiences/testimonial-2.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
curl -o public/assets/images/experiences/testimonial-3.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"

# Club logos (placeholder URLs - in a real scenario you'd use actual club logos)
echo "Downloading club logos..."
curl -o public/assets/images/logos/concours-club-logo.png "https://via.placeholder.com/200x80?text=Concours+Club"
curl -o public/assets/images/logos/soho-house-logo.png "https://via.placeholder.com/200x80?text=SoHo+House"
curl -o public/assets/images/logos/breakers-logo.png "https://via.placeholder.com/200x80?text=The+Breakers"
curl -o public/assets/images/logos/fisher-island-logo.png "https://via.placeholder.com/200x80?text=Fisher+Island"

echo "All images downloaded successfully!" 