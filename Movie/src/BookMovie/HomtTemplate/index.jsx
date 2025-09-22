import Navbar from "./_components/Navbar";
import { Outlet } from "react-router-dom";
export default function HomeTemplate() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
