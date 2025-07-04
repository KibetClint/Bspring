import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ServiceHero = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Comprehensive technology services to enhance your business operations
          and security
        </p>
        <Button className="bg-green-900" size="lg" variant="secondary" asChild>
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </div>
    </section>
  );
};

export default ServiceHero;
