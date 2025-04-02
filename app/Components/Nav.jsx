"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const hideNav = () => {
  document.getElementById("mobilenav").setAttribute("class", "hidden");
};

const Nav = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="text-2xl">
          Lasioweb <span className="text-4xl text-green-600">.</span>
        </div>
        <div
          onClick={() => {
            document
              .getElementById("mobilenav")
              .setAttribute(
                "class",
                "w-screen h-screen top-0 fixed z-10 bg-black"
              );
          }}
          className="absolute right-0 p-3"
        >
          <Menu className="w-12 h-12 md:hidden" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-3">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={`capitalize py-2 ${
                    link.path === pathname && "text-green-600 border-b-3"
                  }`}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="mobilenav" className="hidden">
        <div className="absolute right-0 pe-2 pt-1" onClick={hideNav}>
          <X className="w-12 h-12" />
        </div>
        <ul className="flex flex-col h-full gap-3 justify-center items-center">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className={`uppercase text-2xl py-2 ${
                  link.path === pathname && ""
                }`}
                href={link.path}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
