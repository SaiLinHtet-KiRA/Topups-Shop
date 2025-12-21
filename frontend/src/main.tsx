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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/games" element={<Home />} />
      <Route path="/search" element={<Home />} />
      <Route path="/profile" element={<Home />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
