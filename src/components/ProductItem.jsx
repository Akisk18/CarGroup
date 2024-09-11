function ProductItem({ image, name, passengers, doors, luggages, gear, fuel }) {
  return (
    <div className="flex flex-row border border-red-800 my-10 w-[90%] sm:w-[550px] xl:w-auto lg:w-auto md:w-[590px] mx-6 xl:mx-0 lg:mx-0">
      <img
        className="w-52 sm:w-80 xl:w-96 lg:w-96 md:w-72"
        src={image[0]}
        alt=""
      />
      <div className="flex flex-col w-60 text-start my-3 mx-3">
        <p className="font-bold text-xl">{name}</p>
        <hr />

        <p>{passengers} passengers</p>
        <p>{doors} doors</p>
        <p>{luggages} luggages</p>
        <p>{gear}</p>
        <p>{fuel}</p>
        <p>Air Contidioning</p>
        <button className="bg-red-800 text-white w-28 h-8 my-12 hover:opacity-85">
          BOOK NOW!
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
