import { useGetMovie } from "../hooks/useGetMovie";
import { PotraitCard } from "./PotraitCard";
import { TopTen } from "./TopTen";

export const RekomendasiSerupa = () => {
  const { loading, movies, scrollContainerRef } = useGetMovie((prevMovies) =>
    prevMovies.filter((movie) => movie.id < 4).map(movie => ({...movie, premium: false}))
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white px-4 md:px-20 gap-6 md:gap-8 grid">
      <h1 className="text-3xl font-[600]">Rekomendasi Serupa</h1>
      <div className="flex gap-1 -ml-3 md:gap-5 ">
        {movies.map((movie) => (
          <PotraitCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
