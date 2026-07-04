# Miraya by Garima | Premium Ethnic Wear E-Commerce Platform

A production-ready, premium, luxury e-commerce platform built for **Miraya by Garima** using Node.js/Express, React, Vite, and custom CSS. 

This workspace is structured as a monorepo featuring a fully decoupled backend REST API and a responsive modern frontend client.

---

## 🏛️ Project Architecture

```
/miraya
├── package.json               # Root monorepo scripts & dependencies
├── README.md                  # Development startup & architecture guide
├── logo R.png                 # Brand logo asset (source)
├── R.png                      # Renamed brand logo asset
├── /backend
│   ├── package.json           # Express server requirements
│   ├── server.js              # REST API (products, newsletter, checkout orders)
│   └── /data
│       └── products.js        # Seed database (8 premium ethnic wear categories)
└── /client
    ├── package.json           # Vite + React build config
    ├── index.html             # Google fonts & SEO headers
    ├── /public                # Static assets (brand logos, product photography)
    └── /src
        ├── App.jsx            # Parent controller managing state & modals
        ├── App.css            # Cleared reset file
        ├── index.css          # Design system, style tokens, and layout grid
        ├── main.jsx           # App entrypoint
        └── /components
            ├── Navbar.jsx     # Sticky navbar with collections dropdown
            ├── Hero.jsx       # Split asymmetric hero panel
            ├── About.jsx      # Narrative brand statement & macro embroidery shot
            ├── Collection.jsx # Product grid with category tab controls
            ├── Pillars.jsx    # 3-column architectural brand value grid
            ├── Footer.jsx     # Burgundy footer with newsletter signup & site maps
            ├── CartModal.jsx  # Sliding drawer shopping bag & order completion
            └── ProductDetailModal.jsx # Detail overlay (specs, size selection)
```

---

## 🎨 Visual Composition & Style Tokens

- **Background Color**: Warm Ivory (`#F8F5F0`) exclusively for a soft, premium aesthetic.
- **Primary Accent**: Deep Burgundy (`#5E0A0B`) for hero text, primary CTAs, active headers, and the footer background.
- **Highlight Accent**: Champagne Gold (`#C6A46A`) for active categories, thin geometric boundaries, and button hover frames.
- **Typography System**:
  - **Headings**: `'DM Serif Display'` with relaxed kerning for editorial sophistication.
  - **UI / Body**: `'Plus Jakarta Sans'` for ultimate readability.
- **Asymmetric Grid**: Crisp champagne gold borderlines dividing segments into sharp blocks, juxtaposing minimal typography side-by-side with high-contrast photographic frames.
- **Photography Assets**: Generated premium fashion model images and macro zardozi embroidery textile shots.

---

## ⚡ Quick Start & Concurrent Development

### 1. Prerequisite Installations
From the root workspace directory, install the monorepo orchestration tool (`concurrently`) and all backend/frontend node packages:

```bash
npm run install:all
```

*Note: On Windows systems with restricted PowerShell script execution, run the commands using `npm.cmd`:*
```powershell
npm.cmd run install:all
```

### 2. Start Concurrently
To spin up both the **Express REST API (Port 5000)** and the **Vite React Server (Port 5173)** in parallel with a single terminal command:

```bash
npm run dev
```

*Or via PowerShell:*
```powershell
npm.cmd run dev
```

---

## 🔌 API Endpoints (Backend Server - Port 5000)

1. **`GET /api/products`**: Fetch all clothing items. Query filter by category is supported (e.g. `/api/products?category=Lehenga`).
2. **`GET /api/products/:id`**: Retrieve full details of a specific garment.
3. **`POST /api/newsletter`**: Submit newsletter subscriptions (logs email and responds with premium invitation).
4. **`POST /api/orders`**: Process checkout orders (expects cart details and billing info; yields a mock receipt code).
