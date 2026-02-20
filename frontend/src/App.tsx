import { Outlet } from "react-router";
import NavgiationBar from "./components/Navgiation/NavgiationBar";
import TabBar from "./components/Navgiation/TabBar";
import { useEffect } from "react";
import Footer from "./components/Footer";
import {
  useGetAccountInfoQuery,
  useTelegramLoginMutation,
} from "@/redux/api/auth";

export default function App() {
  const [telegramLogin] = useTelegramLoginMutation();
  const { data } = useGetAccountInfoQuery();

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      const initData = tg.initData;
      console.log(initData);
      telegramLogin(initData);
    }
  }, []);

  if (!data) {
    return <>this app is only work on telegram</>;
  }
  return (
    <>
      <NavgiationBar />
      <main className="main-page-wrapper">
        <Outlet />
      </main>
      <Footer />
      <TabBar />
    </>
  );
}
