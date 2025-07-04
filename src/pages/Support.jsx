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
import {
  Search,
  Download,
  BookOpen,
  Video,
  HelpCircle,
  FileText,
} from "lucide-react";
import { useState } from "react";

const Support = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const supportCategories = [
    {
      title: "Knowledge Base",
      description:
        "Find answers to common questions and troubleshooting guides",
      icon: <BookOpen className="w-8 h-8" />,
      count: "200+ articles",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Downloads",
      description: "Software, drivers, manuals, and documentation",
      icon: <Download className="w-8 h-8" />,
      count: "50+ resources",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for products and services",
      icon: <Video className="w-8 h-8" />,
      count: "30+ videos",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Technical Support",
      description: "Contact our technical team for advanced assistance",
      icon: <HelpCircle className="w-8 h-8" />,
      count: "24/7 available",
      color: "bg-red-100 text-red-600",
    },
  ];

  const popularArticles = [
    "How to set up Weighspring software",
    "Troubleshooting Bluetooth connectivity issues",
    "Calibrating your weighing equipment",
    "Installing CCTV system components",
    "Setting up multi-user access",
    "Data backup and recovery procedures",
  ];

  const downloadCategories = [
    {
      name: "Software Downloads",
      items: [
        "Weighspring v3.2",
        "Timespring v2.1",
        "Payrollspring v1.8",
        "Mobile Apps",
      ],
    },
    {
      name: "Drivers & Firmware",
      items: [
        "Scale Drivers",
        "Printer Drivers",
        "Firmware Updates",
        "Bluetooth Drivers",
      ],
    },
    {
      name: "Documentation",
      items: [
        "User Manuals",
        "Installation Guides",
        "API Documentation",
        "Quick Start Guides",
      ],
    },
    {
      name: "Catalogs & Brochures",
      items: [
        "Product Catalog 2024",
        "Service Brochure",
        "Specification Sheets",
        "Case Studies",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support Center
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get help with our products and services through our comprehensive
            support resources
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search for help articles, guides, or downloads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-gray-900"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-sm text-gray-500 mb-4">
                    {category.count}
                  </div>
                  <Button variant="outline" className="w-full">
                    Browse
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Popular Help Articles</h2>
              <div className="space-y-3">
                {popularArticles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <FileText className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 hover:text-blue-600">
                      {article}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="mt-6" asChild>
                <Link to="/support/knowledge-base">View All Articles</Link>
              </Button>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Submit a Support Ticket
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Get personalized help from our technical team
                    </p>
                    <Button className="w-full">Create Ticket</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Live Chat Support
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Chat with our support team in real-time
                    </p>
                    <Button variant="outline" className="w-full">
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Schedule a Call
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Book a phone consultation with our experts
                    </p>
                    <Button variant="outline" className="w-full">
                      Book Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Downloads</h2>
            <p className="text-xl text-gray-600">
              Access software, drivers, documentation, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {downloadCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                        <Download className="w-4 h-4 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View All
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8">
              Our support team is here to assist you
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-400">Mon-Fri: 8AM-6PM</p>
              </div>

              <div className="text-center">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-gray-300 mb-2">support@brickspring.com</p>
                <p className="text-sm text-gray-400">
                  Response within 24 hours
                </p>
              </div>

              <div className="text-center">
                <div className="text-2xl mb-2">🚨</div>
                <h3 className="text-lg font-semibold mb-2">Emergency</h3>
                <p className="text-gray-300 mb-2">+1 (555) 911-HELP</p>
                <p className="text-sm text-gray-400">
                  24/7 for critical issues
                </p>
              </div>
            </div>

            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Support Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
