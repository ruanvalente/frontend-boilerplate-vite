import { useSessionStore } from '@/store';
import { useEffect, useRef, useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

type HeaderProps = {
  toggleSidebar: () => void;
};

export function Header({ toggleSidebar }: HeaderProps) {
  const [userSettingsExpand, setUserSettingsExpand] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { username, profile } = useSessionStore();

  const toggleUserSettings = () => {
    setUserSettingsExpand(!userSettingsExpand);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setUserSettingsExpand(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#222]">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div
            ref={headerRef}
            className="flex items-center justify-start rtl:justify-end"
          >
            <button
              onClick={toggleSidebar}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="#" className="ms-2 flex md:me-24">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white sm:text-2xl">
                Logo
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="ms-3 flex items-center">
              <div>
                <button
                  type="button"
                  className="flex text-sm"
                  aria-expanded="false"
                  onClick={toggleUserSettings}
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="flex items-center text-white">
                    <p className="flex items-center gap-3">
                      Hello, {username}
                      <span>
                        {userSettingsExpand ? <BiUpArrow /> : <BiDownArrow />}
                      </span>
                    </p>
                  </div>
                </button>
              </div>

              {userSettingsExpand && (
                <div className="relative ">
                  <div
                    className="absolute right-4 top-4 z-50 w-52 list-none divide-y divide-gray-100 rounded bg-white text-base shadow transition-all duration-500 dark:divide-gray-600 dark:bg-gray-700"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        {username}
                      </p>
                      <p
                        className="mt-2 truncate text-sm font-medium text-gray-900 dark:text-gray-300"
                        role="none"
                      >
                        <span>Profile: {profile}</span>
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
