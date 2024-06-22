import pic1 from "../../assets/pic1.svg";
import pic2 from "../../assets/pic2.svg";
import Auth from "../auth/Auth";

function Hero() {
  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <div className="flex flex-col mt-[10vh] lg:flex-row w-[90vw] mx-auto">
        {/* Left Column */}
        <div className="flex flex-col lg:w-2/3">
          <div className="order-1 lg:order-1">
            <p className="text-3xl font-bold italic flex flex-row gap-1">
              Explore your{" "}
              <span className="text-blue-500">hobby</span> or{" "}
              <span className="text-purple-600">passion</span>
            </p>
            <br />
            <br />
            <p>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <br />
            <p>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          {/* Images (large screens) */}
          <div className="order-3 justify-center items-center hidden lg:flex">
            <div className="flex flex-row">
              <img src={pic2} alt="pic2" className="w-64 h-auto" />
              <img src={pic1} alt="pic1" className="w-64 h-auto" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="order-2 lg:order-3 lg:w-1/3 mt-8 ml-2 lg:mt-0">
          <Auth />
          {/* Images (small screens) */}
          <div className="flex flex-row justify-center lg:hidden overflow-hidden mt-4">
            <img src={pic2} alt="pic2" className="w-60 h-auto " />
            <img src={pic1} alt="pic1" className="w-60 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
