const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const MOVIES_FILE = path.join(DATA_DIR, 'movies.json');
const MYLIST_FILE = path.join(DATA_DIR, 'mylist.json');

// Ensure data directory exists if possible
try {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
} catch (e) {
    // Non-fatal if filesystem is read-only (e.g. Vercel serverless)
}

// In-memory fallback caches for serverless environments
let cachedMovies = null;
let cachedMyList = null;

function readJSON(filePath, defaultValue = []) {
    if (filePath === MOVIES_FILE && cachedMovies !== null) {
        return cachedMovies;
    }
    if (filePath === MYLIST_FILE && cachedMyList !== null) {
        return cachedMyList;
    }

    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data);
            if (filePath === MOVIES_FILE) cachedMovies = parsed;
            if (filePath === MYLIST_FILE) cachedMyList = parsed;
            return parsed;
        }
    } catch (err) {
        console.warn(`Error reading ${filePath}:`, err.message);
    }

    // Fallback: load bundled movies.json if filesystem read is restricted
    if (filePath === MOVIES_FILE) {
        try {
            cachedMovies = require('./data/movies.json');
            return cachedMovies;
        } catch (_) {}
    }

    return defaultValue;
}

function writeJSON(filePath, data) {
    if (filePath === MOVIES_FILE) cachedMovies = data;
    if (filePath === MYLIST_FILE) cachedMyList = data;

    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (err) {
        // Read-only filesystem on serverless deployment (Vercel)
        console.warn(`Write to ${filePath} skipped (read-only filesystem on serverless):`, err.message);
        return false;
    }
}

const db = {
    // Movies CRUD
    getMovies: () => readJSON(MOVIES_FILE, []),

    getMovieById: (id) => {
        const movies = readJSON(MOVIES_FILE, []);
        return movies.find(m => String(m.id) === String(id)) || null;
    },

    saveMovies: (movies) => writeJSON(MOVIES_FILE, movies),

    addMovie: (movieData) => {
        const movies = readJSON(MOVIES_FILE, []);
        const newId = movieData.id || `movie_${Date.now()}`;
        const newMovie = {
            id: newId,
            title: movieData.title || "Untitled",
            description: movieData.description || "",
            posterUrl: movieData.posterUrl || "assets/images/movie1.jpg",
            backdropUrl: movieData.backdropUrl || movieData.posterUrl || "assets/images/bg.jpg",
            trailerUrl: movieData.trailerUrl || "",
            releaseYear: Number(movieData.releaseYear) || new Date().getFullYear(),
            runtime: movieData.runtime || "1h 50m",
            genres: Array.isArray(movieData.genres) ? movieData.genres : (movieData.genres ? String(movieData.genres).split(',').map(g => g.trim()) : ["Action"]),
            language: movieData.language || "English",
            country: movieData.country || "USA",
            type: movieData.type || "movie",
            cast: Array.isArray(movieData.cast) ? movieData.cast : (movieData.cast ? String(movieData.cast).split(',').map(c => c.trim()) : []),
            director: movieData.director || "Unknown",
            isTrending: Boolean(movieData.isTrending),
            trendingOrder: movieData.trendingOrder !== undefined ? Number(movieData.trendingOrder) : null,
            isPopular: Boolean(movieData.isPopular),
            isTop10: Boolean(movieData.isTop10),
            isNetflixOriginal: Boolean(movieData.isNetflixOriginal),
            imdbRating: movieData.imdbRating ? Number(movieData.imdbRating) : null,
            imdbVotes: movieData.imdbVotes || null,
            rottenTomatoesScore: movieData.rottenTomatoesScore || null,
            metacriticScore: movieData.metacriticScore || null,
            createdAt: new Date().toISOString()
        };

        movies.unshift(newMovie);
        writeJSON(MOVIES_FILE, movies);
        return newMovie;
    },

    updateMovie: (id, updateData) => {
        const movies = readJSON(MOVIES_FILE, []);
        const index = movies.findIndex(m => String(m.id) === String(id));
        if (index === -1) return null;

        const existing = movies[index];
        const updatedMovie = {
            ...existing,
            ...updateData,
            id: existing.id,
            genres: Array.isArray(updateData.genres) ? updateData.genres : (updateData.genres ? String(updateData.genres).split(',').map(g => g.trim()) : existing.genres),
            cast: Array.isArray(updateData.cast) ? updateData.cast : (updateData.cast ? String(updateData.cast).split(',').map(c => c.trim()) : existing.cast),
            releaseYear: updateData.releaseYear ? Number(updateData.releaseYear) : existing.releaseYear,
            imdbRating: updateData.imdbRating !== undefined ? (updateData.imdbRating ? Number(updateData.imdbRating) : null) : existing.imdbRating,
            isTrending: updateData.isTrending !== undefined ? Boolean(updateData.isTrending) : existing.isTrending,
            trendingOrder: updateData.trendingOrder !== undefined ? (updateData.trendingOrder ? Number(updateData.trendingOrder) : null) : existing.trendingOrder,
            isPopular: updateData.isPopular !== undefined ? Boolean(updateData.isPopular) : existing.isPopular,
            isTop10: updateData.isTop10 !== undefined ? Boolean(updateData.isTop10) : existing.isTop10,
            isNetflixOriginal: updateData.isNetflixOriginal !== undefined ? Boolean(updateData.isNetflixOriginal) : existing.isNetflixOriginal,
            updatedAt: new Date().toISOString()
        };

        movies[index] = updatedMovie;
        writeJSON(MOVIES_FILE, movies);
        return updatedMovie;
    },

    deleteMovie: (id) => {
        const movies = readJSON(MOVIES_FILE, []);
        const filtered = movies.filter(m => String(m.id) !== String(id));
        if (filtered.length === movies.length) return false;
        writeJSON(MOVIES_FILE, filtered);
        // Also remove from My List if present
        db.removeFromMyList(id);
        return true;
    },

    // Search and Filter
    searchMovies: (query) => {
        const movies = readJSON(MOVIES_FILE, []);
        if (!query || !query.trim()) return movies;

        const q = query.toLowerCase().trim();
        return movies.filter(movie => {
            const titleMatch = movie.title && movie.title.toLowerCase().includes(q);
            const genreMatch = movie.genres && movie.genres.some(g => g.toLowerCase().includes(q));
            const castMatch = movie.cast && movie.cast.some(c => c.toLowerCase().includes(q));
            const languageMatch = movie.language && movie.language.toLowerCase().includes(q);
            const directorMatch = movie.director && movie.director.toLowerCase().includes(q);
            return titleMatch || genreMatch || castMatch || languageMatch || directorMatch;
        });
    },

    // My List CRUD
    getMyList: () => {
        const listIds = readJSON(MYLIST_FILE, []);
        const movies = readJSON(MOVIES_FILE, []);
        return movies.filter(m => listIds.includes(String(m.id)));
    },

    addToMyList: (movieId) => {
        const listIds = readJSON(MYLIST_FILE, []);
        const strId = String(movieId);
        if (!listIds.includes(strId)) {
            listIds.unshift(strId);
            writeJSON(MYLIST_FILE, listIds);
        }
        return db.getMyList();
    },

    removeFromMyList: (movieId) => {
        const listIds = readJSON(MYLIST_FILE, []);
        const strId = String(movieId);
        const filtered = listIds.filter(id => id !== strId);
        writeJSON(MYLIST_FILE, filtered);
        return db.getMyList();
    }
};

module.exports = db;
