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
    <div>
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
                "w-screen h-screen top-0 fixed z-10 bg-black text-white"
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
        <div
          className="absolute right-0 me-4 mt-3 flex items-center gap-3"
          onClick={hideNav}
        >
          <p className="text-xl">close</p>
          <X className="w-10 h-10" />
        </div>
        <ul className="flex flex-col h-full gap-5 justify-center items-center">
          {links.map((link, index) => (
            <li key={index} onClick={hideNav}>
              <Link
                className={`uppercase text-2xl py-2 ${
                  link.path === pathname && "text-gray-400"
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
  );
};

export default Nav;
