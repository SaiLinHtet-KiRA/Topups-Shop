import { Outlet } from "react-router";
import NavgiationBar from "./components/Navgiation/NavgiationBar";
import TabBar from "./components/Navgiation/TabBar";
import { useEffect } from "react";
import Footer from "./components/Footer";
import {
  useGetAccountInfoQuery,
  useTelegramLoginMutation,
} from "@/redux/api/auth";
import { ToastContainer } from "react-toastify";
import WholePageLoader from "./components/ui/loading/WholePageLoader";
import OpenOnTg from "./components/ui/error/OpenOnTg";

export default function App() {
  const [telegramLogin] = useTelegramLoginMutation();
  const { data, isLoading } = useGetAccountInfoQuery();

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      const initData = tg.initData;
      console.log(initData);
      telegramLogin(initData);
    }
  }, []);

  if (isLoading) {
    return <WholePageLoader />;
  }
  if (!data) {
    return <OpenOnTg />;
  }
  return (
    <>
      <NavgiationBar />
      <main className="main-page-wrapper">
        <Outlet />
      </main>
      <Footer />
      <TabBar />
      <ToastContainer />
    </>
  );
}
