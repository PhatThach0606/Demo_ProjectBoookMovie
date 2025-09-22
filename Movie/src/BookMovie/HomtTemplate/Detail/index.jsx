import { fetchDataMovie } from "./slice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Details() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.DetailReducer);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDataMovie(id));
  }, [id]);

  return (
    <div>
      <h1 className="mt-50 text-center">{state.data?.tenPhim}</h1>
    </div>
  );
}
