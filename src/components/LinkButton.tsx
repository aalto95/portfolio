import React from "react";

interface LinkButtonProps {
  href?: string;
  className?: string;
  children: any;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      w-display="flex items-center gap-2"
      w-p="4"
      w-m="2"
      w-border="2 gray-800 hover:gray-800 focus:gray-800 dark:hover:white dark:focus:white"
      w-transform="transition ease-in-out duration-500"
      w-bg="hover:gray-800 focus:gray-800 dark:hover:white dark:focus:white"
      w-text="dark:white center hover:white focus:white dark:hover:black dark:focus:black"
      w-outline="none"
      href={href}
      className={className}
    >
      {children}
    </a>
  );
};

export default LinkButton;
