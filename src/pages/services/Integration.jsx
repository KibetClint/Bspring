import Layout from "../../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Link2, Database, Workflow, Cloud, Settings } from "lucide-react";

const Integration = () => {
  const services = [
    {
      icon: Link2,
      title: "System Integration",
      description:
        "Connect disparate systems and applications for seamless data flow.",
      benefits: [
        "Eliminate data silos",
        "Improve efficiency",
        "Reduce manual work",
        "Better decision making",
      ],
    },
    {
      icon: Database,
      title: "Data Migration",
      description:
        "Safe and secure transfer of data between systems and platforms.",
      benefits: [
        "Zero data loss",
        "Minimal downtime",
        "Data validation",
        "Rollback capability",
      ],
    },
    {
      icon: Zap,
      title: "API Development",
      description:
        "Custom APIs to enable communication between different applications.",
      benefits: [
        "Real-time sync",
        "Scalable architecture",
        "Secure connections",
        "Standard protocols",
      ],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Automate business processes to improve productivity and reduce errors.",
      benefits: [
        "Process optimization",
        "Error reduction",
        "Time savings",
        "Consistent results",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Connect on-premise systems with cloud services and platforms.",
      benefits: [
        "Hybrid solutions",
        "Scalability",
        "Cost optimization",
        "Enhanced security",
      ],
    },
    {
      icon: Settings,
      title: "Legacy Modernization",
      description:
        "Update and integrate legacy systems with modern applications.",
      benefits: [
        "Preserve investments",
        "Modern interfaces",
        "Enhanced functionality",
        "Future-ready",
      ],
    },
  ];

  const platforms = [
    {
      category: "ERP Systems",
      systems: ["SAP", "Oracle ERP", "Microsoft Dynamics", "NetSuite", "Sage"],
    },
    {
      category: "CRM Platforms",
      systems: ["Salesforce", "HubSpot", "Microsoft CRM", "Zoho", "Pipedrive"],
    },
    {
      category: "E-commerce",
      systems: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Amazon"],
    },
    {
      category: "Accounting",
      systems: ["QuickBooks", "Xero", "FreshBooks", "Wave", "Sage Accounting"],
    },
    {
      category: "Cloud Services",
      systems: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "Salesforce",
        "Office 365",
      ],
    },
    {
      category: "Databases",
      systems: ["MySQL", "PostgreSQL", "SQL Server", "Oracle", "MongoDB"],
    },
  ];

  const process = [
    {
      step: "Assessment",
      description:
        "Analyze current systems, data flow, and integration requirements",
      duration: "1-2 weeks",
    },
    {
      step: "Design",
      description:
        "Create integration architecture and define data mapping strategies",
      duration: "1-3 weeks",
    },
    {
      step: "Development",
      description:
        "Build integration solutions, APIs, and data transformation logic",
      duration: "2-8 weeks",
    },
    {
      step: "Testing",
      description:
        "Comprehensive testing including data validation and error handling",
      duration: "1-2 weeks",
    },
    {
      step: "Deployment",
      description:
        "Phased rollout with monitoring and support during transition",
      duration: "1 week",
    },
    {
      step: "Support",
      description: "Ongoing monitoring, maintenance, and optimization services",
      duration: "Ongoing",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Link2 className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Integration Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect your systems, streamline workflows, and unlock the full
            potential of your data
          </p>
          <Button
            className="bg-green-800"
            size="lg"
            variant="secondary"
            asChild>
            <Link to="/contact">Start Integration Project</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integration Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive integration services to connect your business
              systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supported Platforms
            </h2>
            <p className="text-xl text-gray-600">
              We integrate with a wide range of business systems and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-green-900">
                    {platform.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {platform.systems.map((system, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {system}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integration Process
            </h2>
            <p className="text-xl text-gray-600">
              Our systematic approach ensures successful integration projects
            </p>
          </div>

          <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-start">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{step.step}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integration Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Transform your business operations with seamless system
              integration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "Improved Efficiency",
                description:
                  "Eliminate manual data entry and reduce processing time",
              },
              {
                title: "Better Data Quality",
                description:
                  "Ensure data consistency and accuracy across systems",
              },
              {
                title: "Cost Reduction",
                description:
                  "Lower operational costs through automation and optimization",
              },
              {
                title: "Enhanced Visibility",
                description:
                  "Get real-time insights and better business intelligence",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="w-10 h-10  bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss your integration needs and create a seamless solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-green-800 w-40"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Discuss Integration</Link>
            </Button>
            <Button className="bg-green-800 w-40" size="lg" asChild>
              <Link to="/quote">Get Integration Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Integration;
