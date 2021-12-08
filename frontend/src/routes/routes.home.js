import { HomeLayout } from "../layouts/HomeLayout";
import { Home, About, Services } from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: HomeLayout,
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    layout: HomeLayout,
    component: About,
    exact: true,
  },
  {
    path: "/services",
    layout: HomeLayout,
    component: Services,
    exact: true,
  },
];

export default routesClient;
