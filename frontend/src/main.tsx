import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home.tsx";
import Games from "./pages/Game/Games.tsx";
import Recharge from "./pages/Recharge.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import Game from "./pages/Game/Game.tsx";
import Profile from "./pages/profile/Profile.tsx";
import Histroy from "./pages/profile/Histroy.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/games/:id" element={<Game />} />
      <Route path="/recharge" element={<Recharge />} />
      <Route path="/profile">
        <Route path="" element={<Profile />} index />
        <Route path="recharge" element={<Profile />} />
        <Route path="topups" element={<Profile />} />
        <Route path="history" element={<Histroy />} />
      </Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
