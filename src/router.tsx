import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/About";
import Home from "./pages/Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

export default router;
