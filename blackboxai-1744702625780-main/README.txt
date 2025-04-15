GitHub Pages Deployment Instructions
==================================

This Next.js application is configured for GitHub Pages deployment. Follow these steps to get your site up and running:

1. Repository Setup
------------------
a. Create a new repository on GitHub named: blackboxai-174470262578
b. Upload all files from this package to your repository:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/blackboxai-174470262578.git
   git push -u origin main

2. GitHub Pages Configuration
----------------------------
a. Go to your repository's Settings tab
b. Navigate to "Pages" in the left sidebar
c. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - This will automatically use the workflow file in .github/workflows/deploy.yml

3. Initial Deployment
--------------------
- The first deployment will start automatically after pushing to the main branch
- You can monitor the deployment progress in the "Actions" tab of your repository
- Once complete, your site will be available at:
  https://YOUR-USERNAME.github.io/blackboxai-174470262578/

4. Local Development
-------------------
To run the project locally:
a. Install dependencies:
   npm install

b. Start development server:
   npm run dev

c. Build for production:
   npm run build

5. Troubleshooting
-----------------
- If images don't load, verify they use relative paths or the basePath prefix
- For 404 errors, ensure all links include the base path '/blackboxai-174470262578'
- Check the Actions tab for any deployment errors
- Verify that the repository name exactly matches 'blackboxai-174470262578'

Note: The site uses static export configuration optimized for GitHub Pages. All routes and assets are pre-rendered during build time.
