import { BiExit, BiHelpCircle, BiHomeAlt, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

type SidebarProps = {
  toggleSidebar: () => void;
  expanded: boolean;
};

export function Sidebar({ toggleSidebar, expanded }: SidebarProps) {
  return (
    <aside
      id="separator-sidebar"
      className={`left-0 top-0 z-40 h-screen w-64 transition-transform md:flex ${
        expanded
          ? 'flex translate-x-0'
          : 'hidden  -translate-x-full sm:translate-x-0'
      }`}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col justify-between">
        <div
          className="h-full overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-[#222]"
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
              <Link
                to="/"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <BiHomeAlt />
                <span className="ms-3 flex-1 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <BiUserCircle />
                <span className="ms-3 flex-1 whitespace-nowrap">Contact</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <BiHelpCircle />
                <span className="ms-3 flex-1 whitespace-nowrap">About</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 px-3 py-4 dark:bg-[#222]">
          <a
            href="#"
            className="group flex items-center rounded-lg p-2 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <BiExit />
            <span className="ms-3">Sign Out</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
