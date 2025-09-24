import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Phone, Mail, Clock, Car, Plane } from "lucide-react";

const Locations = () => {
  const offices = [
    {
      city: "Kericho",
      country: "Kenya",
      region: "Rift Valley",
      address: "123 Business Avenue, Suite 500",
      postalCode: "New York, NY 10001",
      phone: "+254725903309",
      email: "kericho@brickspring.co.ke",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      services: ["Sales", "Support", "Training"],
      languages: ["English", "Spanish"],
      image: "../b-spring.png",
    },
    {
      city: "Nairobi",
      country: "Kenya",
      region: "Nairobi",
      address: "456 Tech Street, Floor 3",
      postalCode: "London SW1A 1AA",
      phone: "+254712071300",
      email: "nairobi@brickspring.co.ke",
      hours: "Mon-Fri: 9:00 AM - 5:30 PM GMT",
      services: ["Sales", "Support", "Installation"],
      languages: ["English", "French", "German"],
      image: "/placeholder.svg",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#236837] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Global Presence
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Find our offices worldwide and connect with local experts
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Office Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our global offices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                    {office.city}, {office.country}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{office.region}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-start">
                    <div>
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-gray-600">
                        {office.address}
                        <br />
                        {office.postalCode}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          Phone
                        </h4>
                        <p className="text-gray-600">{office.phone}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </h4>
                        <p className="text-gray-600">{office.email}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Business Hours
                      </h4>
                      <p className="text-gray-600">{office.hours}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Services Available</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-green-900 text-xs px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Languages</h4>
                      <p className="text-gray-600">
                        {office.languages.join(", ")}
                      </p>
                    </div>

                    <div className="pt-4 border-t flex space-x-2">
                      <Button size="sm" className="flex-1 bg-green-800">
                        <Car className="h-4 w-4 mr-1" />
                        Directions
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-green-800">
                        Contact Office
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              24/7 Global Support
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help, wherever you are
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 mx-auto mb-4 text-black" />
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">
                  24/7 emergency support available for critical systems
                </p>
                <Button>Call Now</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed technical assistance via email
                </p>
                <Button>Send Email</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Plane className="h-12 w-12 mx-auto mb-4 text--600" />
                <h3 className="text-xl font-semibold mb-2">On-Site Service</h3>
                <p className="text-gray-600 mb-4">
                  Local technicians available for installation and maintenance
                </p>
                <Button>Schedule Visit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Local Representative
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connect with our local experts for personalized service and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white border-white hover:bg-green-600 hover:text-gray-600 bg-green-800"
              size="lg"
              variant="secondary">
              Find Local Office
            </Button>
            <Button
              size="lg"
              className="text-white border-white hover:bg-green-600 hover:text-gray-600 bg-green-800">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
