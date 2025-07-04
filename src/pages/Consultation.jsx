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
import { Badge } from "../components/ui/badge";
import { Clock, CheckCircle, Phone, Mail, MessageSquare } from "lucide-react";

const Consultation = () => {
  const consultationTypes = [
    {
      title: "Technical Assessment",
      duration: "60 minutes",
      description:
        "Comprehensive evaluation of your current systems and technology needs",
      features: [
        "System analysis",
        "Performance review",
        "Recommendations report",
      ],
      price: "Free",
    },
    {
      title: "Solution Design",
      duration: "90 minutes",
      description: "Custom solution design and implementation planning",
      features: ["Custom design", "Implementation roadmap", "Cost estimation"],
      price: "$150",
    },
    {
      title: "Expert Advisory",
      duration: "45 minutes",
      description: "Strategic guidance from our industry experts",
      features: ["Strategic planning", "Best practices", "Industry insights"],
      price: "$100",
    },
  ];

  const benefits = [
    "Expert guidance from certified professionals",
    "Tailored solutions for your specific needs",
    "Comprehensive analysis and recommendations",
    "No-obligation initial consultation",
    "Follow-up support included",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#236434] to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Expert Consultation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get professional guidance from our experienced team to make informed
            technology decisions
          </p>
          <Button size="lg" variant="secondary">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Consultation Services
            </h2>
            <p className="text-xl text-gray-600">
              Choose the consultation type that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <Badge
                      variant={type.price === "Free" ? "default" : "secondary"}>
                      {type.price}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    {type.duration}
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Our Consultation?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                Schedule Your Consultation
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Company Name" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Consultation Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">
                      Technical Assessment
                    </SelectItem>
                    <SelectItem value="solution">Solution Design</SelectItem>
                    <SelectItem value="advisory">Expert Advisory</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Tell us about your project or requirements"
                  rows={4}
                />
                <Button type="submit" className="w-full">
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Consultation Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description: "Reach out to schedule your consultation",
              },
              {
                step: "2",
                title: "Needs Assessment",
                description: "We discuss your requirements and challenges",
              },
              {
                step: "3",
                title: "Expert Analysis",
                description: "Our team analyzes your situation",
              },
              {
                step: "4",
                title: "Recommendations",
                description: "Receive tailored solutions and next steps",
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-[#236434] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-[#236434] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Choose your preferred way to connect with our experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Phone Consultation
                </h3>
                <p className="mb-4">Speak directly with our experts</p>
                <Button variant="secondary">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Video Call</h3>
                <p className="mb-4">Face-to-face consultation online</p>
                <Button variant="secondary">Schedule Video Call</Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Email Consultation
                </h3>
                <p className="mb-4">Detailed written assessment</p>
                <Button variant="secondary">Send Email</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
