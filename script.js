// ======================================================
//        NETFLIX CLONE - ROBUST SCRIPT.JS
// ======================================================

// EXACT 10 Curated Titles in Verified Order with Dedicated Local Posters, Backdrops & Trailers
const MOVIES_DATA = [
    {
        id: "m-breaking-bad",
        title: "Breaking Bad",
        description: "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and distributing the purest methamphetamine on the market.",
        posterUrl: "assets/images/movie1.jpg",
        backdropUrl: "assets/images/breaking_bad_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/HhesaQXLuRY",
        releaseYear: 2013,
        runtime: "5 Seasons",
        genres: ["Crime", "Drama", "Thriller"],
        language: "English",
        country: "USA",
        type: "tv",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
        director: "Vince Gilligan",
        isTrending: true,
        trendingOrder: 1,
        imdbRating: 9.5,
        rottenTomatoesScore: "96%"
    },
    {
        id: "m-stranger-things",
        title: "Stranger Things",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        posterUrl: "assets/images/stranger_things.jpg",
        backdropUrl: "assets/images/stranger_things_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/b9EkMc79ZSU",
        releaseYear: 2022,
        runtime: "4 Seasons",
        genres: ["Sci-Fi", "Horror", "Drama"],
        language: "English",
        country: "USA",
        type: "tv",
        cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
        director: "The Duffer Brothers",
        isTrending: true,
        trendingOrder: 2,
        imdbRating: 8.7,
        rottenTomatoesScore: "91%"
    },
    {
        id: "m-inception",
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.",
        posterUrl: "assets/images/movie4.jpg",
        backdropUrl: "assets/images/inception_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
        releaseYear: 2010,
        runtime: "2h 28m",
        genres: ["Action", "Sci-Fi", "Thriller"],
        language: "English",
        country: "USA",
        type: "movie",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        director: "Christopher Nolan",
        isTrending: true,
        trendingOrder: 3,
        imdbRating: 8.8,
        rottenTomatoesScore: "87%"
    },
    {
        id: "m-interstellar",
        title: "Interstellar",
        description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
        posterUrl: "assets/images/movie5.jpg",
        backdropUrl: "assets/images/interstellar_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
        releaseYear: 2014,
        runtime: "2h 49m",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        language: "English",
        country: "USA",
        type: "movie",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
        director: "Christopher Nolan",
        isTrending: true,
        trendingOrder: 4,
        imdbRating: 8.7,
        rottenTomatoesScore: "73%"
    },
    {
        id: "m-extraction",
        title: "Extraction",
        description: "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord in the underworld of weapons dealers and drug traffickers.",
        posterUrl: "assets/images/movie2.jpg",
        backdropUrl: "assets/images/extraction_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/L6P3nI6VnlY",
        releaseYear: 2020,
        runtime: "1h 56m",
        genres: ["Action", "Thriller"],
        language: "English",
        country: "USA",
        type: "movie",
        cast: ["Chris Hemsworth", "Rudhraksh Jaiswal", "Randeep Hooda", "Golshifteh Farahani"],
        director: "Sam Hargrave",
        isTrending: true,
        trendingOrder: 5,
        imdbRating: 6.8,
        rottenTomatoesScore: "67%"
    },
    {
        id: "m-dark-knight",
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterUrl: "assets/images/movie8.jpg",
        backdropUrl: "assets/images/dark_knight_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
        releaseYear: 2008,
        runtime: "2h 32m",
        genres: ["Action", "Crime", "Drama"],
        language: "English",
        country: "USA",
        type: "movie",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
        director: "Christopher Nolan",
        isTrending: true,
        trendingOrder: 6,
        imdbRating: 9.0,
        rottenTomatoesScore: "94%"
    },
    {
        id: "m-tenet",
        title: "Tenet",
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        posterUrl: "assets/images/movie9.jpg",
        backdropUrl: "assets/images/tenet_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/LdOM0x0XDMo",
        releaseYear: 2020,
        runtime: "2h 30m",
        genres: ["Action", "Sci-Fi", "Thriller"],
        language: "English",
        country: "USA",
        type: "movie",
        cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki", "Kenneth Branagh"],
        director: "Christopher Nolan",
        isTrending: true,
        trendingOrder: 7,
        imdbRating: 7.3,
        rottenTomatoesScore: "69%"
    },
    {
        id: "m-dhurandhar",
        title: "Dhurandhar",
        description: "An intense, high-octane espionage action thriller following elite field operatives facing deadly geopolitical stakes across borders.",
        posterUrl: "assets/images/movie3.jpg",
        backdropUrl: "assets/images/movie3.jpg",
        trailerUrl: "https://www.youtube.com/embed/bUR_FKt7Iso",
        releaseYear: 2025,
        runtime: "2h 45m",
        genres: ["Action", "Thriller"],
        language: "Hindi",
        country: "India",
        type: "movie",
        cast: ["Ranveer Singh", "Sanjay Dutt", "Akshaye Khanna", "R. Madhavan"],
        director: "Aditya Dhar",
        isTrending: true,
        trendingOrder: 8,
        imdbRating: 8.2,
        rottenTomatoesScore: "85%"
    },
    {
        id: "m-squid-game",
        title: "Squid Game",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
        posterUrl: "assets/images/movie10.jpg",
        backdropUrl: "assets/images/squid_game_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/oqxAJKy0ii4",
        releaseYear: 2021,
        runtime: "2 Seasons",
        genres: ["Action", "Drama", "Mystery"],
        language: "Korean",
        country: "South Korea",
        type: "tv",
        cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon", "Jung Ho-yeon"],
        director: "Hwang Dong-hyuk",
        isTrending: true,
        trendingOrder: 9,
        imdbRating: 8.0,
        rottenTomatoesScore: "95%"
    },
    {
        id: "m-godfather",
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        posterUrl: "assets/images/godfather.jpg",
        backdropUrl: "assets/images/godfather_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/UaVTIH8mujA",
        releaseYear: 1972,
        runtime: "2h 55m",
        genres: ["Crime", "Drama"],
        language: "English",
        country: "USA",
        type: "movie",
        cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
        director: "Francis Ford Coppola",
        isTrending: true,
        trendingOrder: 10,
        imdbRating: 9.2,
        rottenTomatoesScore: "97%"
    },
    {
        id: "m-joker",
        title: "Joker",
        description: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        posterUrl: "assets/images/movie7.jpg",
        backdropUrl: "assets/images/joker_bg.jpg",
        trailerUrl: "https://www.youtube.com/embed/zAGVQLHvwOY",
        releaseYear: 2019,
        runtime: "2h 2m",
        genres: ["Crime", "Drama", "Thriller"],
        language: "English",
        country: "USA",
        type: "movie",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        director: "Todd Phillips",
        isTrending: false,
        imdbRating: 8.4,
        rottenTomatoesScore: "69%"
    },
    {
        id: "m-dhurandhar-revenge",
        title: "Dhurandhar: The Revenge",
        description: "The battle rages on as the surviving operative takes on an international syndicate to uncover the ultimate betrayal from within.",
        posterUrl: "assets/images/movie6.jpg",
        backdropUrl: "assets/images/movie6.jpg",
        trailerUrl: "https://www.youtube.com/embed/bUR_FKt7Iso",
        releaseYear: 2026,
        runtime: "2h 30m",
        genres: ["Action", "Drama", "Crime"],
        language: "Hindi",
        country: "India",
        type: "movie",
        cast: ["Ranveer Singh", "Arjun Rampal", "Sara Arjun"],
        director: "Aditya Dhar",
        isTrending: false,
        imdbRating: 8.0,
        rottenTomatoesScore: "82%"
    }
];

