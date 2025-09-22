import { configureStore } from "@reduxjs/toolkit";
import listMovieReducer from "../BookMovie/HomtTemplate/ListMovie/slice";
import DetailReducer from "../BookMovie/HomtTemplate/Detail/slice";
const store = configureStore({
  reducer: {
    // include các reducer con
    listMovieReducer,
    DetailReducer,
  },
});
export default store;
