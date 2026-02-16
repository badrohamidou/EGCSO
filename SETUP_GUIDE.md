# Complete Setup Guide - EGCSO Events

## Step-by-Step Configuration

### Part 1: Google Cloud Setup (5-10 minutes)

#### 1.1 Create Google Cloud Project
1. Visit https://console.cloud.google.com/
2. Click "Select a Project" → "New Project"
3. Name it "EGCSO Events" (or your choice)
4. Click "Create"

#### 1.2 Enable Calendar API
1. In the Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google Calendar API"
3. Click on it, then click "Enable"
4. Wait for activation (usually instant)

#### 1.3 Create API Key
1. Go to "APIs & Services" → "Credentials"
2. Click "+ CREATE CREDENTIALS" → "API Key"
3. Your API key appears - **COPY IT IMMEDIATELY**
4. Click "Edit API key" to restrict it

#### 1.4 Restrict API Key (IMPORTANT for security)
1. Under "API restrictions":
   - Select "Restrict key"
   - Check only "Google Calendar API"
   
2. Under "Website restrictions":
   - Select "HTTP referrers"
   - Click "Add an item"
   - Add: `http://localhost:*/*` (for local testing)
   - Add: `https://yourdomain.com/*` (for production)
   
3. Click "Save"

### Part 2: Google Calendar Setup (2 minutes)

#### 2.1 Make Calendar Public
1. Open https://calendar.google.com/
2. Find the calendar you want to share (left sidebar)
3. Click the three dots (⋮) next to the calendar name
4. Select "Settings and sharing"

#### 2.2 Configure Public Access
1. Scroll to "Access permissions for events"
2. Check ✓ "Make available to public"
3. Warning appears - click "OK" to confirm

#### 2.3 Get Calendar ID
1. Still in Settings, scroll to "Integrate calendar"
2. Find "Calendar ID" (looks like: yourname@gmail.com or xxxxx@group.calendar.google.com)
3. Copy this ID

### Part 3: Configure Application (1 minute)

#### 3.1 Update app.js
Open `app.js` in a text editor and find this section (around line 2-7):

```javascript
const CONFIG = {
    API_KEY: 'AIzaSyBGH-YOUR-ACTUAL-KEY-HERE',  // ← REPLACE THIS
    CALENDAR_ID: 'badrobigboss3@gmail.com',      // ← REPLACE THIS
    MAX_RESULTS: 250,
    CACHE_DURATION: 5 * 60 * 1000,
};
```

Replace:
- `API_KEY`: Paste your Google API key from Part 1.3
- `CALENDAR_ID`: Paste your Calendar ID from Part 2.3

Example after editing:
```javascript
const CONFIG = {
    API_KEY: 'AIzaSyBGH-abc123XYZ-your-actual-key',
    CALENDAR_ID: 'youremail@gmail.com',
    MAX_RESULTS: 250,
    CACHE_DURATION: 5 * 60 * 1000,
};
```

Save the file.

### Part 4: Test Locally (1 minute)

#### Option A: Simple File Open
1. Double-click `index.html`
2. It should open in your browser
3. You should see your calendar events load

#### Option B: Local Server (Recommended)
If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: http://localhost:8000

If you have Node.js installed:
```bash
npx http-server
```

### Part 5: Deploy to Production

#### Option A: Netlify (Easiest - Drag & Drop)

1. **Create Account**
   - Go to https://netlify.com
   - Sign up (free)

2. **Deploy**
   - Click "Add new site" → "Deploy manually"
   - Drag your entire project folder
   - Wait 30 seconds
   - Your site is live!

3. **Get Your URL**
   - Netlify gives you a URL like: `https://your-site-name.netlify.app`
   - Add this to your API key restrictions in Google Cloud Console

#### Option B: Vercel (CLI)

