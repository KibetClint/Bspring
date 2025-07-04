import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ServiceCTA = () => {
  return (
    <section className="py-8 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8">
          Let's discuss how our services can help you achieve your goals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-green-950" size="lg" variant="outline" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
          <Button className="bg-green-950" size="lg" variant="outline" asChild>
            <Link to="/quote">Get Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
