import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      name: "Weighspring Pro",
      category: "Software",
      description: "Advanced weighbridge management with real-time monitoring",
      // price: "Contact for pricing",
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
      name: "OCS SB1 Hanging Scale",
      category: "Hardware",
      description: "High-precision industrial hanging scale",
      // price: "$1,299",
      features: [
        "1000kg capacity",
        "LED display",
        "Bluetooth connectivity",
        "Battery powered",
      ],
      slug: "ocs-sb1-hanging-scale",
      image: "/images/hardware/OCS SB1.png",
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
      image: "/src/assets/images/hardware/PDA.webp",
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
      url: "/src/assets/images/hardware/CCTV.jpg",
      title: "Modern Technology Solutions",
      description: "Cutting-edge software and hardware for your business needs",
      link: "/consultation",
      pageName: "Consultation",
    },
    {
      url: "images/Manufacturing.jpg",
      title: "Industrial Equipment",
      description: "Precision weighing and measurement solutions",
      link: "/services",
      pageName: "Services",
    },
    {
      url: "images/cctv.jpg",
      title: "Expert Consultation",
      description: "Professional guidance for your technology investments",
      link: "/products",
      pageName: "Solutions",
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Slider */}
      <section className="bg-gradient-to-r from-[#236434] to-green-700 text-white py-20">
        <div className="max-w-100% mx-auto px-4 sm:px-8 max-h-100% lg:px-8">
          <Carousel className="mb-8 ">
            <CarouselContent>
              {/* modules={[Autoplay, Pagination]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }} */}
              {sliderImages.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <div
                      className="h-64 md:h-100 bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${slide.url})` }}>
                      <div className="absolute inset-0 bg-opacity-40 rounded-lg flex items-center justify-center">
                        <div className="text-center text-green-800">
                          <h3 className="text-2xl md:text-4xl font-bold mb-4">
                            {slide.title}
                          </h3>
                          <p className="text-lg md:text-xl">
                            {slide.description}
                          </p>
                          <Link
                            to={slide.link}
                            className="block mx-auto bg-[#236837] hover:bg-[#1a5129] text-black px-4 py-2 w-24 rounded-md text-sm transition">
                            {slide.pageName}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <div className="text-center ">
            <h1 className="text-4xl md:text-6xl font-bold mb-">
              Innovative Solutions for{" "}
              <span className="text-green-200">Modern Business</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Leading provider of software solutions, weighing equipment, and
              technology services that drive business success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-green-900 hover:bg-white hover:text-[#236434]"
                size="lg"
                variant="secondary"
                asChild>
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button
                size="lg"
                className="text-white bg-green-900  hover:bg-white hover:text-[#236434]"
                asChild>
                <Link to="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#236434] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}></div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <span className="bg-green-100 text-[#236434] text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-start">
                    <div className="text-2xl font-bold text-[#236434] mb-2">
                      {product.price}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-green-800" asChild>
                      <Link to={`/product/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-green-800"
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
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-[#236434]" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-green-800" variant="outline" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-green-50">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-gray-700 italic">
                      "Brickspring's solutions have transformed our operations.
                      The weighing equipment is precise and reliable, and their
                      software integration is seamless."
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold">Browns</div>
                    <div className="text-sm text-gray-600">
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
      <section className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold mb-8">
              Trusted by Industry Leaders
            </h2>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <Award className="h-12 w-12" />
              <TrendingUp className="h-12 w-12" />
              <Shield className="h-12 w-12" />
              <Users className="h-12 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-[#236434] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and discover how our
            solutions can benefit your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white bg-green-900 border-white hover:bg-white hover:text-[#236434]"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              className="text-white bg-green-900 border-white hover:bg-white hover:text-[#236434]"
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
