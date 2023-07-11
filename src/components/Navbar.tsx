import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [links] = useState([
    { href: "#projects", title: "projects" },
    { href: "#contacts", title: "contacts" },
    { href: "#about", title: "about" },
    { href: "#resume", title: "resume" },
    { href: "https://github.com/aaltoo", title: "github" },
  ]);

  const [isAsideNavbarOpen, setIsAsideNavbarOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  function openNavbar() {
    setIsAsideNavbarOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeNavbar() {
    setIsAsideNavbarOpen(false);
    document.body.style.overflow = "visible";
  }

  function handleBurgerMenuClick() {
    isAsideNavbarOpen ? closeNavbar() : openNavbar();
  }

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <>
      <header
        w-h="14 sm:16 md:20 lg:24 xl:28 2xl:32"
        w-bg="gray-200 dark:gray-800"
        w-display="flex"
      >
        <nav
          w-display="hidden sm:flex"
          w-flex="justify-center"
          w-h="14 sm:16 md:20 lg:24 xl:28 2xl:32"
          w-w="screen"
        >
          {links.map((link) => {
            return (
              <a
                key={link.title}
                href={link.href}
                w-w="sm:1/5"
                w-display="flex sm:justify-center items-center"
                w-bg="hover:white focus:white"
                w-text="white hover:black focus:black"
                w-transform="transition duration-500 ease-in-out"
                w-p="4"
              >
                {link.title}
              </a>
            );
          })}
        </nav>
        <button w-display="sm:hidden" onClick={handleBurgerMenuClick}>
          <svg
            aria-hidden="true"
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 ml-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </header>
      <div
        w-h="d-screen"
        w-w="screen"
        w-bg="white dark:gray-800"
        w-right={isAsideNavbarOpen ? "0" : "full"}
        className="absolute sm:hidden top-0 z-10 transition-all duration-350 flex flex-col"
      >
        <div className="h-14 flex w-full justify-between items-center">
          <h2 className="pl-4 text-xl font-bold">Stanislav Pavlov</h2>
          <button onClick={handleBurgerMenuClick}>
            <svg
              aria-hidden="true"
              fill="none"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              className="w-8 h-8 mr-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col h-full justify-between">
          <nav>
            {links.map((link) => {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  w-w="sm:1/5"
                  w-display="flex sm:justify-center items-center"
                  w-bg="hover:white focus:white"
                  w-text="white hover:black focus:black"
                  w-transform="transition duration-500 ease-in-out"
                  w-p="4"
                  onClick={closeNavbar}
                >
                  {link.title}
                </a>
              );
            })}
          </nav>
          <div className="p-4 flex flex-col gap-4 ">
            <button className="text-white text-left">
              Switch to Russian 🇷🇺
            </button>
            <button className="text-white text-left" onClick={toggleTheme}>
              {theme === "dark"
                ? "Enable light theme ☀️"
                : "Enable dark theme 🌑"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
