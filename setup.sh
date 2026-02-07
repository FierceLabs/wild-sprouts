#!/bin/bash

echo "🌱 Wild Sprouts Homestead School - Setup Script"
echo "================================================"
echo ""

# Create public/images directory if it doesn't exist
echo "📁 Creating public/images directory..."
mkdir -p public/images

# Copy images from src/images to public/images
echo "🖼️  Copying images to public directory..."
if [ -d "src/images" ]; then
    cp -r src/images/* public/images/ 2>/dev/null
    echo "✅ Images copied successfully!"
else
    echo "⚠️  src/images directory not found. You may need to add images manually."
fi

# Check if wild-sprouts-logo.png exists in public
if [ ! -f "public/wild-sprouts-logo.png" ]; then
    echo "⚠️  wild-sprouts-logo.png not found in public directory"
    echo "   Please ensure the logo is at public/wild-sprouts-logo.png"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✨ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""