1. **Install Vercel**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd your-project-folder
   vercel
   ```

3. **Follow prompts**
   - Login/signup
   - Confirm settings
   - Get your live URL

#### Option C: GitHub Pages (Free)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name it "egcso-events"
   - Create repository

2. **Upload Files**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/egcso-events.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in sidebar
   - Under "Source", select "main" branch
   - Click Save
   - Your site: `https://yourusername.github.io/egcso-events/`

#### Option D: Any Web Host
Simply upload these files via FTP:
- index.html
- styles.css
- app.js

No special server configuration needed!

## Advanced Configuration

### Adjust Event Date Range

In `app.js`, find the `getEvents()` method:

```javascript
// Default: 6 months past, 1 year future
const timeMin = new Date();
timeMin.setMonth(timeMin.getMonth() - 6);  // ← Change -6

const timeMax = new Date();
timeMax.setFullYear(timeMax.getFullYear() + 1);  // ← Change +1
```

### Change Cache Duration

```javascript
const CONFIG = {
    // 5 minutes = 5 * 60 * 1000
    // 1 hour = 60 * 60 * 1000
    // 1 day = 24 * 60 * 60 * 1000
    CACHE_DURATION: 5 * 60 * 1000,
};
```

### Increase Event Limit

```javascript
const CONFIG = {
    MAX_RESULTS: 250,  // Max is 2500
};
```

### Customize Branding

In `index.html`, find:
```html
<h1 class="logo">EGCSO Events</h1>
<p class="tagline">Your Community Calendar</p>
```

Change to your organization name and tagline.

## Troubleshooting

### Problem: "Failed to load calendar"

**Check 1: API Key**
- Open browser console (F12)
- Look for error message
- Common: "API key not valid" = wrong key

**Check 2: API Restrictions**
- Go to Google Cloud Console
- Check API key restrictions match your domain
- For local testing, ensure `http://localhost:*/*` is allowed

**Check 3: Calendar Permissions**
- Verify calendar is public
- Try accessing: `https://calendar.google.com/calendar/u/0?cid=YOUR_CALENDAR_ID`
- Should show your calendar publicly

### Problem: "No events showing"

**Check 1: Date Range**
- Events must be within 6 months past to 1 year future
- Create a test event for tomorrow to verify

**Check 2: Filters**
- Click "Filters" button
- Click "Clear All"
- Try again

**Check 3: Calendar Has Events**
- Log into Google Calendar
- Verify events exist
- Check they're not on a different calendar

### Problem: "API quota exceeded"

Free tier = 1,000,000 requests/day (very generous)

If exceeded:
- Wait 24 hours (quota resets)
- Increase cache duration
- Check for infinite loops in code

### Problem: Slow loading

**Solution 1: Reduce date range**
```javascript
timeMin.setMonth(timeMin.getMonth() - 3);  // Less data
```

**Solution 2: Reduce max results**
```javascript
MAX_RESULTS: 100,  // Fewer events
```

**Solution 3: Increase cache**
```javascript
CACHE_DURATION: 15 * 60 * 1000,  // 15 minutes
```

## Production Checklist

Before going live:

- [ ] API key configured and restricted to production domain
- [ ] Calendar is set to public
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Custom branding updated
- [ ] README updated with your info
- [ ] Error messages are user-friendly
- [ ] Analytics added (optional)

## Security Best Practices

1. **Always restrict your API key** to specific domains
2. **Never commit** your API key to public repositories
3. **Use environment variables** for sensitive data in production
4. **Monitor API usage** in Google Cloud Console
5. **Rotate API keys** periodically (every 6-12 months)

## Performance Tips

1. **Cache aggressively** - Calendar events don't change often
2. **Minimize API calls** - Use cached data when possible
3. **Optimize images** - This app uses none (pure CSS)
4. **Enable compression** - Let Netlify/Vercel handle this
5. **Use CDN** - Deployment platforms provide this automatically

## Need Help?

1. Check browser console (F12) for errors
2. Review this guide step-by-step
3. Verify Google Calendar API is enabled
4. Test with a fresh browser session (incognito)
5. Check API key restrictions match your domain

---

**You're ready to go! 🚀**
