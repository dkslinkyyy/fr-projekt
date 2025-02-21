import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
