import { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../services/api";

export const useGetMovie = (filterCondition) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/movie");
        const data = filterCondition
          ? filterCondition(response.data)
          : response.data;
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, []);

  return {
    movies,
    loading,
    scrollContainerRef,
  };
};
