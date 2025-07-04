import ServiceCard from "./ServiceCard";

const ServicesOverview = () => {
  const services = [
    {
      title: "Cybersecurity & Penetration Testing",
      description:
        "Comprehensive security assessments to protect your digital assets",
      icon: "🔒",
      features: [
        "Vulnerability assessments",
        "Penetration testing",
        "Security audits",
        "Compliance consulting",
        "Incident response planning",
      ],
      benefits: [
        "Identify security vulnerabilities",
        "Ensure regulatory compliance",
        "Protect sensitive data",
        "Reduce security risks",
      ],
    },
    {
      title: "Web & App Development",
      description: "Custom software solutions tailored to your business needs",
      icon: "💻",
      features: [
        "Web application development",
        "Mobile app development",
        "Database design",
        "API integration",
        "UI/UX design",
      ],
      benefits: [
        "Streamline business processes",
        "Improve customer experience",
        "Increase operational efficiency",
        "Scale your business",
      ],
    },
    {
      title: "Integration Services",
      description: "Seamless system integration and data synchronization",
      icon: "⚡",
      features: [
        "System integration",
        "Data migration",
        "API development",
        "Workflow automation",
        "Legacy system modernization",
      ],
      benefits: [
        "Eliminate data silos",
        "Improve data accuracy",
        "Automate workflows",
        "Reduce manual processes",
      ],
    },
    {
      title: "CCTV Installation Services",
      description:
        "Professional surveillance system installation and maintenance",
      icon: "📹",
      features: [
        "Site survey and assessment",
        "Camera installation",
        "Network configuration",
        "Monitoring setup",
        "Maintenance and support",
      ],
      benefits: [
        "Enhanced security monitoring",
        "Remote surveillance access",
        "Evidence collection",
        "Deterrent effect",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600">
            Expert services to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 text-start">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              benefits={service.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
