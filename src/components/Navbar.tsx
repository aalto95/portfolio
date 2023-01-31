import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [links] = useState([
    { href: "#projects", title: "projects" },
    { href: "#contacts", title: "contacts" },
    { href: "#about", title: "about" },
    { href: "#resume", title: "resume" },
    { href: "https://github.com/aaltoo", title: "github" },
  ]);
  return (
    <nav
      w-display="grid grid-cols-5"
      w-h="14 sm:16 md:20 lg:24 xl:28 2xl:32"
      w-bg="gray-800"
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
          >
            {link.title}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
