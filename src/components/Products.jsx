import { useContext, useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { CarContext } from "../context/CarContext";
import { assets } from "../assets/assets";

function Products() {
  const { cars } = useContext(CarContext);
  const [filterProducts, setFilterProducts] = useState(cars);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [selectedGear, setSelectedGear] = useState([]);

  function handleBrandChange(e) {
    if (selectedBrands.includes(e.target.value)) {
      setSelectedBrands((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSelectedBrands((prev) => [...prev, e.target.value]);
    }
  }

  function handleFuelChange(e) {
    if (selectedFuel.includes(e.target.value)) {
      setSelectedFuel((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSelectedFuel((prev) => [...prev, e.target.value]);
    }
  }

  function handleGearChange(e) {
    if (selectedGear.includes(e.target.value)) {
      setSelectedGear((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSelectedGear((prev) => [...prev, e.target.value]);
    }
  }

  useEffect(() => {
    let filtered = cars;
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((car) => selectedBrands.includes(car.brand));
    }

    if (selectedFuel.length > 0) {
      filtered = filtered.filter((car) => selectedFuel.includes(car.fuel));
    }

    if (selectedGear.length > 0) {
      filtered = filtered.filter((car) => selectedGear.includes(car.gear));
    }

    setFilterProducts(filtered);
  }, [cars, selectedBrands, selectedFuel, selectedGear]);

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="xl:mx-12 lg:mx-8 md:mx-2 xl:my-40 lg:my-40 my-12 flex flex-col items-center lg:items-start">
          <h2
            onClick={() => setShowFilter(!showFilter)}
            className="text-red-800 font-bold text-xl flex flex-row items-center"
          >
            FILTERS
            <img
              className={`h-4 md:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.arrow_forward}
              alt=""
            />
          </h2>
          <div
            className={`border border-red-800 w-40 xl:w-64 lg:w-40 md:w-32 h-48 my-3 ${
              showFilter ? "" : "hidden"
            } md:block`}
          >
            <p className="mx-3 font-bold">BRANDS</p>
            <p>
              <input
                onChange={handleBrandChange}
                type="checkbox"
                className="mx-3"
                value={"Hyundai"}
              />
              Hyundai
            </p>
            <p>
              <input
                onChange={handleBrandChange}
                value={"Citroen"}
                type="checkbox"
                className="mx-3"
              />
              Citroen
            </p>
            <p>
              <input
                onChange={handleBrandChange}
                value={"Nissan"}
                type="checkbox"
                className="mx-3"
              />
              Nissan
            </p>
            <p>
              <input
                onChange={handleBrandChange}
                value={"KIA"}
                type="checkbox"
                className="mx-3"
              />
              KIA
            </p>
            <p>
              <input
                onChange={handleBrandChange}
                value={"FIAT"}
                type="checkbox"
                className="mx-3"
              />
              FIAT
            </p>
            <p>
              <input
                onChange={handleBrandChange}
                value={"Suzuki"}
                type="checkbox"
                className="mx-3"
              />
              Suzuki
            </p>
          </div>
          <div
            className={`border border-red-800 w-40 xl:w-64 lg:w-40 md:w-32 h-20 my-3 ${
              showFilter ? "" : "hidden"
            } md:block`}
          >
            <p className="mx-3 font-bold">FUEL</p>
            <p>
              <input
                onChange={handleFuelChange}
                type="checkbox"
                className="mx-3"
                value={"Gasoline"}
              />
              Gasoline
            </p>
            <p>
              <input
                onChange={handleFuelChange}
                type="checkbox"
                className="mx-3"
                value={"Diesel"}
              />
              Diesel
            </p>
          </div>
          <div
            className={`border border-red-800 w-40 xl:w-64 lg:w-40 md:w-32 h-20 my-3 ${
              showFilter ? "" : "hidden"
            } md:block`}
          >
            <p className="mx-3 font-bold">GEAR</p>
            <p>
              <input
                onChange={handleGearChange}
                value={"Automatic"}
                type="checkbox"
                className="mx-3"
              />
              Automatic
            </p>
            <p>
              <input
                onChange={handleGearChange}
                value={"Manual"}
                type="checkbox"
                className="mx-3"
              />
              Manual
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center  xl:mx-64 lg:mx-32 md:mx-16 xl:my-12 lg:my-12 my-0">
          <p className="text-xl text-red-800">Our Cars</p>
          <h2 className="text-4xl font-bold">VIEW AND CHOOSE A CAR TO RENT</h2>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item.id}
                image={item.image}
                passengers={item.passengers}
                doors={item.doors}
                gear={item.gear}
                luggages={item.luggages}
                fuel={item.fuel}
              />
            ))
          ) : (
            <p className="text-lg">
              Sorry , There are no cars that match your filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
