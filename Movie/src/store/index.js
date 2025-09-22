import { configureStore } from "@reduxjs/toolkit";
import listMovieReducer from "../BookMovie/HomtTemplate/ListMovie/slice";
import DetailReducer from "../BookMovie/HomtTemplate/Detail/slice";
import AuthReducer from "../BookMovie/AdminTemplate/AuthPage/slice";
const store = configureStore({
  reducer: {
    // include các reducer con
    listMovieReducer,
    DetailReducer,
    AuthReducer,
  },
});
export default store;
