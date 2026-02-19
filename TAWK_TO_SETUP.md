# Tawk.to Setup Guide for Skylogix Technologies

Follow these steps to set up your free live chat widget and integrate it with your website.

## 1. Create a Free Account
1.  Go to [tawk.to](https://www.tawk.to/) and click **"Sign Up Free"**.
2.  Enter your name, email, and password.
3.  Follow the onboarding wizard:
    -   **Language**: Select English.
    -   **Site Name**: Enter "Skylogix Technologies".
    -   **Site URL**: Enter your Vercel URL (e.g., `https://skylogix.vercel.app`) or domain.
    -   **Team Members**: (Optional) Add your team emails or skip for now.

## 2. Get Your Property & Widget IDs
You need two IDs to connect the widget to your Next.js app.

1.  Log in to your [Tawk.to Dashboard](https://dashboard.tawk.to/).
2.  Go to **Administration** (Gear icon ⚙️ in the left sidebar).
3.  Select **Chat Widget** from the "Channels" list.
4.  Look at the **"Direct Chat Link"**. It will look like this:
    `https://tawk.to/chat/PROPERTY_ID/WIDGET_ID`
    
    *Example:* `https://tawk.to/chat/65a123bc/1hk5678`
    
    -   **Property ID**: The long string after `chat/` (e.g., `65a123bc`)
    -   **Widget ID**: The short string after the next slash (e.g., `1hk5678`) - typically "default" or a random string.

5.  **Save these IDs!** You will add them to your project's environment variables.

## 3. Configure Widget Appearance (Critical)
To match the Skylogix brand, configure the colors in the dashboard:

1.  In **Administration** > **Chat Widget**, scroll down to **"Widget Appearance"**.
2.  **Color**:
    -   set **Theme Color** (Widget Button & Headers) to: `#4F8EF7` (Skylogix Blue).
    -   set **Text Color** to: `#FFFFFF` (White).
3.  **Advanced - Custom Colors** (if needed):
    -   Header Background: `#0A0F2C` (Skylogix Navy).
    -   Agent Message Background: `#4F8EF7`.
    -   Visitor Message Background: `#E0E7FF`.
4.  **Save** your changes.

## 4. Widget Position & Mobile Visibility
1.  In **Administration** > **Chat Widget** > **Widget Appearance**:
2.  **Desktop Widget Position**: Select **Bottom Left** (to avoid overlapping with WhatsApp on the right).
3.  **Mobile Widget Settings**:
    -   **Hide on Mobile**: **Turn ON** (Toggle to Green).
    -   *Why?* Mobile screens are small, and we already have a dedicated WhatsApp button for mobile users.

## 5. Set Up Auto-Greeting (Triggers)
Make the chat feel alive by welcoming visitors automatically.

1.  Go to **Administration** > **Triggers** (Left Sidebar).
2.  Click **"Add Trigger"**.
3.  **Trigger Name**: "Welcome Greeting".
4.  **Trigger Type**: "Page Notification".
5.  **Conditions**:
    -   **Run Trigger**: "Yes".
    -   **Delay**: 10 seconds (or 30s).
    -   **Visit Time**: "Greater than 10s".
6.  **Action**:
    -   **Send Message**: "Hi! Welcome to Skylogix Technologies. How can we help you today?"
    -   **Agent Name**: "Skylogix Support".
7.  **Save**.

## 6. Configure Offline Form
When you are not online, let users leave a message.

1.  Go to **Administration** > **Chat Widget**.
2.  Scroll to **"Offline Behavior"**.
3.  Ensure "Show offline form" is **ON**.
4.  **Form Header**: "We are currently offline".
5.  **Message**: "Please leave a message and we'll get back to you shortly."
6.  **Fields**: Name, Email, Message (Required).
7.  **Save**.

---

### Integration Steps (Already handled in code)
I have created a `TawkToChat` component in your project. Once you have your IDs:
1.  Open `.env.local`.
2.  Add:
    ```bash
    NEXT_PUBLIC_TAWK_PROPERTY_ID="your_property_id"
    NEXT_PUBLIC_TAWK_WIDGET_ID="your_widget_id"
    ```
3.  Redeploy your site.
