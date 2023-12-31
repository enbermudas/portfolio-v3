import { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// TODO: remove on i18n integration
const getPageTitle = (pathname: string) =>
  ({
    "/contact": "Enbermudas | Contact",
    "/about": "Enbermudas | About",
    "/": "Enbermudas | Home",
  })[pathname] ?? "";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = getPageTitle(location.pathname);
  }, [location]);

  return (
    <div
      id="app"
      className="h-screen bg-base-100 text-accent-content antialiased"
    >
      <div className="relative isolate flex h-full flex-col">
        <Navbar />

        <div className="container mx-auto mt-6 h-full w-full grow">
          <Outlet />
        </div>

        <Footer />

        <svg
          id="patternId"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 -z-10 h-full w-full opacity-20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              id="a"
              patternUnits="userSpaceOnUse"
              width="30"
              height="30"
              patternTransform="scale(7) rotate(0)"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
              <path
                d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
                strokeWidth="0.15"
                fill="none"
                className="stroke-neutral"
              />
            </pattern>
          </defs>
          <rect
            width="800%"
            height="800%"
            transform="translate(0,0)"
            fill="url(#a)"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
