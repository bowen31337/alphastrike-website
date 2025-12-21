# Deployment Setup

This project is configured for automatic deployment to Vercel via GitHub Actions.

## Current Status

✅ **Completed:**
- Git repository initialized and pushed to GitHub
- GitHub Actions workflow created (`.github/workflows/vercel-deploy.yml`)
- VERCEL_ORG_ID secret set in GitHub
- VERCEL_PROJECT_ID secret set in GitHub

⏳ **Remaining Step:**
- VERCEL_TOKEN needs to be set (requires manual creation from Vercel dashboard)

## Setting Up VERCEL_TOKEN

Vercel requires tokens to be created manually from the dashboard for security reasons.

### Quick Setup (One Command)

Run this command and follow the prompts:

```bash
./scripts/setup-vercel-token.sh
```

### Manual Setup

1. **Create Token:**
   - Visit: https://vercel.com/account/tokens
   - Click "Create Token"
   - Name it: "GitHub Actions - alphastrike-website"
   - Copy the token

2. **Set Secret:**
   ```bash
   gh secret set VERCEL_TOKEN --body "your-token-here"
   ```

### Verify Setup

Check all secrets are set:
```bash
gh secret list
```

You should see:
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID  
- VERCEL_TOKEN

## How It Works

1. Push to `main` branch triggers GitHub Actions
2. Workflow builds the project using `pnpm run build`
3. Built files are deployed to Vercel production
4. Deployment URL will be available in the GitHub Actions logs

## Project Information

- **GitHub Repo:** https://github.com/bowen31337/alphastrike-website
- **Vercel Project:** alphastrike-website
- **Org ID:** team_Qeig0hX95mqWVo4VzcKAYpPk
- **Project ID:** prj_xJKqyPPoWDoBzYesTwzZUFTExEyZ

