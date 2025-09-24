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
import {
  Shield,
  Search,
  FileText,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cybersecurity = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description:
        "Comprehensive scanning and analysis of your systems to identify security weaknesses.",
      features: [
        "Network scanning",
        "Web application testing",
        "Database security review",
        "Configuration analysis",
      ],
    },
    {
      icon: Shield,
      title: "Penetration Testing",
      description:
        "Ethical hacking to simulate real-world attacks and test your defenses.",
      features: [
        "External penetration testing",
        "Internal network testing",
        "Wireless security testing",
        "Social engineering tests",
      ],
    },
    {
      icon: FileText,
      title: "Security Audits",
      description:
        "Detailed examination of your security policies, procedures, and implementations.",
      features: [
        "Policy review",
        "Compliance assessment",
        "Risk analysis",
        "Documentation review",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description:
        "Rapid response and recovery services for security incidents and breaches.",
      features: [
        "24/7 emergency response",
        "Forensic analysis",
        "Recovery planning",
        "Post-incident review",
      ],
    },
  ];

  const complianceStandards = [
    "ISO 27001",
    "SOC 2",
    "PCI DSS",
    "HIPAA",
    "GDPR",
    "NIST Framework",
  ];

  const process = [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "We begin with a comprehensive assessment of your current security posture and identify key assets and potential vulnerabilities.",
    },
    {
      step: 2,
      title: "Planning & Scoping",
      description:
        "Define the scope of testing, create detailed test plans, and establish rules of engagement to ensure safe testing.",
    },
    {
      step: 3,
      title: "Testing Execution",
      description:
        "Conduct systematic testing using industry-standard tools and methodologies to identify security weaknesses.",
    },
    {
      step: 4,
      title: "Analysis & Reporting",
      description:
        "Analyze findings, assess risk levels, and provide detailed reports with actionable recommendations.",
    },
    {
      step: 5,
      title: "Remediation Support",
      description:
        "Assist with implementing security improvements and conduct follow-up testing to verify fixes.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#236837] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="flex justify-center mb-6"
            data-aos="zoom-in"
            data-aos-delay="200">
            <Shield className="h-16 w-16" />
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="300">
            Cybersecurity & Penetration Testing
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400">
            Protect your business with comprehensive security assessments and
            penetration testing services
          </p>
          <div data-aos="fade-up" data-aos-delay="500">
            <Button
              className="bg-green-900 text-white"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Schedule Security Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-green-900"
              data-aos="fade-up">
              Our Security Services
            </h2>
            <p
              className="text-xl text-gray-700"
              data-aos="fade-up"
              data-aos-delay="100">
              Comprehensive cybersecurity solutions to protect your digital
              assets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 200}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div data-aos="zoom-in" data-aos-delay={index * 150 + 300}>
                      <service.icon className="h-8 w-8 text-red-600 mr-4" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-green-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-xl text-gray-700">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center"
                        data-aos="fade-right"
                        data-aos-delay={index * 150 + 400 + idx * 50}>
                        <CheckCircle className="h-4 w-4 text-green-800 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-green-900"
              data-aos="fade-up">
              Our Testing Process
            </h2>
            <p
              className="text-xl text-gray-700"
              data-aos="fade-up"
              data-aos-delay="100">
              A systematic approach to identifying and addressing security
              vulnerabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay={index * 150 + 200}>
                <div
                  className="flex-shrink-0 w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-base mr-4"
                  data-aos="zoom-in"
                  data-aos-delay={index * 150 + 300}>
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-green-900"
              data-aos="fade-up">
              Compliance Standards
            </h2>
            <p
              className="text-xl text-gray-700"
              data-aos="fade-up"
              data-aos-delay="100">
              We help you meet industry compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="p-4 border bg-green-800 rounded-lg hover:shadow-md transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 200}>
                <div className="font-semibold text-gray-800">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Don't wait for a security breach. Get a comprehensive security
            assessment now.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="400">
            <Button
              className="bg-green-900 w-40"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
            <Button className="bg-green-900 w-40" size="lg" asChild>
              <Link to="/quote">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cybersecurity;
