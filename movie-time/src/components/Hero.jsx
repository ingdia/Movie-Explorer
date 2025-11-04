import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

function Hero() {
  // Track which movie slide is active
  const [currentSlide, setCurrentSlide] = useState(0);

  // Controls auto-play behavior (pause when user interacts)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const trendingMovies = [
    {
      id: 1,
      title: "Encanto",
      genre: "Animation / Family / Fantasy",
      language: "English",
      date: "November 2021",
      rating: "8.2",
      description:
        "In a magical house in Colombia, a young girl discovers she is the only member of her family without powers and must save them.",
      image:
        "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    },
    {
      id: 2,
      title: "Spider-Man: Across the Spider-Verse",
      genre: "Animation / Action / Adventure",
      language: "English",
      date: "June 2023",
      rating: "9.0",
      description:
        "Miles Morales returns for another multiverse-spanning adventure, meeting new Spider-heroes and facing powerful threats.",
      image:
        "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    },
  ];

  // Automatically cycle through slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, trendingMovies.length]);

  // Next / previous slide controls (also pauses auto-play)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingMovies.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trendingMovies.length) % trendingMovies.length);
    setIsAutoPlaying(false);
  };

  // Jump to specific slide (when clicking dots)
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentMovie = trendingMovies[currentSlide];

  return (
    <div className="relative w-full overflow-hidden bg-black pt-20">
      <div className="relative h-[70vh] md:h-[80vh]">

        {/* Background image with soft blur + parallax effect */}
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <img
            src={currentMovie.image}
            alt={currentMovie.title}
            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Foreground content container */}
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            
            {/* Movie details & text content */}
            <div key={currentMovie.id} className="space-y-6 animate-fade-in">

              {/* Genre pill + extra metadata */}
              <div className="flex items-center gap-3">
                <span className="bg-green-600/20 border border-green-600 text-green-400 px-4 py-1 rounded-full text-sm font-semibold">
                  {currentMovie.genre.split(' / ')[0]}
                </span>
                <span className="text-gray-400 text-sm">{currentMovie.language}</span>
                <span className="text-gray-400 text-sm">{currentMovie.date}</span>
              </div>

          
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                  {currentMovie.title}
                </span>
              </h1>

             
              <div className="flex items-center gap-2 pl-10">
                <Star size={24} className="text-amber-500 fill-amber-500" />
                <span className="text-3xl font-bold text-white">{currentMovie.rating}</span>
                <span className="text-gray-400 text-lg">/10</span>
              </div>

            
              <p className="text-gray-300 text-lg leading-relaxed">
                {currentMovie.description}
              </p>

              
              <div className="flex gap-4 pt-4">
                <Link to="/">
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-600/50 hover:scale-105">
                    <Play size={20} fill="white" />
                    Watch Now
                  </button>
                </Link>
                <Link to="/">
                  <button className="border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Explore More
                  </button>
                </Link>
              </div>
            </div>

            {/* Right column — movie poster preview */}
            <div className="hidden md:flex justify-center items-center">
              <div key={`poster-${currentMovie.id}`} className="relative group animate-slide-in">

                {/* Ambient glow behind poster */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Poster itself */}
                <div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-800 group-hover:border-green-600 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-2">
                  <img
                    src={currentMovie.image}
                    alt={currentMovie.title}
                    className="w-full h-[380px] md:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left/Right navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute border border-gray-800 left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-600 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute border border-gray-800 right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-600 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronRight size={28} />
        </button>

        {/* Slide dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {trendingMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-green-600 w-12 h-3'
                  : 'bg-white/30 hover:bg-white/50 w-3 h-3'
              }`}
            />
          ))}
        </div>

        {/* Progress bar when auto-sliding */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-600 animate-progress"
              style={{ animation: 'progress 5s linear' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
