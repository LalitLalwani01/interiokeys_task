import Reviews from "./Reviews";
import HeroImage from "../../assets/images/image.png";
import Thumbnail from "../../assets/images/image.copy.png";
import Inspirations from "./Insperations";

const HeroSection = () => {
  return (
    <main>
      <div className="w-full h-full">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center pt-10 h-64 rounded-md overflow-hidden shadow-md">
          <img
            src={HeroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6"> 
          {/* Left Column: Video + Inspirations */}
          <div className="w-full lg:w-3/4 bg-white p-4 shadow-md rounded-md">
            {/* Tabs */}
            <div className="mt-4 p-7 flex gap-6 border-b">
              <button className="pb-2 border-b-2 border-red-500 text-red-500">
                About Us
              </button>
              <button className="pb-2 text-gray-600 hover:text-gray-800">
                Properties Created
              </button>
              <button className="pb-2 text-gray-600 hover:text-gray-800">
                Reviews & Ratings
              </button>
            </div>

            {/* Video Section */}
            <div className="h-[527px] mb-10 pl-7">
              <div className="relative bg-gray-200 h-full rounded-md overflow-hidden shadow-md">
                <img
                  src={Thumbnail}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 8l6 4-6 4z"></path>
                  </svg>
                </button>
              </div>
              <h2 className="text-lg font-bold mb-1">
                &quot;Delighted to see so many interior inspirations for our properties&quot;
              </h2>
              <p className="text-gray-600 mt-1">
                “Collaborating with Interiokeys has been inspiring, from getting designs for our top 
                properties, to finding top designer and brand collaborations and providing a unique 
                platform to connect with potential clients.”
              </p>
            </div>

            {/* Inspirations Section */}
            <div className="mt-6 relative w-full">
              <Inspirations />
            </div>
          </div>

          {/* Right Column: Reviews */}
          <div className="w-full h-full lg:w-1/4">
            <Reviews />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
