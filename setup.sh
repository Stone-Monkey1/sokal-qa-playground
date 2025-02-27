#!/bin/bash

# Exit on any error
set -e

echo "Setting up Angular Project..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Install Angular CLI locally if not already installed
if [ ! -d "node_modules/@angular/cli" ]; then
    echo "Installing Angular CLI locally..."
    npm install @angular/cli --save-dev
fi

# Verify Angular CLI installation
npx ng version

echo "Setup complete. You can now run the project using:"
echo "npx ng serve"
