const BASE = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

export async function fetchPopular() {
  const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch popular movies');
  return res.json();
}

export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch movie details');
  return res.json();
}

