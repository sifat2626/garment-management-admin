import {
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiOutlineViewGrid,
  HiOutlineArchive, // Icon for inventory
  HiOutlineChartBar, // Icon for reports
  HiOutlineTruck, // Icon for suppliers
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUser />,
  },
  {
    key: "inventory",
    label: "Inventory Management",
    path: "/inventory",
    icon: <HiOutlineArchive />,
  },
  {
    key: "reports",
    label: "Reports & Analytics",
    path: "/reports",
    icon: <HiOutlineChartBar />,
  },
  {
    key: "suppliers",
    label: "Suppliers",
    path: "/suppliers",
    icon: <HiOutlineTruck />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "#",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Support",
    path: "#",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
