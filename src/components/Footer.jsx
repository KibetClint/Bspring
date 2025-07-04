import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Brickspring</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of innovative software solutions, weighing
              equipment, and technology services.
            </p>
            <p className="text-gray-300 text-sm">
              Serving 500+ clients across 25+ countries with cutting-edge
              industrial solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-start">Products</h4>
            <ul className="space-y-2 text-start">
              <li>
                <Link
                  to="/products/software"
                  className="text-gray-300 hover:text-white">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/products/weighing-equipment"
                  className="text-gray-300 hover:text-white">
                  Weighing Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/products/hardware"
                  className="text-gray-300 hover:text-white">
                  Hardware & Accessories
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-start">Services</h4>
            <ul className="space-y-1.5 text-start">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Integration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  CCTV Installation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-start">Company</h4>
            <ul className="space-y-2 text-start">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-300 hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/locations"
                  className="text-gray-300 hover:text-white">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            &copy; 2024 Brickspring. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-gray-300 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-300 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-gray-300 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
