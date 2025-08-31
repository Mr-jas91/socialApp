# 📱 Social Media Manager

A full-stack social media management app built with **Next.js**, **Supabase (PostgreSQL)**, and **Prisma ORM**.  
This app allows users to connect their social accounts (Facebook, Instagram, WhatsApp, etc.), manage posts, DMs, and get analytics.

---

## 🚀 Features

- 🔑 User authentication (Register & Login) with Supabase  
- 📊 Analytics Dashboard (Posts, Engagement, Followers)  
- 📰 Create, edit, and schedule social media posts  
- 💬 Manage Direct Messages (DMs) in one place  
- ⚙️ Connect/Disconnect multiple accounts  
- 📱 Mobile-friendly responsive design (Topbar + Sidebar layout)  

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, shadcn/ui  
- **Backend**: Next.js API Routes, Prisma ORM  
- **Database**: Supabase (PostgreSQL)  
- **Deployment**: (Vercel / Railway / Gitpod / Codespaces - your choice)  

---

## 📂 Project Structure

```bash
socialApp/
├── prisma/
│ └── schema.prisma # Prisma schema (User, Accounts, Posts, etc.)
│
├── src/
│ ├── app/
│ │ ├── layout.js # Root layout
│ │ ├── page.js # Landing page
│ │ ├── dashboard/
│ │ │ ├── page.js # Dashboard home
│ │ │ ├── analytics.js # Analytics page
│ │ │ ├── posts.js # Manage posts
│ │ │ └── settings.js # Settings
│ │ ├── api/
│ │ │ ├── auth/
│ │ │ │ ├── register.js # User signup API
│ │ │ │ └── login.js # User login API
│ │ │ └── posts.js # Create/get posts API
│ │ └── auth/
│ │ ├── login.js # Login page
│ │ └── register.js # Register page
│ │
│ ├── components/
│ │ ├── Topbar.js # Top navigation bar
│ │ ├── Sidebar.js # Sidebar with links
│ │ └── Card.js # Reusable UI card
│ │
│ └── lib/
│ └── prisma.js # Prisma client instance
│
├── .env.local # Environment variables
├── package.json
└── README.md
```

---

## ⚡ Getting Started (Local Dev)

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/socialApp.git
   cd socialApp

2. **Install dependencies**
```bash
npm install
```
3. Setup database (Supabase + Prisma)

- Create a Supabase project → copy the connection string

- Add it to .env.local

```bash
DATABASE_URL="your-supabase-postgres-url"
```
- Run Prisma migrations
```bash
npx prisma migrate dev --name init
```

4. **Run the App**
```bash
npm run dev

```

5. Open http://localhost:3000

**🌍 Deployment**
- Deploy frontend on Vercel

- Use Supabase as the backend database

- Or deploy both frontend + backend APIs on Railway / Render

**📌 Roadmap**
 - OAuth login with Google / Facebook

 - Post scheduling with CRON jobs

 - More detailed analytics charts

 -  Team collaboration features

**📜 License**
MIT License © 2025 Jasvant Maddheshiya