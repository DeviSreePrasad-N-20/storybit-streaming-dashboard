'use client';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600">STREAMFLIX</h1>
        <nav className="flex gap-4 md:gap-6 text-sm md:text-base">
          <a href="/" className="text-white hover:text-gray-300 transition">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition">Movies</a>
          <a href="#" className="text-white hover:text-gray-300 transition">My List</a>
        </nav>
      </div>
    </header>
  );
}
