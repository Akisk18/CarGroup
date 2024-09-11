import { assets } from "../assets/assets";

function Contact() {
  function handleSumbit(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col mx-24 my-24 xl:my-24  xl:mx-40 lg:mx-10 md:mx-8">
        <h2 className="text-red-800 text-xl font-bold">Contact Us</h2>
        <p>Have a question? Do not hesitate to contact us!</p>
        <div className="flex flex-row my-12 items-center">
          <img className="w-12" src={assets.home_icon} alt="" />
          <div className="flex flex-col mx-3">
            <p className="font-bold">Cental Offices</p>
            <p>Central Street 65, NY</p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img className="w-12" src={assets.call_icon} alt="" />
          <div className="flex flex-col mx-3">
            <p className="font-bold">Telephone:</p>
            <p>+123-456-789</p>
          </div>
        </div>
        <div className="flex flex-row items-center my-12">
          <img className="w-12" src={assets.email_icon} alt="" />
          <div className="flex flex-col mx-3">
            <p className="font-bold">Email:</p>
            <p>contact@cargroup.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-5 xl:my-24 lg:my-20 md:my-20 xl:items-start">
        <h2 className="text-2xl font-bold">CONTACT FORM</h2>
        <form
          onSubmit={handleSumbit}
          className="flex flex-col "
          action="sumbit"
        >
          <input
            required
            className="border border-red-800 my-5 w-96 sm:w-[500px] xl:w-[650px] lg:w-[500px] md:w-[350px] h-10 placeholder:p-3"
            type="text"
            placeholder="Name"
          />
          <input
            required
            className="border border-red-800 xl:w-[650px] lg:w-[500px] h-10 placeholder:p-3"
            type="email"
            placeholder="Email"
          />
          <textarea
            required
            placeholder="Enter your message here:"
            className="border border-red-800 xl:w-[650px] lg:w-[500px] h-96 my-5 placeholder:p-3"
          ></textarea>
          <button className="bg-red-800 text-white h-10 w-60 hover:opacity-85">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
