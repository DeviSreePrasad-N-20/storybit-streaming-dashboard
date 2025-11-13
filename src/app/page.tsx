import { fetchPopular } from '@/lib/tmdb';
import { Movie } from '@/types/movie';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';

export default async function HomePage() {
  const data = await fetchPopular();
  const movies: Movie[] = data.results || [];
  
  const heroMovie = movies[0]; // Use first movie as hero
  
  return (
    <div className="bg-black min-h-screen">
      <Header />
      {heroMovie && <HeroBanner movie={heroMovie} />}
      <div className="relative -mt-32 z-10">
        <MovieRow title="Popular on StreamFlix" movies={movies} />
        <MovieRow title="Trending Now" movies={movies.slice(0, 10)} />
        <MovieRow title="Top Rated" movies={movies.slice(5, 15)} />
      </div>
    </div>
  );
}
