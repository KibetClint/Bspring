import { useEffect } from "react";
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const productCategories = [
    {
      title: "Software Solutions",
      description:
        "Comprehensive software applications for business management",
      href: "/products/software",
      productCount: 6,
      products: [
        "Weighspring",
        "Timespring",
        "Payrollspring",
        "Secuspring",
        "Safetyspring",
        "Parkspring",
      ],
      image: "images/software/cctv-weighspring.png",
    },
    {
      title: "Weighing Equipment",
      description: "Precision weighing solutions for industrial applications",
      href: "/products/weighing-equipment",
      productCount: 7,
      products: [
        "OCS SB1 Hanging Scale",
        "SS Indicator with Bluetooth",
        "SCS Pallet Truck Scale",
      ],
      image: "images/software/Weighing.jpg",
    },
    {
      title: "Hardware & Accessories",
      description: "Computing hardware and peripheral devices",
      href: "/products/hardware",
      productCount: 5,
      products: [
        "Mini Bluetooth Thermal Printers",
        "CS30 Android POS",
        "Laptops and Desktops",
      ],
      image: "images/hardware/Computing.jpg",
    },
  ];

  const filteredCategories = productCategories;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#236434] to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-down">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of software solutions, weighing
              equipment, and hardware accessories
            </p>
          </div>

          {/* Search Bar */}
          {/* <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-gray-900"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div> */}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
                Product Categories
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-xl text-gray-700">
                Explore our diverse range of solutions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}>
                  <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 h-full">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-48 w-full object-cover rounded-t-lg"
                    />
                    <CardHeader className="text-center text-green-900">
                      <CardTitle className="text-2xl">
                        {category.title}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 text-start">
                        <p className="text-sm text-gray-500 mb-2">
                          {category.productCount} products available
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {category.products.slice(0, 3).map((product, idx) => (
                            <li key={idx}>• {product}</li>
                          ))}
                          {category.products.length > 3 && (
                            <li className="text-[#236434]">...and more</li>
                          )}
                        </ul>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-green-800 hover:bg-green-900 transition-colors">
                        <Link to={category.href}>Explore Category</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No products match your search.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Product Comparison Tool */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="slide-up"
            data-aos-duration="1000"
            className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-gray-600 mb-6">
              Use our product comparison tool to find the perfect solution for
              your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-green-800 hover:bg-green-900 transition-colors"
                size="lg">
                Compare Products
              </Button>
              <Button
                className="bg-green-800 hover:bg-green-900 transition-colors"
                size="lg"
                variant="outline"
                asChild>
                <Link to="/contact">Contact Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Catalog CTA */}
      <section className="py-6 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-in" data-aos-duration="1200">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Our Complete Catalog
            </h2>
            <p className="text-xl mb-8">
              Get detailed specifications and pricing for all our products
            </p>
            <Button
              className="bg-green-800 hover:bg-green-700 transition-colors"
              size="lg"
              variant="secondary"
              asChild>
              <a href="/public/Bspring Catalogue.pdf" download>
                Download Catalog (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
