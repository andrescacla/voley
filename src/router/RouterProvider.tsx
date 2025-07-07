import {
  createBrowserRouter,
} from "react-router";
import { RegisterPage, HomePage, VolleyballCourt  } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/volleyball_court",
    element: <VolleyballCourt />,
  },
  
], {
  basename: '/voley/',
});

export default router;


