import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import { Camera, Shield, Monitor, Wifi, HardDrive, Eye } from "lucide-react";

const CCTVInstallation = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 800, offset: 80 });
  }, []);

  const services = [
    {
      icon: Camera,
      title: "Security Camera Installation",
      description:
        "Professional installation of high-quality security cameras for comprehensive coverage.",
      features: [
        "HD/4K cameras",
        "Night vision capability",
        "Weather-resistant housing",
        "Motion detection",
      ],
    },
    {
      icon: Monitor,
      title: "Monitoring System Setup",
      description:
        "Complete monitoring solutions with real-time viewing and recording capabilities.",
      features: [
        "24/7 recording",
        "Remote monitoring",
        "Multi-device access",
        "Alert notifications",
      ],
    },
    {
      icon: Wifi,
      title: "Network Configuration",
      description:
        "Secure network setup for IP cameras and wireless surveillance systems.",
      features: [
        "Wireless setup",
        "Network security",
        "Bandwidth optimization",
        "Remote access",
      ],
    },
    {
      icon: HardDrive,
      title: "Storage Solutions",
      description:
        "Reliable storage systems for continuous recording and easy retrieval.",
      features: [
        "Local storage (NVR/DVR)",
        "Cloud storage options",
        "Backup solutions",
        "Data retention policies",
      ],
    },
    {
      icon: Shield,
      title: "Security Assessment",
      description:
        "Comprehensive site survey to identify optimal camera placement and coverage.",
      features: [
        "Site analysis",
        "Vulnerability assessment",
        "Coverage planning",
        "Risk evaluation",
      ],
    },
    {
      icon: Eye,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance and technical support to ensure optimal system performance.",
      features: [
        "Regular maintenance",
        "Software updates",
        "Technical support",
        "System optimization",
      ],
    },
  ];

  const cameraTypes = [
    // ... (same as before)
    {
      type: "Dome Cameras",
      description:
        "Discrete, vandal-resistant cameras ideal for indoor and outdoor use",
      applications: ["Retail stores", "Offices", "Restaurants", "Warehouses"],
    },
    {
      type: "Bullet Cameras",
      description:
        "Long-range cameras perfect for monitoring large outdoor areas",
      applications: ["Parking lots", "Perimeters", "Entrances", "Driveways"],
    },
    {
      type: "PTZ Cameras",
      description: "Pan-tilt-zoom cameras for active monitoring and tracking",
      applications: [
        "Large facilities",
        "Public spaces",
        "Events",
        "Critical areas",
      ],
    },
    {
      type: "IP Cameras",
      description: "Network cameras with high resolution and smart features",
      applications: [
        "Modern buildings",
        "Smart homes",
        "Remote locations",
        "Integration needs",
      ],
    },
  ];

  const industries = [
    { name: "Retail & Shopping Centers", icon: "🏪" },
    { name: "Manufacturing Facilities", icon: "🏭" },
    { name: "Office Buildings", icon: "🏢" },
    { name: "Healthcare Facilities", icon: "🏥" },
    { name: "Educational Institutions", icon: "🏫" },
    { name: "Residential Properties", icon: "🏠" },
    { name: "Government Buildings", icon: "🏛️" },
    { name: "Hospitality & Hotels", icon: "🏨" },
  ];

  const process = [
    {
      step: "Site Survey",
      description:
        "Comprehensive assessment of your property to identify security needs and optimal camera placement",
      duration: "1-2 days",
    },
    {
      step: "System Design",
      description:
        "Custom security system design with camera specifications and network requirements",
      duration: "2-3 days",
    },
    {
      step: "Installation",
      description:
        "Professional installation of cameras, wiring, and monitoring equipment",
      duration: "1-5 days",
    },
    {
      step: "Configuration",
      description:
        "Network setup, camera configuration, and monitoring system implementation",
      duration: "1-2 days",
    },
    {
      step: "Testing",
      description: "Comprehensive testing of all components and user training",
      duration: "1 day",
    },
    {
      step: "Support",
      description:
        "Ongoing maintenance, monitoring, and technical support services",
      duration: "Ongoing",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-green-800 to-green-900 text-white py-10"
        data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Camera className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CCTV Installation Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional surveillance system installation and maintenance for
            complete security coverage
          </p>
          <Button
            className="bg-green-950"
            size="lg"
            variant="secondary"
            asChild>
            <Link to="/contact">Schedule Site Survey</Link>
          </Button>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our CCTV Services
            </h2>
            <p className="text-xl text-gray-700">
              Complete surveillance solutions from planning to maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // Define a color for each icon based on index or service
              const iconColors = [
                "text-green-950",
                "text-blue-700",
                "text-yellow-600",
                "text-purple-700",
                "text-red-700",
                "text-teal-700",
              ];
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}>
                  <CardHeader>
                    <Icon
                      className={`h-12 w-12 mb-4 ${
                        iconColors[index % iconColors.length]
                      }`}
                    />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-900 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-4" data-aos="fade-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Camera Types & Applications
            </h2>
            <p className="text-xl text-gray-700">
              Choosing the right camera for your specific security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cameraTypes.map((camera, index) => (
              <Card key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <CardHeader>
                  <CardTitle className="text-xl">{camera.type}</CardTitle>
                  <CardDescription>{camera.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2 text-green-900">
                    Best For:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {camera.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Industries Served */}
      <section className="py-4" data-aos="fade-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Tailored security solutions for various sectors
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 text-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-4"
                data-aos="zoom-in"
                data-aos-delay={index * 80}>
                <div className="text-4xl mb-2">{industry.icon}</div>
                <div className="font-semibold text-gray-600">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Installation Process */}
      <section className="py-4" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Installation Process
            </h2>
            <p className="text-xl text-gray-700">
              Our systematic approach ensures optimal security coverage
            </p>
          </div>

          <div className="space-y-8 text-start">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-start"
                data-aos="fade-right"
                data-aos-delay={index * 120}>
                <div className="flex-shrink-0 w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{step.step}</h3>
                    <span className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded">
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
      {/* Features Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-700">
              Modern surveillance technology for enhanced security
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "AI-Powered Analytics",
                description:
                  "Intelligent motion detection and behavior analysis",
              },
              {
                title: "Mobile Access",
                description: "View live feeds and recordings from anywhere",
              },
              {
                title: "Cloud Storage",
                description: "Secure cloud backup and remote storage options",
              },
              {
                title: "Integration Ready",
                description: "Compatible with existing security systems",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6"
                data-aos="zoom-in"
                data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-8 bg-gray-400" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Property Today
          </h2>
          <p className="text-xl mb-8">
            Professional CCTV installation and monitoring solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-green-800"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Schedule Survey</Link>
            </Button>
            <Button
              className="bg-green-800"
              size="lg"
              variant="outline"
              asChild>
              <Link to="/quote">Get Installation Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CCTVInstallation;
