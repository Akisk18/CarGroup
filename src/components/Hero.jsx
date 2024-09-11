import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="inline-block relative">
      <img className="h-[120vh] object-cover" src={assets.hero} alt="" />
      <h1 className="absolute top-[25%] right-20 sm:top-[25%] sm:right-[10%] xl:top-[30%] md:top-[25%] lg:top-[30%] xl:right-[300px] lg:right-[300px] md:right-32 xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl text-white font-extrabold">
        Find your Car , <br /> Start you journey!
      </h1>
      <p className="absolute top-[35%] right-11 sm:top-[40%] xl:top-[45%] lg:top-[45%] md:top-[40%] sm:right-[200px] xl:right-[430px] lg:right-[430px] md:right-[265px] xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg text-white font-bold ">
        Rent a Car and explore our beatiful island!
      </p>
      <NavLink to="/cars">
        <button className="border border-red-800 bg-red-800 w-56 h-14 absolute top-[40%] sm:top-[48%] xl:top-[53%] lg:top-[53%]  right-[60px] xl:right-[300px] lg:right-[300px] md:right-[130px] text-orange-300 font-bold text-m hover:opacity-85">
          OUR CARS
        </button>
      </NavLink>
    </div>
  );
}

export default Hero;
