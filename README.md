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

```
macos-portfolio/
├── public/
│   ├── icons/              # App icons (SVG)
│   ├── bg.avif             # Desktop background
│   ├── note.txt            # Notes content
│   └── resume.pdf          # Resume file
├── src/
│   ├── Components/
│   │   ├── Windows/
│   │   │   ├── Cli.jsx           # Terminal component
│   │   │   ├── Github.jsx        # GitHub projects
│   │   │   ├── MacWindows.jsx    # Window manager
│   │   │   ├── Note.jsx          # Notes app
│   │   │   ├── Resume.jsx        # Resume viewer
│   │   │   └── Spotify.jsx       # Spotify player
│   │   ├── DateTime.jsx    # Menu bar clock
│   │   ├── Dock.jsx        # Bottom dock
│   │   └── Nav.jsx         # Top menu bar
│   ├── assets/
│   │   └── github.json     # GitHub projects data
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Future Implementation

Replace demo data with my own data:
- Update `src/data/notes.jsx` for Notes content
- Modify `src/data/projects.jsx` for GitHub projects
- Change Spotify embed code in `src/components/Apps/Spotify.jsx`
- Update resume PDF in `public/assets/resume.pdf`
