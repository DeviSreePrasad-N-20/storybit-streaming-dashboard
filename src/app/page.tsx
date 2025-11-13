import { fetchPopular } from '@/lib/tmdb';
import { Movie } from '@/types/movie';

export default async function HomePage() {
  const data = await fetchPopular();
  const movies: Movie[] = data.results || [];

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Popular Movies</h1>
      <ul className="space-y-2">
        {movies.map((movie) => (
          <li key={movie.id} className="text-lg">
            {movie.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
