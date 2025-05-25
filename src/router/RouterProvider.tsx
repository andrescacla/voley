import {
  createBrowserRouter,
} from "react-router";
import { RegisterPage, HomePage, CollectsStatistcsPage } from "../pages";

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
    path: "/collects-statistics",
    element: <CollectsStatistcsPage />,
  },
  
], {
  basename: '/voley/',
});

export default router;