// In-memory movie registry map for ID-based lookup
const moviesRegistry = new Map();

function registerMovies(movieList) {
    if (!Array.isArray(movieList)) return;
    movieList.forEach(m => {
        if (m && m.id) {
            moviesRegistry.set(String(m.id), m);
        }
    });
}

// Pre-populate registry with default verified dataset
registerMovies(MOVIES_DATA);

// Lookup movie by ID (Never rely on array position)
function getMovieById(movieId) {
    if (!movieId) return null;
    const key = String(movieId);
    if (moviesRegistry.has(key)) {
        return moviesRegistry.get(key);
    }
    const found = MOVIES_DATA.find(m => String(m.id) === key);
    if (found) {
        moviesRegistry.set(key, found);
        return found;
    }
    return null;
}

// Authoritative fetch from /api/movies/:id with local registry fallback
async function fetchMovieRecord(movieId) {
    if (!movieId) return null;
    const key = String(movieId);
    try {
        const res = await fetch(`/api/movies/${encodeURIComponent(key)}`);
        if (res.ok) {
            const json = await res.json();
            if (json && json.success && json.data) {
                registerMovies([json.data]);
                return json.data;
            }
        }
    } catch (err) {
        console.warn(`API fetch for ${key} failed, falling back to registry:`, err);
    }
    return getMovieById(key);
}

