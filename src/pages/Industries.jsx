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
import {
  Factory,
  Truck,
  Hospital,
  ShoppingCart,
  Building,
  Shield,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Manufacturing & Industrial",
      description:
        "Precision weighing solutions for production lines, quality control, and inventory management",
      icon: Factory,
      products: [
        "Weighspring Pro",
        "Industrial Platform Scales",
        "Process Control Systems",
      ],
      caseStudy: "Automotive Parts Manufacturer",
      benefits: ["Improved accuracy", "Reduced waste", "Compliance tracking"],
    },
    {
      title: "Logistics & Warehousing",
      description:
        "Comprehensive solutions for freight, shipping, and warehouse operations",
      icon: Truck,
      products: [
        "Weighbridge Systems",
        "Pallet Truck Scales",
        "WMS Integration",
      ],
      caseStudy: "Global Shipping Company",
      benefits: ["Faster processing", "Accurate billing", "Real-time tracking"],
    },
    {
      title: "Healthcare & Laboratories",
      description:
        "Precise measurement solutions for medical and research applications",
      icon: Hospital,
      products: [
        "Analytical Balances",
        "Medical Scales",
        "Laboratory Software",
      ],
      caseStudy: "Regional Medical Center",
      benefits: ["Patient safety", "Regulatory compliance", "Data integrity"],
    },
    {
      title: "Retail & Point of Sale",
      description: "Modern POS systems and retail weighing solutions",
      icon: ShoppingCart,
      products: ["CS30 Android POS", "Retail Scales", "Payment Integration"],
      caseStudy: "Grocery Chain",
      benefits: ["Customer experience", "Inventory control", "Sales analytics"],
    },
    {
      title: "Municipal & Government",
      description:
        "Public sector solutions for compliance and operational efficiency",
      icon: Building,
      products: [
        "Vehicle Weighing",
        "Waste Management Systems",
        "Compliance Software",
      ],
      caseStudy: "City Transportation Dept",
      benefits: ["Public safety", "Revenue collection", "Asset management"],
    },
    {
      title: "Security & Surveillance",
      description: "Advanced security systems and cybersecurity services",
      icon: Shield,
      products: ["CCTV Systems", "Access Control", "Penetration Testing"],
      caseStudy: "Corporate Campus",
      benefits: [
        "Threat prevention",
        "Incident response",
        "Compliance assurance",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Tailored technology solutions for every industry's unique challenges
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full mr-4">
                      <industry.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </div>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Products:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.products.map((product, idx) => (
                          <Badge key={idx} variant="outline">
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-500 mb-3">
                        Case Study: {industry.caseStudy}
                      </p>
                      <Button className="w-full" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Manufacturing Excellence</CardTitle>
                <CardDescription>
                  Global Auto Parts Manufacturer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Implemented comprehensive weighing and quality control
                    systems across 12 production facilities.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        40%
                      </div>
                      <div className="text-sm text-gray-500">
                        Waste Reduction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        99.8%
                      </div>
                      <div className="text-sm text-gray-500">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        $2M
                      </div>
                      <div className="text-sm text-gray-500">
                        Annual Savings
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Logistics Transformation</CardTitle>
                <CardDescription>International Freight Company</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Deployed integrated weighbridge and management systems
                    across 25 distribution centers.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        60%
                      </div>
                      <div className="text-sm text-gray-500">
                        Faster Processing
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        95%
                      </div>
                      <div className="text-sm text-gray-500">
                        Customer Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        30%
                      </div>
                      <div className="text-sm text-gray-500">
                        Cost Reduction
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Expertise CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our industry experts help you find the perfect solution for your
            specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Speak with Expert</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600"
              asChild>
              <Link to="/quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
