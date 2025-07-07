#!/bin/bash

# Custom Domain Setup Script for Firebase Hosting
# Usage: ./add-custom-domain.sh [domain-name]

echo "🔥 Firebase Custom Domain Setup Helper"
echo "======================================"

if [ -z "$1" ]; then
    echo "Usage: ./add-custom-domain.sh [domain-name]"
    echo "Example: ./add-custom-domain.sh americhoice.example.com"
    exit 1
fi

DOMAIN=$1

echo "Setting up custom domain: $DOMAIN"
echo ""

echo "📋 What your friend needs to create:"
echo "Type: CNAME"
echo "Name: ${DOMAIN%%.*}"  # Gets subdomain part
echo "Value: aca-client-acq-calc.web.app"
echo "TTL: 3600"
echo ""

echo "🌐 Firebase Console Steps:"
echo "1. Go to: https://console.firebase.google.com/project/aca-client-acq-calc/hosting/main"
echo "2. Click 'Custom domains' tab"
echo "3. Click 'Add custom domain'"
echo "4. Enter: $DOMAIN"
echo "5. Follow verification steps"
echo ""

echo "⏰ Timeline:"
echo "- DNS propagation: 5-30 minutes"
echo "- SSL certificate: 24-48 hours"
echo ""

echo "🔍 Testing commands:"
echo "nslookup $DOMAIN"
echo "curl -I https://$DOMAIN"
echo ""

echo "✅ Your app will be available at: https://$DOMAIN"
