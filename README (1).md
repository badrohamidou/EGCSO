# EGCSO Events - Modern Calendar Web Application

A beautiful, modern, and responsive web application for displaying Google Calendar events with a superior user interface.

## 🌟 Features

### Core Functionality
- **Read-Only Google Calendar Integration** - Displays events from a public Google Calendar
- **Multiple Calendar Views**
  - Month View - Classic calendar grid
  - Week View - Detailed weekly schedule
  - Day View - Single day timeline
  - Agenda View - List of upcoming events
- **Smart Search & Filtering**
  - Real-time event search
  - Date range filtering
  - Multiple sort options (Nearest, Oldest, Alphabetical)
- **Event Details**
  - Full event information in modal view
  - Title, time, description, location, organizer

### User Experience
- **Modern, Editorial Design**
  - Distinctive typography (Playfair Display + Sora)
  - Clean, professional aesthetic
  - Smooth animations and transitions
- **Dark Mode** - Toggle between light and dark themes
- **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
- **Performance Optimized**
  - Client-side caching (5-minute cache)
  - Skeleton loaders
  - Offline fallback (shows last loaded events)
- **Accessibility**
  - Keyboard navigation support
  - Semantic HTML
  - ARIA labels

## 🚀 Quick Start

### 1. Prerequisites
- A Google Cloud Project with Calendar API enabled
- A Google Calendar API key
- A public Google Calendar

### 2. Get Your Google Calendar API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Calendar API**
   - Go to "APIs & Services" → "Library"
   - Search for "Google Calendar API"
   - Click "Enable"
4. Create credentials
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key
5. Restrict your API key (recommended)
   - Click on your API key
   - Under "API restrictions", select "Restrict key"
   - Select "Google Calendar API"
   - Under "Website restrictions", add your domain

### 3. Make Your Calendar Public

1. Open Google Calendar
2. Click the three dots next to your calendar
3. Select "Settings and sharing"
4. Under "Access permissions", check "Make available to public"
5. Copy your Calendar ID (found in "Integrate calendar" section)

### 4. Configure the Application

Open `app.js` and update the configuration:

```javascript
const CONFIG = {
    API_KEY: 'YOUR-ACTUAL-API-KEY-HERE',
    CALENDAR_ID: 'your-calendar-id@gmail.com',
    MAX_RESULTS: 250,
    CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
};
```

### 5. Deploy

#### Option A: Local Development
Simply open `index.html` in your browser.

#### Option B: Deploy to Netlify
1. Create a free [Netlify](https://netlify.com) account
2. Drag and drop your project folder
3. Your site is live!

#### Option C: Deploy to Vercel
1. Create a free [Vercel](https://vercel.com) account
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory

#### Option D: Deploy to GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select your branch and save

## 📁 Project Structure

```
egcso-events/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with dark mode
├── app.js             # Application logic and Google Calendar integration
└── README.md          # Documentation (this file)
```

## 🎨 Design Philosophy

This application follows a **refined editorial aesthetic**:

- **Typography**: Distinctive font pairing (Playfair Display serif + Sora sans-serif)
- **Color System**: Sophisticated earth tones with teal accent
- **Spacing**: Generous whitespace with consistent rhythm
- **Motion**: Smooth, purposeful animations
- **Layout**: Clean, asymmetric compositions

### Theme Colors

**Light Theme**
- Background: Off-white (#FAFAF9)
- Primary Text: Stone (#1C1917)
- Accent: Teal (#0F766E)

**Dark Theme**
- Background: Deep charcoal (#0C0A09)
- Primary Text: Off-white (#FAFAF9)
- Accent: Bright teal (#14B8A6)

## 🔧 Customization

### Change Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --color-accent: #0F766E;  /* Change accent color */
    --color-bg-primary: #FAFAF9;  /* Change background */
}
```

### Change Fonts
Update the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update CSS variables:

```css
:root {
    --font-display: 'Your Display Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

### Adjust Cache Duration
In `app.js`, modify:

```javascript
CACHE_DURATION: 5 * 60 * 1000, // milliseconds
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security & Privacy

- **No Authentication Required** - Uses public calendar access only
- **Client-Side Only** - No backend, no database
- **Local Caching** - Events cached in browser's localStorage
- **API Key Security** - Recommend restricting API key to your domain

### Important Security Notes

1. **Restrict Your API Key**: Always add domain restrictions in Google Cloud Console
2. **Public Calendar Only**: This app is designed for public calendars only
3. **No Sensitive Data**: Don't use this for private or sensitive calendar data

## 🚀 Performance

- **Fast Initial Load**: ~2-3 seconds on average connection
- **Caching**: Events cached for 5 minutes to reduce API calls
- **Optimized Rendering**: Efficient DOM updates
- **Lazy Loading**: Only renders visible content
- **Responsive Images**: No images by default (pure CSS design)

## 🔮 Future Enhancements

The codebase is structured to support future additions:

- PWA conversion (add manifest.json + service worker)
- Mobile app wrapper (using Capacitor or similar)
- Backend integration (for authentication, user preferences)
- Additional calendar providers (Outlook, iCal)
- Advanced filtering (tags, categories)
- Export functionality (iCal, CSV)
- Email notifications
- Social sharing

## 🐛 Troubleshooting

### Calendar not loading
1. Check your API key is correct
2. Verify Calendar API is enabled in Google Cloud Console
3. Ensure calendar is set to public
4. Check browser console for errors

### Events not showing
1. Verify calendar has events in the date range (6 months past to 1 year future)
2. Check date range filters aren't too restrictive
3. Clear browser cache and localStorage

### API Quota Exceeded
- Free tier: 1,000,000 requests/day
- Caching helps minimize requests
- Consider implementing longer cache duration

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Typography: [Google Fonts](https://fonts.google.com/)
- Icons: Inline SVG (no external dependencies)
- Design: Custom editorial design system

## 💬 Support

For issues or questions:
1. Check this README
2. Review the code comments
3. Check browser console for errors
4. Verify Google Calendar API setup

---

**Built with ❤️ for the EGCSO community**
