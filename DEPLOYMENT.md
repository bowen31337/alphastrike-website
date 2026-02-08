# Deployment Setup

This project is deployed to Cloudflare Pages via GitHub Actions.

## How It Works

1. Push to `main` → production build (`pnpm run build:prod`) → deployed to production
2. Push to `dev` → dev build (`pnpm run build`) → deployed as preview
3. GitHub Actions workflow: `.github/workflows/cloudflare-deploy.yml`
4. Production URL: https://alphastrike-website.pages.dev/

## GitHub Secrets Required

```bash
gh secret list
```

You should see:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Setting Secrets

1. **Create API Token:** https://dash.cloudflare.com/profile/api-tokens
   - Use the "Edit Cloudflare Workers" template or create a custom token with Pages permissions
2. **Set secrets:**
   ```bash
   gh secret set CLOUDFLARE_API_TOKEN --body "your-token-here"
   gh secret set CLOUDFLARE_ACCOUNT_ID --body "your-account-id"
   ```

## Project Information

- **GitHub Repo:** https://github.com/bowen31337/alphastrike-website
- **Cloudflare Pages Project:** alphastrike-website
- **Production URL:** https://alphastrike-website.pages.dev/
- **Preview URL pattern:** https://dev.alphastrike-website.pages.dev/

## SPA Routing

`public/_redirects` contains a catch-all rule (`/* /index.html 200`) so that BrowserRouter paths work correctly on Cloudflare Pages.
