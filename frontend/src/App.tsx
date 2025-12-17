import { Outlet } from "react-router";
import NavgiationBar from "./components/NavgiationBar";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <>
      <NavgiationBar />
      <main>
        <Outlet />
      </main>
      {/* <TabBar /> */}
    </>
  );
}
