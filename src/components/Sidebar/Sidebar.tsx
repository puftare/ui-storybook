import { FC, createContext, useState, Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { SidebarItem } from "./SidebarItem";

export interface SidebarContextProps {
  expanded?: boolean;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>({
  expanded: true,
});

type NavigationMenuItem = {
  text: string;
  icon?: string | JSX.Element;
  active?: boolean;
};

export interface SidebarProps {
  items?: NavigationMenuItem[];
  collapsible?: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ items, collapsible = true }) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <Transition show={sidebarOpen}>
        <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              enter="transition ease-in-out duration-500 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-500 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center justify-center">
                    <img
                      className="h-8 w-auto"
                      src="https://img.logoipsum.com/243.svg"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="-mx-2 flex-1 space-y-1">
                      {items?.map((item, index) => {
                        return (
                          <SidebarItem
                            icon={item.icon}
                            text={item.text}
                            active={item.active}
                            key={index}
                          />
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div className="sticky flex items-center gap-x-6 border-b shadow bg-white px-4 py-4">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6" />

        <a href="/">
          <img
            className="h-8 w-8 rounded-full bg-gray-800"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>

      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col -ml-4 relative">
        <nav className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-2 pb-4">
          <div className={`h-16 flex items-center px-2 justify-center`}>
            <img
              src={`${expanded ? "https://img.logoipsum.com/243.svg" : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"}`}
              className={`overflow-hidden transition-all duration-500 ${
                expanded ? "w-32" : "w-10"
              }`}
              alt=""
            />
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className={`${collapsible ? "p-2 rounded-lg bg-gray-200 hover:bg-gray-100 absolute -right-4 bottom-[50%] z-50" : "hidden"}`}
            >
              {expanded ? (
                <ChevronFirst size={20} />
              ) : (
                <ChevronLast size={20} />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-2">
              {items?.map((item, index) => {
                return (
                  <SidebarItem
                    icon={item.icon}
                    text={item.text}
                    active={item.active}
                    key={index}
                  />
                );
              })}
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-2">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`
              flex justify-between items-center
              overflow-hidden transition-all duration-500 ${expanded ? "w-52 ml-3" : "w-0"}
          `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </Fragment>
  );
};
