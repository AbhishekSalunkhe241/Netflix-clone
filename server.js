const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Auto-seed if database is empty on server boot
try {
    if (db.getMovies().length === 0) {
        console.log("Database empty. Running initial seed...");
        require('./seed');
    }
} catch (e) {
    console.warn("Auto-seed skipped or non-fatal:", e.message);
}

// ==========================================
// API ROUTER & ENDPOINTS
// ==========================================
const apiRouter = express.Router();

// Health Check
apiRouter.get('/health', (req, res) => {
    res.json({ success: true, status: "healthy", timestamp: new Date().toISOString() });
});

// 1. Get Featured Movie (For Main Hero Banner)
apiRouter.get('/movies/featured', (req, res) => {
    try {
        const movies = db.getMovies();
        const featured = movies.find(m => m.isNetflixOriginal && m.isTrending) || movies[0] || null;
        res.json({ success: true, data: featured });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 2. Get Grouped Movie Categories for Browsing Rows
apiRouter.get('/movies/categories', (req, res) => {
    try {
        const movies = db.getMovies();
        
        const categories = [
            {
                id: "trending",
                title: "Trending Now",
                isTop10: false,
                movies: movies.filter(m => m.isTrending).sort((a, b) => (a.trendingOrder || 999) - (b.trendingOrder || 999))
            },
            {
                id: "top10",
                title: "Top 10 Movies & Shows Today",
                isTop10: true,
                movies: movies.filter(m => m.isTop10)
            },
            {
                id: "originals",
                title: "Only on Netflix",
                isTop10: false,
                movies: movies.filter(m => m.isNetflixOriginal)
            },
            {
                id: "popular",
                title: "Popular on Netflix",
                isTop10: false,
                movies: movies.filter(m => m.isPopular)
            },
            {
                id: "action",
                title: "Action & Adventure",
                isTop10: false,
                movies: movies.filter(m => m.genres && m.genres.some(g => /action|adventure/i.test(g)))
            },
            {
                id: "scifi",
                title: "Sci-Fi & Fantasy",
                isTop10: false,
                movies: movies.filter(m => m.genres && m.genres.some(g => /sci-fi|fantasy|animation/i.test(g)))
            },
            {
                id: "drama",
                title: "Critically Acclaimed Dramas",
                isTop10: false,
                movies: movies.filter(m => m.genres && m.genres.some(g => /drama|biography/i.test(g)))
            },
            {
                id: "comedy",
                title: "Comedies & Lighthearted",
                isTop10: false,
                movies: movies.filter(m => m.genres && m.genres.some(g => /comedy|family/i.test(g)))
            }
        ];

        res.json({ success: true, data: categories });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 3. Get All Movies / Search & Filter
apiRouter.get('/movies', (req, res) => {
    try {
        const { search, genre, type, category } = req.query;
        let result = db.getMovies();

        if (search) {
            result = db.searchMovies(search);
        }

        if (genre) {
            const gLower = genre.toLowerCase();
            result = result.filter(m => m.genres && m.genres.some(g => g.toLowerCase() === gLower));
        }

        if (type) {
            result = result.filter(m => m.type === type);
        }

        if (category) {
            if (category === 'trending') {
                result = result.filter(m => m.isTrending).sort((a, b) => (a.trendingOrder || 999) - (b.trendingOrder || 999));
            } else if (category === 'popular') {
                result = result.filter(m => m.isPopular);
            } else if (category === 'top10') {
                result = result.filter(m => m.isTop10);
            } else if (category === 'originals') {
                result = result.filter(m => m.isNetflixOriginal);
            }
        }

        res.json({ success: true, count: result.length, data: result });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 4. Get Single Movie by ID
apiRouter.get('/movies/:id', (req, res) => {
    try {
        const movie = db.getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.json({ success: true, data: movie });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 5. Admin: Create Movie
apiRouter.post('/movies', (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ success: false, message: "Title and description are required" });
        }
        const newId = `m-${Date.now()}`;
        const movie = db.addMovie({ ...req.body, id: newId });
        res.status(201).json({ success: true, message: "Movie created successfully", data: movie });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 6. Admin: Update Movie
apiRouter.put('/movies/:id', (req, res) => {
    try {
        const updated = db.updateMovie(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.json({ success: true, message: "Movie updated successfully", data: updated });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 7. Admin: Delete Movie
apiRouter.delete('/movies/:id', (req, res) => {
    try {
        const deleted = db.deleteMovie(req.params.id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Movie not found" });
        }
        res.json({ success: true, message: "Movie deleted successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 8. My List Endpoints
apiRouter.get('/mylist', (req, res) => {
    try {
        const list = db.getMyList();
        res.json({ success: true, data: list });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

apiRouter.post('/mylist', (req, res) => {
    try {
        const { movieId } = req.body;
        if (!movieId) {
            return res.status(400).json({ success: false, message: "movieId is required" });
        }
        const updatedList = db.addToMyList(movieId);
        res.json({ success: true, message: "Added to My List", data: updatedList });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

apiRouter.delete('/mylist/:id', (req, res) => {
    try {
        const updatedList = db.removeFromMyList(req.params.id);
        res.json({ success: true, message: "Removed from My List", data: updatedList });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 9. Re-seed database trigger
apiRouter.post('/seed', (req, res) => {
    try {
        delete require.cache[require.resolve('./seed')];
        require('./seed');
        res.json({ success: true, message: "Database re-seeded successfully", data: db.getMovies() });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Mount router on both /api prefix and root for full compatibility with Vercel rewrites
app.use('/api', apiRouter);
app.use(apiRouter);

// Start Server locally if run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`====================================================`);
        console.log(`🍿 Netflix Full-Stack Server Running on http://localhost:${PORT}`);
        console.log(`====================================================`);
    });
}

module.exports = app;
