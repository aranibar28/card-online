import { HomeLayout, ClientLayout, BasicLayout } from "../layouts";
import {
  Home,
  SelectTable,
  Categories,
  Products,
  Cart,
  OrdersHistory,
} from "../pages/Client";

const routesClient = [
  {
    path: "/",
    layout: HomeLayout,
    component: Home,
    exact: true,
  },
  {
    path: "/client",
    layout: BasicLayout,
    component: SelectTable,
    exact: true,
  },
  {
    path: "/client/:tableNumber",
    layout: ClientLayout,
    component: Categories,
    exact: true,
  },
  {
    path: "/client/:tableNumber/cart",
    layout: ClientLayout,
    component: Cart,
    exact: true,
  },
  {
    path: "/client/:tableNumber/orders",
    layout: ClientLayout,
    component: OrdersHistory,
    exact: true,
  },
  {
    path: "/client/:tableNumber/:idCategory",
    layout: ClientLayout,
    component: Products,
    exact: true,
  },
];

export default routesClient;
