import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FilmSearch = ({ movie }) => {
  return (
    <div
      className="card text-[#fff] rounded-lg border border-gray-700 overflow-hidden 
        transition-all duration-300 ease-in-out mb-10
        hover:scale-105 hover:shadow-lg hover:shadow-[#E50914]/50 
        hover:border-[#E50914] hover:z-10 relative group"
    >
      <div className="relative">
        <img
          className="h-[420px] w-full object-cover transition-opacity duration-300 group-hover:opacity-70"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 
            flex flex-col justify-center items-center p-4 transition-all duration-300"
        >
          <h3 className="text-xl font-bold mb-2 text-center">{movie.title}</h3>
          <p className="text-sm text-gray-300 text-center line-clamp-3">
            {movie.overview || "No description available"}
          </p>
          <div className="mt-4 flex gap-4">
            <span className="bg-[#E50914] px-3 py-1 rounded-full text-sm">
              {movie.vote_average.toFixed(1)} ★
            </span>
            <span className="bg-[#1A237E] px-3 py-1 rounded-full text-sm">
              {movie.release_date.slice(0, 4)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#0F0F0F]">
        <div className="title font-semibold truncate">{movie.title}</div>
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-[#E0E0E0]">
            {movie.release_date?.slice(0, 4)}
          </span>
          <span className="text-[#E50914] font-bold">
            {movie.vote_average?.toFixed(1)} ❤️
          </span>
        </div>
      </div>
    </div>
  );
};
