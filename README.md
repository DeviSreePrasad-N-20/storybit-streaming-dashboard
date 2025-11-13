
# StreamFlix - Streaming Dashboard Clone

A simplified streaming service dashboard inspired by Netflix and Hulu, built with Next.js 14, TypeScript, and Tailwind CSS. This application fetches movie data from The Movie Database (TMDB) API and displays it in an engaging, responsive interface.

## 🎬 Features

- **Hero Banner**: Large backdrop image with movie title, description, and action buttons
- **Movie Rows**: Multiple horizontal scrolling rows displaying popular, trending, and top-rated movies
- **Detail Pages**: Dynamic routing to individual movie pages with comprehensive information
- **Responsive Design**: Fully responsive layout optimized for desktop and mobile devices
- **Dark Theme**: Netflix-inspired dark theme with smooth gradients and animations

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: The Movie Database (TMDB) API
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js v18.0.0 or higher
- npm, pnpm, or yarn package manager
- Git for version control

## 🔧 Installation

1. **Clone the repository**


2. **Install dependencies**


3. **Set up environment variables**

Create a `.env.local` file in the project root:

To get your TMDB API key:
- Visit [The Movie Database](https://www.themoviedb.org/)
- Create an account or sign in
- Go to Settings → API
- Request an API key (choose "Developer" option)
- Copy your API key to `.env.local`

## 🏃‍♂️ Running the Application

**Development mode:**
npm run dev

or
pnpm dev

or
yarn dev


Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

**Production build:**

## 📁 Project Structure


## 🌐 API Endpoints Used

The application uses the following TMDB API endpoints:

- **Popular Movies**: `/movie/popular`
- **Trending Movies**: `/trending/movie/day`
- **Top Rated Movies**: `/movie/top_rated`
- **Movie Details**: `/movie/{movie_id}`
- **Image Base URL**: `https://image.tmdb.org/t/p/original/`

## 🎨 Key Components

### Header
- Fixed navigation bar with STREAMFLIX branding
- Navigation links (Home, Movies, My List)

### HeroBanner
- Large backdrop image from featured movie
- Movie title and description
- Play and More Info buttons
- Responsive gradient overlays

### MovieRow
- Horizontal scrolling container
- Movie posters with hover effects
- Click to navigate to detail page

### Movie Detail Page
- Full movie information display
- Backdrop and poster images
- Release year, runtime, genres
- Rating and vote count
- Back button for navigation

## 🚀 Deployment

This application is deployed on Vercel:

**Live URL**: [https://storybit-streaming-dashboard.vercel.app](https://storybit-streaming-dashboard.vercel.app)

### Deploy Your Own

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `TMDB_API_KEY` with your API key
4. Deploy (Vercel will auto-deploy on every push)

## 📝 License

This project is created for educational purposes as part of the StoryBit Frontend Developer Assignment.

## 🙏 Acknowledgments

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with [Next.js](https://nextjs.org/) by Vercel
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

**GitHub**: [DeviSreePrasad-N-20](https://github.com/DeviSreePrasad-N-20)

---

**Note**: This application uses the TMDB API but is not endorsed or certified by TMDB.