// App State
let mySavedList = JSON.parse(localStorage.getItem('netflix_my_list') || '[]');
let currentView = 'home';
let searchTimer = null;
let currentlySelectedMovie = null;
let currentModalRequestId = 0;
let currentHeroRequestId = 0;

// DOM Elements
const navbar = document.getElementById('navbar');
const navHome = document.getElementById('navHome');
const navTvShows = document.getElementById('navTvShows');
const navMovies = document.getElementById('navMovies');
const navPopular = document.getElementById('navPopular');
const navMyList = document.getElementById('navMyList');
const logoBtn = document.getElementById('logoBtn');
const myListCount = document.getElementById('myListCount');

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchSection = document.getElementById('searchSection');
const searchGrid = document.getElementById('searchGrid');
const searchQueryText = document.getElementById('searchQueryText');
const searchResultsCount = document.getElementById('searchResultsCount');
const searchEmptyState = document.getElementById('searchEmptyState');

const mylistSection = document.getElementById('mylistSection');
const mylistGrid = document.getElementById('mylistGrid');
const myListResultsCount = document.getElementById('myListResultsCount');
const mylistEmptyState = document.getElementById('mylistEmptyState');

const trendingSection = document.getElementById('trendingSection');
const movieRow = document.getElementById('movieRow');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

const heroBanner = document.getElementById('heroBanner');
const heroBackdrop = document.getElementById('heroBackdrop');
const heroInitial = document.getElementById('heroInitial');
const heroMovieContent = document.getElementById('heroMovieContent');
const heroTitle = document.getElementById('heroTitle');
const heroYear = document.getElementById('heroYear');
const heroRuntime = document.getElementById('heroRuntime');
const heroImdb = document.getElementById('heroImdb');
const heroDesc = document.getElementById('heroDesc');
const heroPlayBtn = document.getElementById('heroPlayBtn');
const heroInfoBtn = document.getElementById('heroInfoBtn');
const heroListBtn = document.getElementById('heroListBtn');

const avatarBox = document.getElementById('avatarBox');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownMyListBtn = document.getElementById('dropdownMyListBtn');
const dropdownHomeBtn = document.getElementById('dropdownHomeBtn');

const movieDetailsModal = document.getElementById('movieDetailsModal');
const closeDetailsBtn = document.getElementById('closeDetailsBtn');
const modalHeroBg = document.getElementById('modalHeroBg');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalRuntime = document.getElementById('modalRuntime');
const modalRatings = document.getElementById('modalRatings');
const modalDesc = document.getElementById('modalDesc');
const modalCast = document.getElementById('modalCast');
const modalDirector = document.getElementById('modalDirector');
const modalGenres = document.getElementById('modalGenres');
const modalLanguage = document.getElementById('modalLanguage');
const modalPlayBtn = document.getElementById('modalPlayBtn');
const modalListBtn = document.getElementById('modalListBtn');
const similarGrid = document.getElementById('similarGrid');

const trailerModal = document.getElementById('trailerModal');
const closeTrailerBtn = document.getElementById('closeTrailerBtn');
const videoContainer = document.getElementById('videoContainer');


// Initialize Page Logic
document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initFAQAccordion();
    initDropdownMenu();
    initNavEvents();
    initSliderControls();
    initAuthModal();

    // Initial state: Keep clean background image without movie info/IMDb
    resetHeroToInitial();

    // Load Trending Movies (fetches from API if available, falls back to verified dataset)
    loadTrendingMovies();
    updateMyListUI();
});

