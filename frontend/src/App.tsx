import { Outlet } from "react-router";
import NavgiationBar from "./components/NavgiationBar";
import TabBar from "./components/TabBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  console.log("app");
  // useEffect(() => {
  //   if (window.Telegram?.WebApp) {
  //     const tg = window.Telegram.WebApp;
  //     tg.ready(); // tells Telegram the app is ready
  //     console.log(tg.initDataUnsafe);
  //     setUser(tg.initDataUnsafe?.user || null);
  //   }
  // }, []);
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();

      const user = tg.initDataUnsafe?.user;

      console.log(user);
      /*
      {
        id: 123456789,
        first_name: "John",
        last_name: "Doe",
        username: "johndoe",
        language_code: "en",
        photo_url: "https://t.me/i/userpic/..."
      }
    */

      // Send initData to backend
      fetch("https://424nhtsn-4000.asse.devtunnels.ms/auth/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          initData: tg.initData,
        }),
      });
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
