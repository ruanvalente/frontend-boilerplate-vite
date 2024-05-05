import { BiExit, BiMap } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';

type SidebarProps = {
  toggleSidebar: () => void;
  expanded: boolean;
};

export function Sidebar({ toggleSidebar, expanded }: SidebarProps) {
  return (
    <aside
      id="separator-sidebar"
      className={`left-0 top-0 z-40 h-screen w-64 transition-transform md:inline-flex ${
        expanded
          ? 'flex translate-x-0'
          : 'hidden  -translate-x-full sm:translate-x-0'
      }`}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col justify-between">
        <div
          className="overflow-y-autopx-3 h-full bg-[#222] py-4 md:w-[100px]"
          onClick={toggleSidebar}
        >
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <div className="divide-y divide-yellow-300">
                <div></div>
                <NavLink
                  to="/"
                  className="group flex items-center p-2 text-white hover:bg-gray-900 active:text-yellow-300 md:justify-center"
                >
                  <BiMap />
                  <span className="ms-3 w-[100px] flex-1 truncate text-ellipsis whitespace-nowrap md:hidden">
                    Qualificação de viabilidade
                  </span>
                </NavLink>
                <div></div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="w-full divide-y divide-yellow-300 bg-[#222]  py-4"
          onClick={toggleSidebar}
        >
          <div></div>
          <div className="group flex items-center p-2 text-white transition duration-75 hover:bg-gray-900 md:justify-center">
            <BiExit />
          </div>
          <div></div>
        </div>
      </div>
    </aside>
  );
}
