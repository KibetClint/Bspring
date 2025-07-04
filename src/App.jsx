import "./App.css";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import Cybersecurity from "./pages/services/Cybersecurity";
import WebDevelopment from "./pages/services/WebDevelopment";
import Integration from "./pages/services/Integration";
import CCTVInstallation from "./pages/services/CCTVInstallation";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Quote from "./pages/Quote";
import Blog from "./pages/Blog";
import Industries from "./pages/Industries";
import Locations from "./pages/Locations";
import CaseStudies from "./pages/CaseStudies";
import Consultation from "./pages/Consultation";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/software"
            element={<ProductCategory category="software" />}
          />
          <Route
            path="/products/weighing-equipment"
            element={<ProductCategory category="weighing" />}
          />
          <Route
            path="/products/hardware"
            element={<ProductCategory category="hardware" />}
          />
          <Route path="/product/:productSlug" element={<ProductDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route path="/services/integration" element={<Integration />} />
          <Route
            path="/services/cctv-installation"
            element={<CCTVInstallation />}
          />
          <Route path="/industries" element={<Industries />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
