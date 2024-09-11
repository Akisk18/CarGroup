import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

function NavBar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between h-16 bg-red-800">
      <Link to="/">
        <img className="w-28" src={assets.logo} alt="" />
      </Link>
      <ul className="hidden sm:flex items-center gap-6 mr-6">
        <NavLink to="/">
          <p className="text-orange-300 text-lg hover:cursor-pointer">Home</p>
        </NavLink>
        <NavLink to="/cars">
          <p className="text-orange-300 text-lg hover:cursor-pointer">Cars</p>
        </NavLink>
        <NavLink to="/about">
          <p className="text-orange-300 text-lg hover:cursor-pointer">
            About Us
          </p>
        </NavLink>
        <NavLink to="/contact">
          <p className="text-orange-300 text-lg hover:cursor-pointer">
            Contact
          </p>
        </NavLink>
      </ul>
      <img
        onClick={() => setVisible(true)}
        src={assets.menu_button}
        className="w-12 cursor-pointer sm:hidden"
      />
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-red-800 z-50 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-orange-300">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-8" src={assets.arrow_back} />
            <p className="text-2xl">Back</p>
          </div>
          <div className="flex flex-col items-center my-28 text-4xl justify-center gap-10">
            <NavLink to="/" className="py-6" onClick={() => setVisible(false)}>
              Home
            </NavLink>
            <NavLink
              to="/cars"
              className="py-6"
              onClick={() => setVisible(false)}
            >
              Cars
            </NavLink>
            <NavLink
              to="/about"
              className="py-6"
              onClick={() => setVisible(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="py-6"
              onClick={() => setVisible(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
