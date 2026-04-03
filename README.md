# ⬡ Command Deck — Work Dashboard

Your personal work dashboard PWA. Shows Outlook emails, today's calendar, and lets you manage follow-ups — all in one place on your Android tablet.

---

## 🚀 Setup Guide (one-time, ~15 minutes)

### Step 1 — Push this repo to GitHub

1. Go to [github.com](https://github.com) and create a new repo called **`work-dashboard`**
2. Upload all these files:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `README.md`

### Step 2 — Enable GitHub Pages

1. In your repo, click **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch, folder **/ (root)**
4. Click **Save**
5. Wait ~2 minutes — your URL will be:  
   👉 `https://mzs-byte.github.io/work-dashboard/`

---

### Step 3 — Register your app in Azure (get your Client ID)

This is what lets the dashboard read your Outlook and calendar.

1. Go to [portal.azure.com](https://portal.azure.com) — sign in with your **work Microsoft account**
2. Search for **"App registrations"** in the top search bar
3. Click **+ New registration**
4. Fill in:
   - **Name:** `Work Dashboard`
   - **Supported account types:** *Accounts in any organizational directory and personal Microsoft accounts*
   - **Redirect URI:** select **Single-page application (SPA)** and enter:  
     `https://mzs-byte.github.io/work-dashboard/`
5. Click **Register**
6. On the next screen, copy your **Application (client) ID** — it looks like:  
   `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

### Step 4 — Add API Permissions

Still in your app registration:

1. Click **API permissions** in the left sidebar
2. Click **+ Add a permission** → **Microsoft Graph** → **Delegated permissions**
3. Search and add these permissions:
   - `User.Read`
   - `Mail.Read`
   - `Calendars.Read`
4. Click **Add permissions**
5. Click **Grant admin consent** (if you're an admin) — or ask your IT team

### Step 5 — Add your Client ID to the app

1. Open `index.html` in any text editor (Notepad is fine)
2. Find this line near the top of the `<script>` section:
   ```javascript
   clientId: "YOUR_CLIENT_ID_HERE",
   ```
3. Replace `YOUR_CLIENT_ID_HERE` with the ID you copied in Step 3:
   ```javascript
   clientId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
   ```
4. Save the file and re-upload it to GitHub (replace the old one)

---

### Step 6 — Install on your Android Tablet

1. Open **Chrome** on your Android tablet
2. Go to: `https://mzs-byte.github.io/work-dashboard/`
3. Tap the **three dots menu** (top right)
4. Tap **"Add to Home screen"**
5. Tap **Add**

The app will now appear on your home screen like a native app — full screen, no browser bars! 🎉

---

## ✅ Features

| Feature | Details |
|---|---|
| 📬 Email Digest | Last 25 emails, unread highlighted, tap to read |
| 📅 Today's Meetings | All calendar events for today, colour-coded by urgency |
| ✅ Follow-ups | Add reminders by typing or straight from an email |
| 🔄 Auto-sync | Refreshes every 5 minutes automatically |
| 📱 PWA | Installs on Android tablet, works like a native app |

---

## 🔄 Updating the App

To change anything, just edit `index.html` and re-upload it to GitHub. The app will update automatically within a minute.

---

## ❓ Troubleshooting

**"Setup Required" banner shows up**  
→ You haven't replaced `YOUR_CLIENT_ID_HERE` in index.html yet. See Step 5.

**Sign-in popup is blocked**  
→ Allow popups for `mzs-byte.github.io` in Chrome settings.

**"Could not load emails" error**  
→ Check that `Mail.Read` permission was added and consented in Azure (Step 4).

**App not updating after changes**  
→ In Chrome, go to Settings → Site Settings → find your site → Clear storage.
