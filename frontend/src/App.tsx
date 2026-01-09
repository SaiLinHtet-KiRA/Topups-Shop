import { Outlet } from "react-router";
import NavgiationBar from "./components/NavgiationBar";
import TabBar from "./components/TabBar";
import { useLayoutEffect } from "react";
import Footer from "./components/Footer";
import { useTelegramLoginMutation } from "./redux/api/auth";

export default function App() {
  const [telegramLogin] = useTelegramLoginMutation();
  console.log("app");
  // useEffect(() => {
  //   if (window.Telegram?.WebApp) {
  //     const tg = window.Telegram.WebApp;
  //     tg.ready(); // tells Telegram the app is ready
  //     console.log(tg.initDataUnsafe);
  //     setUser(tg.initDataUnsafe?.user || null);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (window.Telegram?.WebApp) {
  //     const tg = window.Telegram.WebApp;
  //     tg.ready();

  //     telegramLogin(tg.initDataUnsafe?.user.id);

  //   }
  // }, []);
  useLayoutEffect(() => {
    telegramLogin("asdas");
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
