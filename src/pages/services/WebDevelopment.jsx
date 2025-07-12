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
import { Code, Smartphone, Database, Palette, Zap, Globe } from "lucide-react";

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description:
        "Custom web applications built with modern frameworks and best practices.",
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
    },
    {
      icon: Database,
      title: "Database Design & Development",
      description:
        "Scalable database solutions with optimal performance and security.",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
    },
    {
      icon: Zap,
      title: "API Development & Integration",
      description:
        "RESTful APIs and third-party integrations for seamless connectivity.",
      technologies: ["REST API", "GraphQL", "WebSocket", "OAuth", "Webhook"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality.",
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Prototyping",
        "User Testing",
      ],
    },
    {
      icon: Code,
      title: "Legacy System Modernization",
      description:
        "Upgrade and modernize existing applications with new technologies.",
      technologies: [
        "Migration",
        "Refactoring",
        "API Wrapper",
        "Microservices",
      ],
    },
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured online store with payment integration and inventory management",
      image: "/images/software/parking-system.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      title: "Healthcare Management System",
      description:
        "Patient management system with appointment scheduling and medical records",
      image: "/src/assets/images/software/cctv.jpg",
      technologies: ["Vue.js", "Python", "MongoDB", "WebSocket"],
    },
    {
      title: "Manufacturing Dashboard",
      description:
        "Real-time monitoring dashboard for production line management",
      image: "/placeholder.svg",
      technologies: ["Angular", "C#", "SQL Server", "SignalR"],
    },
  ];

  const process = [
    {
      phase: "Discovery",
      description:
        "Understanding your requirements, goals, and technical constraints",
    },
    {
      phase: "Planning",
      description:
        "Creating detailed project roadmap, wireframes, and technical specifications",
    },
    {
      phase: "Design",
      description: "Crafting user interfaces and user experience designs",
    },
    {
      phase: "Development",
      description:
        "Building your application using agile development methodologies",
    },
    {
      phase: "Testing",
      description:
        "Comprehensive testing including functionality, performance, and security",
    },
    {
      phase: "Deployment",
      description: "Launching your application and providing ongoing support",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Code className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Web & App Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Custom software solutions that drive your business forward with
            cutting-edge technology
          </p>
          <Button
            className="bg-green-900"
            size="lg"
            variant="secondary"
            asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end development solutions using modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-green-900 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1  bg-green-700 text-green-950 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600">
              Examples of our successful development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Project Screenshot</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-700 text-green-950 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.phase}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              We work with the latest and most reliable technologies
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center">
            {[
              "React",
              "Vue.js",
              "Angular",
              "Node.js",
              "Python",
              "PHP",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Docker",
              "Kubernetes",
              "Git",
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="font-semibold text-gray-800">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-green-600 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss your requirements and create something amazing
            together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              className="bg-green-950 w-44 "
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button
              className="bg-green-950 w-44 "
              size="lg"
              variant="outline"
              asChild>
              <Link to="/quote">Get Development Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopment;
