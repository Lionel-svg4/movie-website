import { useEffect, useMemo, useState } from 'react';

const movieCatalog = [
  {
    id: 1,
    title: 'Midnight City',
    year: 2024,
    rating: 8.9,
    genre: 'Sci-Fi',
    runtime: '2h 08m',
    trending: 96,
    status: 'Now Streaming',
    description:
      'A rogue pilot races across a broken future to stop a power grid from collapsing while hunted by an interstellar syndicate.',
    cast: ['Ava Johnson', 'Milo Chen', 'Nia Ortiz'],
    banner: 'linear-gradient(135deg, rgba(9,15,38,0.2), rgba(34,211,238,0.85)), radial-gradient(circle at 20% 20%, rgba(168,85,247,0.9), transparent 30%)',
    accent: '#67e8f9',
    tag: 'Top Pick',
  },
  {
    id: 2,
    title: 'Velvet Echo',
    year: 2023,
    rating: 8.7,
    genre: 'Drama',
    runtime: '1h 47m',
    trending: 88,
    status: 'Award Winner',
    description:
      'An award-winning singer returns to her hometown after a decade away and confronts the memories that shaped her life.',
    cast: ['Camila Reed', 'Leo Grant', 'Marta Quinn'],
    banner: 'linear-gradient(135deg, rgba(45,20,35,0.2), rgba(251,146,60,0.7)), radial-gradient(circle at 60% 40%, rgba(244,114,182,0.9), transparent 32%)',
    accent: '#f9a8d4',
    tag: 'Critics Choice',
  },
  {
    id: 3,
    title: 'Echo Haven',
    year: 2025,
    rating: 9.1,
    genre: 'Action',
    runtime: '2h 17m',
    trending: 97,
    status: 'New Release',
    description:
      'A former marine discovers an underground resistance movement in the last city standing above the flooded world.',
    cast: ['Kai Mercer', 'Sofia Bell', 'Omar Hill'],
    banner: 'linear-gradient(135deg, rgba(12,17,21,0.15), rgba(239,68,68,0.7)), radial-gradient(circle at 25% 20%, rgba(59,130,246,0.9), transparent 28%)',
    accent: '#fca5a5',
    tag: 'Hot Right Now',
  },
  {
    id: 4,
    title: 'Sunrise Circuit',
    year: 2022,
    rating: 8.5,
    genre: 'Comedy',
    runtime: '1h 38m',
    trending: 81,
    status: 'Feel Good',
    description:
      'A laid-back app designer joins a startup that accidentally unlocks the city’s first functioning time machine.',
    cast: ['Jade Park', 'Theo Brooks', 'Ella Marsh'],
    banner: 'linear-gradient(135deg, rgba(2,15,20,0.2), rgba(16,185,129,0.7)), radial-gradient(circle at 35% 15%, rgba(250,204,21,0.9), transparent 26%)',
    accent: '#86efac',
    tag: 'Popular',
  },
  {
    id: 5,
    title: 'Glass Horizon',
    year: 2024,
    rating: 8.8,
    genre: 'Fantasy',
    runtime: '2h 03m',
    trending: 92,
    status: 'Fan Favorite',
    description:
      'When a lonely mapmaker discovers a living star map, she must find the missing kingdom hidden beyond the clouds.',
    cast: ['Selene Day', 'Jonah Vale', 'Priya Moss'],
    banner: 'linear-gradient(135deg, rgba(18,19,43,0.15), rgba(168,85,247,0.75)), radial-gradient(circle at 50% 25%, rgba(99,102,241,0.8), transparent 30%)',
    accent: '#c4b5fd',
    tag: 'Epic',
  },
  {
    id: 6,
    title: 'Neon Harvest',
    year: 2021,
    rating: 8.4,
    genre: 'Action',
    runtime: '1h 55m',
    trending: 80,
    status: 'Trending',
    description:
      'A crew of relic hunters battles an AI security network to steal a forgotten power source from the moon’s ruins.',
    cast: ['Rhea Stone', 'Dante Cruz', 'Naomi Frost'],
    banner: 'linear-gradient(135deg, rgba(17,14,30,0.1), rgba(59,130,246,0.8)), radial-gradient(circle at 40% 15%, rgba(244,114,182,0.9), transparent 28%)',
    accent: '#93c5fd',
    tag: 'Classic',
  },
  {
    id: 7,
    title: 'Paper Moon',
    year: 2024,
    rating: 8.6,
    genre: 'Drama',
    runtime: '1h 51m',
    trending: 84,
    status: 'Highly Rated',
    description:
      'A family-run newspaper risks everything as residents become obsessed with a mystery spiral of missing letters.',
    cast: ['Kira Bell', 'Nico Hale', 'Mina Val'],
    banner: 'linear-gradient(135deg, rgba(22,18,18,0.2), rgba(251,191,36,0.75)), radial-gradient(circle at 25% 30%, rgba(251,146,60,0.9), transparent 34%)',
    accent: '#fcd34d',
    tag: 'Award Buzz',
  },
  {
    id: 8,
    title: 'Starlight Avenue',
    year: 2025,
    rating: 9.0,
    genre: 'Romance',
    runtime: '2h 04m',
    trending: 90,
    status: 'Fresh Pick',
    description:
      'Two rival architects fall in love while restoring the city’s last enchanted theater before it’s torn down.',
    cast: ['Lina Shaw', 'Ryan Cole', 'Zoe Park'],
    banner: 'linear-gradient(135deg, rgba(29,18,35,0.15), rgba(236,72,153,0.8)), radial-gradient(circle at 20% 20%, rgba(168,85,247,0.9), transparent 36%)',
    accent: '#f9a8d4',
    tag: 'Romance',
  },
  {
    id: 9,
    title: 'Crimson Tide',
    year: 2023,
    rating: 8.3,
    genre: 'Thriller',
    runtime: '1h 52m',
    trending: 78,
    status: 'Mind-Bending',
    description:
      'A cryptographer uncovers a network of manipulated memories while trying to protect the truth from the state.',
    cast: ['Ari Flynn', 'Mila Stone', 'Theo Hart'],
    banner: 'linear-gradient(135deg, rgba(14,12,25,0.2), rgba(239,68,68,0.7)), radial-gradient(circle at 50% 25%, rgba(99,102,241,0.8), transparent 30%)',
    accent: '#fca5a5',
    tag: 'Suspense',
  },
  {
    id: 10,
    title: 'Orbit Zero',
    year: 2025,
    rating: 8.8,
    genre: 'Sci-Fi',
    runtime: '2h 26m',
    trending: 94,
    status: 'Top Rated',
    description:
      'A deep-space botanist discovers a living ecosystem beneath the ice of a moon that shouldn’t have life at all.',
    cast: ['Ines Foster', 'Kai Rowan', 'Leah Moss'],
    banner: 'linear-gradient(135deg, rgba(5,17,28,0.2), rgba(45,212,191,0.8)), radial-gradient(circle at 30% 15%, rgba(59,130,246,0.9), transparent 26%)',
    accent: '#99f6e4',
    tag: 'Must Watch',
  },
  {
    id: 11,
    title: 'Golden Hour',
    year: 2022,
    rating: 8.1,
    genre: 'Comedy',
    runtime: '1h 39m',
    trending: 75,
    status: 'Light & Fun',
    description:
      'An overachieving teacher finds her life transformed by a silly school contest and a very chaotic choir.',
    cast: ['Rosie Dane', 'Cameron Hill', 'June Vale'],
    banner: 'linear-gradient(135deg, rgba(14,9,23,0.15), rgba(250,204,21,0.7)), radial-gradient(circle at 65% 15%, rgba(251,146,60,0.9), transparent 28%)',
    accent: '#fef08a',
    tag: 'Light Fun',
  },
  {
    id: 12,
    title: 'Harbor Lights',
    year: 2024,
    rating: 8.7,
    genre: 'Fantasy',
    runtime: '2h 11m',
    trending: 86,
    status: 'Trending',
    description:
      'The keepers of a sea-locked harbor must awaken an ancient lighthouse that only responds to lost stories.',
    cast: ['Alicia Rowe', 'Marco South', 'Yara Quinn'],
    banner: 'linear-gradient(135deg, rgba(13,20,25,0.15), rgba(14,165,233,0.75)), radial-gradient(circle at 20% 10%, rgba(59,130,246,0.9), transparent 28%)',
    accent: '#a5f3fc',
    tag: 'Adventure',
  },
];

