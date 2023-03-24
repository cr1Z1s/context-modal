import Home from "../pages/home";
import PageOne from "../pages/page-one";
import PageThree from "../pages/page-three";
import PageTwo from "../pages/page-two";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page-one",
    element: <PageOne />,
  },
  {
    path: "/page-two",
    element: <PageTwo />,
  },
  {
    path: "/page-three",
    element: <PageThree />,
  },
];
