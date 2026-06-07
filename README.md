# Sarathi AI Labs — Web Application Redesign

A premium, modern web application redesigned around Simon Sinek's **Golden Circle** framework (**WHY → HOW → WHAT**) to reflect the vision and offerings of Sarathi AI Labs. The aesthetics are heavily inspired by high-end tech firms like Apple, Stripe, Linear, and OpenAI: belief-first messaging, outcome-focused copy, premium typography, custom brand cyan styling, and balanced whitespace.

---

## 🚀 Key Features

* **Golden Circle Flow (WHY → HOW → WHAT):** Structurally walks visitors through the core belief system first, followed by the operational pillars, and finally the products, solutions, and engineering excellence.
* **Cal.com Scheduler Integration:** Fully integrated calendar popup overlay via the Cal.com JS SDK. Triggers dynamically on all "Book a Consultation" actions with a zero-interruption UX and fallback links.
* **Interactive Contact Form:** A glassmorphic consultation form connected to the FormSubmit AJAX backend. Automatically sends lead notifications to `vaibhav.arde@sarathiailabs.com` and carbon-copies (CC) `vaibhav.arde@gmail.com`. Includes live status states (loading, success, error) and prints API activation alerts directly in the UI.
* **Dynamic Design & Motion:** Implemented with `framer-motion` for fluid scroll disclosures, metric count-up counters, and floating background shapes.
* **Custom Brand Assets:** Fully custom logo integrated into headers, footers, page favicons, and as a low-opacity, floating background watermark behind the main hero headlines.

---

## 📁 Repository Structure

The project is managed as an `npm workspaces` monorepo:

```text
├── apps/
│   └── web/                   # Main React + Vite web application
│       ├── public/            # Static assets (logo, favicon)
│       └── src/
│           ├── components/    # Reusable page components & UI primitives
│           │   ├── ContactForm.jsx     # AJAX consultation form
│           │   ├── Header.jsx          # Glassmorphic floating nav
│           │   ├── Footer.jsx          # Responsive 2-row footer
│           │   └── ...
│           ├── pages/
│           │   └── HomePage.jsx        # Unified landing page layout (8 sections)
│           ├── App.jsx        # Routing configuration
│           └── index.css      # Design tokens, typography, and anim keyframes
├── dist/                      # Production build assets
├── package.json               # Root monorepo configuration & concurrency scripts
└── README.md                  # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites

* **Node.js**: `v22` (specified in `.nvmrc`)
* **NPM**: `v10+`

### 1. Installation

Install all workspace dependencies from the root directory:

```bash
npm install
```

### 2. Development Mode

Launch the local development server (runs with hot reloading and compiles assets in real-time):

```bash
npm run dev
```

* The app will start running on **`http://localhost:3000/`**.

### 3. Production Build

Verify linting rules and bundle the application for production deployment:

```bash
npm run build
```

* The production-ready static assets will be compiled into the root-level `/dist/apps/web/` directory.

### 4. Linting

Verify code styling and rules across all workspaces:

```bash
npm run lint
```

---

## ☁️ Hostinger Node.js Deployment

This application is configured for deployment using Hostinger's **"Deploy Your Node.js Web App"** panel connected via GitHub.

### Setup Settings

When configuring your deployment settings in the Hostinger panel, use the following values:

| Setting Field | Configuration Value | Description |
|---|---|---|
| **Framework preset** | `Other` | Keeps standard NPM build and start routines |
| **Branch** | `main` | Production branch to pull from |
| **Node version** | `22.x` | Matches target Node version |
| **Root directory** | `./` | Root directory containing main package.json |
| **Build command** | `npm run build` | Builds workspaces to production bundle |
| **Package manager** | `npm` | Core package manager |
| **Output directory** | `dist/apps/web` | Location of output build assets served by Node |
| **Entry file** | `server.js` | Starts the zero-dependency production static server |

### Standalone server.js

For optimized production hosting and SEO compatibility, the root [server.js](file:///Users/vaibhavarde/Desktop/TestAutomation/horizons-export/server.js) script:
* Binds to Hostinger's dynamic port via `process.env.PORT`.
* Serves Vite static files with correct MIME types and aggressive browser cache headers.
* Implements full **SPA routing fallback** (redirects virtual routes to `index.html`), preventing direct link 404s.

---

## ✉️ Form Activation

Because the contact form runs via the FormSubmit service, the first time you deploy or submit the contact form to a new target email:
1. You will receive an activation email from FormSubmit in your `vaibhav.arde@sarathiailabs.com` inbox.
2. Click **"Activate Form"** inside that email.
3. Once verified, all website contact form submissions will deliver immediately to both inbox addresses.
