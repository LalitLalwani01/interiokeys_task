import { FaFacebook, FaLinkedin, FaGoogle, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-7">
          {/* Logo and Info */}
          <div className="text-center lg:text-left w-full lg:w-1/3">
            <h1 className="text-3xl font-bold text-gray-800">
              interio<span className="text-red-500">keys</span>
            </h1>
            <p className="text-[#C53D3D] font-semibold mt-2">
              Want to understand how our process works?
            </p>
            <p className="text-gray-700">
              Get our PDF sent to your Email ID for a step-by-step explanation.
            </p>

            {/* Email Input */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <input
                type="email"
                placeholder="yourname@email.com"
                className="border border-gray-300 rounded-l-md px-4 py-2 w-64 sm:w-72"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600">
                Send Email
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 justify-center lg:justify-start text-gray-600 text-xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition"
              >
                <FaGoogle />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10 text-sm md:text-base text-gray-800 w-full lg:w-2/3">
            {/* Company */}
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <ul className="space-y-1 text-gray-600">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Terms & Privacy</li>
                <li>Our Blog</li>
                <li>Careers</li>
                <li>Trademark</li>
                <li>Why Choose Us</li>
              </ul>
            </div>

            {/* Partner with Us */}
            <div>
              <h4 className="font-bold mb-2">Partner with Us</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Join as Builder</li>
                <li>Join as Designer</li>
                <li>Join as Brand</li>
                <li>Join as Others</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-2">Services</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Book Consultation</li>
                <li>Find Inspirations</li>
                <li>Find Designers</li>
                <li>Find Brand Products</li>
              </ul>
            </div>

            {/* Inspiration */}
            <div>
              <h4 className="font-bold mb-2">Inspiration</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Jewel of India</li>
                <li>The Crown</li>
                <li>Mangalam Radiance</li>
                <li>Royal Gravitas</li>
                <li>Melodia Apartments</li>
                <li>Royal Greens II</li>
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h4 className="font-bold mb-2">Brands</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Veneers</li>
                <li>Plywood</li>
                <li>Adhesive</li>
                <li>Wallpapers</li>
                <li>Decoratives</li>
                <li>Laminates</li>
              </ul>
            </div>

            {/* Designers */}
            <div>
              <h4 className="font-bold mb-2">Designers</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Find Designers</li>
                <li>Join as Designer</li>
                <li>Designer Portfolios</li>
                <li>How It Works</li>
                <li>Designer Tools</li>
              </ul>
            </div>

            {/* Builders */}
            <div>
              <h4 className="font-bold mb-2">Builders</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Find Builders</li>
                <li>Join as Builder</li>
                <li>Project Listings</li>
                <li>Builder Support</li>
                <li>Resources for Builders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
