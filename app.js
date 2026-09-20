// Base de données par défaut
const DEFAULT_MOVIES = [
  { id: 1, title: "Inception", genres: ["Science-Fiction", "Action"], rating: 8.8, year: 2010, poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", synopsis: "Dom Cobb vole des secrets enfouis au plus profond de l'inconscient pendant la phase de rêve." },
  { id: 2, title: "Interstellar", genres: ["Science-Fiction", "Drame"], rating: 8.6, year: 2014, poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", synopsis: "Une équipe d'explorateurs franchit un trou de ver pour assurer la survie de l'humanité." },
  { id: 3, title: "Matrix", genres: ["Science-Fiction", "Action"], rating: 8.7, year: 1999, poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", synopsis: "Un pirate informatique découvre la véritable nature de sa réalité et son rôle dans la guerre contre ses contrôleurs." },
  { id: 4, title: "Dune", genres: ["Science-Fiction", "Aventure"], rating: 8.0, year: 2021, poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", synopsis: "Paul Atreides se rend sur la planète la plus dangereuse de l'univers pour assurer l'avenir de son peuple." },
  { id: 5, title: "Blade Runner 2049", genres: ["Science-Fiction", "Drame"], rating: 8.0, year: 2017, poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", synopsis: "L'officier K déterre un secret enfoui depuis longtemps qui pourrait plonger ce qui reste de la société dans le chaos." },
  { id: 6, title: "Premier Contact", genres: ["Science-Fiction", "Drame"], rating: 7.9, year: 2016, poster: "https://image.tmdb.org/t/p/w500/hLudzvGfpi6JlwLnSYrzNpAcuTN.jpg", synopsis: "Une linguiste est recrutée par les militaires pour traduire les communications d'extraterrestres venus sur Terre." },
  { id: 7, title: "Retour vers le futur", genres: ["Science-Fiction", "Comédie"], rating: 8.5, year: 1985, poster: "https://image.tmdb.org/t/p/w500/7lyBcpYB0Qt8gYhXYaEZUNNsQCK.jpg", synopsis: "Marty McFly est renvoyé accidentellement dans le passé, en 1955, à bord d'une DeLorean modifiée." },
  { id: 8, title: "Avatar", genres: ["Science-Fiction", "Action", "Aventure"], rating: 7.6, year: 2009, poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", synopsis: "Un marine paraplégique est envoyé sur Pandora où il se retrouve déchiré entre ses ordres et le peuple Na'vi." },
  { id: 9, title: "The Dark Knight", genres: ["Action", "Drame"], rating: 9.0, year: 2008, poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", synopsis: "Batman s'associe au commissaire Gordon et au procureur Harvey Dent pour contrer le machiavélique Joker." },
  { id: 10, title: "Mad Max: Fury Road", genres: ["Action", "Science-Fiction"], rating: 8.1, year: 2015, poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", synopsis: "Dans un futur post-apocalyptique, Max s'allie à l'impératrice Furiosa pour fuir un tyran et son armée." },
  { id: 11, title: "Gladiator", genres: ["Action", "Drame"], rating: 8.5, year: 2000, poster: "https://image.tmdb.org/t/p/w500/ehGf5U1mS5Wv8A1wVzR2kXp9q8X.jpg", synopsis: "Un général romain trahi devient gladiateur pour venger le meurtre de sa famille et de l'empereur." },
  { id: 12, title: "John Wick", genres: ["Action", "Thriller"], rating: 7.4, year: 2014, poster: "https://image.tmdb.org/t/p/w500/fZPS29QIiiSshAV4q93neIMXZw5.jpg", synopsis: "Un ancien tueur à gages reprend du service pour traquer les criminels qui lui ont tout pris." },
  { id: 13, title: "Top Gun: Maverick", genres: ["Action", "Drame"], rating: 8.3, year: 2022, poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", synopsis: "Après 30 ans de service, Maverick forme un détachement de jeunes diplômés Top Gun pour une mission à haut risque." },
  { id: 14, title: "Le Seigneur des Anneaux : La Communauté de l'Anneau", genres: ["Aventure", "Action"], rating: 8.9, year: 2001, poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg", synopsis: "Un jeune Hobbit hérite d'un anneau maléfique et entreprend un voyage périlleux pour le détruire." },
  { id: 15, title: "Inglourious Basterds", genres: ["Action", "Drame"], rating: 8.4, year: 2009, poster: "https://image.tmdb.org/t/p/w500/7sfbEnaARXDD5Km0CZ7D7uc2hvU.jpg", synopsis: "Dans la France occupée, un groupe de soldats juifs américains mène des actions sanglantes contre les nazis." },
  { id: 16, title: "Django Unchained", genres: ["Action", "Drame"], rating: 8.5, year: 2012, poster: "https://image.tmdb.org/t/p/w500/7oWY8vdWW7thTzWh3OKYRkWUlD5.jpg", synopsis: "Un esclave affranchi fait équipe avec un chasseur de primes allemand pour délivrer son épouse retenue par un planteur." },
  { id: 17, title: "Fight Club", genres: ["Drame", "Action"], rating: 8.8, year: 1999, poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", synopsis: "Un employé de bureau insomniaque et un fabriquant de savon charismatique créent un club de combat clandestin." },
  { id: 18, title: "SuperGrave", genres: ["Comédie"], rating: 7.6, year: 2007, poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", synopsis: "Deux lycéens tentent d'acheter de l'alcool pour une fête afin d'impressionner les filles de leur classe." },
  { id: 19, title: "La Cité de la Peur", genres: ["Comédie"], rating: 7.8, year: 1994, poster: "https://image.tmdb.org/t/p/w500/uF63x1x4bNn5jVzN41P1D7rO2Vn.jpg", synopsis: "Un tueur en série sévit pendant le Festival de Cannes, armé d'une faucille et d'un marteau." },
  { id: 20, title: "Le Loup de Wall Street", genres: ["Comédie", "Drame"], rating: 8.2, year: 2013, poster: "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg", synopsis: "L'ascension fulgurante et la chute d'un courtier en bourse mégalomane et fêtard dans les années 90." },
  { id: 21, title: "Intouchables", genres: ["Comédie", "Drame"], rating: 8.5, year: 2011, poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQ52.jpg", synopsis: "L'amitié improbable entre un riche aristocrate tétraplégique et son aide-soignant tout juste sorti de prison." },
  { id: 22, title: "The Grand Budapest Hotel", genres: ["Comédie", "Drame"], rating: 8.1, year: 2014, poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWX9NZkt5BW.jpg", synopsis: "Les péripéties d'un concierge légendaire d'un grand hôtel européen et de son fidèle groom." },
  { id: 23, title: "Astérix & Obélix : Mission Cléopâtre", genres: ["Comédie", "Aventure"], rating: 7.5, year: 2002, poster: "https://image.tmdb.org/t/p/w500/7aT9Q0W3e8Xq5wK5e2LgN8Q9Q.jpg", synopsis: "Numérobis doit construire un palais somptueux en trois mois pour Cléopâtre avec l'aide des Gaulois." },
  { id: 24, title: "Very Bad Trip", genres: ["Comédie"], rating: 7.7, year: 2009, poster: "https://image.tmdb.org/t/p/w500/ulMsceTZZq4jV4P0YhC5p4F1bMh.jpg", synopsis: "Trois amis se réveillent à Las Vegas sans aucun souvenir de la veille et sans le futur marié." },
  { id: 25, title: "OSS 117 : Le Caire, nid d'espions", genres: ["Comédie", "Action"], rating: 7.2, year: 2006, poster: "https://image.tmdb.org/t/p/w500/pE1P9e5Qz1zF1k2jL7eRk3uYQ.jpg", synopsis: "L'agent Hubert Bonisseur de la Bath mène une enquête pleine de maladresses au Caire en 1955." },
  { id: 26, title: "The Truman Show", genres: ["Comédie", "Drame"], rating: 8.2, year: 1998, poster: "https://image.tmdb.org/t/p/w500/vuza0WqY239ISGhDo8Ko63GM5va.jpg", synopsis: "Un agent d'assurances découvre que sa vie entière est une émission de téléréalité filmée à son insu." },
  { id: 27, title: "Conjuring", genres: ["Horreur"], rating: 7.5, year: 2013, poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", synopsis: "Des enquêteurs paranormaux viennent en aide à une famille terrorisée dans leur ferme isolée." },
  { id: 28, title: "Get Out", genres: ["Horreur", "Thriller"], rating: 7.7, year: 2017, poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", synopsis: "Un jeune homme noir découvre l'effroyable secret de la famille de sa petite amie blanche." },
  { id: 29, title: "Hérédité", genres: ["Horreur", "Drame"], rating: 7.3, year: 2018, poster: "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3vxEJ5SZ48qu0xqUOi.jpg", synopsis: "Après la disparition de la grand-mère, une famille voit de sombres secrets ancestraux refaire surface." },
  { id: 30, title: "Sans un bruit", genres: ["Horreur", "Science-Fiction"], rating: 7.5, year: 2018, poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", synopsis: "Une famille doit vivre dans le silence absolu pour échapper à de mystérieuses créatures chassant au son." },
  { id: 31, title: "Shining", genres: ["Horreur", "Drame"], rating: 8.4, year: 1980, poster: "https://image.tmdb.org/t/p/w500/b6qUu00iIIft4TeRxIWb0x9Z9bp.jpg", synopsis: "Un écrivain devient le gardien hivernal d'un hôtel isolé et commence à sombrer dans une folie meurtrière." },
  { id: 32, title: "Seven", genres: ["Thriller", "Drame"], rating: 8.6, year: 1995, poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg", synopsis: "Deux policiers traquent un tueur méthodique qui punit ses victimes selon les sept péchés capitaux." },
  { id: 33, title: "Le Silence des Agneaux", genres: ["Thriller", "Drame"], rating: 8.6, year: 1991, poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg", synopsis: "Une jeune recrue du FBI consulte un brillant psychiatre cannibale en prison pour traquer un tueur en série." },
  { id: 34, title: "Shutter Island", genres: ["Thriller", "Drame"], rating: 8.2, year: 2010, poster: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4QIEN.jpg", synopsis: "Deux marshals enquêtent sur la disparition mystérieuse d'une patiente dans un hôpital psychiatrique insulaire." },
  { id: 35, title: "Prisoners", genres: ["Thriller", "Drame"], rating: 8.1, year: 2013, poster: "https://image.tmdb.org/t/p/w500/uhviyqnQk1G0eT5q7s6xU2W0M1z.jpg", synopsis: "Un père désespéré prend les choses en main après la disparition inexpliquée de sa fille de six ans." },
  { id: 36, title: "Alien, le huitième passager", genres: ["Horreur", "Science-Fiction"], rating: 8.5, year: 1979, poster: "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg", synopsis: "L'équipage d'un cargo spatial découvre une forme de vie inconnue et redoutable prête à tout pour survivre." },
  { id: 37, title: "Parasite", genres: ["Drame", "Thriller"], rating: 8.5, year: 2019, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", synopsis: "Une famille sans emploi infiltre progressivement le quotidien d'une richissime dynastie de Séoul." },
  { id: 38, title: "Oppenheimer", genres: ["Drame"], rating: 8.5, year: 2023, poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", synopsis: "L'histoire du physicien J. Robert Oppenheimer à la tête du projet Manhattan pendant la Seconde Guerre mondiale." },
  { id: 39, title: "Whiplash", genres: ["Drame"], rating: 8.5, year: 2014, poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg", synopsis: "Un jeune batteur de jazz intègre un prestigieux conservatoire et subit les méthodes impitoyables de son mentor." },
  { id: 40, title: "La Ligne Verte", genres: ["Drame", "Fantastique"], rating: 8.7, year: 1999, poster: "https://image.tmdb.org/t/p/w500/o0l4AYCzbt1vmsm497Ghv4vt9Qg.jpg", synopsis: "Dans le couloir de la mort, les gardiens découvrent qu'un colosse condamné possède un don miraculeux." },
  { id: 41, title: "Les Évadés", genres: ["Drame"], rating: 8.7, year: 1994, poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", synopsis: "Un banquier condamné à tort pour meurtre se lie d'amitié avec un codétenu et garde l'espoir de s'évader." },
  { id: 42, title: "Forrest Gump", genres: ["Drame", "Comédie"], rating: 8.5, year: 1994, poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", synopsis: "Le destin extraordinaire d'un homme simple d'esprit qui traverse les moments marquants de l'histoire des États-Unis." },
  { id: 43, title: "Le Parrain", genres: ["Drame"], rating: 8.7, year: 1972, poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", synopsis: "Le patriarche vieillissant d'une dynastie criminelle transfère le contrôle de son empire à son fils réticent." },
  { id: 44, title: "Le Pianiste", genres: ["Drame"], rating: 8.5, year: 2002, poster: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYw2BMToPXgjIRvL.jpg", synopsis: "Un brillant pianiste juif polonais lutte pour survivre au cœur du ghetto de Varsovie." },
  { id: 45, title: "Joker", genres: ["Drame", "Thriller"], rating: 8.4, year: 2019, poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", synopsis: "À Gotham, Arthur Fleck, un comédien rejeté par la société, bascule progressivement dans la criminalité." },
  { id: 46, title: "Spider-Man: New Generation", genres: ["Action", "Science-Fiction"], rating: 8.4, year: 2018, poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", synopsis: "Le jeune Miles Morales devient le nouveau Spider-Man et croise les héros arachnéens d'autres dimensions." },
  { id: 47, title: "Le Voyage de Chihiro", genres: ["Aventure", "Fantastique"], rating: 8.5, year: 2001, poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", synopsis: "Une fillette pénètre dans un monde surnaturel gouverné par une sorcière où ses parents sont transformés en porcs." },
  { id: 48, title: "Princesse Mononoké", genres: ["Aventure", "Drame"], rating: 8.4, year: 1997, poster: "https://image.tmdb.org/t/p/w500/jHWQE0QJ4y9qR3C4iZlqB2Dq7.jpg", synopsis: "Un jeune prince maudit se retrouve au centre d'un conflit violent entre les dieux de la forêt et les humains." },
  { id: 49, title: "Coco", genres: ["Comédie", "Aventure"], rating: 8.4, year: 2017, poster: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg", synopsis: "Miguel, passionné de musique, se retrouve mystérieusement propulsé dans le monde coloré des ancêtres." },
  { id: 50, title: "Your Name", genres: ["Drame", "Fantastique"], rating: 8.5, year: 2016, poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg", synopsis: "Deux adolescents que tout sépare se réveillent régulièrement dans le corps de l'autre à travers le Japon." },
  { id: 51, title: "Ratatouille", genres: ["Comédie"], rating: 8.0, year: 2007, poster: "https://image.tmdb.org/t/p/w500/npHNjld2eh5v4xdz19v268a7L3j.jpg", synopsis: "Un rat gourmet s'associe à un jeune cuisinier timide pour conquérir un prestigieux restaurant parisien." },
  { id: 52, title: "Pulp Fiction", genres: ["Thriller", "Comédie"], rating: 8.5, year: 1994, poster: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg", synopsis: "Les destins entremêlés de malfrats, d'un boxeur et de cambrioleurs dans les bas-fonds de Los Angeles." },
  { id: 53, title: "Scarface", genres: ["Action", "Drame"], rating: 8.3, year: 1983, poster: "https://image.tmdb.org/t/p/w500/iQ5z9T2v8pwt2y5W1Q2J7eLq.jpg", synopsis: "Un réfugié cubain sans scrupules s'empare violemment du trafic de drogue à Miami." },
  { id: 54, title: "Gran Torino", genres: ["Drame"], rating: 8.2, year: 2008, poster: "https://image.tmdb.org/t/p/w500/5k7mI0iN9jA9R0lq5P2Y0L7i4pB.jpg", synopsis: "Un vétéran de la guerre de Corée solitaire et bourru prend sous son aile un jeune voisin en difficulté." },
  { id: 55, title: "Drive", genres: ["Action", "Thriller"], rating: 7.8, year: 2011, poster: "https://image.tmdb.org/t/p/w500/602vevufEvEJLhLUG5e5tHnQy4o.jpg", synopsis: "Un cascadeur taciturne servant de chauffeur pour braquages se retrouve traqué par la mafia pour sauver sa voisine." },
  { id: 56, title: "Gone Girl", genres: ["Thriller", "Drame"], rating: 8.1, year: 2014, poster: "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpACXSE9GfZGhOD.jpg", synopsis: "Le jour de leur cinquième anniversaire de mariage, un homme signale la disparition de son épouse et devient le suspect numéro 1." },
  { id: 57, title: "Memento", genres: ["Thriller"], rating: 8.4, year: 2000, poster: "https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zJSp2Qy.jpg", synopsis: "Un homme souffrant d'amnésie antérograde utilise des tatouages pour traquer le meurtrier de sa femme." },
  { id: 58, title: "No Country for Old Men", genres: ["Thriller", "Drame"], rating: 8.1, year: 2007, poster: "https://image.tmdb.org/t/p/w500/6d5XOczrUgtvT54wQ4W9X7bF6R.jpg", synopsis: "Un chasseur découvre deux millions de dollars sur les lieux d'un carnage et se retrouve traqué par un tueur psychopathe." },
  { id: 59, title: "The Revenant", genres: ["Aventure", "Drame"], rating: 8.0, year: 2015, poster: "https://image.tmdb.org/t/p/w500/ji3ecJ1NsGxi0qT81Z8FzE6K2aA.jpg", synopsis: "Laissé pour mort par ses compagnons dans une Amérique sauvage, un trappeur survit et prépare sa vengeance." },
  { id: 60, title: "La La Land", genres: ["Drame", "Comédie"], rating: 8.0, year: 2016, poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkVJ00htx.jpg", synopsis: "Au cœur de Los Angeles, une actrice en devenir et un passionné de jazz tentent de concilier amour et ambition." }
];

// Chargement des films (Base + Ajouts personnalisés du LocalStorage)
function getMoviesDatabase() {
  const custom = JSON.parse(localStorage.getItem('custom_movies') || '[]');
  return [...DEFAULT_MOVIES, ...custom];
}

// Variables d'état
let currentMovies = [];
let currentIndex = 0;
let genreScores = {};
let recommendedRankedList = [];
let currentRecRankIndex = 0;
const TOTAL_SWIPES = 30;

// Éléments du DOM
const moodScreen = document.getElementById('mood-screen');
const swipeScreen = document.getElementById('swipe-screen');
const resultScreen = document.getElementById('result-screen');
const cardStack = document.getElementById('card-stack');
const counterEl = document.getElementById('counter');
const addModal = document.getElementById('add-modal');

// Gestion du modal d'ajout de film
document.getElementById('open-add-modal-btn').addEventListener('click', () => {
  addModal.classList.add('active');
});

document.getElementById('close-modal-btn').addEventListener('click', () => {
  addModal.classList.remove('active');
});

document.getElementById('add-movie-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('custom-title').value.trim();
  const year = parseInt(document.getElementById('custom-year').value) || new Date().getFullYear();
  const rating = parseFloat(document.getElementById('custom-rating').value) || 7.5;
  let poster = document.getElementById('custom-poster').value.trim();
  const genresInput = document.getElementById('custom-genres').value.trim();
  const synopsis = document.getElementById('custom-synopsis').value.trim() || "Aucun résumé renseigné.";

  if (!poster) {
    poster = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80';
  }

  const genres = genresInput.split(',').map(g => g.trim()).filter(g => g.length > 0);

  const newMovie = {
    id: 'custom_' + Date.now(),
    title,
    genres,
    rating,
    year,
    poster,
    synopsis
  };

  const stored = JSON.parse(localStorage.getItem('custom_movies') || '[]');
  stored.push(newMovie);
  localStorage.setItem('custom_movies', JSON.stringify(stored));

  alert(`"${title}" a été ajouté à votre collection !`);
  e.target.reset();
  addModal.classList.remove('active');
});

// Choix de l'humeur
document.querySelectorAll('.mood-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const selectedGenre = e.currentTarget.dataset.genre;
    startSession(selectedGenre);
  });
});

function startSession(filterGenre) {
  genreScores = {};
  recommendedRankedList = [];
  currentRecRankIndex = 0;

  const allMovies = getMoviesDatabase();
  let pool = [...allMovies];

  if (filterGenre !== 'all') {
    pool.sort((a, b) => (b.genres.includes(filterGenre) ? 1 : 0) - (a.genres.includes(filterGenre) ? 1 : 0));
  } else {
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
  }

  currentMovies = pool.slice(0, TOTAL_SWIPES);
  currentIndex = 0;

  moodScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  swipeScreen.classList.add('active');

  renderCurrentCard();
}

function renderCurrentCard() {
  cardStack.innerHTML = '';
  
  if (currentIndex >= TOTAL_SWIPES || currentIndex >= currentMovies.length) {
    calculateRecommendations();
    return;
  }

  counterEl.textContent = `Film ${currentIndex + 1} / ${TOTAL_SWIPES}`;
  const movie = currentMovies[currentIndex];

  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80';">
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
  movie.genres.forEach(genre => {
    genreScores[genre] = (genreScores[genre] || 0) + (isLiked ? 2 : -1);
  });

  if (cardElement) {
    const direction = isLiked ? 600 : -600;
    cardElement.style.transition = 'transform 0.3s ease-out';
    cardElement.style.transform = `translateX(${direction}px) rotate(${direction * 0.05}deg)`;
  }

  setTimeout(() => {
    currentIndex++;
    renderCurrentCard();
  }, 220);
}

// Boutons de contrôle Like / Dislike
document.getElementById('like-btn').addEventListener('click', () => {
  const card = document.querySelector('.movie-card');
  if (card && currentMovies[currentIndex]) handleChoice(currentMovies[currentIndex], true, card);
});

document.getElementById('dislike-btn').addEventListener('click', () => {
  const card = document.querySelector('.movie-card');
  if (card && currentMovies[currentIndex]) handleChoice(currentMovies[currentIndex], false, card);
});

// Calcul de la liste complète ordonnée par affinité
function calculateRecommendations() {
  swipeScreen.classList.remove('active');
  resultScreen.classList.add('active');

  const allMovies = getMoviesDatabase();
  const viewedIds = new Set(currentMovies.slice(0, currentIndex).map(m => m.id));
  const unshownMovies = allMovies.filter(m => !viewedIds.has(m.id));

  const candidates = unshownMovies.length > 0 ? unshownMovies : allMovies;

  // Calcul du score pour chaque film candidat
  const scoredCandidates = candidates.map(movie => {
    let score = 0;
    movie.genres.forEach(g => {
      score += (genreScores[g] || 0);
    });
    score += (movie.rating * 0.5);
    return { movie, score };
  });

  // Tri décroissant selon le score calculé
  scoredCandidates.sort((a, b) => b.score - a.score);
  recommendedRankedList = scoredCandidates.map(item => item.movie);
  currentRecRankIndex = 0;

  displayRecommendation(recommendedRankedList[currentRecRankIndex]);
}

function displayRecommendation(movie) {
  if (!movie) return;

  const resultContainer = document.getElementById('result-card');
  resultContainer.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80';">
    <div class="result-details">
      <h3>${movie.title} (${movie.year})</h3>
      <div class="meta">${movie.genres.join(' • ')} — Note : ★ ${movie.rating}/10</div>
      <div class="synopsis">${movie.synopsis}</div>
    </div>
  `;
}

// Proposer le film suivant sans refaire les swipes
document.getElementById('next-rec-btn').addEventListener('click', () => {
  if (recommendedRankedList.length === 0) return;

  currentRecRankIndex++;
  if (currentRecRankIndex >= recommendedRankedList.length) {
    currentRecRankIndex = 0; // Boucle au début si tous les films ont été passés
  }

  displayRecommendation(recommendedRankedList[currentRecRankIndex]);
});

// Boutons de navigation
document.getElementById('abort-btn').addEventListener('click', () => {
  swipeScreen.classList.remove('active');
  moodScreen.classList.add('active');
});

document.getElementById('restart-btn').addEventListener('click', () => {
  resultScreen.classList.remove('active');
  moodScreen.classList.add('active');
});
