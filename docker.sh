#!/bin/bash

# Function to display help
show_help() {
    echo "HELO Luxury Air Docker Helper Script"
    echo ""
    echo "Usage:"
    echo "  ./docker.sh [command]"
    echo ""
    echo "Commands:"
    echo "  dev       - Run development environment with hot reloading"
    echo "  prod      - Build and run production environment"
    echo "  build:dev - Build development image only"
    echo "  build:prod - Build production image only"
    echo "  install   - Install dependencies inside the container"
    echo "  down      - Stop and remove containers"
    echo "  clean     - Remove all Docker containers, images, and volumes related to the app"
    echo "  help      - Show this help message"
    echo ""
}

# Check if command was provided
if [ $# -eq 0 ]; then
    show_help
    exit 1
fi

# Process commands
case "$1" in
    dev)
        echo "Starting development environment..."
        docker-compose up dev
        ;;
    prod)
        echo "Building and starting production environment..."
        docker-compose up prod
        ;;
    build:dev)
        echo "Building development image..."
        docker-compose build dev
        ;;
    build:prod)
        echo "Building production image..."
        docker-compose build prod
        ;;
    install)
        echo "Installing dependencies inside the container..."
        docker-compose run --rm dev npm install
        ;;
    down)
        echo "Stopping containers..."
        docker-compose down
        ;;
    clean)
        echo "Cleaning up Docker resources..."
        docker-compose down --rmi all --volumes --remove-orphans
        ;;
    help)
        show_help
        ;;
    *)
        echo "Unknown command: $1"
        show_help
        exit 1
        ;;
esac 