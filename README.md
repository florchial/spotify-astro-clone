# Spotify Clone

A simple Spotify-inspired music app built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Features

- Responsive layout with sidebar, main content, and player footer
- Playlist details page with dynamic routing (`/playlists/[id]`)
- Interactive UI components
- Color themes for playlists
- Styled using Tailwind CSS
- Modular component structure

## 📁 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AsideMenu.astro
│   │   ├── PlaylistCard.astro
│   │   ├── SideMenuItem.astro
│   │   └── SideMenuPlaylistItem.astro
│   ├── domain/
│   │   ├── colors.ts
│   │   ├── playlists.ts
│   │   └── songs.ts
│   ├── icons/
│   │   ├── HomeIcon.astro
│   │   ├── LibraryIcon.astro
│   │   └── SearchIcon.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── playlists/
│   │       └── [id].astro
│   └── styles/
│       └── global.css
├── package.json
└── astro.config.mjs
```

## 🏃🏻‍♀️ Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## 🛠️ Technologies

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)

## 👩🏻‍💻 Usage

- Browse playlists from the sidebar and main view.
- Click on a playlist to view its details, including cover, artists, song list, total duration, and song count.
- Songs are filtered and grouped by playlist and album.

## 📊 Data Structure

Each playlist references albums and artists, and each song includes metadata such as title, artist, album, duration, and color.

## 🎶 Music Data

- The app includes a collection of invented songs with metadata such as title, artist, album, and duration for illustration purposes. 
- The data is stored in a TypeScript file for easy access and manipulation.
- All images and music data are for educational use only. Music: [Purple Planet Music](www.purple-planet.com)

## 📄 License

This project is for educational purposes only and is not affiliated with Spotify. Feel free to use and modify the code as you wish.