# Deployment Instructions for Rambo The Electrician Website

## Prerequisites

- Node.js 18+ installed
- Git installed
- Vercel account (recommended) or other hosting platform

## Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd rambo-electrician
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:3000`

## Deployment to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: rambo-electrician
   - Directory: ./
   - Override settings: No

### Option 2: Deploy via Vercel Dashboard

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: Leave empty (Next.js default)

3. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete

## Environment Variables

If you need to add environment variables:

1. **Create `.env.local` file:**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   GOOGLE_VERIFICATION_CODE=your-google-verification-code
   ```

2. **Add to Vercel:**
   - Go to your project dashboard
   - Navigate to Settings > Environment Variables
   - Add your variables

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project
   - Navigate to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update metadata:**
   - Update the `url` in `src/app/layout.tsx`
   - Update the `baseUrl` in `src/app/sitemap.ts`
   - Update the `sitemap` URL in `src/app/robots.ts`

## Performance Optimization

The website includes several optimizations:

- **Image Optimization:** Next.js Image component with WebP/AVIF support
- **SEO Optimization:** Meta tags, structured data, sitemap
- **Loading States:** Loading spinners for better UX
- **Compression:** Gzip compression enabled
- **Caching:** Optimized caching headers

## SEO Configuration

1. **Google Search Console:**
   - Add your site to Google Search Console
   - Submit your sitemap: `https://your-domain.com/sitemap.xml`
   - Update the verification code in metadata

2. **Analytics (Optional):**
   - Add Google Analytics tracking code
   - Add Facebook Pixel if needed

## Monitoring and Maintenance

1. **Check deployment status:**
   ```bash
   vercel ls
   ```

2. **View logs:**
   ```bash
   vercel logs
   ```

3. **Update deployment:**
   - Push changes to your repository
   - Vercel will automatically redeploy

## Troubleshooting

### Common Issues:

1. **Build Errors:**
   - Check Node.js version (18+)
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

2. **Image Loading Issues:**
   - Ensure images are in the `public` folder
   - Check image paths are correct
   - Verify image formats are supported

3. **SEO Issues:**
   - Validate structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Check sitemap: `https://your-domain.com/sitemap.xml`
   - Verify robots.txt: `https://your-domain.com/robots.txt`

## Support

For deployment issues:
- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Contact support through the Vercel dashboard
- Check the project's GitHub issues

## Security Considerations

- Keep dependencies updated: `npm audit`
- Use HTTPS (automatic with Vercel)
- Implement proper CSP headers if needed
- Regular security scans
