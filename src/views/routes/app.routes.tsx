import { Navigate, Outlet, type RouteObject } from "react-router-dom";
import { Home } from "../content/home/home.tsx";
import { Layout } from "../layout";
import { Auth } from "../content/auth/auth.tsx";
import { Basket } from "../content/basket/basket.tsx";
import { MenuPage } from "../content/menu/menu.tsx";
import { Delivery } from "../content/delivery/delivery.tsx";
import { Reviews } from "../content/reviews/reviews.tsx";
import { Contact } from "../content/contact/contact.tsx";

export const appRoutesDefinition: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "*",
        element: <div />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/main",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
];