// Fetch trending movies from backend or fallback to exact MOVIES_DATA
async function loadTrendingMovies() {
    try {
        const res = await fetch('/api/movies?category=trending');
        if (res.ok) {
            const json = await res.json();
            if (json && json.success && Array.isArray(json.data) && json.data.length > 0) {
                registerMovies(json.data);
                renderTrendingRow(json.data);
                return;
            }
        }
    } catch (err) {
        console.warn('API endpoint not reachable; loading local verified dataset:', err);
    }
    
    // Fallback: Only trending items in exact order
    const trendingFallback = MOVIES_DATA.filter(m => m.isTrending).sort((a, b) => (a.trendingOrder || 99) - (b.trendingOrder || 99));
    renderTrendingRow(trendingFallback);
}

function initNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initFAQAccordion() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(question => {
        question.addEventListener('click', () => {
            const current = question.parentElement;
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== current) {
                    item.classList.remove('active');
                }
            });
            current.classList.toggle('active');
        });
    });
}

function initDropdownMenu() {
    avatarBox.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });
}

function initNavEvents() {
    navHome.addEventListener('click', (e) => { e.preventDefault(); setView('home'); });
    logoBtn.addEventListener('click', (e) => { e.preventDefault(); setView('home'); });
    navTvShows.addEventListener('click', (e) => { e.preventDefault(); setView('tv'); });
    navMovies.addEventListener('click', (e) => { e.preventDefault(); setView('movies'); });
    navPopular.addEventListener('click', (e) => { e.preventDefault(); setView('popular'); });
    navMyList.addEventListener('click', (e) => { e.preventDefault(); setView('mylist'); });
    dropdownMyListBtn.addEventListener('click', (e) => { e.preventDefault(); setView('mylist'); });
    dropdownHomeBtn.addEventListener('click', (e) => { e.preventDefault(); setView('home'); });

    searchInput.addEventListener('input', handleSearchInput);
    searchClear.addEventListener('click', clearSearch);

    closeDetailsBtn.addEventListener('click', () => hideModal(movieDetailsModal));
    closeTrailerBtn.addEventListener('click', closeTrailerPlayer);

    [movieDetailsModal, trailerModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modal === trailerModal) {
                    closeTrailerPlayer();
                } else {
                    hideModal(modal);
                }
            }
        });
    });
}

function initAuthModal() {
    const authModal = document.getElementById('authModal');
    const signInBtn = document.getElementById('signInBtn');
    const closeAuthBtn = document.getElementById('closeAuthBtn');
    const tabs = document.querySelectorAll('.auth-tab');
    const panels = document.querySelectorAll('.auth-panel');

    const openAuthModal = () => {
        authModal.classList.add('show');
    };

    const closeAuthModal = () => {
        authModal.classList.remove('show');
    };

    signInBtn.addEventListener('click', openAuthModal);
    closeAuthBtn.addEventListener('click', closeAuthModal);

    authModal.addEventListener('click', (event) => {
        if (event.target === authModal) closeAuthModal();
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.authTab;
            tabs.forEach(item => item.classList.toggle('active', item === tab));
            panels.forEach(panel => panel.classList.toggle('active', panel.id === `${target}Panel`));
        });
    });

    const getStartedBtn = document.querySelector('.btn-get-started');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', openAuthModal);
    }
    document.querySelectorAll('.auth-form').forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            closeAuthModal();
        });
    });
}


