# 🎭 Artistly - Performing Artist Booking Platform

Artistly is a fictional booking platform where **Event Planners** can discover and connect with **Performing Artists** like singers, dancers, speakers, and DJs.

This frontend-only demo showcases UI quality, responsiveness, filtering logic, and form handling — built using **Next.js**, **Tailwind CSS**, and **ShadCN UI**.

---

## 🔗 Live Demo

🌐 [Click to View Live App](https://your-project-name.vercel.app)

---

## 🚀 Features

- ✅ Homepage with hero section and artist category cards
- ✅ Artist Listing Page with working filters (Category, Location)
- ✅ Artist Onboarding Form with validation (multi-select, dropdowns)
- ✅ Optional Manager Dashboard with table of submissions
- 🌗 Light/Dark Theme Toggle
- 📱 Fully Responsive Layout
- ✨ Smooth UI interactions and hover animations

---

## 🧰 Tech Stack

- **Next.js** (App Router)
- **React** (Hooks, Functional Components)
- **Tailwind CSS**
- **ShadCN UI**
- **React Hook Form + Yup**
- **Framer Motion** (for optional page transitions)

---

## 📁 Folder Structure
/app
├── layout.tsx
├── page.tsx // Homepage
├── artists/page.tsx // Artist Listing
├── onboarding/page.tsx // Artist Onboarding Form
└── dashboard/page.tsx // Manager Dashboard (optional)

├── /components
│ ├── Navbar.tsx
│ ├── ArtistCard.tsx
│ ├── CategoryCard.tsx
│ ├── ArtistForm.tsx
│ └── ThemeToggle.tsx

├── /context
│ └── FilterContext.tsx

├── /lib
│ └── data.ts // Static artist data

## ⚙️ Running Locally

```bash
git clone https://github.com/your-username/artistly-frontend.git
cd artistly-frontend
npm install
npm run dev
