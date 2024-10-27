/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  console.log(item);
  return (
    <Link
      to={item.path}
      className={`flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ${
        pathname === item.path
          ? "text-neutral-100 bg-neutral-700"
          : "text-neutral-400"
      }`}
    >
      <span>{item.icon}</span>
      {item.label}
    </Link>
  );
}

export default SidebarLink;