// ======================================================
//        FIX TRENDING NOW SLIDER (LEFT/RIGHT SCROLL)
// ======================================================
function initSliderControls() {
    function scrollTrending(direction) {
        const scrollAmount = Math.max(300, movieRow.clientWidth * 0.75);
        if (direction === 'left') {
            movieRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            movieRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    leftBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        scrollTrending('left');
    };

    rightBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        scrollTrending('right');
    };

    // Keyboard Arrow Key Support
    document.addEventListener('keydown', (event) => {
        if (currentView === 'home' && !movieDetailsModal.classList.contains('show') && !trailerModal.classList.contains('show')) {
            if (event.key === 'ArrowRight') {
                scrollTrending('right');
            }
            if (event.key === 'ArrowLeft') {
                scrollTrending('left');
            }
        }
    });

    // Mouse Wheel Horizontal Scroll Support
    movieRow.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            movieRow.scrollLeft += e.deltaY * 1.5;
        }
    }, { passive: false });

    // Drag-to-Scroll Support
    let isDown = false;
    let startX;
    let scrollStart;

    movieRow.addEventListener('mousedown', (e) => {
        if (e.target.closest('button')) return;
        isDown = true;
        movieRow.classList.add('active-drag');
        startX = e.pageX - movieRow.offsetLeft;
        scrollStart = movieRow.scrollLeft;
    });

    movieRow.addEventListener('mouseleave', () => {
        isDown = false;
        movieRow.classList.remove('active-drag');
    });

    movieRow.addEventListener('mouseup', () => {
        isDown = false;
        movieRow.classList.remove('active-drag');
    });

    movieRow.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - movieRow.offsetLeft;
        const walk = (x - startX) * 1.5;
        movieRow.scrollLeft = scrollStart - walk;
    });
}


// ======================================================
//                  HERO BANNER CONTROLLER
// ======================================================

// Initial state before clicking: Just keep the background image without movie info/IMDb
function resetHeroToInitial() {
    currentlySelectedMovie = null;
    heroBackdrop.style.backgroundImage = "url('assets/images/bg.jpg')";
    heroInitial.style.display = 'block';
    heroMovieContent.style.display = 'none';
    heroImdb.style.display = 'none';
}

// After clicking a movie: Display THAT movie's image, details, and show the IMDb rating
async function selectMovieHero(target) {
    const requestId = ++currentHeroRequestId;
    let movie = typeof target === 'object' && target !== null && target.id ? target : await fetchMovieRecord(target);
    if (!movie || requestId !== currentHeroRequestId) return;

    currentlySelectedMovie = movie;

    // Show THAT movie's backdrop image
    const backdrop = movie.backdropUrl || movie.posterUrl || 'assets/images/bg.jpg';
    heroBackdrop.style.backgroundImage = `url('${backdrop}')`;

    // Hide initial welcome, show movie content
    heroInitial.style.display = 'none';
    heroMovieContent.style.display = 'block';

    heroTitle.textContent = movie.title;
    heroDesc.textContent = movie.description;
    heroYear.textContent = movie.releaseYear || '';
    heroRuntime.textContent = movie.runtime || '';

    // IMDb is visible AFTER clicking
    if (movie.imdbRating) {
        heroImdb.style.display = 'inline-flex';
        heroImdb.innerHTML = `<i class="fa-solid fa-star"></i> ${movie.imdbRating}`;
    } else {
        heroImdb.style.display = 'none';
    }

    // Play Trailer button plays THAT specific movie's trailer by ID
    heroPlayBtn.onclick = () => playTrailer(movie.id);
    heroInfoBtn.onclick = () => openMovieDetails(movie.id);

    const isSaved = mySavedList.includes(movie.id);
    heroListBtn.innerHTML = isSaved 
        ? `<i class="fa-solid fa-check"></i> Added to List` 
        : `<i class="fa-solid fa-plus"></i> My List`;

    heroListBtn.onclick = () => toggleMyList(movie.id);

    // Smoothly scroll to the hero banner
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ======================================================
//              TRENDING NOW ROW RENDERER
// ======================================================
function renderTrendingRow(movies) {
    movieRow.innerHTML = '';

    movies.forEach((movie, index) => {
        const card = createMovieCard(movie, index + 1);
        movieRow.appendChild(card);
    });
}


// Create Movie Card Component bound strictly to data-movie-id
function createMovieCard(movie, rankIndex = null) {
    if (!movie || !movie.id) return document.createElement('div');

    const card = document.createElement('div');
    card.className = rankIndex ? 'movie-card top10-card' : 'movie-card';
    card.setAttribute('data-movie-id', movie.id);
    card.dataset.movieId = movie.id;

    const isSaved = mySavedList.includes(movie.id);

    let html = '';
    if (rankIndex) {
        html += `<div class="top10-rank">${rankIndex}</div>`;
    }

    html += `
        <div class="movie-card-inner">
            <img src="${movie.posterUrl}" alt="${movie.title}" class="movie-poster" loading="lazy" onerror="this.onerror=null; this.src='assets/images/movie1.jpg';">
            <div class="card-overlay">
                <div class="card-title">${movie.title}</div>
                <div class="card-buttons">
                    <button class="card-btn card-btn-play" title="Play Trailer" data-action="play"><i class="fa-solid fa-play"></i></button>
                    <button class="card-btn card-btn-list" title="My List" data-action="list"><i class="fa-solid ${isSaved ? 'fa-check' : 'fa-plus'}"></i></button>
                    <button class="card-btn card-btn-info" title="More Info" data-action="info"><i class="fa-solid fa-chevron-down"></i></button>
                </div>
                <div class="card-meta-line">
                    <span class="match-score">98% Match</span>
                    <span>${movie.releaseYear || ''}</span>
                    <span>${movie.runtime || ''}</span>
                </div>
            </div>
        </div>
    `;

    card.innerHTML = html;

    const playBtn = card.querySelector('.card-btn-play');
    const listBtn = card.querySelector('.card-btn-list');
    const infoBtn = card.querySelector('.card-btn-info');

    if (playBtn) {
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const movieId = card.getAttribute('data-movie-id') || movie.id;
            playTrailer(movieId);
        });
    }

    if (listBtn) {
        listBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const movieId = card.getAttribute('data-movie-id') || movie.id;
            toggleMyList(movieId);
        });
    }

    if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const movieId = card.getAttribute('data-movie-id') || movie.id;
            handleMovieSelection(movieId);
        });
    }

    // Clicking anywhere on the card switches hero and opens details via movie ID pipeline
    card.addEventListener('click', () => {
        const movieId = card.getAttribute('data-movie-id') || movie.id;
        handleMovieSelection(movieId);
    });

    return card;
}


