import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const offices = [
    {
      name: "Headquarters",
      address: "373, Litein",
      phone: "+254725903309",
      email: "info@brickspring.co.ke",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
    },
    {
      name: "Kericho Branch",
      address: "456 Innovation Drive\nWest Valley, WV 67890",
      phone: "+254725903309",
      email: "west@brickspring.co.ke",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
    },
    {
      name: "Regional Office ",
      address: "123, Nairobi",
      phone: "+254725903309",
      email: "east@brickspring.co.ke",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with our team to discuss your requirements and discover
            how we can help your business grow
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+254712-345678"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <Select name="subject" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="sales">
                            Sales & Products
                          </SelectItem>
                          <SelectItem value="support">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="partnership">
                            Partnership
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe how we can help you..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-800" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">+254725903309</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-800" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">
                        info@brickspring.co.ke
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-800" />
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-gray-600">
                        Mon-Fri: 8:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    For urgent technical issues outside business hours:
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Emergency Hotline</div>
                    <div className="text-lg text-red-600">+254 712 071300</div>
                    <div className="text-sm text-gray-500">
                      Available 24/7 for existing clients
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at one of our office locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-green-800" />
                    {office.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-700">Address</div>
                    <div className="text-gray-600 whitespace-pre-line">
                      {office.address}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Phone</div>
                    <div className="text-gray-600">{office.phone}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Email</div>
                    <div className="text-gray-600">{office.email}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Hours</div>
                    <div className="text-gray-600">{office.hours}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Map Coming Soon</p>
              <p>
                Use the addresses above to find us on your preferred map service
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
