'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <section className="px-4 md:px-8 py-4 md:py-6">
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{title}</h3>
      <div className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="min-w-[140px] md:min-w-[200px] group snap-start flex-shrink-0"
          >
            {movie.poster_path ? (
              <div className="relative h-[210px] md:h-[300px] w-[140px] md:w-[200px] rounded-md overflow-hidden bg-gray-800">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="h-[210px] md:h-[300px] w-[140px] md:w-[200px] rounded-md bg-gray-800 flex items-center justify-center">
                <span className="text-gray-500 text-center px-4">No Image</span>
              </div>
            )}
            <p className="text-xs md:text-sm text-white mt-2 truncate group-hover:text-gray-300 transition">
              {movie.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
