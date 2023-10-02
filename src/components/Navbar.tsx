export default function Navbar() {
  return (
    <div
      id="navbar"
      className="navbar sticky top-0 z-30 bg-base-100 bg-opacity-80 shadow-sm backdrop-blur"
    >
      <div className="navbar-start"></div>

      <div className="navbar-center">
        <a
          href="_"
          className="btn btn-ghost text-xl normal-case"
        >
          Home
        </a>

        <a
          href="_"
          className="btn btn-ghost text-xl normal-case"
        >
          About
        </a>

        <a
          href="_"
          className="btn btn-ghost text-xl normal-case"
        >
          Contact
        </a>
      </div>

      <div className="navbar-end"></div>
    </div>
  );
}
