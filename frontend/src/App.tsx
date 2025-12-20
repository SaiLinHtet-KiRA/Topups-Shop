import { Outlet } from "react-router";
import NavgiationBar from "./components/NavgiationBar";
import TabBar from "./components/TabBar";
import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // tells Telegram the app is ready
      console.log(tg.initDataUnsafe);
      setUser(tg.initDataUnsafe?.user || null);
    }
  }, []);
  if (!user) return <div>No user data</div>;

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
