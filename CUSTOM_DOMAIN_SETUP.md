# Custom Domain Setup Guide for Agent Onboarding Application

## Quick Summary for Your Friend

**CNAME Target**: `aca-client-acq-calc.web.app`

Your friend should create a CNAME record like this:
- **Type**: CNAME
- **Name**: `americhoice` (or any subdomain they prefer)
- **Value**: `aca-client-acq-calc.web.app`
- **TTL**: 3600 (1 hour) or their preference

**Result**: `americhoice.theirdomain.com` will point to your Agent Onboarding app.

---

## Complete Setup Instructions

### Step 1: Firebase Console Setup (You need to do this)

1. Go to: https://console.firebase.google.com/project/aca-client-acq-calc/hosting/main
2. Click on "Custom domains" tab
3. Click "Add custom domain"
4. Enter the domain your friend will use (e.g., `americhoice.example.com`)
5. Follow Firebase's verification steps

### Step 2: For Wildcard Support

To support multiple subdomains automatically:

1. In Firebase Console, add domain as: `*.yourdomain.com`
2. Firebase will provide verification instructions
3. This allows any subdomain to work automatically

### Step 3: DNS Configuration (Your friend does this)

**Required CNAME Record:**
```
Type: CNAME
Name: americhoice
Value: aca-client-acq-calc.web.app
TTL: 3600
```

**If Firebase requires verification (they'll tell you):**
```
Type: TXT
Name: @ (or root domain)
Value: [Firebase will provide this]
TTL: 3600
```

### Step 4: SSL Certificate

- Firebase automatically provisions SSL certificates
- Takes 24-48 hours after domain verification
- Your site will be available at `https://americhoice.theirdomain.com`

---

## Current Configuration

Your Firebase hosting now includes:
- ✅ Enhanced headers for better compatibility
- ✅ CORS support for cross-origin requests
- ✅ Proper rewrites for SPA functionality
- ✅ Security headers

**Live URL**: https://aca-client-acq-calc.web.app

---

## Troubleshooting

**If "Site not found" error occurs:**
1. Ensure the custom domain is added in Firebase Console
2. Check DNS propagation (use tools like whatsmydns.net)
3. Wait for SSL certificate provisioning

**For multiple domains:**
- Add each domain separately in Firebase Console
- Or use wildcard domain (*.example.com) for automatic subdomain support

**Testing:**
- Use `nslookup americhoice.theirdomain.com` to verify DNS
- Check `https://americhoice.theirdomain.com` after 24-48 hours
