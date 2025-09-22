import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTemplate from "./BookMovie/HomtTemplate";
import HomePage from "./BookMovie/HomtTemplate/HomePage";
import AboutPage from "./BookMovie/HomtTemplate/Aboutpage";
import ListMovie from "./BookMovie/HomtTemplate/ListMovie";
import AdminTemplate from "./BookMovie/AdminTemplate";
import AddUser from "./BookMovie/AdminTemplate/AddUser";
import Dasboard from "./BookMovie/AdminTemplate/Dasboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HomeTemplate  */}
          <Route path="" element={<HomeTemplate />}>
            <Route path="" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="list-movie" element={<ListMovie />} />
          </Route>
          {/* AdminTemplate  */}
          <Route path="admin" element={<AdminTemplate />}>
            <Route path="dasboard" element={<Dasboard />} />
            <Route path="adduser" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
