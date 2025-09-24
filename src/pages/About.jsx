import { useEffect } from "react";
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Target,
  Award,
  Building,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          once: false,
          offset: 100,
          easing: "ease-out-cubic",
        });
      });
    }
  }, []);

  const teamMembers = [
    {
      name: "Enoch Koech",
      position: "CEO & Founder",
      bio: "15+ years experience in industrial technology solutions",
      image: "/b-spring.png",
    },
    {
      name: "Japhet Kibet",
      position: "CTO",
      bio: "Expert in software development and system integration",
      image: "/b-spring.png",
    },
    {
      name: "Seraphine Korir",
      position: "People and culture",
      bio: "Specialized in weighing equipment and industrial solutions",
      image: "/b-spring.png",
    },
  ];

  const milestones = [
    {
      year: "2009",
      event:
        "Brickspring founded with a vision to revolutionize industrial solutions",
    },
    {
      year: "2012",
      event: "Launched first weighbridge management software - Weighspring",
    },
    {
      year: "2015",
      event: "Expanded into cybersecurity and penetration testing services",
    },
    { year: "2018", event: "Reached 1000+ successful installations worldwide" },
    { year: "2020", event: "Launched comprehensive Android POS solutions" },
    { year: "2024", event: "Serving 500+ clients across 25+ countries" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "Continuously developing cutting-edge solutions for modern business challenges",
      icon: Target,
    },
    {
      title: "Quality",
      description:
        "Delivering reliable, precise, and durable products that exceed expectations",
      icon: Award,
    },
    {
      title: "Partnership",
      description:
        "Building long-term relationships with our clients based on trust and mutual success",
      icon: Users,
    },
  ];

  const locations = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "123 Business Ave, NY 10001",
    },
    {
      city: "Litein",
      country: "Kenya",
      address: "456 Tech Street",
    },
    {
      city: "Kericho",
      country: "Kenya",
      address: "789 Innovation Blvd",
    },
  ];

  const certifications = [
    "ISO 9001:2015",
    "ISO 27001",
    "CE Certified",
    "Industry Excellence Award",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200">
            About Brickspring
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400">
            Pioneering innovative solutions in industrial technology for over 15
            years
          </p>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, Brickspring began with a simple mission: to
                provide innovative, reliable solutions for industrial weighing
                and business management challenges. What started as a small team
                of engineers has grown into a leading provider of comprehensive
                technology solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we serve over 500 clients across 25+ countries,
                delivering everything from precision weighing equipment to
                advanced cybersecurity services. Our commitment to innovation
                and quality has made us a trusted partner for businesses
                worldwide.
              </p>
              <div className="flex space-x-4">
                <Badge
                  className="text-base px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay="600">
                  5+ Years Experience
                </Badge>
                <Badge
                  className="text-base px-4 py-2"
                  data-aos="zoom-in"
                  data-aos-delay="700">
                  500+ Happy Clients
                </Badge>
              </div>
            </div>
            <div
              className="bg-gray-800 h-96 rounded-lg flex items-center justify-center overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="400">
              <img
                src="/b-spring.png"
                alt="Brickspring team at work"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card data-aos="flip-right" data-aos-delay="200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 mr-2 text-green-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To empower businesses with innovative technology solutions
                  that enhance efficiency, accuracy, and security while
                  delivering exceptional value and support.
                </p>
              </CardContent>
            </Card>

            <Card data-aos="flip-left" data-aos-delay="400">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 mr-2 text-green-600" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the global leader in industrial technology solutions,
                  recognized for our innovation, quality, and commitment to
                  customer success.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={200 + index * 150}>
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts driving our innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}>
                <CardHeader>
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-gray-700">
                    {member.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Company Milestones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 text-start ">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay={index * 100}>
                <div className="flex-shrink-0 w-15 h-15 bg-green-800 text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="ml-6 flex-1">
                  <p className="text-lg text-gray-700 text-start">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">Find us around the globe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                data-aos="slide-up"
                data-aos-delay={index * 150}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-800" />
                    {location.city}, {location.country}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-start mb-4">
                    {location.address}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-green-800" />
                      <span>+254725903309</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <span>info@brickspring.co.ke</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section className="py-10 bg-gray-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4
            className="text-3xl md:text-4xl font-bold mb-8"
            data-aos="fade-up">
            Certifications & Awards
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-lg"
                data-aos="zoom-in"
                data-aos-delay={index * 100}>
                <Building className="h-12 w-12 mx-auto mb-4" />
                <p className="font-semibold">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
