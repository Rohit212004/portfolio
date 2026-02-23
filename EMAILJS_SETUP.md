# EmailJS Setup Guide

Your portfolio contact form is now configured to use EmailJS. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free - 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** > **API Keys**
2. **Copy your Public Key** (e.g., `abcdefghij123456`)

## Step 5: Update Your Portfolio Code

Open `js/script.js` and find the `EMAILJS_CONFIG` section (around line 220):

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',  // Replace with your Public Key
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',  // Replace with your Service ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE' // Replace with your Template ID
};
```

Replace the placeholder values with your actual EmailJS credentials:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abcdefghij123456',     // Your actual Public Key
    SERVICE_ID: 'service_abc123',        // Your actual Service ID
    TEMPLATE_ID: 'template_xyz789'       // Your actual Template ID
};
```

## Step 6: Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Step 7: Test the Form

1. Save all your changes
2. Open your portfolio website
3. Fill out the contact form
4. Submit it
5. Check your email - you should receive the message!

## Troubleshooting

### Form not sending?
- Check browser console (F12) for error messages
- Verify all three IDs are correctly copied
- Make sure your EmailJS service is active
- Check if you've exceeded the free tier limit (200/month)

### Not receiving emails?
- Check your spam folder
- Verify email service is properly connected in EmailJS
- Test the template directly in EmailJS dashboard

### Common Errors

**"Public key is required"**
- You forgot to call `emailjs.init()` or didn't set the PUBLIC_KEY

**"Service not found"**
- Your SERVICE_ID is incorrect

**"Template not found"**
- Your TEMPLATE_ID is incorrect

## Free Tier Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Community support

For more emails, consider upgrading to a paid plan.

## Security Note

Your Public Key, Service ID, and Template ID are safe to include in client-side code. EmailJS is designed to be used this way. However, never expose your Private Key (if you have one).

## Alternative: Environment Variables (Advanced)

If deploying to platforms like Netlify or Vercel, you can use environment variables:

1. Create a `.env` file (add to .gitignore)
2. Store your keys there
3. Access them in your build process

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
