import Image from 'next/image';
import { Movie } from '@/types/movie';

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full">
      {/* Background Image */}
      {movie.backdrop_path && (
        <div className="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-16 md:bottom-24 left-4 md:left-16 max-w-xl md:max-w-2xl z-20">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
          {movie.title}
        </h2>
        <p className="text-sm md:text-lg text-gray-200 mb-4 md:mb-6 line-clamp-3 drop-shadow-md">
          {movie.overview}
        </p>
        <div className="flex gap-3 md:gap-4">
          <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-200 transition text-sm md:text-base">
            Play
          </button>
          <button className="bg-gray-600/70 backdrop-blur-sm text-white px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-600 transition text-sm md:text-base">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