// Unified selection handler: card click -> data-movie-id -> /api/movies/:id -> exact movie record
async function handleMovieSelection(movieId) {
    if (!movieId) return;
    const requestId = ++currentModalRequestId;
    openMovieDetailsLoading(movieId);

    const movie = await fetchMovieRecord(movieId);
    if (!movie || requestId !== currentModalRequestId) return;

    selectMovieHero(movie);
    populateMovieDetails(movie);
}


// ======================================================
//              MOVIE DETAILS MODAL CONTROLLER
// ======================================================
function openMovieDetailsLoading(movieId) {
    // Clear all fields synchronously to prevent any stale state from prior movies
    modalHeroBg.style.backgroundImage = 'none';
    modalTitle.textContent = 'Loading...';
    modalYear.textContent = '';
    modalRuntime.textContent = '';
    modalDesc.textContent = '';
    modalCast.textContent = '';
    modalDirector.textContent = '';
    modalGenres.textContent = '';
    modalLanguage.textContent = '';
    modalRatings.innerHTML = '';
    similarGrid.innerHTML = '';
    showModal(movieDetailsModal);
}

async function openMovieDetails(target) {
    const requestId = ++currentModalRequestId;
    let movie = null;
    if (typeof target === 'object' && target !== null && target.id) {
        movie = target;
    } else {
        const movieId = String(target);
        openMovieDetailsLoading(movieId);
        movie = await fetchMovieRecord(movieId);
    }

    if (!movie || requestId !== currentModalRequestId) {
        return;
    }

    populateMovieDetails(movie);
}

