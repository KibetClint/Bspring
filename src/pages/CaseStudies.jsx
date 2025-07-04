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
import {
  Download,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
} from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Automotive Manufacturer Achieves 40% Waste Reduction",
      company: "AutoCorp Industries",
      industry: "Manufacturing",
      challenge:
        "Inconsistent weighing processes leading to material waste and quality issues",
      solution:
        "Implemented Weighspring Pro across 12 production facilities with integrated quality control",
      results: [
        { metric: "Waste Reduction", value: "40%", icon: TrendingUp },
        { metric: "Implementation Time", value: "3 months", icon: Clock },
        { metric: "Annual Savings", value: "$2.1M", icon: DollarSign },
      ],
      image: "/placeholder.svg",
      featured: true,
    },
    {
      title: "International Freight Company Streamlines Operations",
      company: "GlobalShip Logistics",
      industry: "Logistics",
      challenge:
        "Manual weighing processes causing delays and billing inaccuracies",
      solution:
        "Deployed integrated weighbridge and management systems across 25 distribution centers",
      results: [
        { metric: "Processing Speed", value: "60% faster", icon: TrendingUp },
        { metric: "Accuracy Rate", value: "99.8%", icon: Clock },
        { metric: "Cost Reduction", value: "30%", icon: DollarSign },
      ],
      image: "/placeholder.svg",
      featured: true,
    },
    {
      title: "Regional Hospital Network Enhances Patient Safety",
      company: "HealthCare Alliance",
      industry: "Healthcare",
      challenge: "Manual medication dosing calculations prone to human error",
      solution:
        "Precision weighing systems with integrated safety protocols and digital records",
      results: [
        { metric: "Error Reduction", value: "95%", icon: TrendingUp },
        { metric: "Compliance Score", value: "100%", icon: Clock },
        { metric: "Time Savings", value: "45%", icon: DollarSign },
      ],
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Major Retailer Modernizes Point-of-Sale Systems",
      company: "SuperMart Chain",
      industry: "Retail",
      challenge:
        "Outdated POS systems causing checkout delays and inventory issues",
      solution:
        "CS30 Android POS systems with integrated weighing and inventory management",
      results: [
        { metric: "Checkout Speed", value: "50% faster", icon: TrendingUp },
        { metric: "Inventory Accuracy", value: "98%", icon: Clock },
        { metric: "Customer Satisfaction", value: "95%", icon: DollarSign },
      ],
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "City Transportation Department Improves Compliance",
      company: "Metro City Government",
      industry: "Municipal",
      challenge:
        "Vehicle weight compliance monitoring and revenue collection inefficiencies",
      solution:
        "Automated weighbridge systems with violation detection and reporting",
      results: [
        { metric: "Compliance Rate", value: "85%", icon: TrendingUp },
        { metric: "Revenue Increase", value: "120%", icon: Clock },
        { metric: "Processing Time", value: "70% reduction", icon: DollarSign },
      ],
      image: "/placeholder.svg",
      featured: false,
    },
    {
      title: "Fortune 500 Company Strengthens Cybersecurity",
      company: "TechGlobal Corp",
      industry: "Technology",
      challenge:
        "Multiple security vulnerabilities discovered in routine audit",
      solution:
        "Comprehensive penetration testing and security hardening program",
      results: [
        { metric: "Vulnerabilities Fixed", value: "100%", icon: TrendingUp },
        { metric: "Security Score", value: "98/100", icon: Clock },
        { metric: "Incident Reduction", value: "90%", icon: DollarSign },
      ],
      image: "/placeholder.svg",
      featured: false,
    },
  ];

  const featuredStudies = caseStudies.filter((study) => study.featured);
  const otherStudies = caseStudies.filter((study) => !study.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Real results from real businesses using Brickspring solutions
          </p>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              In-depth looks at our most impactful implementations
            </p>
          </div>

          <div className="space-y-12">
            {featuredStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-200 min-h-64"></div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge>{study.industry}</Badge>
                        <Badge variant="outline">Featured</Badge>
                      </div>
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                      <CardDescription className="text-base">
                        <strong>Company:</strong> {study.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">
                            Solution
                          </h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-green-600 mb-3">
                            Results
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            {study.results.map((result, idx) => (
                              <div
                                key={idx}
                                className="text-center p-4 bg-gray-50 rounded-lg">
                                <result.icon className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                                <div className="text-2xl font-bold text-orange-600">
                                  {result.value}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {result.metric}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-4 pt-4">
                          <Button>
                            Read Full Case Study{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Additional examples of our impact across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge>{study.industry}</Badge>
                  </div>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription>
                    <strong>Company:</strong> {study.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">{study.challenge}</p>

                    <div className="grid grid-cols-3 gap-2">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="text-center p-2 bg-gray-50 rounded">
                          <div className="text-lg font-bold text-orange-600">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        Read More
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Across Industries
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Manufacturing",
              "Logistics",
              "Healthcare",
              "Retail",
              "Municipal",
              "Technology",
            ].map((industry, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {Math.floor(Math.random() * 50) + 10}+
                  </div>
                  <div className="text-sm text-gray-600">{industry}</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-orange-600">
              Download All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
