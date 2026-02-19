# Deploying Skylogix to Production

Since I don't have direct access to your GitHub or Vercel account credentials, please follow these steps to deploy your site live.

## Step 1: Push to GitHub

1.  **Create a New Repository** on GitHub (e.g., named `skylogix`). Do **not** initialize it with a README, .gitignore, or License (we already have them).
2.  **Run these commands** in your terminal to push the code:

```bash
# Add the remote repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/skylogix.git

# Push the code
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** > **"Project"**.
3.  Import the `skylogix` repository you just pushed.
4.  **Framework Preset**: Select `Next.js`.
5.  **Build Command**: `next build` (should be default).
6.  Click **"Deploy"**.

## Alternative: Vercel CLI

If you have the Vercel CLI installed and logged in, you can simply run:

```bash
npx vercel
```
Follow the prompts to deploy directly from your terminal.

## Verification
Once deployed, Vercel will give you a live URL (e.g., `skylogix.vercel.app`).
Verify that the dark theme and fonts are working correctly on the live site.
