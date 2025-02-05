
const   Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6">
          {/* Logo and Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-gray-800">interio<span className="text-red-500">keys</span></h1>
            <p className="text-gray-600 mt-2">
              Want to understand how our process works? Get our PDF sent to your Email ID for the step-by-step explanation.
            </p>
            {/* Email Input */}
            <div className="mt-4 flex justify-center lg:justify-start">
              <input
                type="email"
                placeholder="yourname@email.com"
                className="border border-gray-300 rounded-l-md px-4 py-2 w-60"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600">
                Send Email
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-4 justify-center lg:justify-start text-gray-600">
              <i className="fab fa-facebook cursor-pointer"></i>
              <i className="fab fa-linkedin cursor-pointer"></i>
              <i className="fab fa-google cursor-pointer"></i>
              <i className="fab fa-youtube cursor-pointer"></i>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Company</h4>
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

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Partner with Us</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Join as Builder</li>
                <li>Join as Designer</li>
                <li>Join as Brand</li>
                <li>Join as Others</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Services</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Book Consultation</li>
                <li>Find Inspirations</li>
                <li>Find Designers</li>
                <li>Find Brand Products</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Inspiration</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Projects</li>
                <li>Jewel of India</li>
                <li>The Crown</li>
                <li>Mangalam Radiance</li>
                <li>Royal Gravitas</li>
                <li>Melodia Apartments</li>
                <li>Royal Greens II</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Brands</h4>
              <ul className="space-y-1 text-gray-600">
                <li>Timber, Ply & Laminates</li>
                <li>Veneers</li>
                <li>Plywood</li>
                <li>Adhesive</li>
                <li>Wallpapers</li>
                <li>Decoratives</li>
                <li>Laminates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
