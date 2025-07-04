import Layout from "../components/Layout";
import ServiceHero from "../components/services/ServiceHero";
import ServicesOverview from "../components/services/ServicesOverview";
import ServiceProcess from "../components/services/ServiceProcess";
import IndustryExpertise from "../components/services/IndustryExpertise";
import ServiceCTA from "../components/services/ServiceCTA";

const Services = () => {
  return (
    <Layout>
      <ServiceHero />
      <ServicesOverview />
      <ServiceProcess />
      <IndustryExpertise />
      <ServiceCTA />
    </Layout>
  );
};

export default Services;
