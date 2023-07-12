import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setDark, setLight } from "../features/themeSlice";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const [links] = useState([
    { href: "#projects", title: "projects" },
    { href: "#contacts", title: "contacts" },
    { href: "#about", title: "about" },
    { href: "#resume", title: "resume" },
    { href: "https://github.com/aaltoo", title: "github" },
  ]);

  const [isAsideNavbarOpen, setIsAsideNavbarOpen] = useState(false);

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
      dispatch(setLight());
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      dispatch(setDark());
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <>
      <header
        w-h="14 sm:16 md:20"
        w-bg="gray-100 dark:gray-800"
        w-display="flex justify-between items-center"
        w-p="x-4"
      >
        <h2 className="text-xl font-bold">Stanislav Pavlov</h2>
        <span w-display="hidden md:flex items-center gap-4">
          <nav
            w-display="flex"
            w-h="14 sm:16 md:20"
            className="justify-end items-center gap-4 "
          >
            {links.map((link) => {
              return (
                <a
                  key={link.title}
                  href={link.href}
                  w-display="flex justify-center items-center"
                  w-bg="hover:white focus:white"
                  w-text="white hover:black focus:black"
                  w-transform="transition duration-500 ease-in-out"
                  w-h="fit"
                  w-border="rounded-full"
                  w-p="3 md:4"
                >
                  {link.title}
                </a>
              );
            })}
          </nav>
          <button className="text-white text-left text-2xl">🇷🇺</button>
          <button
            className="text-white text-left text-2xl"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "☀️" : "🌑"}
          </button>
        </span>
        <button w-display="md:hidden" onClick={handleBurgerMenuClick}>
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
        w-display="flex flex-col"
        w-bg="white dark:gray-800"
        w-right={isAsideNavbarOpen ? "0" : "full"}
        w-transform="transition-all duration-350"
        className="absolute sm:hidden top-0 z-10"
      >
        <div
          w-w="full"
          w-h="15"
          w-display="flex justify-between items-center"
          w-bg="gray-100 dark:gray-800"
        >
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
        <div w-h="full" w-display="flex flex-col justify-between">
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
          <div w-p="4" w-display="flex flex-col gap-4">
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
