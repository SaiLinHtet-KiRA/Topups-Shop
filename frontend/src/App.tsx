import { Outlet } from "react-router";
import NavgiationBar from "./components/NavgiationBar";
import TabBar from "./components/TabBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  console.log("app");
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // tells Telegram the app is ready
      console.log(tg.initDataUnsafe);
      setUser(tg.initDataUnsafe?.user || null);
    }
  }, []);

  return (
    <>
      <NavgiationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TabBar />
    </>
  );
}
