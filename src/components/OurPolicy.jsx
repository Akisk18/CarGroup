import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function OurPolicy() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col xl:w-[500px] xl:mx-36 lg:w-[500px] md:w-[400px] lg:mx-8 md:mx-2 my-8 mx-3">
          <p className="text-red-800 text-xl">About Us</p>
          <h2 className="text-4xl font-bold">WHO ARE WE?</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit
            amet cursus ante, in volutpat purus. Nam nec libero viverra,
            malesuada erat eget, tincidunt mi. Donec venenatis sapien ac
            eleifend convallis. Vivamus posuere eget sapien sed fermentum.
            Suspendisse dui arcu, commodo in lorem quis, ornare sodales risus.
            Aenean congue euismod elit eget ornare. Maecenas iaculis neque erat,
            ut facilisis eros aliquet non. Mauris non sapien posuere, tincidunt
            metus posuere, imperdiet nisi. Phasellus ante nunc, dictum in arcu
            id, gravida ultricies mauris.Maecenas luctus feugiat enim vel
            mollis. Mauris tempus cursus nunc non ultrices. Duis in nulla in
            felis mattis sollicitudin at ornare velit. Vestibulum lorem lorem,
            dignissim a dolor eget, fringilla volutpat mi. In aliquet dictum
            ante, ac hendrerit augue suscipit id.
          </p>
          <p className="my-4 font-bold">CarGroup Inc.</p>
          <div className="flex flex-row gap-3">
            <NavLink to="/contact">
              <button className="border border-black text-black w-28 h-12 my-4 hover:text-white hover:bg-black">
                CONTACT US
              </button>
            </NavLink>
            <NavLink to="/cars">
              <button className="bg-red-800 text-white w-28 h-12 my-4 hover:opacity-85">
                OUR CARS
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col xl:mx-36  lg:w-[500px] xl:my-8 lg:my-8 my-4 mx-3">
          <p className="text-red-800 text-xl">Policies & Insurances</p>
          <h2 className="text-4xl font-bold">WHAT WE OFFER</h2>
          <ul className="flex flex-row my-4 items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Full Insurance</li>
          </ul>
          <ul className="flex flex-row  items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Free Delivery</li>
          </ul>
          <ul className="flex flex-row my-4 items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Fire Protection</li>
          </ul>
          <ul className="flex flex-row  items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Theft Protection</li>
          </ul>
          <ul className="flex flex-row my-4  items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Free Cancelation</li>
          </ul>
          <ul className="flex flex-row   items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>No hidden costs</li>
          </ul>
          <ul className="flex flex-row  my-4 items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Free Baby seats</li>
          </ul>
          <ul className="flex flex-row  items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Second Driver</li>
          </ul>
        </div>
        <div className="flex flex-col xl:my-[115px] lg:pr-16 md:pr-8 mx-3">
          <ul className="flex flex-row  items-center md:mr-9">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>24hr Support</li>
          </ul>
          <ul className="flex flex-row my-4 items-center">
            <img className="w-6" src={assets.check_circle} alt="" />
            <li>Unlimited Kilometers</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default OurPolicy;
