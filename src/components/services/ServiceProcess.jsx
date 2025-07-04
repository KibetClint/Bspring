const ServiceProcess = () => {
  const serviceProcess = [
    {
      step: "1",
      title: "Consultation",
      description:
        "We discuss your requirements and assess your current situation",
    },
    {
      step: "2",
      title: "Planning",
      description:
        "We develop a customized solution plan with timeline and milestones",
    },
    {
      step: "3",
      title: "Implementation",
      description: "Our expert team executes the plan with minimal disruption",
    },
    {
      step: "4",
      title: "Support",
      description:
        "We provide ongoing support and maintenance to ensure optimal performance",
    },
  ];

  return (
    <section className="py-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">
            How we deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {serviceProcess.map((process, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
