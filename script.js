const playlists = [

    {
        title: "Today's Top Hits",
        description: "The biggest songs right now.",
        image: "assets/images/playlist1.jpg",
        artist: "Alec Benjamin",
        audio: "assets/songs/Bairan.mp3",
        userCreated: false
    },

    {
        title: "Chill Mix",
        description: "Relax and enjoy chill music.",
        image: "assets/images/playlist2.jpg",
        artist: "Ruth B.",
        audio: "assets/songs/BYE.mp3",
        userCreated: false
    },

    {
        title: "Rap Caviar",
        description: "Best rap songs.",
        image: "assets/images/playlist3.jpg",
        artist: "Clairo",
        audio: "assets/songs/Vazan.mp3",
        userCreated: false
    },

    {
        title: "Daily Mix",
        description: "Made specially for you.",
        image: "assets/images/playlist1.jpg",
        artist: "Charlie Puth",
        audio: "assets/songs/Hola_Amigo.mp3",
        userCreated: false
    },

    {
        title: "Workout",
        description: "Boost your energy.",
        image: "assets/images/playlist2.jpg",
        artist: "Imagine Dragons",
        audio: "assets/songs/Tu_Hai_Kahan.mp3",
        userCreated: false
    },

    {
        title: "Lofi Beats",
        description: "Focus and study.",
        image: "assets/images/playlist3.jpg",
        artist: "Lofi Girl",
        audio: "assets/songs/Finding_Her.mp3",
        userCreated: false
    }

];


let currentPlaylist = playlists;

let currentSongIndex = 0;

let isPlaying = false;

let currentVolume = 1;


/* ================= ELEMENTS ================= */

const playlistContainer =
    document.getElementById("playlist-container");

const playButton =
    document.querySelector(".play-icon");

const audioPlayer =
    document.getElementById("audio-player");

const previousButton =
    document.querySelector(".previous-btn");

const nextButton =
    document.querySelector(".next-btn");

const searchInput =
    document.getElementById("search");

const progressBar =
    document.getElementById("progress-bar");

const currentTime =
    document.getElementById("current-time");

const duration =
    document.getElementById("duration");

const volumeControl =
    document.getElementById("volume-control");

const volumeIcon =
    document.getElementById("volume-icon");

const likeButton =
    document.getElementById("like-btn");

const mobileMenuButton =
    document.getElementById("mobile-menu-btn");

const sidebar =
    document.querySelector(".sidebar");


/* ================= DISPLAY PLAYLISTS ================= */

function displayPlaylists(data) {

    currentPlaylist = data;

    playlistContainer.innerHTML = "";


    if (data.length === 0) {

        playlistContainer.innerHTML = `

            <div class="no-results">

                <i class="fa-solid fa-magnifying-glass"></i>

                <h3>
                    No playlists found
                </h3>

                <p>
                    Try searching for another playlist.
                </p>

            </div>

        `;

        return;
    }


    data.forEach(function (playlist, index) {

        const card =
            document.createElement("div");


        card.classList.add(
            "playlist-card"
        );


        card.innerHTML = `

            <img
                src="${playlist.image}"
                alt="${playlist.title}"
            >

            <h3>
                ${playlist.title}
            </h3>

            <p>
                ${playlist.description}
            </p>

        `;


        /* Delete button for user playlists */

        if (playlist.userCreated) {

            const deleteButton =
                document.createElement("button");


            deleteButton.classList.add(
                "delete-playlist"
            );


            deleteButton.innerHTML =
                '<i class="fa-solid fa-trash"></i>';


            deleteButton.title =
                "Delete playlist";


            deleteButton.addEventListener(
                "click",
                function (e) {

                    e.stopPropagation();

                    deletePlaylist(
                        playlist
                    );

                }
            );


            card.appendChild(
                deleteButton
            );

        }


        /* Card click */

        card.addEventListener(
            "click",
            function () {

                playSong(index);

            }
        );


        playlistContainer.appendChild(
            card
        );

    });

}


