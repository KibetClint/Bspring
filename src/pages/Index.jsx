import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
// import { Badge } from "../components/ui/badge";

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      name: "Weighspring Pro",
      category: "Software",
      description: "Advanced weighbridge management with real-time monitoring",
      price: "Contact for pricing",
      features: [
        "Real-time monitoring",
        "Report generation",
        "Multi-user access",
        "Cloud sync",
      ],
      slug: "weighspring",
      image: "/images/software/cctv-weighspring.png",
    },
    {
      name: "OCS 10A Hanging Scale",
      category: "Hardware",
      description: "High-precision industrial hanging scale",
      // price: "$1,299",
      features: [
        "1000kg capacity",
        "LED display",
        "Bluetooth connectivity",
        "Battery powered",
      ],
      slug: "ocs-10a-hanging-scale",
      image: "/src/assets/images/hardware/SB1.png",
    },
    {
      name: "CS30 Android POS",
      category: "Hardware",
      description: "Versatile Android-based point-of-sale terminal",
      // price: "$899",
      features: [
        "Android OS",
        "Touch screen",
        "Thermal printer",
        "Multiple connectivity",
      ],
      slug: "cs30-android-pos",
      image: "/src/assets/images/hardware/POS.jpeg",
    },
  ];

  const services = [
    {
      title: "Cybersecurity & Penetration Testing",
      description:
        "Comprehensive security assessments and vulnerability testing",
      icon: Shield,
    },
    {
      title: "Web & App Development",
      description: "Custom software solutions for your business needs",
      icon: Zap,
    },
    {
      title: "Integration Services",
      description: "Seamless system integration and automation",
      icon: Users,
    },
  ];

  const stats = [
    { label: "Years in Business", value: "5+" },
    { label: "Products Delivered", value: "1,000+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Countries Served", value: "2+" },
  ];

  const sliderImages = [
    {
      url: "/images/solutions/Manufacturing.jpg",
      title: "Modern Technology Solutions",
      description: "Cutting-edge software and hardware for your business needs",
      link: "/consultation",
      pageName: "Consultation",
    },
    {
      url: "/images/hardware/Checker-Plate-Platform-Floor-Weight-Scale.png",
      title: "Industrial Equipment",
      description: "Precision weighing and measurement solutions",
      link: "/services",
      pageName: "Services",
    },
    {
      url: "/images/hero-section/consultation.jpg",
      title: "Expert Consultation",
      description: "Professional guidance for your technology investments",
      link: "/products",
      pageName: "Solutions",
    },
    {
      url: "/images/hero-section/integration.jpeg",
      title: "Custom Integration, Maximum ROI",
      description: "Tailored solutions for your unique business needs",
      link: "/services/integration",
      pageName: "Intergrations",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <Layout>
      {/* Hero Section with Full-Width Auto-Moving Carousel */}
      <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[80vh] overflow-hidden">
        {/* Carousel Container - Full Width and Height */}
        <div className="relative w-full h-full">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {sliderImages.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 h-full">
                <div className="relative w-full h-full">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${slide.url})` }}>
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-blac bg-opacity-40"></div>

                    {/* Content Container */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#236837]/100 to-transparent z-10">
                      <div className="text-center text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 md:px-8 lg:px-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 sm:mb-8 md:mb-10 leading-relaxed opacity-90">
                          {slide.description}
                        </p>
                        <Link
                          to={slide.link}
                          className="inline-block bg-[#236837] hover:bg-[#1a5129] text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-md sm:rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl">
                          {slide.pageName}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-10">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 z-10">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Scroll Down Indicator (Optional) */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-10">
          <div className="flex flex-col items-center text-white opacity-75 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs sm:text-sm mb-2 hidden sm:block">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Headline and CTA Buttons */}
      <div className="text-center px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <h1 className="text-green-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
          Innovative Solutions for Modern Business
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
          Leading provider of software solutions, weighing equipment, and
          technology services that drive business success
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button
            className="bg-green-900 hover:bg-white hover:text-[#236434] w-34 sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
            size="lg"
            variant="secondary"
            asChild>
            <Link to="/products">Explore Products</Link>
          </Button>
          <Button
            size="lg"
            className="text-white bg-green-900 hover:bg-white hover:text-[#236434] w- sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
            asChild>
            <Link to="/quote">Get Quote</Link>
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#236434] mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Featured Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Our most popular and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden">
                <div
                  className="h-32 sm:h-40 md:h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}></div>
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                    <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl">
                      {product.name}
                    </CardTitle>
                    <span className="bg-green-100 text-[#236434] text-xs px-2 py-1 rounded whitespace-nowrap">
                      {product.category}
                    </span>
                  </div>
                  <CardDescription className="text-xs sm:text-sm md:text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <div className="mb-4 sm:mb-5 md:mb-6 text-start">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#236434] mb-2">
                      {product.price}
                    </div>
                    <ul className="text-xs sm:text-sm md:text-base text-gray-600 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 items-center">
                    <Button
                      className="text-white bg-green-900 hover:bg-white hover:text-[#236434] flex-1c w-24 sm:flex-initial sm:min-w-[120px] text-xs sm:text-sm px-4 py-2 "
                      size="sm"
                      variant="secondary"
                      asChild>
                      <Link to={`/product/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button
                      size="sm"
                      className="text-white bg-green-900 hover:bg-white hover:text-[#236434] flex-1 w-24 sm:flex-initial sm:min-w-[120px] text-xs sm:text-sm px-4 py-2"
                      asChild>
                      <Link to="/quote">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
              Expert solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <div className="mx-auto mb-3 sm:mb-4 p-2 sm:p-3 bg-green-100 rounded-full w-fit">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#236434]" />
                  </div>
                  <CardTitle className="text-sm sm:text-base md:text-lg lg:text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <Button
                    className="bg-green-800 hover:bg-green-900 text-white w-24 sm:w-auto px-4 py-2 text-xs sm:text-sm"
                    variant="outline"
                    asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-green-50">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="mb-3 sm:mb-4">
                    <div className="flex text-yellow-400 mb-2 text-sm sm:text-base">
                      ★★★★★
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 italic leading-relaxed">
                      "Brickspring's solutions have transformed our operations.
                      The weighing equipment is precise and reliable, and their
                      software integration is seamless."
                    </p>
                  </div>
                  <div className="border-t pt-3 sm:pt-4">
                    <div className="font-semibold text-sm sm:text-base">
                      Browns
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Operations Manager, ABC Logistics
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-4 sm:py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">
              Trusted by Industry Leaders
            </h2>
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 opacity-60">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
              <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-[#236434] text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your requirements and discover how our
            solutions can benefit your business
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              className="text-white bg-green-900 border-white hover:bg-white hover:text-[#236434] w- sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              className="text-white bg-green-900 border-white hover:bg-white hover:text-[#236434] w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
              asChild>
              <Link to="/quote">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
