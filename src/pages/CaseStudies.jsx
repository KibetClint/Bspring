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
      title: "Global Waste Reduction and Recycling Leader Optimizes Production",
      company: "Mr Green Africa",
      industry: "Waste Collection",
      challenge:
        "Inefficient bulk weighing process at the recycling plant causing delays in material intake and billing discrepancies.",
      solution:
        "Installed a high‑accuracy 100 ton digital weighbridge fully integrated with WeighConnect Enterprise for real‑time data capture.",
      results: [
        { metric: "Waste Reduction", value: "40%", icon: TrendingUp },
        { metric: "Implementation Time", value: "3 months", icon: Clock },
        { metric: "Annual Savings", value: "$2.1M", icon: DollarSign },
      ],
      image: "/public/images/case-studies/mr green.webp",
      featured: true,
    },
    {
      title: "Manufacturing and exporting company",
      company: "Evergreen",
      industry: "Manufacturing",
      challenge:
        "Manual weighing processes causing delays and billing inaccuracies",
      solution:
        "Deployed integrated weighbridge and management systems across 25 distribution centers",
      results: [
        { metric: "Processing Speed", value: "60% faster", icon: TrendingUp },
        { metric: "Accuracy Rate", value: "99.8%", icon: Clock },
        { metric: "Cost Reduction", value: "30%", icon: DollarSign },
      ],
      image: "/public/images/case-studies/mr green.jpg",
      featured: true,
    },
    {
      title: "Constructions Company Enhances Project",
      company: "Kiron Constructions",
      industry: "Construction",
      challenge:
        "Coordinating real-time communication across multiple sites and ensuring timely delivery of critical project updates.",
      solution:
        "Deployed **Timespring**, enabling scheduled messaging and instant alerts to site teams, supervisors, and management across mobile and desktop platforms.",
      results: [
        { metric: "Error Reduction", value: "95%", icon: TrendingUp },
        { metric: "Compliance Score", value: "100%", icon: Clock },
        { metric: "Time Savings", value: "45%", icon: DollarSign },
      ],
      image: "/public/images/case-studies/kiron.png",
      featured: false,
    },
    {
      title: "Major Processing Plant ",
      company: "Browns Group",
      industry: "Food Processing",
      challenge:
        "Lack of accurate farm-produce weighing at factory intake enabled cheating and manual manipulation of farmer deliveries.",
      solution:
        "Installed precision farm-produce digital scales (±0.1% accuracy) with Bluetooth thermal printers at factory intake points to issue tamper-proof weight tickets and record real-time delivery data.",
      results: [
        { metric: "Checkout Speed", value: "50% faster", icon: TrendingUp },
        { metric: "Inventory Accuracy", value: "98%", icon: Clock },
        { metric: "Customer Satisfaction", value: "95%", icon: DollarSign },
      ],
      image: "/public/images/case-studies/kisyet.jpg",
      featured: false,
    },
  ];

  const featuredStudies = caseStudies.filter((study) => study.featured);
  const otherStudies = caseStudies.filter((study) => !study.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-950 text-white py-20">
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

          <div className="space-y-12 text-start">
            {featuredStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-200 min-h-64">
                    {" "}
                    <img
                      src={study.image}
                      alt={study.company}
                      className="object-cover w-full h-64 md:h-full"
                    />
                  </div>
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
                                <result.icon className="h-8 w-8 mx-auto mb-2 text-green-800" />
                                <div className="text-2xl font-bold text-green-800">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-start">
            {otherStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  {" "}
                  <img
                    src={study.image}
                    alt={study.company}
                    className="object-cover w-full h-54 md:h-full"
                  />
                </div>
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
                          <div className="text-lg font-bold text-green-800">
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
      <section className="py-10">
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
                  <div className="text-2xl font-bold text-green-800 mb-1">
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
      <section className="py-6 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-900" size="lg" variant="secondary">
              Start Your Project
            </Button>
            <Button size="lg" className="text-white border-white bg-green-900 ">
              Download All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
