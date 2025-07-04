const IndustryExpertise = () => {
  const industries = [
    { name: "Manufacturing", icon: "🏭" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Retail", icon: "🛍️" },
    { name: "Logistics", icon: "🚚" },
    { name: "Government", icon: "🏛️" },
    { name: "Education", icon: "🎓" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600">
            We serve clients across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {industries.map((industry, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl mb-2">{industry.icon}</div>
              <div className="font-semibold">{industry.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
