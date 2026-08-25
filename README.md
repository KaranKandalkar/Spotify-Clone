# Spotify Clone

A responsive Spotify-inspired music player built using HTML, CSS, and JavaScript. This project recreates the core frontend experience of a music streaming application, including playlist browsing, music playback, search, player controls, login UI, and responsive design.

## Project Overview

The Spotify Clone is a frontend web application created as part of a practical web development learning project.

The application uses vanilla JavaScript to dynamically render playlists and control an HTML5 audio player. Playlist information, artwork, artists, and local audio files are stored in JavaScript objects and local project assets.

This project focuses on learning how HTML, CSS, and JavaScript work together to build an interactive frontend application.

## Features

- Spotify-inspired user interface
- Responsive design
- Sidebar navigation
- Home navigation
- Search navigation
- Playlist cards
- Dynamic playlist rendering
- Playlist descriptions
- Playlist artwork
- Artist information
- Search playlists
- Play and pause music
- Previous song control
- Next song control
- Audio progress bar
- Current playback time
- Total song duration
- Seek through songs
- Volume control
- Active playlist indication
- Song title display
- Artist display
- Login modal
- Login form validation using HTML required fields
- Responsive music player
- Local audio file playback

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts
- HTML5 Audio API
- Git
- GitHub

## Project Structure

```text
spotify-clone/
├── assets/
│   ├── images/
│   │   ├── playlist1.jpg
│   │   ├── playlist2.jpg
│   │   └── playlist3.jpg
│   └── songs/
│       ├── Bairan.mp3
│       ├── BYE.mp3
│       ├── Vazan.mp3
│       ├── Hola_Amigo.mp3
│       ├── Tu_Hai_Kahan.mp3
│       └── Finding_Her.mp3
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone this repository.
2. Open the project folder in VS Code.
3. Make sure the `assets/images` folder contains the required playlist images.
4. Make sure the `assets/songs` folder contains the required audio files.
5. Open `index.html` in a browser.

For development, you can use the Live Server extension in VS Code.

## How the Application Works

### Playlist Data

Playlist information is stored in JavaScript objects inside an array.

Each playlist contains:

- Title
- Description
- Image
- Artist
- Audio file

JavaScript uses this data to dynamically create playlist cards.

### Dynamic Playlist Rendering

The `displayPlaylists()` function creates playlist cards using JavaScript and inserts them into the playlist container.

This avoids manually creating every playlist card in HTML.

### Search

The search input listens for user input.

JavaScript filters the playlist array based on the entered keyword and displays only matching playlists.

### Music Player

The project uses the HTML5 Audio API through the `<audio>` element.

JavaScript controls:

- Play
- Pause
- Previous
- Next
- Current time
- Duration
- Progress
- Volume

### Progress Bar

The progress bar is connected to the audio player's current time.

When the song plays, the progress bar updates automatically.

The user can also move the progress bar to change the current playback position.

### Previous and Next Controls

The application maintains the current song index.

The next button moves to the next playlist item, while the previous button moves to the previous item.

When the last song finishes, playback continues from the first song.

### Login Modal

The project includes a frontend login modal containing email and password fields.

The login interface is a UI demonstration and does not connect to a real authentication backend.

## JavaScript Concepts Used

- Variables
- Arrays
- Objects
- Functions
- Event listeners
- DOM manipulation
- `forEach()`
- `filter()`
- `indexOf()`
- Template literals
- Conditional statements
- Dynamic HTML generation
- `classList`
- `querySelector()`
- `querySelectorAll()`
- HTML5 Audio API
- Event-driven programming
- Application state management

## CSS Concepts Used

- Flexbox
- Responsive design
- Media queries
- CSS transitions
- Hover effects
- Fixed positioning
- Border radius
- CSS backgrounds
- Responsive widths
- Mobile layouts

## Responsive Design

The application adapts to different screen sizes using CSS media queries.

Supported layouts include:

- Desktop
- Tablet
- Mobile

On smaller screens, the sidebar and music player adjust their layout to provide a better user experience.

## What I Learned

Through this project, I learned how to:

- Build a complete frontend project
- Structure pages using HTML5
- Create responsive layouts with CSS
- Use Flexbox
- Use CSS media queries
- Manipulate the DOM using JavaScript
- Handle user events
- Work with arrays and objects
- Generate HTML dynamically
- Implement search and filtering
- Work with the HTML5 Audio API
- Control audio using JavaScript
- Track application state
- Build responsive components
- Organize project assets
- Use Git and GitHub
- Deploy a frontend project
- Document a project using Markdown

## Limitations

This project is a frontend Spotify-inspired clone created for learning purposes.

It does not use the official Spotify API.

It does not provide real Spotify authentication.

The login form is only a frontend UI demonstration.

The audio files are stored locally in the project.

There is no backend database or persistent user account system.

## Future Improvements

- Official Spotify API integration
- Real Spotify authentication
- Backend integration
- Database integration
- User accounts
- User-created playlists
- Favorite songs
- Recently played songs
- Persistent playlists
- Real music streaming
- Personalized recommendations

## Live Demo

Add the deployed Spotify Clone URL here.

## GitHub Repository

Add the GitHub repository URL here.

## Screenshots

Add screenshots of the Spotify Clone interface here.

Recommended screenshots:

- Desktop home page
- Playlist/player view
- Search result
- Login modal
- Mobile responsive view

## Project Completion

The Spotify Clone has been completed, tested, deployed, documented, and added to the project portfolio.

## Author

Karan Kandalkar
