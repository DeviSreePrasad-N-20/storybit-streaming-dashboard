import { fetchMovieById } from '@/lib/tmdb';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({ params }: PageProps) {
  const { id } = await params;
  const movie = await fetchMovieById(id);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/" 
          className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/70 transition"
        >
          ← Back
        </Link>
      </div>

      {/* Backdrop */}
      <div className="relative h-[60vh]">
        {movie.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-32 px-8 md:px-16 pb-16 z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          {movie.poster_path && (
            <div className="flex-shrink-0">
              <div className="relative h-[450px] w-[300px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Details */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
            
            <div className="flex gap-4 text-sm text-gray-400 mb-6">
              {movie.release_date && (
                <span>{new Date(movie.release_date).getFullYear()}</span>
              )}
              {movie.runtime && <span>{movie.runtime} min</span>}
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre: any) => (
                  <span 
                    key={genre.id}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
              {movie.overview}
            </p>

            {movie.vote_average && (
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-yellow-400">
                  ⭐ {movie.vote_average.toFixed(1)}
                </span>
                {movie.vote_count && (
                  <span className="text-gray-400">
                    ({movie.vote_count.toLocaleString()} votes)
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
