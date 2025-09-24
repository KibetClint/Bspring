// import { FaFacebook } from "react-icons/fa";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="md:col-span-2 ">
          <h4 className="text-xl text-white font-bold mb-4">Brickspring</h4>
          <p className="text-gray-300 mb-4 text-base">
            Brickspring is leading provider of innovative software solutions,
            weighing equipment, and technology services with specialized
            software suites, and tailored services from installation to
            integration and security.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-2 sm:py-6 md:py-4 lg:py-0">
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
          <div className="py-2 ">
            <h4 className="text-start text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">
              Follow Us
            </h4>
            <div className="flex flex-col  gap-2 text-start jus">
              <a
                href="https://www.facebook.com/profile.php?id=61577392503207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 text-lg sm:text-xl">
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/brick_spring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 text-lg sm:text-xl">
                <TwitterIcon />
              </a>
              <a
                href="https://www.instagram.com/brick_spring/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 text-lg sm:text-xl">
                <InstagramIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 text-lg sm:text-xl">
                <YoutubeIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/brickspring/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-400 text-lg sm:text-xl">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="border-t border-white mb-4 mt-6 sm:mt-8 pt-2 sm:pt-3 md:pt-4 text-center">
        <p className="text-[10px] sm:text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Brickspring. All rights reserved.
          <Link
            to="/privacy-policy"
            className="hover:text-gray-300 mx-1 sm:mx-2">
            Privacy Policy
          </Link>
          |
          <Link to="/terms" className="hover:text-gray-300 mx-1 sm:mx-2">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
