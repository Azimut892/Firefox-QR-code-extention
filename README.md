# URL to QR Browser Extension

A lightweight browser extension that instantly generates QR codes from the current page URL, making it easy to share web pages with mobile devices or other users.

## ✨ Features

- **Instant QR Generation**: Automatically generates QR code for the current tab's URL
- **Cross-Browser Support**: Compatible with Chrome, Firefox, and other Chromium-based browsers
- **Simple Interface**: Clean, minimal popup interface (128x128px QR code)
- **Privacy-Focused**: Only accesses the active tab, no data collection
- **Lightweight**: Minimal resource usage with fast QR generation
- **No Account Required**: Works offline, no registration needed

## 🛠️ Technology Stack

- **Manifest Version**: 3 (latest Chrome extension format)
- **QR Library**: QRCode.js for reliable QR code generation
- **Browser APIs**: Web Extensions API (Chrome/Firefox compatible)
- **Languages**: HTML5, Vanilla JavaScript, CSS3

## 📋 Prerequisites

- Modern web browser (Chrome 88+, Firefox 109+, Edge 88+, or other Chromium-based browsers)
- Developer mode enabled for loading unpacked extensions (for development)

## 🔧 Installation

### Method 1: Load as Unpacked Extension (Development)

#### For Chrome/Chromium browsers:
1. Download or clone the extension files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" toggle in the top right corner
4. Click "Load unpacked" button
5. Select the folder containing the extension files
6. The "URL to QR" extension should now appear in your browser toolbar

#### For Firefox:
1. Download or clone the extension files
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on" button
5. Navigate to the extension folder and select `manifest.json`
6. The extension will be loaded temporarily (until browser restart)

### Method 2: Install from Store (When Available)
*Extension store publication pending*

## 🎯 Usage

1. **Navigate to any webpage** you want to share
2. **Click the extension icon** in your browser toolbar (URL to QR icon)
3. **A popup will appear** with a QR code of the current page URL
4. **Scan the QR code** with your mobile device camera or QR scanner app
5. **Access the page** instantly on your mobile device

### Use Cases
- Share articles or websites with mobile devices
- Quickly transfer URLs between devices
- Share links in presentations or meetings
- Offline URL sharing without typing long URLs

## 📁 File Structure

```
url-to-qr-extension/
├── manifest.json          # Extension configuration and permissions
├── popup.html            # Extension popup interface
├── popup.js              # Popup functionality and QR generation
├── qrcode.min.js         # QR code generation library (minified)
├── qrcodecore.js         # Core QR functionality and content script
├── icon19.png            # Toolbar icon (19x19px)
├── icon38.png            # Toolbar icon (38x38px)
└── icon48.png            # Extension management icon (48x48px)
```

## 🔧 Technical Details

### Permissions
- **`activeTab`**: Only permission required - allows access to the current active tab's URL
- **No persistent permissions**: Extension doesn't run in background or access other tabs

### Extension Manifest
```json
{
  "manifest_version": 3,
  "name": "URL to QR",
  "version": "2.0",
  "permissions": ["activeTab"]
}
```

### QR Code Specifications
- **Size**: 128x128 pixels
- **Format**: PNG image embedded in HTML
- **Error Correction**: Medium level (default QRCode.js setting)
- **Encoding**: UTF-8 compatible for international URLs

### Browser Compatibility
- **Chrome**: Version 88+ (Manifest V3 support)
- **Firefox**: Version 109+ (Manifest V3 support)
- **Edge**: Version 88+ (Chromium-based)
- **Opera**: Version 74+ (Chromium-based)
- **Safari**: Not currently supported (different extension format)

## 🛠️ Development

### Local Development Setup
1. Clone or download the repository
2. Make your changes to the extension files
3. Load the extension in developer mode (see installation instructions)
4. Test changes by reloading the extension in browser settings

### Testing
- Test on multiple browsers if possible
- Verify QR codes work with various URL formats (HTTP, HTTPS, query parameters, etc.)
- Test with very long URLs to ensure QR code remains readable
- Verify popup appears correctly and QR code renders properly

### Code Structure
- **`popup.js`**: Handles browser API calls and QR code generation
- **`qrcodecore.js`**: Content script for any additional functionality
- **`popup.html`**: Minimal HTML structure for the popup interface

## 🔄 Version History

### Version 2.0 (Current)
- Updated to Manifest V3
- Improved cross-browser compatibility
- Enhanced QR code generation

### Version 1.x
- Initial release with basic QR generation functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test across multiple browsers
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Keep the extension lightweight and fast
- Maintain minimal permissions for security
- Test on both Chrome and Firefox
- Follow web extension best practices
- Ensure QR codes remain readable at 128x128 size

## 🐛 Troubleshooting

### QR Code Not Appearing
- Check if the extension has permission to access the current tab
- Try refreshing the page and clicking the extension again
- Verify the extension is properly loaded in browser settings

### Extension Not Working on Certain Sites
- Some sites may block content scripts
- HTTPS sites may have additional security restrictions
- Try on a different website to verify functionality

### Browser Compatibility Issues
- Ensure your browser supports Manifest V3
- Update your browser to the latest version
- Check browser console for any error messages

## 🔒 Privacy Policy

This extension:
- Only accesses the URL of the active tab when you click the extension icon
- Does not collect, store, or transmit any personal data
- Does not track browsing history or user behavior
- Operates entirely locally within your browser
- Does not communicate with external servers

---

**Made with ❤️ for easy URL sharing**
