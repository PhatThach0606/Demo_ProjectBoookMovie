import Movie from "./movie";
import { useSelector, useDispatch } from "react-redux";
import { FetchData } from "./slice";
import { useEffect } from "react";
export default function ListMovie() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.listMovieReducer);

  useEffect(() => {
    dispatch(FetchData());
  }, []);
  const { data, loading } = state;
  const RenderListMovie = () => {
    return data?.map((movie) => {
      return (
        <div key={movie.maPhim}>
          <Movie data={movie} />
        </div>
      );
    });
  };
  if (loading) {
    return <div className="text-center mt-50">Loading Movie</div>;
  }
  return (
    <div className="container mx-auto mt-30 grid grid-cols-4 gap-10 mb-10">
      {RenderListMovie()}
    </div>
  );
}
