import { Outlet } from "react-router";
import NavgiationBar from "./components/NavgiationBar";

export default function App() {
  return (
    <main>
      <NavgiationBar />
      <Outlet />
    </main>
  );
}