/* ================= PLAY SONG ================= */

function playSong(index) {

    const playlist =
        currentPlaylist[index];


    if (!playlist) {
        return;
    }


    currentSongIndex = index;


    document.querySelector(
        ".song-info img"
    ).src = playlist.image;


    document.querySelector(
        ".song-info h5"
    ).innerText = playlist.title;


    document.querySelector(
        ".song-info p"
    ).innerText = playlist.artist;


    audioPlayer.src =
        playlist.audio;


    audioPlayer.load();


    audioPlayer.play()
        .then(function () {

            isPlaying = true;

            updatePlayButton();

        })
        .catch(function (error) {

            console.log(
                "Audio could not be played:",
                error
            );

            isPlaying = false;

            updatePlayButton();

        });


    resetLikeButton();


    document
        .querySelectorAll(".playlist-card")
        .forEach(function (card) {

            card.classList.remove(
                "active"
            );

        });


    const cards =
        document.querySelectorAll(
            ".playlist-card"
        );


    if (cards[index]) {

        cards[index]
            .classList.add("active");

    }

}


/* ================= PLAY BUTTON ================= */

function updatePlayButton() {

    if (isPlaying) {

        playButton.classList.remove(
            "fa-circle-play"
        );

        playButton.classList.add(
            "fa-circle-pause"
        );

    } else {

        playButton.classList.remove(
            "fa-circle-pause"
        );

        playButton.classList.add(
            "fa-circle-play"
        );

    }

}


playButton.addEventListener(
    "click",
    function () {

        if (!audioPlayer.src) {
            return;
        }


        if (isPlaying) {

            audioPlayer.pause();

            isPlaying = false;

        } else {

            audioPlayer.play()
                .then(function () {

                    isPlaying = true;

                    updatePlayButton();

                })
                .catch(function (error) {

                    console.log(
                        "Audio error:",
                        error
                    );

                });

        }


        updatePlayButton();

    }
);


/* ================= NEXT ================= */

nextButton.addEventListener(
    "click",
    function () {

        if (
            currentPlaylist.length === 0
        ) {

            return;

        }


        currentSongIndex++;


        if (
            currentSongIndex >=
            currentPlaylist.length
        ) {

            currentSongIndex = 0;

        }


        playSong(
            currentSongIndex
        );

    }
);


/* ================= PREVIOUS ================= */

previousButton.addEventListener(
    "click",
    function () {

        if (
            currentPlaylist.length === 0
        ) {

            return;

        }


        currentSongIndex--;


        if (currentSongIndex < 0) {

            currentSongIndex =
                currentPlaylist.length - 1;

        }


        playSong(
            currentSongIndex
        );

    }
);


/* ================= AUTO NEXT ================= */

audioPlayer.addEventListener(
    "ended",
    function () {

        isPlaying = false;

        updatePlayButton();


        if (
            currentPlaylist.length === 0
        ) {

            return;

        }


        currentSongIndex++;


        if (
            currentSongIndex >=
            currentPlaylist.length
        ) {

            currentSongIndex = 0;

        }


        playSong(
            currentSongIndex
        );

    }
);


/* ================= AUDIO ERROR ================= */

audioPlayer.addEventListener(
    "error",
    function () {

        isPlaying = false;

        updatePlayButton();

        console.log(
            "Unable to load this audio file."
        );

    }
);


/* ================= PROGRESS ================= */

audioPlayer.addEventListener(
    "loadedmetadata",
    function () {

        progressBar.max =
            audioPlayer.duration;


        duration.textContent =
            formatTime(
                audioPlayer.duration
            );

    }
);


audioPlayer.addEventListener(
    "timeupdate",
    function () {

        progressBar.value =
            audioPlayer.currentTime;


        currentTime.textContent =
            formatTime(
                audioPlayer.currentTime
            );

    }
);


