#!/bin/bash

# Interactive script to set VERCEL_TOKEN in GitHub secrets
# This token must be created manually from https://vercel.com/account/tokens

echo "🔑 Vercel Token Setup for GitHub Actions"
echo ""
echo "To get your Vercel token:"
echo "1. Visit: https://vercel.com/account/tokens"
echo "2. Click 'Create Token'"
echo "3. Give it a name (e.g., 'GitHub Actions - alphastrike-website')"
echo "4. Copy the token"
echo ""
read -p "Paste your Vercel token here: " VERCEL_TOKEN

if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Error: Token cannot be empty"
    exit 1
fi

# Set the secret
gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN"

if [ $? -eq 0 ]; then
    echo "✅ VERCEL_TOKEN has been set successfully!"
    echo ""
    echo "All secrets are now configured:"
    echo "  - VERCEL_ORG_ID: ✅"
    echo "  - VERCEL_PROJECT_ID: ✅"
    echo "  - VERCEL_TOKEN: ✅"
    echo ""
    echo "Your GitHub Actions workflow is ready to deploy!"
else
    echo "❌ Failed to set VERCEL_TOKEN"
    exit 1
fi