function populateMovieDetails(movie) {
    if (!movie) return;

    // Populate modal with THAT specific movie's details
    const backdrop = movie.backdropUrl || movie.posterUrl || 'assets/images/bg.jpg';
    modalHeroBg.style.backgroundImage = `url('${backdrop}')`;
    modalTitle.textContent = movie.title;
    modalYear.textContent = movie.releaseYear || '';
    modalRuntime.textContent = movie.runtime || '';
    modalDesc.textContent = movie.description || '';

    modalCast.textContent = Array.isArray(movie.cast) ? movie.cast.join(', ') : (movie.cast || 'N/A');
    modalDirector.textContent = movie.director || 'N/A';
    modalGenres.textContent = Array.isArray(movie.genres) ? movie.genres.join(', ') : (movie.genres || 'Action');
    modalLanguage.textContent = movie.language || 'English';

    // IMDb rating badge in details modal
    if (movie.imdbRating) {
        modalRatings.innerHTML = `
            <div class="rating-badge imdb-badge"><i class="fa-solid fa-star"></i> IMDb ${movie.imdbRating}</div>
            ${movie.rottenTomatoesScore ? `<div class="rating-badge rt-badge">🍅 ${movie.rottenTomatoesScore}</div>` : ''}
        `;
    } else {
        modalRatings.innerHTML = '';
    }

    // Modal Play button strictly plays THIS movie's trailer by ID
    modalPlayBtn.onclick = () => {
        hideModal(movieDetailsModal);
        playTrailer(movie.id);
    };

    const isSaved = mySavedList.includes(movie.id);
    modalListBtn.innerHTML = isSaved ? `<i class="fa-solid fa-check"></i> In My List` : `<i class="fa-solid fa-plus"></i> Add to My List`;
    modalListBtn.onclick = () => {
        toggleMyList(movie.id);
        openMovieDetails(movie.id);
    };

    // Render Similar Titles from active catalog
    similarGrid.innerHTML = '';
    const pool = moviesRegistry.size > 0 ? Array.from(moviesRegistry.values()) : MOVIES_DATA;
    const similar = pool.filter(m => m.id !== movie.id).slice(0, 4);
    similar.forEach(m => {
        similarGrid.appendChild(createMovieCard(m));
    });

    showModal(movieDetailsModal);
}


// ======================================================
//              TRAILER PLAYER CONTROLLER
// ======================================================
async function playTrailer(target) {
    let movie = null;
    if (typeof target === 'object' && target !== null && target.id) {
        movie = target;
    } else {
        const movieId = String(target);
        movie = await fetchMovieRecord(movieId);
    }

    if (!movie) {
        console.error('playTrailer: Movie not found for', target);
        return;
    }

    // 1. Clear any existing iframe FIRST to prevent background playback or stale video
    videoContainer.innerHTML = '';

    // 2. Load the specific movie's trailer URL
    if (movie.trailerUrl && movie.trailerUrl.trim()) {
        let embedUrl = movie.trailerUrl.trim();

        if (embedUrl.includes('youtube.com/watch?v=')) {
            const videoId = embedUrl.split('v=')[1].split('&')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        } else if (!embedUrl.includes('autoplay=1')) {
            embedUrl += (embedUrl.includes('?') ? '&' : '?') + 'autoplay=1';
        }

        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.title = `${movie.title} Official Trailer`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
    } else {
        videoContainer.innerHTML = `
            <div class="video-unavailable">
                <i class="fa-solid fa-film"></i>
                <h3>Trailer Unavailable</h3>
                <p>We couldn't load a trailer for "${movie.title}".</p>
            </div>
        `;
    }

    showModal(trailerModal);
}

// Complete teardown of trailer state when closing
function closeTrailerPlayer() {
    hideModal(trailerModal);
    const existingIframe = videoContainer.querySelector('iframe');
    if (existingIframe) {
        existingIframe.src = '';
    }
    videoContainer.innerHTML = '';
}


// ======================================================
//              MY LIST STATE & LOCALSTORAGE
// ======================================================
async function toggleMyList(movieId) {
    const idStr = String(movieId);
    const isAdding = !mySavedList.includes(idStr);
    if (isAdding) {
        mySavedList.push(idStr);
    } else {
        mySavedList = mySavedList.filter(id => id !== idStr);
    }

    localStorage.setItem('netflix_my_list', JSON.stringify(mySavedList));
    updateMyListUI();

    if (currentlySelectedMovie && String(currentlySelectedMovie.id) === idStr) {
        selectMovieHero(currentlySelectedMovie.id);
    }

    // Sync with backend API in background if available
    try {
        if (isAdding) {
            await fetch('/api/mylist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ movieId: idStr })
            });
        } else {
            await fetch(`/api/mylist/${encodeURIComponent(idStr)}`, {
                method: 'DELETE'
            });
        }
    } catch (e) {
        // Local state already updated
    }
}

