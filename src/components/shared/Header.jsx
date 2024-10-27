import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";

function Header() {
  return (
    <div className="h-16 px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pr-4 pl-11"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover>
          {({ open }) => (
            <>
              {" "}
              <PopoverButton
                className={`${
                  open && "bg-gray-200"
                } p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-200`}
              >
                <HiOutlineChatAlt fontSize={24} />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className={`divide-y divide-white/5 ring-1 ring-black ring-opacity-5 px-2 py-2.5 bg-white rounded-sm shadow-md text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0`}
              >
                <strong className="to-gray-700 font-medium">messages</strong>
                <div className="mt-2 py-1 text-sm">
                  <p>this is messages panel</p>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
        <Popover>
          {({ open }) => (
            <>
              {" "}
              <PopoverButton
                className={`${
                  open && "bg-gray-200"
                } p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-200`}
              >
                <HiOutlineBell fontSize={24} />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className={`divide-y divide-white/5 ring-1 ring-black ring-opacity-5 px-2 py-2.5 bg-white rounded-sm shadow-md text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0`}
              >
                <strong className="to-gray-700 font-medium">
                  notifications
                </strong>
                <div className="mt-2 py-1 text-sm">
                  <p>this is notifications panel</p>
                </div>
              </PopoverPanel>
            </>
          )}
        </Popover>
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 bg-gray-200 rounded-full active:ring-2">
            <div className="">
              <img
                src="https://i.ibb.co/k584W1s/male2-1.jpg"
                alt=""
                className="size-8 rounded-full object-center object-cover"
              />
            </div>
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="flex flex-col bg-white mt-1 px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <MenuItem className={`text-left`}>
              <button>Your Profile</button>
            </MenuItem>
            {/* <MenuItem>
              <button onClick={() => navigate("/settings")}>Settings</button>
            </MenuItem> */}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
