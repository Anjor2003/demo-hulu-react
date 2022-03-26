const API_KEY = process.env.API_KEY;

export default {
 fetchTrending: {
  title: 'Trending',
  url: `/trending/all/week?api_key=${API_KEY}&language=es-es`,
 },
 fetchTopRated: {
  title: 'Top Rated',
  url: `/movie/top_rated?api_key=${API_KEY}&language=es-es`,
 },
 fetchActionMovies: {
  title: 'Action',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-es`,
 },
 fetchComedyMovies: {
  title: 'Comedy',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=es-es`,
 },
 fetchHorrorMovies: {
  title: 'Horror',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-es`,
 },
 fetchRomanceMovies: {
  title: 'Romance',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-es`,
 },
 fetchMisteryMovies: {
  title: 'Mistery',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=es-es`,
 },
 fetchSciFiMovies: {
  title: 'Sci-Fi',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=879&language=es-es`,
 },
 fetchWesternMovies: {
  title: 'Western',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=es-es`,
 },
 fetchAnimationMovies: {
  title: 'Animation',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=es-es`,
 },
 fetchTVMovies: {
  title: 'TV Movie',
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=es-es`,
 },
}