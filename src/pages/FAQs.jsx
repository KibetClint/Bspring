import Layout from "../components/Layout";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";
import { Search, HelpCircle, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      title: "Products & Services",
      count: 12,
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Technical Support",
      count: 8,
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Pricing & Billing",
      count: 6,
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Installation & Setup",
      count: 10,
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const faqs = [
    {
      category: "Products & Services",
      question: "What types of weighing equipment do you offer?",
      answer:
        "We offer a comprehensive range of weighing equipment including industrial scales, hanging scales, pallet truck scales, weighbridge systems, and precision laboratory balances. All our equipment comes with calibration certificates and warranty coverage.",
    },
    {
      category: "Products & Services",
      question: "Do you provide custom software development?",
      answer:
        "Yes, we specialize in custom software development for business management, weighbridge systems, time tracking, payroll management, and security applications. Our development team works closely with clients to create tailored solutions.",
    },
    {
      category: "Technical Support",
      question: "What kind of technical support do you provide?",
      answer:
        "We offer 24/7 technical support including phone support, remote assistance, on-site visits, and comprehensive documentation. Our support team consists of certified technicians with extensive experience.",
    },
    {
      category: "Technical Support",
      question: "How do I troubleshoot connectivity issues?",
      answer:
        "For connectivity issues, first check all cable connections, verify network settings, and ensure firewall permissions. If problems persist, contact our support team for remote assistance or schedule an on-site visit.",
    },
    {
      category: "Pricing & Billing",
      question: "Do you offer financing options?",
      answer:
        "Yes, we provide various financing options including equipment leasing, installment plans, and rental agreements. Contact our sales team to discuss the best financing solution for your needs.",
    },
    {
      category: "Pricing & Billing",
      question: "Are there any hidden costs?",
      answer:
        "No, we believe in transparent pricing. All costs including hardware, software licenses, installation, training, and support are clearly outlined in our quotes. There are no hidden fees or surprise charges.",
    },
    {
      category: "Installation & Setup",
      question: "How long does installation typically take?",
      answer:
        "Installation time varies depending on the complexity of the system. Simple setups can be completed in 1-2 days, while complex integrated systems may take 1-2 weeks. We provide detailed timelines during the planning phase.",
    },
    {
      category: "Installation & Setup",
      question: "Do you provide training for new systems?",
      answer:
        "Yes, comprehensive training is included with all installations. We provide on-site training for your team, user manuals, video tutorials, and ongoing support to ensure successful system adoption.",
    },
    {
      category: "Products & Services",
      question: "What industries do you serve?",
      answer:
        "We serve various industries including manufacturing, logistics, agriculture, retail, healthcare, education, and government sectors. Our solutions are customized to meet specific industry requirements and regulations.",
    },
    {
      category: "Technical Support",
      question: "How do I update my software?",
      answer:
        "Software updates are typically delivered automatically through our update system. For manual updates, log into your admin panel and check for available updates. Critical security updates are pushed automatically.",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#236434] to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and
            support
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-gray-900"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find answers organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="h-12 w-12 text-[#236434] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {category.title}
                  </h3>
                  <Badge className={category.color}>
                    {category.count} questions
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            {searchTerm && (
              <p className="text-gray-600">
                Showing {filteredFAQs.length} results for "{searchTerm}"
              </p>
            )}
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1 flex-shrink-0">
                      {faq.category}
                    </Badge>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any FAQs matching your search. Try different
                keywords or browse by category.
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here
              to help you with personalized assistance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-[#236434] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get instant help from our support team
                  </p>
                  <Button size="sm" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-[#236434] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Speak directly with our experts
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    asChild>
                    <Link to="/contact">Call Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="h-12 w-12 text-[#236434] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Submit Ticket</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get detailed written assistance
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full"
                    asChild>
                    <Link to="/support">Submit Ticket</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
