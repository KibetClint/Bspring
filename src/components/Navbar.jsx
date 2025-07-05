import { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "@/";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubMenus, setMobileSubMenus] = useState({
    products: false,
    services: false,
    resources: false,
  });

  const productCategories = [
    { name: "Software Solutions", href: "/products/software" },
    { name: "Weighing Equipment", href: "/products/weighing-equipment" },
    { name: "Hardware & Accessories", href: "/products/hardware" },
  ];

  const services = [
    {
      name: "Cybersecurity & Penetration Testing",
      href: "/services/cybersecurity",
    },
    { name: "Web & App Development", href: "/services/web-development" },
    { name: "Integration Services", href: "/services/integration" },
    { name: "CCTV Installation", href: "/services/cctv-installation" },
  ];

  const resources = [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog & Insights", href: "/blog" },
    { name: "Industries", href: "/industries" },
    { name: "Locations", href: "/locations" },
    { name: "FAQs", href: "/faqs" },
    { name: "Consultation", href: "/consultation" },
  ];

  const toggleMobileSubMenu = (menu) => {
    setMobileSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <img
                src="/src/assets/logo.png"
                alt="Brickspring Logo"
                className="h-8 w-8"
              />
              <span className="text-1xl font-bold text-[#236434]">
                Brickspring
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className="block text-gray-700 hover:text-[#236434] px-3 py-2 text-sm font-medium">
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {" "}
                    <Link
                      to="/products"
                      className="text-gray-700 hover:text-[#236434] px-0 py-2 text-sm font-medium">
                      Products
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 text-start bg-green-800">
                      {productCategories.map((category) => (
                        <NavigationMenuLink key={category.name} asChild>
                          <Link
                            to={category.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                            {category.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {" "}
                    <Link
                      to="/services"
                      className="text-gray-700 hover:text-[#236434] px-0 py-2 text-sm font-medium">
                      Services
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 text-start bg-green-800">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.name} asChild>
                          <Link
                            to={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                            {service.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {" "}
                    <Link
                      to="/resources"
                      className="text-gray-700 hover:text-[#236434] px-0 py-2 text-sm font-medium">
                      Resources
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-64 p-4 text-start bg-green-800">
                      {resources.map((resource) => (
                        <NavigationMenuLink key={resource.name} asChild>
                          <Link
                            to={resource.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                            {resource.name}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-[#236434] px-3 py-2 text-sm font-medium">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/support"
                    className="text-gray-700 hover:text-[#236434] px-3 py-2 text-sm font-medium">
                    Support
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-[#236434] px-3 py-2 text-sm font-medium">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="bg-green-800" asChild>
              <Link to="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#236434]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Positioned on the right */}
        {isOpen && (
          <div className="md:hidden absolute text-start right-0 top-16 w-38 bg-white shadow-lg border-l  border-gray-200 h-screen overflow-y-auto z-40">
            <div className="px-4 pt-4 pb-3 space-y-1 bg-green-800">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-[#236434]"
                onClick={() => setIsOpen(false)}>
                Home
              </Link>

              {/* Products dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileSubMenu("products")}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-[#236434]">
                  Products
                  <ChevronDown
                    className={`transform transition-transform ${
                      mobileSubMenus.products ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>
                {mobileSubMenus.products && (
                  <div className="pl-6 space-y-1">
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#236434]"
                        onClick={() => setIsOpen(false)}>
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileSubMenu("services")}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-[#236434]">
                  Services
                  <ChevronDown
                    className={`transform transition-transform ${
                      mobileSubMenus.services ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>
                {mobileSubMenus.services && (
                  <div className="pl-6 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#236434]"
                        onClick={() => setIsOpen(false)}>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources dropdown */}
              <div>
                <button
                  onClick={() => toggleMobileSubMenu("resources")}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-[#236434]">
                  Resources
                  <ChevronDown
                    className={`transform transition-transform ${
                      mobileSubMenus.resources ? "rotate-180" : ""
                    }`}
                    size={16}
                  />
                </button>
                {mobileSubMenus.resources && (
                  <div className="pl-6 space-y-1">
                    {resources.map((resource) => (
                      <Link
                        key={resource.name}
                        to={resource.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#236434]"
                        onClick={() => setIsOpen(false)}>
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-[#236434]"
                onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link
                to="/support"
                className="block px-3 py-2 text-gray-700 hover:text-[#236434]"
                onClick={() => setIsOpen(false)}>
                Support
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-[#236434]"
                onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link
                to="/quote"
                className="block px-3 py-2 bg-[#236434] text-white rounded-md"
                onClick={() => setIsOpen(false)}>
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
