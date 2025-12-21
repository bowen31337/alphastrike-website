#!/bin/bash

# Script to set VERCEL_TOKEN in GitHub secrets
# Usage: ./scripts/set-vercel-token.sh <your-vercel-token>

if [ -z "$1" ]; then
    echo "Usage: ./scripts/set-vercel-token.sh <your-vercel-token>"
    echo ""
    echo "To get your Vercel token:"
    echo "1. Visit https://vercel.com/account/tokens"
    echo "2. Click 'Create Token'"
    echo "3. Give it a name (e.g., 'GitHub Actions')"
    echo "4. Copy the token and run this script"
    exit 1
fi

gh secret set VERCEL_TOKEN --body "$1"
echo "✅ VERCEL_TOKEN has been set in GitHub secrets"