progressBar.addEventListener(
    "input",
    function () {

        audioPlayer.currentTime =
            progressBar.value;

    }
);


/* ================= FORMAT TIME ================= */

function formatTime(seconds) {

    if (
        !seconds ||
        isNaN(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(seconds / 60);


    const remainingSeconds =
        Math.floor(seconds % 60);


    return (
        minutes +
        ":" +
        (
            remainingSeconds < 10
                ? "0"
                : ""
        ) +
        remainingSeconds
    );

}


/* ================= VOLUME ================= */

audioPlayer.volume =
    currentVolume;


volumeControl.addEventListener(
    "input",
    function () {

        currentVolume =
            Number(
                volumeControl.value
            );


        audioPlayer.volume =
            currentVolume;


        updateVolumeIcon();

    }
);


/* ================= MUTE ================= */

volumeIcon.addEventListener(
    "click",
    function () {

        if (
            audioPlayer.volume > 0
        ) {

            currentVolume =
                audioPlayer.volume;

            audioPlayer.volume = 0;

            volumeControl.value = 0;

        } else {

            audioPlayer.volume =
                currentVolume || 1;

            volumeControl.value =
                currentVolume || 1;

        }


        updateVolumeIcon();

    }
);


function updateVolumeIcon() {

    volumeIcon.classList.remove(
        "fa-volume-high",
        "fa-volume-low",
        "fa-volume-xmark"
    );


    if (
        audioPlayer.volume === 0
    ) {

        volumeIcon.classList.add(
            "fa-volume-xmark"
        );

    } else if (
        audioPlayer.volume < 0.5
    ) {

        volumeIcon.classList.add(
            "fa-volume-low"
        );

    } else {

        volumeIcon.classList.add(
            "fa-volume-high"
        );

    }

}


/* ================= SEARCH ================= */

searchInput.addEventListener(
    "input",
    function () {

        const keyword =
            searchInput.value
                .toLowerCase()
                .trim();


        const filteredPlaylists =
            playlists.filter(
                function (playlist) {

                    return playlist.title
                        .toLowerCase()
                        .includes(keyword);

                }
            );


        displayPlaylists(
            filteredPlaylists
        );

    }
);


/* ================= CREATE PLAYLIST ================= */

const createPlaylistButton =
    document.getElementById(
        "create-playlist-btn"
    );


createPlaylistButton.addEventListener(
    "click",
    function () {

        const playlistName =
            prompt(
                "Enter playlist name:"
            );


        if (
            !playlistName ||
            playlistName.trim() === ""
        ) {

            return;

        }


        const newPlaylist = {

            title:
                playlistName.trim(),

            description:
                "Your new playlist.",

            image:
                "assets/images/playlist1.jpg",

            artist:
                "Your Playlist",

            audio:
                "assets/songs/Bairan.mp3",

            userCreated:
                true

        };


        playlists.push(
            newPlaylist
        );


        searchInput.value = "";


        displayPlaylists(
            playlists
        );

    }
);


/* ================= DELETE PLAYLIST ================= */

function deletePlaylist(playlist) {

    const confirmed =
        confirm(
            `Delete "${playlist.title}"?`
        );


    if (!confirmed) {
        return;
    }


    const index =
        playlists.indexOf(
            playlist
        );


    if (index === -1) {
        return;
    }


    if (
        currentPlaylist[index] ===
        playlist
    ) {

        audioPlayer.pause();

        audioPlayer.src = "";

        isPlaying = false;

        updatePlayButton();

    }


    playlists.splice(
        index,
        1
    );


    const keyword =
        searchInput.value
            .toLowerCase()
            .trim();


    const filtered =
        playlists.filter(
            function (item) {

                return item.title
                    .toLowerCase()
                    .includes(keyword);

            }
        );


    displayPlaylists(
        filtered
    );

}


/* ================= HOME ================= */

const homeLink =
    document.getElementById(
        "home-link"
    );


homeLink.addEventListener(
    "click",
    function (e) {

        e.preventDefault();


        searchInput.value = "";


        displayPlaylists(
            playlists
        );


        sidebar.classList.remove(
            "show"
        );

    }
);


/* ================= SEARCH LINK ================= */

const searchLink =
    document.getElementById(
        "search-link"
    );


searchLink.addEventListener(
    "click",
    function (e) {

        e.preventDefault();


        searchInput.focus();


        sidebar.classList.remove(
            "show"
        );

    }
);


/* ================= BROWSER NAVIGATION ================= */

const backButton =
    document.getElementById(
        "back-button"
    );


const forwardButton =
    document.getElementById(
        "forward-button"
    );


backButton.addEventListener(
    "click",
    function () {

        window.history.back();

    }
);


forwardButton.addEventListener(
    "click",
    function () {

        window.history.forward();

    }
);


/* ================= LOGIN ================= */

const loginButton =
    document.querySelector(
        ".login-btn"
    );


const loginModal =
    document.getElementById(
        "login-modal"
    );


const closeLogin =
    document.getElementById(
        "close-login"
    );


const loginForm =
    document.getElementById(
        "login-form"
    );


loginButton.addEventListener(
    "click",
    function () {

        loginModal.classList.add(
            "show"
        );

    }
);


closeLogin.addEventListener(
    "click",
    function () {

        loginModal.classList.remove(
            "show"
        );

    }
);


loginModal.addEventListener(
    "click",
    function (e) {

        if (
            e.target === loginModal
        ) {

            loginModal.classList.remove(
                "show"
            );

        }

    }
);


loginForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();


        const email =
            document.getElementById(
                "login-email"
            ).value;


        loginButton.textContent =
            "Logged In";


        loginButton.style.backgroundColor =
            "#169c46";


        loginModal.classList.remove(
            "show"
        );


        loginForm.reset();


        console.log(
            "Logged in as:",
            email
        );

    }
);


