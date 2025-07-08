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
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Contact Information
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",

    // Step 2: Project Details
    projectType: "",
    urgency: "",
    budget: "",
    description: "",

    // Step 3: Product/Service Selection
    selectedProducts: [],
    selectedServices: [],
    customRequirements: "",

    // Step 4: Additional Information
    timeline: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (category, value, checked) => {
    setFormData((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    // Handle form submission here
  };

  const products = [
    "Weighspring (Weighbridge Management)",
    "Timespring (Time-released Messaging)",
    "Payrollspring (Payroll Processing)",
    "Secuspring (Security Module)",
    "Safetyspring (Safety Management)",
    "Parkspring (Park Management)",
    "OCS SB1 Hanging Scale",
    "SS Indicator with Bluetooth",
    "SCS Pallet Truck Scale",
    "CS30 Android POS",
  ];

  const services = [
    "Cybersecurity & Penetration Testing",
    "Web & App Development",
    "Integration Services",
    "CCTV Installation",
    "System Maintenance",
    "Training & Support",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Request a Quote
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get a customized quote for our products and services tailored to
            your specific needs
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? "bg-green-800 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`w-16 h-1 ${
                      step > stepNumber ? "bg-green-800" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <div className="text-sm text-gray-600">
                Step {step} of 4:{" "}
                {step === 1
                  ? "Contact Information"
                  : step === 2
                  ? "Project Details"
                  : step === 3
                  ? "Product/Service Selection"
                  : "Additional Information"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Quote Request Form</CardTitle>
              <CardDescription>
                Please provide detailed information to help us prepare an
                accurate quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">
                      Contact Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1 text-start">
                          Full Name *
                        </label>
                        <Input
                          className="bg-white"
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
                          className="block text-sm font-medium text-gray-700 mb-1 text-start">
                          Email Address *
                        </label>
                        <Input
                          className="bg-white"
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com "
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1 text-start">
                          Company Name *
                        </label>
                        <Input
                          className="bg-white"
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1 text-start">
                          Phone Number *
                        </label>
                        <Input
                          className="bg-white"
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium text-gray-700 mb-1 text-start">
                        Industry *
                      </label>
                      <Select className="bg-white" name="industry" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturing">
                            Manufacturing
                          </SelectItem>
                          <SelectItem value="logistics">
                            Logistics & Warehousing
                          </SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">
                      Project Details
                    </h3>

                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Project Type *
                      </label>
                      <Select name="projectType" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-implementation">
                            New Implementation
                          </SelectItem>
                          <SelectItem value="upgrade">
                            System Upgrade
                          </SelectItem>
                          <SelectItem value="integration">
                            System Integration
                          </SelectItem>
                          <SelectItem value="maintenance">
                            Maintenance & Support
                          </SelectItem>
                          <SelectItem value="consultation">
                            Consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="urgency"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          Urgency *
                        </label>
                        <Select name="urgency" required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">
                              Immediate (1-2 weeks)
                            </SelectItem>
                            <SelectItem value="urgent">
                              Urgent (1 month)
                            </SelectItem>
                            <SelectItem value="normal">
                              Normal (2-3 months)
                            </SelectItem>
                            <SelectItem value="flexible">
                              Flexible timeline
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-700 mb-1">
                          Budget Range
                        </label>
                        <Select name="budget">
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">
                              Under $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k-50k">
                              $25,000 - $50,000
                            </SelectItem>
                            <SelectItem value="50k-100k">
                              $50,000 - $100,000
                            </SelectItem>
                            <SelectItem value="over-100k">
                              Over $100,000
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Project Description *
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Please describe your project requirements, goals, and any specific challenges you're facing..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Product/Service Selection */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Product & Service Selection
                    </h3>

                    <div>
                      <h4 className="font-medium mb-3">Products of Interest</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {products.map((product) => (
                          <div
                            key={product}
                            className="flex items-center space-x-2">
                            <Checkbox
                              id={product}
                              checked={formData.selectedProducts.includes(
                                product
                              )}
                              onCheckedChange={(checked) =>
                                handleCheckboxChange(
                                  "selectedProducts",
                                  product,
                                  checked
                                )
                              }
                            />
                            <label htmlFor={product} className="text-sm">
                              {product}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Services of Interest</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {services.map((service) => (
                          <div
                            key={service}
                            className="flex items-center space-x-2">
                            <Checkbox
                              id={service}
                              checked={formData.selectedServices.includes(
                                service
                              )}
                              onCheckedChange={(checked) =>
                                handleCheckboxChange(
                                  "selectedServices",
                                  service,
                                  checked
                                )
                              }
                            />
                            <label htmlFor={service} className="text-sm">
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="customRequirements"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Custom Requirements
                      </label>
                      <Textarea
                        id="customRequirements"
                        name="customRequirements"
                        rows={3}
                        value={formData.customRequirements}
                        onChange={handleInputChange}
                        placeholder="Any specific customizations or requirements not covered above..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Information */}
                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">
                      Additional Information
                    </h3>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Implementation Timeline
                      </label>
                      <Textarea
                        id="timeline"
                        name="timeline"
                        rows={2}
                        value={formData.timeline}
                        onChange={handleInputChange}
                        placeholder="When would you like to start and complete the project?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="additionalInfo"
                        className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Information
                      </label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Any other information that would help us prepare your quote..."
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        What happens next?
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>
                          • We'll review your requirements within 24 hours
                        </li>
                        <li>
                          • Our team may contact you for clarification if needed
                        </li>
                        <li>
                          • You'll receive a detailed quote within 2-3 business
                          days
                        </li>
                        <li>
                          • A follow-up consultation can be scheduled to discuss
                          the proposal
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    className="bg-green-800"
                    type="button"
                    onClick={prevStep}
                    disabled={step === 1}>
                    Previous
                  </Button>

                  {step < 4 ? (
                    <Button
                      className="bg-green-800"
                      type="button"
                      onClick={nextStep}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit">Submit Quote Request</Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
