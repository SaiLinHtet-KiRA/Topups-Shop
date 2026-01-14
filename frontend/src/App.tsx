import { Outlet } from "react-router";
import NavgiationBar from "./components/NavgiationBar";
import TabBar from "./components/TabBar";
import { useEffect, useLayoutEffect } from "react";
import Footer from "./components/Footer";
import {
  useGetAccountInfoQuery,
  useTelegramLoginMutation,
} from "@/redux/api/auth";

export default function App() {
  const [telegramLogin] = useTelegramLoginMutation();
  const { data, isError, isFetching, isLoading } = useGetAccountInfoQuery();
  console.log("app");
  // useEffect(() => {
  //   if (window.Telegram?.WebApp) {
  //     const tg = window.Telegram.WebApp;
  //     tg.ready(); // tells Telegram the app is ready
  //     console.log(tg.initDataUnsafe);
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
    console.log("data", data);
    console.log("isFetching", isFetching);

    if (!data && !isFetching) {
      console.log("featch");
      telegramLogin("7253314643");
    }
  }, [data, isFetching]);
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
