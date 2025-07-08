import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Star, Shield, Truck, Phone, ZoomIn } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/Layout";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Product data (in a real app, this would come from an API)
  const productData = {
    weighspring: {
      name: "Weighspring Pro",
      category: "Software",
      price: "Starting at $2,999",
      status: "Available",
      description:
        "Advanced weighbridge management system with comprehensive real-time monitoring capabilities and automated reporting features.",
      longDescription:
        "Weighspring Pro is our flagship weighbridge management solution designed for businesses that require precise weight measurements and comprehensive data management. The system provides real-time monitoring of all weighing operations, automated report generation, and seamless integration with existing business systems.",
      features: [
        "Real-time data monitoring and alerts",
        "Comprehensive report generation with customizable templates",
        "Multi-user access with role-based permissions",
        "Cloud synchronization and backup",
        "Integration with ERP systems",
        "Mobile app for remote monitoring",
        "Advanced analytics and insights",
        "Automated compliance reporting",
      ],
      specifications: {
        "System Requirements": "Windows 10/11, 8GB RAM, 500GB Storage",
        Database: "SQL Server, MySQL, PostgreSQL compatible",
        Connectivity: "Ethernet, Wi-Fi, Bluetooth",
        Users: "Up to 100 concurrent users",
        Languages: "Multi-language support",
        Support: "24/7 technical support included",
      },
      images: [
        {
          src: "/src/assets/images/software/cctv-weighspring.png",
          alt: "Weighspring Pro Dashboard Interface",
          title: "Main Dashboard",
        },
        {
          src: "/src/assets/images/software/weighbridge.jpg",
          alt: "Analytics and Reporting Interface",
          title: "Analytics View",
        },
        {
          src: "/src/assets/images/software/weighbridge-3.webp",
          alt: "Mobile App Interface",
          title: "Mobile App",
        },
      ],
      benefits: [
        "Improve operational efficiency by up to 40%",
        "Reduce manual errors and data entry time",
        "Ensure compliance with industry regulations",
        "Real-time visibility into operations",
      ],
    },
    "ocs-10a-hanging-scale": {
      name: "OCS 10A Hanging Scale",
      category: "Hardware",
      price: "$1,299",
      status: "In Stock",
      description:
        "High-precision industrial hanging scale with LED display and wireless connectivity.",
      longDescription:
        "The OCS SB1 Hanging Scale is engineered for demanding industrial environments where accuracy and reliability are paramount. With its robust construction and advanced load cell technology, it delivers consistent performance in harsh conditions.",
      features: [
        "1000kg maximum capacity",
        "High-brightness LED display",
        "Bluetooth connectivity for data transfer",
        "Rechargeable lithium battery (up to 80 hours)",
        "IP65 weatherproof rating",
        "Overload protection",
        "Auto-shutdown feature",
        "Remote control included",
      ],
      specifications: {
        Capacity: "1000kg / 2200lbs",
        Accuracy: "±0.1% of full scale",
        Display: 'LED with 1" digits',
        Power: "Rechargeable battery (80+ hours)",
        "Operating Temperature": "-10°C to +50°C",
        "Protection Rating": "IP65",
        Dimensions: "250 x 150 x 60mm",
        Weight: "2.5kg",
      },
      images: [
        {
          src: "/src/assets/images/hardware/OCS SB1 Hanging Scale.jpg",
          alt: "OCS SB1 Hanging Scale Front View",
          title: "Front View",
        },
        {
          src: "/src/assets/images/hardware/OCS SB1.png",
          alt: "LED Display Close-up",
          title: "LED Display",
        },
        {
          src: "/images/ocs-sb1-in-use.jpg",
          alt: "Scale in Industrial Use",
          title: "In Use",
        },
      ],
      benefits: [
        "Portable and easy to use anywhere",
        "Long battery life reduces downtime",
        "Weatherproof design for outdoor use",
        "Wireless data transfer eliminates cables",
      ],
    },
    "cs30-android-pos": {
      name: "CS30 Android POS",
      category: "Hardware",
      price: "$899",
      status: "In Stock",
      description:
        "Versatile Android-based point-of-sale terminal with integrated thermal printer.",
      longDescription:
        "The CS30 Android POS system combines the flexibility of Android with robust POS functionality. Perfect for retail, hospitality, and service businesses that need a reliable, all-in-one solution.",
      features: [
        "Android 11 operating system",
        '15" capacitive touch screen',
        "Built-in 58mm thermal printer",
        "Multiple payment method support",
        "Wi-Fi and Ethernet connectivity",
        "USB ports for peripherals",
        "Cash drawer connectivity",
        "Customer display option",
      ],
      specifications: {
        OS: "Android 11",
        Screen: '15" capacitive touch display',
        Processor: "Quad-core ARM Cortex-A55",
        RAM: "4GB",
        Storage: "64GB eMMC",
        Printer: "58mm thermal, auto-cutter",
        Connectivity: "Wi-Fi, Ethernet, USB 2.0",
        Dimensions: "380 x 320 x 180mm",
      },
      images: [
        {
          src: "/src/assets/images/hardware/POS.jpeg",
          alt: "CS30 Android POS Front View",
          title: "Front View",
        },
        {
          src: "/src/assets/images/hardware/Smart POS.jpg",
          alt: "CS30 Side Profile",
          title: "Side Profile",
        },
        {
          src: "/src/assets/images/hardware/Mobile-Phones.png",
          alt: "Android Interface Screenshot",
          title: "Interface",
        },
      ],
      benefits: [
        "All-in-one design saves counter space",
        "Android OS allows custom app installation",
        "Fast thermal printing reduces wait times",
        "Multiple connectivity options ensure reliability",
      ],
    },
  };

  const product = productData[productSlug];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleImageError = (e) => {
    // Fallback to placeholder if image fails to load
    e.target.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjAgMTIwSDI4MFYyODBIMTIwVjEyMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTE2MCAxNjBIMjQwVjI0MEgxNjBWMTYwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
  };

  const ImageModal = ({ isOpen, onClose, image }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 z-10">
            ×
          </button>
          <img
            src={image?.src || "/placeholder.svg"}
            alt={image?.alt || "Product image"}
            className="max-w-full max-h-full object-contain"
            onError={handleImageError}
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
            {image?.title || "Product Image"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        image={product.images[selectedImageIndex]}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span>›</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/products">
              <ArrowLeft className="mr-2" size={16} />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden group">
                <img
                  src={
                    product.images[selectedImageIndex]?.src ||
                    "/placeholder.svg"
                  }
                  alt={
                    product.images[selectedImageIndex]?.alt ||
                    `${product.name} main image`
                  }
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={handleImageError}
                />
                <button
                  onClick={() => setIsImageModalOpen(true)}
                  className="absolute top-4 right-4 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded cursor-pointer transition-all ${
                      selectedImageIndex === index
                        ? "ring-2 ring-blue-500"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded"
                      onError={handleImageError}
                    />
                  </button>
                ))}
              </div>

              {/* Image Info */}
              <div className="mt-2 text-center">
                <span className="text-sm text-gray-500">
                  {product.images[selectedImageIndex]?.title || "Product Image"}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{product.category}</Badge>
                <Badge
                  variant={
                    product.status === "Available" ||
                    product.status === "In Stock"
                      ? "default"
                      : "secondary"
                  }>
                  {product.status}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 text-lg mb-6">
                {product.description}
              </p>

              <div className="text-3xl font-bold text-blue-600 mb-6">
                {product.price}
              </div>

              <div className="space-y-3 mb-8">
                <Button size="lg" className="w-full" asChild>
                  <Link to="/quote">Get Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 text-center py-4 border-t border-b">
                <div className="flex flex-col items-center">
                  <Shield className="h-6 w-6 text-green-600 mb-1" />
                  <span className="text-sm text-gray-600">Warranty</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="h-6 w-6 text-blue-600 mb-1" />
                  <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="h-6 w-6 text-purple-600 mb-1" />
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description & Features */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Product Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    {product.longDescription}
                  </p>

                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Specifications */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-700">
                            {key}:
                          </span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose {product.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact our experts to learn more about {product.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-green-900 w-34"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/quote">Request Quote</Link>
            </Button>
            <Button
              size="lg"
              className="text-white bg-green-900 w-34 hover:bg-white hover:text-blue-600"
              asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
