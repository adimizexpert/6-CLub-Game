# Images and Favicons Setup Guide

## Quick Setup

1. **Add your logo**: Place `logo.png` in `public/` folder
2. **Add main image**: Place `6-club-main.webp` in `public/images/` folder
3. **Add game images**: Place all game images in `public/images/` folder
4. **Add favicons**: Generate and place favicon files in `public/` folder

## Favicon Generation

You can generate all favicon sizes using online tools:

### Recommended Tools:
- **Favicon.io** (https://favicon.io/) - Generate from text/image
- **RealFaviconGenerator** (https://realfavicongenerator.net/) - Comprehensive favicon generator
- **Favicon Generator** (https://www.favicon-generator.org/)

### Required Favicon Sizes:

1. **favicon.ico** - Multi-size ICO file (16x16, 32x32, 48x48)
2. **icon-16x16.png** - 16x16 pixels
3. **icon-32x32.png** - 32x32 pixels
4. **icon-192x192.png** - 192x192 pixels (Android)
5. **icon-512x512.png** - 512x512 pixels (Android)
6. **apple-icon.png** - 180x180 pixels (iOS)
7. **mstile-150x150.png** - 150x150 pixels (Windows)
8. **safari-pinned-tab.svg** - Monochrome SVG (Safari)

### Design Guidelines for Favicons:

- Use the gold color (#EFBF04) as the primary accent
- Dark blue (#03002e) as background
- Keep design simple and recognizable at small sizes
- Consider using "6" or "6C" as the icon symbol
- Ensure good contrast for visibility

## Image Optimization

### Before Uploading:
1. **Resize images** to the recommended dimensions
2. **Compress images** using:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app/)
3. **Convert to WebP** for main images (better compression)

### Recommended Image Sizes:
- Logo: 240x80px (or maintain aspect ratio)
- Hero Image: 1200x600px
- Game Images: 800x400px
- All images should be optimized for web

## File Structure

```
public/
├── favicon.ico
├── icon-16x16.png
├── icon-32x32.png
├── icon-192x192.png
├── icon-512x512.png
├── apple-icon.png
├── mstile-150x150.png
├── safari-pinned-tab.svg
├── site.webmanifest
├── browserconfig.xml
├── logo.png
└── images/
    ├── 6-club-main.webp
    ├── K3-Lotre.png
    ├── TRXhash.png
    ├── 5d.png
    ├── 6clubcolour.png
    └── WingoGame.png
```

## Testing

After adding images:
1. Clear browser cache
2. Check favicon appears in browser tab
3. Test on mobile devices (iOS and Android)
4. Verify all images load correctly
5. Check image alt text for SEO

## SEO Considerations

- All images have descriptive alt text (already implemented)
- Images are properly sized for performance
- WebP format used for better compression
- Lazy loading implemented for better performance