/* ================= LIKE ================= */

likeButton.addEventListener(
    "click",
    function () {

        const icon =
            likeButton.querySelector(
                "i"
            );


        if (
            likeButton.classList.contains(
                "liked"
            )
        ) {

            likeButton.classList.remove(
                "liked"
            );


            icon.classList.remove(
                "fa-solid"
            );


            icon.classList.add(
                "fa-regular"
            );

        } else {

            likeButton.classList.add(
                "liked"
            );


            icon.classList.remove(
                "fa-regular"
            );


            icon.classList.add(
                "fa-solid"
            );

        }

    }
);


/* ================= RESET LIKE ================= */

function resetLikeButton() {

    likeButton.classList.remove(
        "liked"
    );


    const icon =
        likeButton.querySelector(
            "i"
        );


    icon.classList.remove(
        "fa-solid"
    );


    icon.classList.add(
        "fa-regular"
    );

}


/* ================= ESCAPE ================= */

document.addEventListener(
    "keydown",
    function (e) {

        if (
            e.key === "Escape"
        ) {

            loginModal.classList.remove(
                "show"
            );


            sidebar.classList.remove(
                "show"
            );

        }

    }
);


/* ================= MOBILE SIDEBAR ================= */

mobileMenuButton.addEventListener(
    "click",
    function () {

        sidebar.classList.toggle(
            "show"
        );

    }
);


/* ================= CLICK OUTSIDE SIDEBAR ================= */

document.addEventListener(
    "click",
    function (e) {

        if (
            window.innerWidth <= 500 &&
            sidebar.classList.contains("show") &&
            !sidebar.contains(e.target) &&
            !mobileMenuButton.contains(e.target)
        ) {

            sidebar.classList.remove(
                "show"
            );

        }

    }
);


/* ================= INITIAL DISPLAY ================= */

displayPlaylists(
    playlists
);