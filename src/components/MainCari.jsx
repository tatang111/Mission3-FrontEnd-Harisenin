import axios from "axios";
import { FilmSearch } from "./FilmSearch";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const MainCari = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const baseUrl = import.meta.env.VITE_BASEURL_TMDB;
  const apiKey = import.meta.env.VITE_APIKEY_TMDB;

  const { data, isPending, error } = useQuery({
    queryKey: ["searchMovie"],
    queryFn: async () => {
      const response = await axios.get(
        `${baseUrl}/trending/movie/week?api_key=${apiKey}`
      );
      return response.data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search.length) return;
    const response = await axios.get(
      `${baseUrl}/search/movie?query=${search}&api_key=${apiKey}`
    );
    console.log(response);
    setMovies(response.data.results);
  };

  useEffect(() => {
    setMovies(data?.results);
  }, [data]);

  return (
    <div className="grid gap-7 mt-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto flex items-center gap-2 bg-white border border-orange-400 rounded-full px-4 py-2 shadow-sm"
      >
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Cari film favorit..."
          className="flex-1 bg-transparent outline-none text-sm md:text-base px-2 py-1"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full transition duration-300 text-sm md:text-base"
        >
          Cari
        </button>
      </form>

      <div className="w-9/10 mt-2 grid gap-8 sm:grid-cols-2 grid-cols-1 md:grid-cols-4 mx-auto pb-20">
        {error && <p>Failed to get Movie</p>}
        {isPending ? (
          <p>Loading...</p>
        ) : (
          movies?.map((movie) => <FilmSearch key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};
