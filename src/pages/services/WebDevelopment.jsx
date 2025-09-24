import { useEffect } from "react";
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
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          once: false,
          offset: 100,
        });
      });
    }
  }, []);

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
      title: "Travel And Tours Website",
      description: "Travel and Tours website Booking Platform",
      image: "/public/images/services/Tours.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      title: "Farm Website",
      description: "Farm Website with e-commerce capabilities",
      image: "/public/images/services/Farm.png",
      technologies: ["Vue.js", "Python", "MongoDB", "WebSocket"],
    },
    {
      title: "Event Management System",
      description:
        "Real-time monitoring dashboard for production line management",
      image: "/public/images/services/Pool.png",
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

  const technologies = [
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
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="flex justify-center mb-6"
            data-aos="zoom-in"
            data-aos-delay="200">
            <Code className="h-16 w-16" />
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="400">
            Web & App Development
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="600">
            Custom software solutions that drive your business forward with
            cutting-edge technology
          </p>
          <div data-aos="fade-up" data-aos-delay="800">
            <Button
              className="bg-green-900"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl text-green-900 md:text-4xl font-bold mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-700">
              End-to-end development solutions using modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}>
                <CardHeader>
                  <service.icon className="h-8 w-8 text-green-900 mb-4" />
                  <CardTitle className="text-xl text-green-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-green-700 text-gray-700 text-xs rounded-full">
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
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl text-green-900 md:text-4xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-700">
              Examples of our successful development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
                data-aos="flip-left"
                data-aos-delay={index * 150}>
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder.svg";
                    }}
                  />
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

      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl text-green-900 md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-700">
              A proven methodology for successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.phase}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-16 bg-green-700-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-700">
              We work with the latest and most reliable technologies
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-center">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 50}>
                <div className="font-semibold text-gray-800">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-green-600 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Let's discuss your requirements and create something amazing
            together
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400">
            <Button
              className="bg-green-950 w-44"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button
              className="bg-green-950 w-44"
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
