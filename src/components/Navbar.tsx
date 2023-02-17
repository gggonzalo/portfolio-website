import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderThemeChangerButton = () => {
    if (!isMounted)
      return (
        <button
          aria-label="Light/Dark mode toggler placeholder"
          title="Light/Dark mode toggler placeholder"
          className="rounded-full p-2"
        >
          <svg className="h-5 w-5"></svg>
        </button>
      );

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark")
      return (
        <button
          aria-label="Activate light mode"
          title="Activate light mode"
          className="transition-[background-color] duration-500 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-2"
          onClick={() => setTheme("light")}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-slide-in-top h-5 w-5"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z"></path>
            </g>
          </svg>
        </button>
      );
    else
      return (
        <button
          aria-label="Activate dark mode"
          title="Activate dark mode"
          className="transition-[background-color] duration-500 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-full p-2"
          onClick={() => setTheme("dark")}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-slide-in-bottom h-5 w-5"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path d="M11.75 5.5C11.1977 5.5 10.75 5.05228 10.75 4.5V2C10.75 1.44772 11.1977 1 11.75 1H12.25C12.8023 1 13.25 1.44772 13.25 2V4.5C13.25 5.05228 12.8023 5.5 12.25 5.5H11.75Z"></path>
              <path d="M16.4194 7.22698C16.0289 6.83646 16.0289 6.20329 16.4194 5.81277L18.1872 4.045C18.5777 3.65447 19.2109 3.65447 19.6014 4.045L19.9549 4.39855C20.3455 4.78908 20.3455 5.42224 19.9549 5.81277L18.1872 7.58053C17.7967 7.97106 17.1635 7.97106 16.773 7.58053L16.4194 7.22698Z"></path>
              <path d="M18.5 11.75C18.5 11.1977 18.9477 10.75 19.5 10.75H22C22.5523 10.75 23 11.1977 23 11.75V12.25C23 12.8023 22.5523 13.25 22 13.25H19.5C18.9477 13.25 18.5 12.8023 18.5 12.25V11.75Z"></path>
              <path d="M16.7728 16.4194C17.1633 16.0289 17.7965 16.0289 18.187 16.4194L19.9548 18.1872C20.3453 18.5777 20.3453 19.2109 19.9548 19.6014L19.6012 19.9549C19.2107 20.3455 18.5775 20.3455 18.187 19.9549L16.4192 18.1872C16.0287 17.7967 16.0287 17.1635 16.4192 16.773L16.7728 16.4194Z"></path>
              <path d="M12.25 18.5C12.8023 18.5 13.25 18.9477 13.25 19.5V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V19.5C10.75 18.9477 11.1977 18.5 11.75 18.5H12.25Z"></path>
              <path d="M7.58059 16.773C7.97111 17.1635 7.97111 17.7967 7.58059 18.1872L5.81282 19.955C5.4223 20.3455 4.78913 20.3455 4.39861 19.955L4.04505 19.6014C3.65453 19.2109 3.65453 18.5778 4.04505 18.1872L5.81282 16.4195C6.20334 16.0289 6.83651 16.0289 7.22703 16.4195L7.58059 16.773Z"></path>
              <path d="M5.5 12.25C5.5 12.8023 5.05228 13.25 4.5 13.25H2C1.44772 13.25 1 12.8023 1 12.25V11.75C1 11.1977 1.44772 10.75 2 10.75H4.5C5.05228 10.75 5.5 11.1977 5.5 11.75V12.25Z"></path>
              <path d="M7.22722 7.58059C6.8367 7.97111 6.20353 7.97111 5.81301 7.58059L4.04524 5.81282C3.65472 5.4223 3.65472 4.78913 4.04524 4.39861L4.3988 4.04505C4.78932 3.65453 5.42248 3.65453 5.81301 4.04505L7.58078 5.81282C7.9713 6.20334 7.9713 6.83651 7.58078 7.22703L7.22722 7.58059Z"></path>
              <path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"></path>
            </g>
          </svg>
        </button>
      );
  };

  return (
    <nav className="flex flex-col md:flex-row md:items-center justify-between transition-[background-color,border-color] duration-500 bg-white dark:bg-black border-b-2 border-slate-200 md:border-b-0 dark:border-slate-600 p-4">
      {/* TODO: Check hrefs  */}
      <div className="flex items-center justify-between md:mb-0">
        <Link href="/" className="md:text-lg font-semibold tracking-wide">
          GONZALO GONZÁLEZ
        </Link>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-8 w-8"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"></path>
          </svg>
        </button>
      </div>
      <div
        className={
          "top-full flex flex-col md:flex-row items-center overflow-hidden" +
          " " +
          (!isOpen ? "h-0 md:h-auto" : "h-auto mt-4") +
          " " +
          " md:mt-0"
        }
      >
        <div className="flex flex-col md:flex-row items-center gap-4 mb-10 md:mb-0 md:mr-10">
          <Link href="/" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          {/* <Link href="/about">About</Link> */}
          <Link href="/#projects" onClick={() => setIsOpen(false)}>
            PROJECTS
          </Link>
        </div>
        {/* TODO: Internationalization and show just 2 of the 4 buttons  */}
        <div className="flex items-center justify-center md:justify-start gap-1">
          {renderThemeChangerButton()}
          {/* <button
            aria-label="Set language to Spanish"
            title="Set language to Spanish"
            className="transition-[background-color] duration-500 hover:bg-slate-200 dark:hover:bg-slate-600 text-sm rounded-full p-2"
          >
            ESP
          </button>
          <button
            aria-label="Set language to English"
            title="Set language to English"
            className="transition-[background-color] duration-500 hover:bg-slate-200 dark:hover:bg-slate-600 text-sm rounded-full p-2"
          >
            ENG
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
