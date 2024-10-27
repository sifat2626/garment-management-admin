import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import InventoryManagement from "../pages/Inventory";
import Reports from "../pages/Reports";
import SuppliersPage from "../pages/Suppliers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/inventory",
        element: <InventoryManagement />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/suppliers",
        element: <SuppliersPage />,
      },
    ],
  },
]);

export default router;
