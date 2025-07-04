import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

const ProductCategory = ({ category }) => {
  const categoryData = {
    software: {
      title: "Software Solutions",
      description:
        "Comprehensive software applications designed to streamline business operations",
      products: [
        {
          name: "Weighspring",
          description:
            "Advanced weighbridge management system with real-time monitoring",
          features: [
            "Real-time data monitoring",
            "Report generation",
            "Multi-user access",
            "Cloud synchronization",
          ],
          price: "Starting at $2,999",
          status: "Available",
          slug: "weighspring",
        },
        {
          name: "Timespring",
          description:
            "Time-released messaging platform for automated communications",
          features: [
            "Scheduled messaging",
            "Multi-channel delivery",
            "Analytics dashboard",
            "API integration",
          ],
          price: "Starting at $1,499",
          status: "Available",
          slug: "timespring",
        },
        {
          name: "Payrollspring",
          description: "Complete payroll processing solution for businesses",
          features: [
            "Automated calculations",
            "Tax compliance",
            "Employee self-service",
            "Reporting tools",
          ],
          price: "Starting at $899",
          status: "Available",
          slug: "payrollspring",
        },
        {
          name: "Secuspring",
          description: "Comprehensive security management module",
          features: [
            "Access control",
            "Surveillance integration",
            "Incident reporting",
            "Real-time alerts",
          ],
          price: "Starting at $1,999",
          status: "Available",
          slug: "secuspring",
        },
        {
          name: "Safetyspring",
          description: "Safety management system for workplace compliance",
          features: [
            "Incident tracking",
            "Safety protocols",
            "Training management",
            "Compliance reporting",
          ],
          price: "Starting at $1,299",
          status: "Available",
          slug: "safetyspring",
        },
        {
          name: "Parkspring",
          description: "Park management system for recreational facilities",
          features: [
            "Booking management",
            "Facility scheduling",
            "Payment processing",
            "Visitor tracking",
          ],
          price: "Starting at $1,799",
          status: "Available",
          slug: "parkspring",
        },
      ],
    },
    weighing: {
      title: "Weighing Equipment",
      description:
        "Precision weighing solutions for industrial and commercial applications",
      products: [
        {
          name: "OCS SB1 Hanging Scale",
          description:
            "High-precision industrial hanging scale with LED display",
          features: [
            "1000kg capacity",
            "LED display",
            "Bluetooth connectivity",
            "Rechargeable battery",
          ],
          price: "$1,299",
          status: "In Stock",
          slug: "ocs-sb1-hanging-scale",
        },
        {
          name: "SS Indicator with Bluetooth",
          description: "Smart weighing indicator with wireless connectivity",
          features: [
            "Bluetooth connectivity",
            "Multiple unit display",
            "Data logging",
            "Printer compatible",
          ],
          price: "$599",
          status: "In Stock",
          slug: "ss-indicator-bluetooth",
        },
        {
          name: "SCS Pallet Truck Scale",
          description: "Mobile weighing solution for warehouse operations",
          features: [
            "2000kg capacity",
            "Built-in printer",
            "Rechargeable battery",
            "Stainless steel construction",
          ],
          price: "$3,499",
          status: "In Stock",
          slug: "scs-pallet-truck-scale",
        },
        {
          name: "Checkered Plate Platform Scale",
          description: "Durable platform scale for heavy-duty applications",
          features: [
            "5000kg capacity",
            "Anti-slip surface",
            "Weatherproof housing",
            "Digital indicator",
          ],
          price: "$2,199",
          status: "In Stock",
          slug: "checkered-plate-platform-scale",
        },
        {
          name: "Bench Scale",
          description: "Compact precision scale for laboratory and retail use",
          features: [
            "0.1g precision",
            "Stainless steel pan",
            "AC/DC operation",
            "RS232 interface",
          ],
          price: "$399",
          status: "In Stock",
          slug: "bench-scale",
        },
        {
          name: "Electronic Platform Scale",
          description:
            "Versatile platform scale for general weighing applications",
          features: [
            "500kg capacity",
            "Large LCD display",
            "Tare function",
            "Overload protection",
          ],
          price: "$899",
          status: "In Stock",
          slug: "electronic-platform-scale",
        },
        {
          name: "Pallet Weighing Scale",
          description: "Specialized scale designed for pallet weighing",
          features: [
            "3000kg capacity",
            "Low profile design",
            "Portable design",
            "Digital readout",
          ],
          price: "$1,799",
          status: "In Stock",
          slug: "pallet-weighing-scale",
        },
      ],
    },
    hardware: {
      title: "Hardware & Accessories",
      description:
        "Computing hardware and peripheral devices for business operations",
      products: [
        {
          name: "Mini Bluetooth Thermal Printers",
          description:
            "Compact wireless thermal printers for mobile applications",
          features: [
            "Bluetooth connectivity",
            "Portable design",
            "Long battery life",
            "Multiple paper sizes",
          ],
          price: "$299",
          status: "In Stock",
          slug: "mini-bluetooth-thermal-printers",
        },
        {
          name: "CS30 Multipurpose Android POS",
          description: "Versatile Android-based point-of-sale terminal",
          features: [
            "Android OS",
            '15" touch screen',
            "Built-in thermal printer",
            "Multiple payment methods",
          ],
          price: "$899",
          status: "In Stock",
          slug: "cs30-android-pos",
        },
        {
          name: "Laptops and Desktops",
          description: "Business-grade computers for professional use",
          features: [
            "Intel processors",
            "SSD storage",
            "Business warranty",
            "Pre-installed software",
          ],
          price: "Starting at $699",
          status: "In Stock",
          slug: "laptops-desktops",
        },
        {
          name: "Smartphones",
          description: "Business smartphones with enterprise features",
          features: [
            "Enterprise security",
            "Long battery life",
            "Rugged design",
            "MDM compatible",
          ],
          price: "Starting at $399",
          status: "In Stock",
          slug: "smartphones",
        },
        {
          name: "Accessories",
          description: "Various accessories and peripheral devices",
          features: [
            "Cables and adapters",
            "Protective cases",
            "Mounting hardware",
            "Power supplies",
          ],
          price: "Various pricing",
          status: "In Stock",
          slug: "accessories",
        },
      ],
    },
  };

  const currentCategory = categoryData[category];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentCategory.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

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
            <span className="text-gray-900">{currentCategory.title}</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCategory.products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
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
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-600 mb-3">
                      {product.price}
                    </div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <Link to={`/product/${product.slug}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/quote">Request Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-gray-600 mb-6">
              Our experts are here to help you find the perfect solution for
              your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Expert</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/support">Technical Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
