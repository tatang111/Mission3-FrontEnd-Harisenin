import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "./services/api";

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [detailClickingSeries, setDetailClickingSeries] = useState(false);
  const [detailClickingFilm, setDetailClickingFilm] = useState(false);
  const [versiPembayaran, setVersiPembayaran] = useState(null);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreateMovie = () => {
    setAllMovies(prevMovies => ({}))
  }

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/movie");
        setAllMovies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, []);

  return (
    <PopupContext.Provider
      value={{
        allMovies,
        setAllMovies,
        loading,
        detailClickingSeries,
        setDetailClickingSeries,
        detailClickingFilm,
        setDetailClickingFilm,
        versiPembayaran,
        setVersiPembayaran,
        isSubscribe,
        setIsSubscribe,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
