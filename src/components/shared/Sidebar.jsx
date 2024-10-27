import { FcBullish } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/constants/Navigation";
import SidebarLink from "../SidebarLink";
import { HiOutlineLogout } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col text-neutral-100 w-60 ">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">GShopIn</span>
      </div>
      <h3 className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </h3>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div
          className={`flex text-red-500 items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base cursor-pointer`}
        >
          <span>
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
