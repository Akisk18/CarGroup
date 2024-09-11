import { assets } from "../assets/assets";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col items-center my-12 ">
        <p className="text-xl text-red-800">About Us</p>
        <h2 className="text-4xl font-bold">OUR MISSION</h2>
      </div>
      <div className="flex flex-col my-12 mx-12">
        <div className="flex flex-col lg:flex-row">
          <img
            className="xl:w-[700px] lg:w-[50%] lg:h-[100%]"
            src={assets.about_img}
            alt="car in a road"
          />
          <p className="my-3 xl:my-0 lg:my-0 xl:mx-60 lg:mx-8 md:mx-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            congue est vel magna eleifend, ac porta turpis ultricies. Nam lectus
            massa, dapibus porttitor elit vitae, bibendum viverra nulla. Integer
            placerat magna et erat semper tristique. Duis ac elit id lectus
            venenatis volutpat non et lorem. Nullam commodo, lacus ut faucibus
            tempus, velit sem scelerisque augue, rutrum molestie risus tellus
            sed eros. Vestibulum sit amet tincidunt augue. Curabitur eleifend
            vulputate blandit. Cras a sollicitudin eros, at mattis est. Morbi id
            purus nulla. Praesent ac neque non quam tempus tempor eu at velit.
            Vivamus odio ante, consequat vitae elementum eget, semper in velit.
            Morbi tellus dolor, iaculis in lorem sit amet, lacinia porttitor
            tellus. Vestibulum dictum vitae augue sit amet pretium. Nullam
            lacinia ultrices pellentesque. Donec id nunc euismod, ultrices nunc
            in, maximus diam. Proin non magna dolor. Praesent sagittis sapien
            sollicitudin, faucibus mi a, aliquam diam. Nunc vitae malesuada
            lacus, nec aliquet diam. Integer ac mi non leo tincidunt blandit id
            ac nunc. Fusce vitae nulla mattis, ultricies ante dictum, efficitur
            eros. Nulla facilisi. Duis eget condimentum ligula. Maecenas
            sollicitudin varius felis, finibus egestas risus cursus vel. Proin
            sit amet justo a nisl volutpat porta vitae vitae augue. Aenean
            eleifend non nulla non ultricies. Nunc vitae purus semper, consequat
            nunc vitae, sollicitudin purus. Proin id aliquet ex. Fusce vel
            imperdiet purus. Nulla facilisi. Ut tincidunt lectus bibendum neque
            congue, id fringilla purus ullamcorper. Praesent in mauris eu ligula
            maximus consectetur.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
