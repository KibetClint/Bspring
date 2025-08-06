import { useEffect } from "react";
import Layout from "../components/Layout";
import ServiceHero from "../components/services/ServiceHero";
import ServicesOverview from "../components/services/ServicesOverview";
import ServiceProcess from "../components/services/ServiceProcess";
import IndustryExpertise from "../components/services/IndustryExpertise";
import ServiceCTA from "../components/services/ServiceCTA";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Animation happens only once
      offset: 100, // Offset from the original trigger point
      delay: 100, // Global delay for all animations
    });

    // Refresh AOS on component mount to ensure proper detection
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <div data-aos="fade-in" data-aos-duration="800">
        <ServiceHero />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <ServicesOverview />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <ServiceProcess />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <IndustryExpertise />
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <ServiceCTA />
      </div>
    </Layout>
  );
};

export default Services;
