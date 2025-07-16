# TrueHost Deployment Guide for Rambo The Electrician Website

## Overview
This guide will help you deploy the Rambo The Electrician website to TrueHost hosting service. The website has been built as a static site that can be uploaded directly to any web hosting provider.

## Prerequisites
- TrueHost hosting account
- FTP/SFTP client (FileZilla, WinSCP, or similar)
- The built website files (located in the `out` folder)

## Step 1: Prepare the Website Files

The website has already been built and exported to static HTML files. All files are located in the `out` directory:

```
out/
├── index.html          # Home page
├── about/              # About page
├── services/           # Services page
├── contact/            # Contact page
├── _next/              # Next.js assets (CSS, JS)
├── *.svg               # Image files
├── favicon.ico         # Website icon
├── robots.txt          # SEO robots file
└── sitemap.xml         # SEO sitemap
```

## Step 2: Upload to TrueHost

### Option A: Using cPanel File Manager

1. **Login to cPanel:**
   - Go to your TrueHost cPanel dashboard
   - Navigate to "File Manager"

2. **Navigate to public_html:**
   - Open the `public_html` folder (this is your website's root directory)

3. **Upload Files:**
   - Select all files from the `out` folder
   - Upload them to the `public_html` directory
   - Make sure `index.html` is in the root of `public_html`

### Option B: Using FTP/SFTP

1. **Get FTP Credentials:**
   - From your TrueHost account, get your FTP details:
     - FTP Server: Usually your domain name or provided by TrueHost
     - Username: Your hosting username
     - Password: Your hosting password
     - Port: 21 (FTP) or 22 (SFTP)

2. **Connect via FTP Client:**
   - Open FileZilla or your preferred FTP client
   - Connect using the credentials above

3. **Upload Files:**
   - Navigate to the `public_html` folder on the server
   - Upload all contents from the `out` folder to `public_html`

## Step 3: Configure Domain and SSL

1. **Domain Setup:**
   - Ensure your domain is pointed to TrueHost nameservers
   - Wait for DNS propagation (up to 24 hours)

2. **SSL Certificate:**
   - In cPanel, go to "SSL/TLS"
   - Enable "Let's Encrypt" free SSL certificate
   - Force HTTPS redirects

## Step 4: Verify Deployment

1. **Test the Website:**
   - Visit your domain: `https://yourdomain.com`
   - Check all pages work: `/about`, `/services`, `/contact`
   - Test the WhatsApp button functionality
   - Verify phone number links work

2. **SEO Verification:**
   - Check sitemap: `https://yourdomain.com/sitemap.xml`
   - Check robots.txt: `https://yourdomain.com/robots.txt`

## Step 5: Update Domain References

After deployment, you may need to update some references:

1. **Update Metadata (Optional):**
   - If you want to change the domain references in the code
   - Edit the domain in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts`
   - Rebuild and re-upload

## File Structure on TrueHost

Your `public_html` should look like this after upload:

```
public_html/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── contact/
│   └── index.html
├── _next/
│   ├── static/
│   └── ...
├── *.svg (all image files)
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

## Troubleshooting

### Common Issues:

1. **404 Errors:**
   - Ensure `index.html` is in the root of `public_html`
   - Check file permissions (should be 644 for files, 755 for folders)

2. **Images Not Loading:**
   - Verify all SVG files are uploaded
   - Check file paths are correct

3. **CSS/JS Not Loading:**
   - Ensure the `_next` folder is uploaded completely
   - Check file permissions

4. **WhatsApp Button Not Working:**
   - This should work as it uses standard web links
   - Test on mobile devices

### Performance Optimization:

1. **Enable Gzip Compression:**
   - In cPanel, enable Gzip compression for better loading speeds

2. **Browser Caching:**
   - Add caching rules in `.htaccess` if supported

## Maintenance

1. **Content Updates:**
   - To update content, modify the source files
   - Run `npm run netlify` to rebuild
   - Upload the new `out` folder contents

2. **SEO Monitoring:**
   - Submit sitemap to Google Search Console
   - Monitor website performance

## Support

For TrueHost-specific issues:
- Contact TrueHost support
- Check TrueHost documentation
- Use TrueHost knowledge base

For website functionality issues:
- Check the main README.md file
- Review the deployment logs

## Security Notes

- Keep your TrueHost login credentials secure
- Regularly update your hosting account password
- Monitor your website for any unauthorized changes
- Enable two-factor authentication if available

## Backup

- Always keep a backup of your website files
- TrueHost may provide backup services
- Consider automated backup solutions