function updateMyListUI() {
    myListCount.textContent = mySavedList.length;
    if (currentView === 'mylist') {
        renderMyListGrid();
    }
}

function renderMyListGrid() {
    mylistGrid.innerHTML = '';
    const savedMovies = mySavedList
        .map(id => getMovieById(id))
        .filter(m => m !== null);

    myListResultsCount.textContent = `${savedMovies.length} title${savedMovies.length !== 1 ? 's' : ''}`;

    if (savedMovies.length === 0) {
        mylistEmptyState.style.display = 'block';
    } else {
        mylistEmptyState.style.display = 'none';
        savedMovies.forEach(m => {
            mylistGrid.appendChild(createMovieCard(m));
        });
    }
}


// ======================================================
//              LIVE SEARCH IMPLEMENTATION
// ======================================================
function handleSearchInput(e) {
    const query = e.target.value.trim();

    if (query.length > 0) {
        searchClear.style.display = 'block';
    } else {
        searchClear.style.display = 'none';
        clearSearch();
        return;
    }

    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        executeSearch(query);
    }, 300);
}

function clearSearch() {
    searchInput.value = '';
    searchClear.style.display = 'none';
    if (currentView === 'search') {
        setView('home');
    }
}

function executeSearch(query) {
    setView('search', false);
    searchQueryText.textContent = query;
    const q = query.toLowerCase();

    // Search across all known movies
    const allKnown = Array.from(moviesRegistry.values());
    const results = allKnown.filter(m => {
        const titleMatch = m.title && m.title.toLowerCase().includes(q);
        const genreMatch = m.genres && Array.isArray(m.genres) && m.genres.some(g => g.toLowerCase().includes(q));
        const castMatch = m.cast && Array.isArray(m.cast) && m.cast.some(c => c.toLowerCase().includes(q));
        return titleMatch || genreMatch || castMatch;
    });

    searchResultsCount.textContent = `${results.length} title${results.length !== 1 ? 's' : ''}`;
    searchGrid.innerHTML = '';

    if (results.length === 0) {
        searchEmptyState.style.display = 'block';
    } else {
        searchEmptyState.style.display = 'none';
        results.forEach(m => {
            searchGrid.appendChild(createMovieCard(m));
        });
    }
}


// ======================================================
//                  VIEW NAVIGATION
// ======================================================
function setView(viewName, clearQuery = true) {
    currentView = viewName;

    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    if (viewName === 'home') {
        navHome.parentElement.classList.add('active');
        resetHeroToInitial();
    }
    if (viewName === 'tv') navTvShows.parentElement.classList.add('active');
    if (viewName === 'movies') navMovies.parentElement.classList.add('active');
    if (viewName === 'popular') navPopular.parentElement.classList.add('active');
    if (viewName === 'mylist') navMyList.parentElement.classList.add('active');

    if (clearQuery && viewName !== 'search') {
        searchInput.value = '';
        searchClear.style.display = 'none';
    }

    if (viewName === 'search') {
        searchSection.style.display = 'block';
        mylistSection.style.display = 'none';
        trendingSection.style.display = 'none';
        heroBanner.style.display = 'none';
    } else if (viewName === 'mylist') {
        searchSection.style.display = 'none';
        mylistSection.style.display = 'block';
        trendingSection.style.display = 'none';
        heroBanner.style.display = 'none';
        renderMyListGrid();
    } else {
        searchSection.style.display = 'none';
        mylistSection.style.display = 'none';
        trendingSection.style.display = 'block';
        heroBanner.style.display = 'flex';

        if (viewName === 'tv') {
            const tvList = MOVIES_DATA.filter(m => m.type === 'tv');
            renderTrendingRow(tvList);
        } else if (viewName === 'movies') {
            const movieList = MOVIES_DATA.filter(m => m.type === 'movie');
            renderTrendingRow(movieList);
        } else if (viewName === 'popular') {
            const popularList = MOVIES_DATA.filter(m => m.isTrending);
            renderTrendingRow(popularList);
        } else {
            loadTrendingMovies();
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ======================================================
//                 MODAL HELPER UTILS
// ======================================================
function showModal(modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}