const reviews = [
  {
    user: 'Mia K.',
    rating: 5,
    text: 'The pacing was incredible and the soundtrack felt like a full emotional arc. Definitely rewatching.',
  },
  {
    user: 'Aiden J.',
    rating: 4,
    text: 'A perfect mix of action, mystery, and emotional payoff. The visuals were stunning.',
  },
  {
    user: 'Ruby L.',
    rating: 5,
    text: 'I love the recommendations and the watchlist feature — it feels personal and polished.',
  },
];

const genres = ['All', 'Action', 'Comedy', 'Drama', 'Fantasy', 'Sci-Fi', 'Romance', 'Thriller'];

function App() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('cineverse-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('cineverse-watchlist');
    return saved ? JSON.parse(saved) : [1, 3, 8];
  });
  const [selectedMovie, setSelectedMovie] = useState(movieCatalog[0]);
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cineverse-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('cineverse-watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const tabs = ['All', 'Trending', 'Top Rated', 'New Releases', 'Action', 'Drama', 'Comedy', 'Sci-Fi', 'Fantasy'];

  const filteredMovies = useMemo(() => {
    return movieCatalog.filter((movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.cast.some((member) => member.toLowerCase().includes(query.toLowerCase()));

      const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;

      let matchesTab = true;
      if (activeTab === 'Trending') matchesTab = movie.trending >= 85;
      if (activeTab === 'Top Rated') matchesTab = movie.rating >= 8.5;
      if (activeTab === 'New Releases') matchesTab = movie.year >= 2024;
      if (activeTab !== 'All' && activeTab !== 'Trending' && activeTab !== 'Top Rated' && activeTab !== 'New Releases') {
        matchesTab = movie.genre === activeTab;
      }

      return matchesSearch && matchesGenre && matchesTab;
    });
  }, [query, activeTab, selectedGenre]);

  const featuredMovie = filteredMovies[0] || movieCatalog[0];
  const favoriteMovies = movieCatalog.filter((movie) => favorites.includes(movie.id));
  const watchlistMovies = movieCatalog.filter((movie) => watchlist.includes(movie.id));
  const averageRating = (movieCatalog.reduce((sum, movie) => sum + movie.rating, 0) / movieCatalog.length).toFixed(1);

  const recommendations = movieCatalog
    .filter((movie) => movie.genre === featuredMovie.genre && movie.id !== featuredMovie.id)
    .slice(0, 4);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((movieId) => movieId !== id) : [...prev, id]
    );
  };

  const toggleWatchlist = (id) => {
    setWatchlist((prev) =>
      prev.includes(id) ? prev.filter((movieId) => movieId !== id) : [...prev, id]
    );
  };

  const openTrailer = (movie) => {
    setSelectedMovie(movie);
    setTrailerOpen(true);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">C</div>
          <div>
            <p className="brand-name">CineVerse</p>
            <span className="brand-tag">Movies & Series</span>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#">Home</a>
          <a href="#discover">Discover</a>
          <a href="#trending">Trending</a>
          <a href="#community">Community</a>
        </nav>

        <div className="topbar-actions">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, actors, genres"
            />
          </div>
          <button className="primary-btn">Sign In</button>
        </div>
      </header>

      <main className="page-content">
        <section className="hero-section" style={{ background: featuredMovie.banner }}>
          <div className="hero-copy">
            <span className="pill">{featuredMovie.tag}</span>
            <h1>{featuredMovie.title}</h1>
            <div className="meta-row">
              <span>{featuredMovie.year}</span>
              <span>{featuredMovie.genre}</span>
              <span>{featuredMovie.runtime}</span>
              <span>⭐ {featuredMovie.rating}</span>
            </div>
            <p>{featuredMovie.description}</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => openTrailer(featuredMovie)}>
                ▶ Watch Trailer
              </button>
              <button className="ghost-btn" onClick={() => toggleWatchlist(featuredMovie.id)}>
                {watchlist.includes(featuredMovie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
              </button>
            </div>
            <ul className="cast-list">
              {featuredMovie.cast.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <div className="stat-card">
              <span>Audience Score</span>
              <strong>{featuredMovie.rating}/10</strong>
            </div>
            <div className="stat-card">
              <span>Trending</span>
              <strong>{featuredMovie.trending}%</strong>
            </div>
            <div className="stat-card">
              <span>Streaming</span>
              <strong>{featuredMovie.status}</strong>
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="mini-stat">
            <span>Movies</span>
            <strong>{movieCatalog.length}</strong>
          </div>
          <div className="mini-stat">
            <span>Favorites</span>
            <strong>{favorites.length}</strong>
          </div>
          <div className="mini-stat">
            <span>Watchlist</span>
            <strong>{watchlist.length}</strong>
          </div>
          <div className="mini-stat">
            <span>Avg Rating</span>
            <strong>{averageRating}</strong>
          </div>
        </section>

        <section className="discover-section" id="discover">
          <div className="section-header">
            <div>
              <p className="section-kicker">Discover</p>
              <h2>Curated for you</h2>
            </div>
            <div className="genre-chips">
              {genres.map((genre) => (
                <button
                  key={genre}
                  className={selectedGenre === genre ? 'chip active' : 'chip'}
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="tab-row">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? 'tab active' : 'tab'}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="movie-grid">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <article key={movie.id} className="movie-card">
                  <div className="poster" style={{ background: movie.banner }}>
                    <div className="poster-topbar">
                      <span className="mini-tag">{movie.status}</span>
                      <button className="heart-btn" onClick={() => toggleFavorite(movie.id)}>
                        {favorites.includes(movie.id) ? '♥' : '♡'}
                      </button>
                    </div>
                    <div className="poster-bottom">
                      <span>⭐ {movie.rating}</span>
                      <span>{movie.genre}</span>
                    </div>
                  </div>

                  <div className="movie-body">
                    <div className="movie-info-head">
                      <h3>{movie.title}</h3>
                      <span>{movie.year}</span>
                    </div>
                    <p>{movie.description}</p>
                    <div className="movie-meta">
                      <span>{movie.runtime}</span>
                      <span>{movie.trending}% match</span>
                    </div>
                    <div className="card-actions">
                      <button className="primary-btn small" onClick={() => openTrailer(movie)}>
                        Trailer
                      </button>
                      <button className="ghost-btn small" onClick={() => toggleWatchlist(movie.id)}>
                        {watchlist.includes(movie.id) ? 'Saved' : 'Watchlist'}
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <h3>No movies match your search.</h3>
                <p>Try a different genre, keyword, or category.</p>
              </div>
            )}
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel" id="trending">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Trending Now</p>
                <h3>Most watched this week</h3>
              </div>
            </div>

            <div className="trend-list">
              {movieCatalog.slice(0, 5).map((movie) => (
                <div key={movie.id} className="trend-item">
                  <div className="trend-rank">0{movie.id}</div>
                  <div className="trend-copy">
                    <strong>{movie.title}</strong>
                    <span>{movie.genre}</span>
                  </div>
                  <span className="trend-score">{movie.trending}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Watchlist</p>
                <h3>Your queue</h3>
              </div>
            </div>

            <div className="stack-list">
              {watchlistMovies.length > 0 ? (
                watchlistMovies.map((movie) => (
                  <div key={movie.id} className="stack-card">
                    <span className="stack-color" style={{ background: movie.accent }}></span>
                    <div>
                      <strong>{movie.title}</strong>
                      <p>{movie.genre} • {movie.runtime}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="muted">Your watchlist is empty. Add a few favorites.</p>
              )}
            </div>
          </div>

          <div className="panel" id="community">
            <div className="panel-header">
              <div>
                <p className="section-kicker">Community</p>
                <h3>What people are saying</h3>
              </div>
            </div>

            <div className="review-list">
              {reviews.map((review) => (
                <div key={review.user} className="review-item">
                  <div className="review-head">
                    <strong>{review.user}</strong>
                    <span>{'★'.repeat(review.rating)}</span>
                  </div>
                  <p>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="recommendation-section">
          <div className="section-header small-gap">
            <div>
              <p className="section-kicker">Recommended</p>
              <h2>Because you liked {featuredMovie.title}</h2>
            </div>
          </div>

          <div className="recommendation-grid">
            {recommendations.map((movie) => (
              <div key={movie.id} className="recommend-card">
                <div className="recommend-poster" style={{ background: movie.banner }}></div>
                <div className="recommend-copy">
                  <h4>{movie.title}</h4>
                  <p>{movie.genre} • {movie.year}</p>
                  <div className="recommend-meta">
                    <span>⭐ {movie.rating}</span>
                    <button onClick={() => openTrailer(movie)}>Play</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <div className="profile-card">
            <div className="avatar">L</div>
            <div>
              <p className="section-kicker">Your profile</p>
              <h3>Leo Carter</h3>
            </div>
          </div>

          <div className="profile-stats">
            <div>
              <span>Movies Watched</span>
              <strong>132</strong>
            </div>
            <div>
              <span>Avg Watch Time</span>
              <strong>2h 10m</strong>
            </div>
            <div>
              <span>Genres Loved</span>
              <strong>Sci-Fi / Drama</strong>
            </div>
          </div>
        </section>
      </main>

      {trailerOpen && (
        <div className="modal-backdrop" onClick={() => setTrailerOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setTrailerOpen(false)}>✕</button>
            <div className="trailer-screen">
              <div className="play-circle">▶</div>
            </div>
            <div className="modal-copy">
              <span className="pill">Trailer</span>
              <h3>{selectedMovie.title}</h3>
              <p>{selectedMovie.description}</p>
              <div className="modal-meta">
                <span>{selectedMovie.genre}</span>
                <span>{selectedMovie.runtime}</span>
                <span>⭐ {selectedMovie.rating}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
