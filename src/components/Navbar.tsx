import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      id="navbar"
      className="navbar sticky top-0 z-30 bg-neutral bg-opacity-80 shadow-sm backdrop-blur"
    >
      <div className="navbar-start"></div>

      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost text-xl normal-case"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="btn btn-ghost text-xl normal-case"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="btn btn-ghost text-xl normal-case"
        >
          Contact
        </Link>
      </div>

      <div className="navbar-end"></div>
    </div>
  );
}
