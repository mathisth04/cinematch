// Base de données intégrée de films
const MOVIES_DATABASE = [
  { id: 1, title: "Inception", genres: ["Science-Fiction", "Action"], rating: 8.8, year: 2010, poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", synopsis: "Dom Cobb vole des secrets enfouis au plus profond de l'inconscient pendant la phase de rêve." },
  { id: 2, title: "Interstellar", genres: ["Science-Fiction", "Drame"], rating: 8.6, year: 2014, poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", synopsis: "Une équipe d'explorateurs franchit un trou de ver pour assurer la survie de l'humanité." },
  { id: 3, title: "SuperGrave", genres: ["Comédie"], rating: 7.6, year: 2007, poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", synopsis: "Deux lycéens tentent d'acheter de l'alcool pour une fête afin d'impressionner les filles." },
  { id: 4, title: "La Cité de la Peur", genres: ["Comédie"], rating: 7.8, year: 1994, poster: "https://image.tmdb.org/t/p/w500/uF63x1x4bNn5jVzN41P1D7rO2Vn.jpg", synopsis: "Un tueur en série sévit pendant le Festival de Cannes, armé d'une faucille et d'un marteau." },
  { id: 5, title: "The Dark Knight", genres: ["Action", "Drame"], rating: 9.0, year: 2008, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", synopsis: "Batman s'associe au commissaire Gordon et au procureur Dent pour contrer le Joker à Gotham." },
  { id: 6, title: "Mad Max: Fury Road", genres: ["Action", "Science-Fiction"], rating: 8.1, year: 2015, poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", synopsis: "Dans un futur post-apocalyptique, Max s'allie à l'impératrice Furiosa pour fuir un tyran." },
  { id: 7, title: "Conjuring", genres: ["Horreur"], rating: 7.5, year: 2013, poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", synopsis: "Des enquêteurs paranormaux viennent en aide à une famille terrorisée dans leur ferme isolée." },
  { id: 8, title: "Get Out", genres: ["Horreur", "Drame"], rating: 7.7, year: 2017, poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", synopsis: "Un jeune homme noir découvre l'effroyable secret de la famille de sa petite amie blanche." },
  { id: 9, title: "Parasite", genres: ["Drame", "Comédie"], rating: 8.5, year: 2019, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", synopsis: "Une famille sans emploi infiltre le quotidien d'une richissime dynastie de Séoul." },
  { id: 10, title: "Le Loup de Wall Street", genres: ["Comédie", "Drame"], rating: 8.2, year: 2013, poster: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg", synopsis: "L'ascension fulgurante et la chute d'un courtier en bourse mégalomane des années 90." },
  { id: 11, title: "Alien, le huitième passager", genres: ["Science-Fiction", "Horreur"], rating: 8.5, year: 1979, poster: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg", synopsis: "L'équipage d'un vaisseau spatial commercial est décimé par un organisme extraterrestre meurtrier." },
  { id: 12, title: "Intouchables", genres: ["Comédie", "Drame"], rating: 8.5, year: 2011, poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQ52.jpg", synopsis: "L'amitié improbable entre un riche aristocrate tétraplégique et son aide-soignant de banlieue." },
  { id: 13, title: "Hérédité", genres: ["Horreur", "Drame"], rating: 7.3, year: 2018, poster: "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3vxEJ5SZ48qu0xqUOi.jpg", synopsis: "Après la mort de la grand-mère, une famille voit de sombres secrets ancestraux refaire surface." },
  { id: 14, title: "John Wick", genres: ["Action"], rating: 7.4, year: 2014, poster: "https://image.tmdb.org/t/p/w500/fZPS29QIiiSshAV4q93neIMXZw5.jpg", synopsis: "Un ancien tueur à gages reprend du service pour se venger de criminels ayant détruit sa vie." },
  { id: 15, title: "Gladiator", genres: ["Action", "Drame"], rating: 8.5, year: 2000, poster: "https://image.tmdb.org/t/p/w500/p0j1Z7FzZ6Xn8b64eH0mXw1Kj3u.jpg", synopsis: "Un général romain trahi devient gladiateur pour venger le meurtre de sa famille et de l'empereur." }
];

// État de l'application
let currentMovies = [];
let currentIndex = 0;
let genreScores = {};
const TOTAL_SWIPES = 10;

// Éléments DOM
const moodScreen = document.getElementById('mood-screen');
const swipeScreen = document.getElementById('swipe-screen');
const resultScreen = document.getElementById('result-screen');
const cardStack = document.getElementById('card-stack');
const counterEl = document.getElementById('counter');

// Gestion du choix d'ambiance
document.querySelectorAll('.mood-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const selectedGenre = e.currentTarget.dataset.genre;
    startSession(selectedGenre);
  });
});

function startSession(filterGenre) {
  genreScores = {};
  
  // Filtrer ou mélanger les films
  let pool = [...MOVIES_DATABASE];
  if (filterGenre !== 'all') {
    pool = pool.sort((a, b) => (b.genres.includes(filterGenre) ? 1 : -1));
  }
  
  // Mélanger légèrement pour varier les sessions
  currentMovies = pool.sort(() => 0.5 - Math.random()).slice(0, TOTAL_SWIPES + 5);
  currentIndex = 0;

  moodScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  swipeScreen.classList.add('active');

  renderCurrentCard();
}

function renderCurrentCard() {
  cardStack.innerHTML = '';
  
  if (currentIndex >= TOTAL_SWIPES || currentIndex >= currentMovies.length) {
    showRecommendation();
    return;
  }

  counterEl.textContent = `Film ${currentIndex + 1} / ${TOTAL_SWIPES}`;
  const movie = currentMovies[currentIndex];

  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <div class="movie-info">
      <h3>${movie.title} (${movie.year})</h3>
      <p>${movie.genres.join(' • ')} — ★ ${movie.rating}/10</p>
    </div>
  `;

  cardStack.appendChild(card);
  attachSwipeEvents(card, movie);
}

function attachSwipeEvents(card, movie) {
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  const onStart = (e) => {
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  };

  const onMove = (e) => {
    if (!isDragging) return;
    currentX = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - startX;
    const rotate = currentX * 0.08;
    card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
  };

  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;

    if (currentX > 100) {
      handleChoice(movie, true, card);
    } else if (currentX < -100) {
      handleChoice(movie, false, card);
    } else {
      card.style.transform = 'translateX(0) rotate(0)';
    }
  };

  card.addEventListener('touchstart', onStart);
  card.addEventListener('touchmove', onMove);
  card.addEventListener('touchend', onEnd);
  card.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
}

function handleChoice(movie, isLiked, cardElement) {
  // Ajustement des scores selon les genres
  movie.genres.forEach(genre => {
    genreScores[genre] = (genreScores[genre] || 0) + (isLiked ? 2 : -1);
  });

  if (cardElement) {
    const direction = isLiked ? 500 : -500;
    cardElement.style.transition = 'transform 0.3s ease-out';
    cardElement.style.transform = `translateX(${direction}px) rotate(${direction * 0.05}deg)`;
  }

  setTimeout(() => {
    currentIndex++;
    renderCurrentCard();
  }, 250);
}

// Boutons fixes Like / Dislike
document.getElementById('like-btn').addEventListener('click', () => {
  const card = document.querySelector('.movie-card');
  if (card && currentMovies[currentIndex]) handleChoice(currentMovies[currentIndex], true, card);
});

document.getElementById('dislike-btn').addEventListener('click', () => {
  const card = document.querySelector('.movie-card');
  if (card && currentMovies[currentIndex]) handleChoice(currentMovies[currentIndex], false, card);
});

// Algorithme de recommandation final
function showRecommendation() {
  swipeScreen.classList.remove('active');
  resultScreen.classList.add('active');

  // Films non encore montrés
  const unshownMovies = MOVIES_DATABASE.filter(m => !currentMovies.slice(0, currentIndex).some(s => s.id === m.id));

  // Calcul du score de correspondance pour chaque film
  let bestMovie = unshownMovies[0] || MOVIES_DATABASE[0];
  let highestScore = -999;

  unshownMovies.forEach(movie => {
    let score = 0;
    movie.genres.forEach(g => {
      score += (genreScores[g] || 0);
    });
    score += (movie.rating * 0.5); // Bonus de note globale

    if (score > highestScore) {
      highestScore = score;
      bestMovie = movie;
    }
  });

  const resultContainer = document.getElementById('result-card');
  resultContainer.innerHTML = `
    <img src="${bestMovie.poster}" alt="${bestMovie.title}">
    <div class="result-details">
      <h3>${bestMovie.title} (${bestMovie.year})</h3>
      <div class="meta">${bestMovie.genres.join(' • ')} — Note : ★ ${bestMovie.rating}/10</div>
      <div class="synopsis">${bestMovie.synopsis}</div>
    </div>
  `;
}

// Boutons de navigation
document.getElementById('abort-btn').addEventListener('click', () => {
  swipeScreen.classList.remove('active');
  moodScreen.classList.add('active');
});

document.getElementById('restart-btn').addEventListener('click', () => {
  resultScreen.classList.remove('active');
  moodScreen.classList.add('active');
});