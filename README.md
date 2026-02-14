# 🍎 macOS Portfolio

An interactive macOS-inspired portfolio website with a fully functional desktop environment in your browser.

## ✨ Features

- **Window Management** - Drag, resize, close
- **Terminal (CLI)** - Functional command-line interface (type `help` for commands)
- **Notes** - Demo skills and about information
- **Spotify** - Integrated music player
- **Resume** - Interactive resume viewer
- **Calendar** - Google Calendar integration
- **Link** - Direct linkedin profile link
- **Mail** - Contact form with email redirect
- **GitHub** - Project showcase with cards

## 🚀 Quick Start

```bash
git clone https://github.com/sohamghadai42/MAC-OS.git
cd MAC-OS
```

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
The app will open at `http://localhost:5173`

## 🛠️ Tech Stack

- **React** - UI library
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Core functionality

## 📂 Project Structure

├── 📁 public/
│   ├── 📁 icons/
│   │   ├── 🖼️ apple.svg
│   │   ├── 🖼️ calender.svg
│   │   ├── 🖼️ cli.svg
│   │   ├── 🖼️ github.svg
│   │   ├── 🖼️ link.svg
│   │   ├── 🖼️ mail.svg
│   │   ├── 🖼️ note.svg
│   │   ├── 🖼️ pdf.svg
│   │   ├── 🖼️ spotify.svg
│   │   └── 🖼️ wifi.svg
│   ├── 📄 bg.avif
│   ├── 📄 note.txt
│   └── 📕 resume.pdf
├── 📁 src/
│   ├── 📁 Components/
│   │   ├── 📁 Windows/
│   │   │   ├── 📄 Cli.jsx
│   │   │   ├── 📄 Github.jsx
│   │   │   ├── 📄 MacWindows.jsx
│   │   │   ├── 📄 Note.jsx
│   │   │   ├── 📄 Resume.jsx
│   │   │   └── 📄 Spotify.jsx
│   │   ├── 📄 DateTime.jsx
│   │   ├── 📄 Dock.jsx
│   │   └── 📄 Nav.jsx
│   ├── 📁 assets/
│   │   └── ⚙️ github.json
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── 📄 vite.config.js

## 🎨 Future Implementation

Replace demo data with my own data:
- Update `src/data/notes.jsx` for Notes content
- Modify `src/data/projects.js` for GitHub projects
- Change Spotify embed code in `src/components/Apps/Spotify.js`
- Update resume PDF in `public/assets/`
