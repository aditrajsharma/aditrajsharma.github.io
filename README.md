# Aditraj Sharma — Personal Portfolio & Visual Archive

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-2ea44f?style=flat-square&logo=github)](https://aditrajsharma.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A handcrafted, high-performance personal portfolio website built with pure semantic HTML5, modern vanilla CSS, and lightweight JavaScript. Designed with a warm editorial aesthetic, custom typography, subtle micro-interactions, an animated wave footer, and a dedicated pixel art gallery.

**Live Website:** [aditrajsharma.github.io](https://aditrajsharma.github.io/)

---

## ✦ Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & Palette](#-design-system--palette)
- [Featured Projects](#-featured-projects)
- [Work Experience](#-work-experience)
- [Project Architecture](#-project-architecture)
- [Getting Started Locally](#-getting-started-locally)
- [Deployment](#-deployment)
- [Customization Guide](#-customization-guide)
- [Author & Contact](#-author--contact)

---

## ✦ Overview

This repository hosts the personal portfolio of **Aditraj Sharma** — Software Developer, CSE Undergraduate, and Builder based in Jamshedpur, India. 

The site focuses on:
- Fast initial load time with zero runtime framework overhead.
- Editorial layouts with distinct hierarchy, micro-typography, and responsive grids.
- Clean separation of concerns with structured CSS and vanilla JS modules.
- Complete compatibility with GitHub Pages out of the box.

---

## ✦ Key Features

- **Editorial Hero & Persona Card:** Displays current status, years building, projects shipped, and hand-finished portraiture.
- **Dynamic Projects Grid:** Modular presentation of featured full-stack, AI/ML, and cybersecurity projects.
- **Data-Driven Experience Section:** Renders professional internship history, role tags, and verified credential links dynamically via JavaScript.
- **Off-Screen Journal:** A personal look into rituals beyond the terminal (pourover brewing, single-origin coffee, reading lists).
- **Infinite Animated Wave Footer:** Pure CSS SVG dual-layer wave animation (`@keyframes wave`) running seamlessly at the bottom of the page.
- **IntersectionObserver Navigation:** Automatically highlights active navigation items in the top header as the user scrolls.
- **Dedicated Pixel Gallery (`gallery.html`):**
  - Floating pill navigation bar with active state tracking.
  - Retro browser frame styled with neo-brutalist border accents and title bar dots.
  - Dynamically rendered image grid with fallback placeholder states and featured card spans.

---

## ✦ Design System & Palette

The design draws inspiration from classic print editorial design, Japanese stationery, and modern digital craft.

| Token | Hex Code | Preview | Usage |
|---|---|---|---|
| `--bg` | `#FAF3E7` | `■` | Primary warm parchment background |
| `--bg2` | `#FCFCF9` | `■` | Card and elevation surface background |
| `--ink` | `#0B0B4E` | `■` | Deep navy primary text and borders |
| `--muted` | `#61699B` | `■` | Secondary text, captions, and tags |
| `--line` | `#C6CAE9` | `■` | Subtle dividing borders |
| `--line-dark` | `#101090` | `■` | Accented borders and card outlines |
| `--accent` | `#DB1E4B` | `■` | Vibrant crimson buttons and highlights |
| `--hl` | `#ECC86B` | `■` | Ochre gold text selection and badges |

### Typography
- **Headings & Body:** [`Archivo`](https://fonts.google.com/specimen/Archivo) (500, 600, 700, 800, 900)
- **Code & Accents:** [`Space Mono`](https://fonts.google.com/specimen/Space+Mono) (400, 700)

---

## ✦ Featured Projects

### 01. Eazzio Payroll
- **Domain:** Web Application · Payroll & HR
- **Stack:** Next.js, React, UI Engineering
- **Summary:** An intuitive payroll management web application crafted for simplified employee workflows, transparent pay calculations, and responsive administrative dashboards.

### 02. ClariX
- **Domain:** AI & ML · Geospatial Intelligence · Smart India Hackathon
- **Stack:** Python, SwinIR, ONNX
- **Summary:** A deep-learning super-resolution pipeline exploring the enhancement of Sentinel-2 satellite imagery for clearer remote sensing visual analysis and feature extraction.

### 03. RYNEX
- **Domain:** Cybersecurity & OSINT · Smart India Hackathon
- **Stack:** Graph Analysis, Entity Resolution, AI Stylometry
- **Summary:** A threat intelligence prototype correlating digital infrastructure, forum handles, and marketplace personas with explainable AI-driven attribution signals.

---

## ✦ Work Experience

- **Software Development Intern** @ *Thesis Eduventures Pvt Ltd* (May 2026 – June 2026)
  - Focused on developing, debugging, and deploying production features.
  - Collaborated on code reviews, agile sprints, version control workflows, and developer documentation.
  - [Verified Certificate Link](https://www.linkedin.com/in/aditraj-sharma-b29068364/overlay/Position/2918767174/treasury/?profileId=ACoAAFpr4lEBQU5OaY8w93GOtRWa6rI95oejR5E)

---

## ✦ Project Architecture

```text
portfolio/
├── index.html              # Main homepage (Hero, Projects, Experience, Off-Screen, Contact)
├── gallery.html            # Dedicated Pixel Gallery & visual artwork page
├── style.css               # Unified design system tokens, responsive layout & keyframe animations
├── images/                 # Optimized static assets & project mockups
│   ├── clarix.jpg          # ClariX project preview
│   ├── eazzio-payroll.jpg  # Eazzio Payroll preview
│   ├── portrait-final.png  # Hero portrait illustration
│   ├── rynex.jpg           # RYNEX project preview
│   ├── travel.jpg          # Travel photography asset
│   └── project-*.jpg       # Additional project mockups
├── gallery/                # Destination directory for artwork & photo uploads
├── components/ui/          # Component reference stashes (Wave footer & UI primitives)
├── lib/                    # Helper utility functions
└── README.md               # Project documentation & setup guide
```

---

## ✦ Getting Started Locally

Because this project is built entirely on native web standards, it requires **no build step, no npm install, and no compilers**.

### Option 1: VS Code Live Server (Recommended)
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
2. Right-click [`index.html`](file:///c:/Users/Hp/Documents/VS%20code%20programs/mywebpage/portfolio/index.html) and select **"Open with Live Server"**.

### Option 2: Python HTTP Server
Run directly from your terminal:
```bash
# Python 3.x
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

### Option 3: Node / npx
```bash
npx serve .
# or
npx http-server . -p 3000
```

---

## ✦ Deployment

### GitHub Pages (Default)
This repository is configured for GitHub Pages under the user site convention (`aditrajsharma.github.io`).
1. Push your code to the `main` (or default) branch on GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin <branch-name>
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Set the branch to `main` (or your active branch) and root `/`.
   - Click **Save**. The site will deploy automatically within minutes.

---

## ✦ Customization Guide

### 1. Updating Projects
Edit the project cards in [`index.html`](file:///c:/Users/Hp/Documents/VS%20code%20programs/mywebpage/portfolio/index.html) inside `<section id="project">`:
- Replace thumbnail images in `images/`.
- Update tags, descriptions, and links.

### 2. Updating Work Experience
Modify the `experiences` array in the inline script of [`index.html`](file:///c:/Users/Hp/Documents/VS%20code%20programs/mywebpage/portfolio/index.html):
```javascript
const experiences = [
  {
    role: "Your Role",
    company: "Company Name",
    duration: "Month Year – Month Year",
    workMode: "On-site / Remote",
    status: "Completed / Ongoing",
    description: "Brief summary of your contributions...",
    tags: ["Tech 1", "Tech 2", "Methodology"],
    certificateUrl: "https://...",
    certificateLabel: "View Certificate ↗"
  }
];
```

### 3. Adding Artworks to the Gallery
1. Place image files inside the [`gallery/`](file:///c:/Users/Hp/Documents/VS%20code%20programs/mywebpage/portfolio/gallery) directory.
2. In [`gallery.html`](file:///c:/Users/Hp/Documents/VS%20code%20programs/mywebpage/portfolio/gallery.html), update the `galleryImages` array:
```javascript
const galleryImages = [
  {
    src: "gallery/artwork-1.png",
    alt: "Artwork description",
    caption: "Piece Title",
    tag: "Illustration",
    featured: true // sets span to 2 columns
  }
];
```

---

## ✦ Author & Contact

**Aditraj Sharma**  
- **Portfolio:** [aditrajsharma.github.io](https://aditrajsharma.github.io/)
- **LinkedIn:** [Aditraj Sharma](https://www.linkedin.com/in/aditraj-sharma-b29068364/)
- **GitHub:** [@aditrajsharma](https://github.com/aditrajsharma)

---

*Handcrafted by Aditraj Sharma. Set in Archivo & Space Mono.*
