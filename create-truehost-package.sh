#!/bin/bash

# Rambo The Electrician - TrueHost Deployment Package Creator
# This script creates a ready-to-upload package for TrueHost hosting

echo "🚀 Creating TrueHost deployment package for Rambo The Electrician..."

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' directory not found. Please run 'npm run netlify' first."
    exit 1
fi

# Create deployment package directory
PACKAGE_DIR="truehost-deployment-package"
rm -rf "$PACKAGE_DIR"
mkdir -p "$PACKAGE_DIR"

echo "📦 Copying website files..."

# Copy all files from out directory
cp -r out/* "$PACKAGE_DIR/"

# Create additional helpful files
echo "📝 Creating deployment documentation..."

# Create a simple README for the package
cat > "$PACKAGE_DIR/README.txt" << 'EOF'
RAMBO THE ELECTRICIAN - TRUEHOST DEPLOYMENT PACKAGE
==================================================

This package contains all the files needed to deploy the Rambo The Electrician website to TrueHost hosting.

UPLOAD INSTRUCTIONS:
1. Login to your TrueHost cPanel
2. Go to File Manager
3. Navigate to public_html folder
4. Upload ALL files from this package to public_html
5. Make sure index.html is in the root of public_html

IMPORTANT FILES:
- index.html: Main homepage
- .htaccess: Server configuration (improves performance and SEO)
- robots.txt: SEO robots file
- sitemap.xml: SEO sitemap
- favicon.ico: Website icon

FOLDERS:
- about/: About page
- services/: Services page  
- contact/: Contact page
- _next/: Website assets (CSS, JavaScript, etc.)

CONTACT INFORMATION:
- Primary Phone: 073 035 2691
- Email: roynyasango@gmail.com
- WhatsApp: Available via floating button on website

For detailed deployment instructions, see TRUEHOST_DEPLOYMENT.md in the main project folder.

Website Features:
✅ Fully responsive design
✅ SEO optimized
✅ WhatsApp integration
✅ Phone number integration
✅ Fast loading static files
✅ Professional design

Support: srakama@gmail.com
EOF

# Create a file list for verification
echo "📋 Creating file list..."
find "$PACKAGE_DIR" -type f | sort > "$PACKAGE_DIR/FILE_LIST.txt"

# Create a simple upload checklist
cat > "$PACKAGE_DIR/UPLOAD_CHECKLIST.txt" << 'EOF'
TRUEHOST UPLOAD CHECKLIST
=========================

Before Upload:
□ TrueHost hosting account is active
□ Domain is pointed to TrueHost nameservers
□ FTP/cPanel credentials are available

Upload Process:
□ Login to TrueHost cPanel
□ Navigate to File Manager
□ Open public_html folder
□ Upload ALL files from this package
□ Verify index.html is in public_html root
□ Check that _next folder uploaded completely
□ Verify all .svg image files uploaded

After Upload:
□ Visit your website URL
□ Test all pages: /, /about, /services, /contact
□ Test WhatsApp button functionality
□ Test phone number links
□ Check website loads properly on mobile
□ Verify SSL certificate is working (https://)

SEO Setup:
□ Submit sitemap.xml to Google Search Console
□ Verify robots.txt is accessible
□ Check website in Google PageSpeed Insights

Troubleshooting:
□ If 404 errors: Check file permissions (644 for files, 755 for folders)
□ If images don't load: Verify all .svg files uploaded
□ If styling broken: Check _next folder uploaded completely
□ If WhatsApp doesn't work: Test on mobile device

Contact for Support: srakama@gmail.com
EOF

# Calculate package size
PACKAGE_SIZE=$(du -sh "$PACKAGE_DIR" | cut -f1)

echo "✅ TrueHost deployment package created successfully!"
echo ""
echo "📊 Package Details:"
echo "   📁 Location: $PACKAGE_DIR/"
echo "   📏 Size: $PACKAGE_SIZE"
echo "   📄 Files: $(find "$PACKAGE_DIR" -type f | wc -l) files"
echo ""
echo "📋 Package Contents:"
echo "   • Website files (HTML, CSS, JS, Images)"
echo "   • .htaccess for performance optimization"
echo "   • robots.txt and sitemap.xml for SEO"
echo "   • README.txt with upload instructions"
echo "   • UPLOAD_CHECKLIST.txt for deployment verification"
echo "   • FILE_LIST.txt for file verification"
echo ""
echo "🚀 Next Steps:"
echo "   1. Zip the '$PACKAGE_DIR' folder"
echo "   2. Upload to TrueHost via cPanel File Manager"
echo "   3. Extract in public_html folder"
echo "   4. Follow the UPLOAD_CHECKLIST.txt"
echo ""
echo "📖 For detailed instructions, see TRUEHOST_DEPLOYMENT.md"
echo ""
echo "✨ Your website is ready for TrueHost deployment!"
EOF
