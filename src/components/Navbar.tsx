import { NavLink } from "react-router-dom";

interface Link {
  id: string;
  to: string;
  text: string;
}

const LINKS: Link[] = [
  {
    id: "home",
    to: "/",
    text: "Home",
  },
  {
    id: "about",
    to: "/about",
    text: "About",
  },
  {
    id: "contact",
    to: "/contact",
    text: "Contact",
  },
];

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="navbar sticky top-0 z-30 bg-neutral bg-opacity-80 shadow-sm backdrop-blur"
    >
      <div className="navbar-start"></div>

      <div className="navbar-center gap-2">
        {LINKS.map(({ id, to, text }) => (
          <NavLink
            key={id}
            to={to}
            className={({ isActive }) =>
              `btn btn-ghost text-xl normal-case ${isActive && "btn-active"}`
            }
          >
            {text}
          </NavLink>
        ))}
      </div>

      <div className="navbar-end"></div>
    </div>
  );
}
