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

const Cybersecurity = () => {
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
      <section className="bg-gradient-to-r from-green-800 to-green-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cybersecurity & Penetration Testing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Protect your business with comprehensive security assessments and
            penetration testing services
          </p>
          <Button
            className="bg-green-900"
            size="lg"
            variant="secondary"
            asChild>
            <Link to="/contact">Schedule Security Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cybersecurity solutions to protect your digital
              assets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-red-600 mr-4" />
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
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
      <section className="py-16 bg-gray-50 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Testing Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to identifying and addressing security
              vulnerabilities
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 space-y-8 ">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-base mr-2">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-600">
              We help you meet industry compliance requirements
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {complianceStandards.map((standard, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="font-semibold text-gray-800">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gray-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8">
            Don't wait for a security breach. Get a comprehensive security
            assessment now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-green-900 w-40"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
            <Button className="bg-green-900 w-40" size="lg" asChild>
              <Link to="/quote">Get Security Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cybersecurity;
