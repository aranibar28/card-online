import { HomeMenu } from "../components/Home/HomeMenu";
import { Home, About, Services } from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: HomeMenu,
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    layout: HomeMenu,
    component: About,
    exact: true,
  },
  {
    path: "/services",
    layout: HomeMenu,
    component: Services,
    exact: true,
  },
];

export default routesClient;
