import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="bg-slate-100">
      <div className=" flex flex-col lg:flex-row  xl:gap-6 lg:gap-2">
        <div className="flex flex-col items-center">
          <img
            className="w-60 xl:w-60 lg:w-40 md:w-40"
            src={assets.logo}
            alt=""
          />
        </div>
        <div className="flex flex-col xl:mx-60 lg:mx-32 md:mx-20 my-12 items-center gap-2 ">
          <p className="text-lg font-bold text-red-800">COMPANY</p>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cars">
            <p>Cars</p>
          </NavLink>
          <NavLink to="/about">
            <p>About Us</p>
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
        </div>
        <div className="flex flex-col xl:mx-60 lg:mx-auto my-12 items-center lg:items-start">
          <p className="text-lg font-bold text-red-800">GET IN TOUCH</p>
          <div className="flex flex-row items-center my-4">
            <img className="w-8" src={assets.call_icon} alt="" />
            <p>+123-456-789</p>
          </div>
          <div className="flex flex-row items-center">
            <img className="w-8" src={assets.email_icon} alt="" />
            <p>contact@cargroup.com</p>
          </div>
          <p className="text-lg font-bold text-red-800 my-4">NEWSLETTER</p>
          <div className="flex flex-row">
            <input
              className=" placeholder:p-3 border border-red-800 xl:w-96 lg:w-60 h-10"
              type="email"
              placeholder="Enter your email"
            />
            <button className="w-32 xl:w-48 h-10 lg:w-32 md:w-32 bg-red-800 text-white hover:opacity-85">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <hr />
      <p className=" my-3 text-center">2024 All rights reserved</p>
    </div>
  );
}

export default Footer;
