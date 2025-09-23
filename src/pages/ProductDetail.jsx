import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Star, Shield, Truck, Phone, ZoomIn } from "lucide-react";
import { Button } from "../components/ui/button";
import Layout from "../components/Layout";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const productData = {
    weighspring: {
      name: "Weighspring Pro",
      category: "Software",
      price: "Starting at $2,999",
      status: "Available",
      description:
        "Advanced weighbridge management system with comprehensive real-time monitoring capabilities and automated reporting features.",
      longDescription:
        "Weighspring Pro is our flagship weighbridge management solution designed for businesses that require precise weight measurements and comprehensive data management. The system provides real-time monitoring of all weighing operations, automated report generation, and seamless integration with existing business systems.",
      features: [
        "Real-time data monitoring and alerts",
        "Comprehensive report generation with customizable templates",
        "Multi-user access with role-based permissions",
        "Cloud synchronization and backup",
        "Integration with ERP systems",
        "Mobile app for remote monitoring",
        "Advanced analytics and insights",
        "Automated compliance reporting",
      ],
      specifications: {
        "System Requirements": "Windows 10/11, 8GB RAM, 500GB Storage",
        Database: "SQL Server, MySQL, PostgreSQL compatible",
        Connectivity: "Ethernet, Wi-Fi, Bluetooth",
        Users: "Up to 100 concurrent users",
        Languages: "Multi-language support",
        Support: "24/7 technical support included",
      },
      images: [
        {
          src: "/images/software/cctv-weighspring.png",
          alt: "Weighspring Pro Dashboard Interface",
          title: "Main Dashboard",
        },
        {
          src: "/images/software/weighbridge.jpg",
          alt: "Analytics and Reporting Interface",
          title: "Analytics View",
        },
        {
          src: "/images/software/weighbridge-3.webp",
          alt: "Mobile App Interface",
          title: "Mobile App",
        },
      ],
      benefits: [
        "Improve operational efficiency by up to 40%",
        "Reduce manual errors and data entry time",
        "Ensure compliance with industry regulations",
        "Real-time visibility into operations",
      ],
    },
    timespring: {
      name: "Timespring",
      category: "Software",
      price: "Starting at $1,499",
      status: "Available",
      description:
        "Time-released messaging platform for automated communications and scheduled campaigns.",
      longDescription:
        "Timespring is a robust messaging platform that automates the delivery of time-sensitive communications across multiple channels. Whether for marketing promotions, customer updates, or internal alerts, Timespring allows businesses to schedule messages in advance and deliver them at the optimal time, improving engagement and efficiency.",
      features: [
        "Scheduled messaging and reminders",
        "Multi-channel delivery (SMS, Email, Social Media)",
        "Analytics dashboard with campaign performance",
        "API integration for custom workflows",
        "Contact list management",
        "Rich media support (images, links, attachments)",
        "Time zone scheduling",
      ],
      specifications: {
        Platform: "Web-based (Cloud or On-premises)",
        Compatibility: "iOS, Android, Web browsers",
        Integration: "REST API, CRM, ERP systems",
        Users: "Unlimited (license-based)",
        "Data Storage": "Secure cloud storage or on-premises database",
        Support: "Dedicated account manager and priority support",
      },
      images: [
        {
          src: "/images/software/TimeSpringMockup.jpg",
          alt: "Timespring Messaging Interface",
          title: "Scheduling Dashboard",
        },
        {
          src: "/images/software/messaging-screenshot.jpg",
          alt: "Scheduled Messages Dashboard",
          title: "Campaign Overview",
        },
        {
          src: "/images/software/mobile-messaging.jpg",
          alt: "Mobile Messaging Preview",
          title: "Mobile App View",
        },
      ],
      benefits: [
        "Streamline communication workflows and reduce manual scheduling tasks",
        "Improve customer engagement by sending messages at optimal times",
        "Centralize messaging across multiple channels in one platform",
        "Access detailed analytics to measure campaign effectiveness",
      ],
    },
    payrollspring: {
      name: "Payrollspring",
      category: "Software",
      price: "Starting at $899",
      status: "Available",
      description:
        "Complete payroll processing solution for businesses of all sizes.",
      longDescription:
        "Payrollspring is a comprehensive payroll management system designed to simplify and automate payroll tasks. The solution ensures accurate payroll calculations, compliance with tax regulations, and provides employees with self-service access to pay stubs and tax forms.",
      features: [
        "Automated payroll calculations with tax deduction adjustments",
        "Tax compliance updates and electronic tax filing",
        "Employee self-service portal for payslip access",
        "Integrated time and attendance management",
        "Customizable payslip templates",
        "Multiple pay schedules (biweekly, monthly, etc.)",
        "Multi-currency and multi-country support",
      ],
      specifications: {
        "System Requirements": "Windows 10/11, macOS, or cloud-hosted",
        Database: "MySQL, PostgreSQL, or SQL Server",
        Connectivity: "Internet connection for payroll updates",
        Support: "Email and phone support with payroll experts",
        Security: "Data encryption and role-based access control",
        Compliance: "Automated updates for local tax laws",
      },
      images: [
        {
          src: "/images/software/payrollspring.png",
          alt: "Payrollspring Reporting Interface",
          title: "Payroll Dashboard",
        },
        {
          src: "/images/software/payroll-report.jpg",
          alt: "Detailed Payroll Reports",
          title: "Payslip Report",
        },
        {
          src: "/images/software/employee-portal.jpg",
          alt: "Employee Self-Service Portal",
          title: "Self-Service Portal",
        },
      ],
      benefits: [
        "Save time by automating payroll calculations and processes",
        "Reduce errors and ensure compliance with tax regulations",
        "Provide transparency and self-service options to employees",
        "Generate comprehensive payroll reports for analysis",
      ],
    },
    secuspring: {
      name: "Secuspring",
      category: "Software",
      price: "Starting at $1,999",
      status: "Available",
      description:
        "Comprehensive security management module for monitoring and controlling access.",
      longDescription:
        "Secuspring is an integrated security management platform that consolidates access control, surveillance, and incident management into one system. It enables security teams to monitor premises in real-time, manage user credentials, and respond quickly to security events.",
      features: [
        "Access control management with RFID and biometric support",
        "Integration with CCTV and surveillance systems",
        "Incident reporting and audit trails",
        "Real-time alerts and notifications",
        "User role and permission management",
        "Visitor log and badge printing",
        "Security policy enforcement and scheduling",
      ],
      specifications: {
        "Supported Devices": "IP cameras, RFID readers, biometric scanners",
        Platform: "Windows, Linux, and cloud",
        Integrations: "ONVIF-compliant cameras, third-party alarm systems",
        "User Capacity": "Scalable to thousands of users",
        Alerting: "Email, SMS, and mobile app push notifications",
        Compliance: "Meets industry security standards (e.g., ISO 27001)",
      },
      images: [
        {
          src: "/public/images/software/secuspring.jpeg",
          alt: "Secuspring Access Control Interface",
          title: "Access Control Dashboard",
        },
        {
          src: "/images/software/camera-integration.jpg",
          alt: "Surveillance Camera Integration",
          title: "CCTV Integration",
        },
        {
          src: "/images/software/security-mobile.jpg",
          alt: "Security Alerts Mobile View",
          title: "Mobile Security Alerts",
        },
      ],
      benefits: [
        "Enhance facility security with centralized monitoring",
        "Quickly detect and respond to incidents",
        "Streamline access management and reduce unauthorized entry",
        "Maintain detailed audit trails for compliance and review",
      ],
    },
    safetyspring: {
      name: "Safetyspring",
      category: "Software",
      price: "Starting at $1,299",
      status: "Available",
      description:
        "Safety management system for workplace compliance and incident tracking.",
      longDescription:
        "Safetyspring is a workplace safety platform designed to help organizations track incidents, enforce safety protocols, and ensure compliance with regulatory requirements. It provides tools for incident reporting, safety training management, and risk assessment.",
      features: [
        "Incident and accident reporting with root cause analysis",
        "Safety protocol creation and task assignment",
        "Employee safety training modules and tracking",
        "Automated compliance reporting (e.g., OSHA, HSE)",
        "Mobile app for field incident reporting",
        "Audit and inspection checklists",
        "Corrective action management",
      ],
      specifications: {
        Deployment: "Cloud-hosted or on-premises",
        Devices: "Responsive web, iOS, Android",
        "Training Support": "SCORM and video content integration",
        Users: "Custom roles and permissions for employees and managers",
        Alerts: "Email notifications for incidents and tasks",
        Reporting: "Configurable dashboards and exportable reports",
      },
      images: [
        {
          src: "/images/software/safestyspring.png",
          alt: "Safetyspring Incident Dashboard",
          title: "Incident Reporting",
        },
        {
          src: "/images/software/safety-training.jpg",
          alt: "Safety Training Interface",
          title: "Training Management",
        },
        {
          src: "/images/software/compliance-report.jpg",
          alt: "Safety Compliance Report",
          title: "Compliance Report",
        },
      ],
      benefits: [
        "Reduce workplace accidents through proactive tracking",
        "Ensure regulatory compliance with automated reporting",
        "Improve safety culture by engaging employees in training",
        "Identify trends and mitigate risks with data insights",
      ],
    },
    parkspring: {
      name: "Parkspring",
      category: "Software",
      price: "Starting at $1,799",
      status: "Available",
      description:
        "Park management system for recreational facilities and parking operations.",
      longDescription:
        "Parkspring is a comprehensive management software for parks, parking lots, and recreational facilities. It allows administrators to manage bookings, payments, scheduling, and visitor tracking, providing a seamless experience for both staff and visitors.",
      features: [
        "Online booking and reservation management",
        "Facility scheduling and calendar view",
        "Secure payment processing and invoicing",
        "Visitor registration and tracking",
        "Membership and season pass management",
        "Reporting on occupancy and revenue",
        "Mobile ticketing and QR code access",
      ],
      specifications: {
        Platform: "Cloud-hosted with web and mobile access",
        Integrations: "Payment gateways (Stripe, PayPal), mapping APIs",
        Users: "Role-based access for staff and administrators",
        Analytics: "Real-time occupancy and financial dashboards",
        "Hardware Support": "Ticket printers, card readers, turnstiles",
        Languages: "Multi-language user interface",
      },
      images: [
        {
          src: "/images/software/parking-system.jpeg",
          alt: "Parkspring Booking Interface",
          title: "Online Reservations",
        },
        {
          src: "/images/software/park-management.jpg",
          alt: "Park Facility Management",
          title: "Facility Scheduler",
        },
        {
          src: "/images/software/visitor-tracking.jpg",
          alt: "Visitor Tracking Dashboard",
          title: "Visitor Insights",
        },
      ],
      benefits: [
        "Maximize facility utilization with efficient scheduling",
        "Increase revenue through online bookings and payments",
        "Enhance visitor experience with fast entry and tracking",
        "Gain insights into park usage and performance",
      ],
    },
    "ocs-sb1-hanging-scale": {
      name: "OCS SB1 Hanging Scale",
      category: "Weighing Equipment",
      price: "$1,299",
      status: "In Stock",
      description:
        "High-precision industrial hanging scale with LED display and wireless connectivity.",
      longDescription:
        "The OCS SB1 Hanging Scale is engineered for demanding industrial environments where accuracy and reliability are paramount. With its robust construction and advanced load cell technology, it delivers consistent performance in harsh conditions. The built-in LED display and Bluetooth connectivity provide flexibility in both stationary and mobile use.",
      features: [
        "1000kg maximum capacity",
        "High-brightness LED display",
        "Bluetooth connectivity for data transfer",
        "Rechargeable lithium battery (up to 80 hours)",
        "IP65 weatherproof rating",
        "Overload protection",
        "Auto-shutdown feature",
        "Remote control included",
      ],
      specifications: {
        Capacity: "1000kg / 2200lbs",
        Accuracy: "±0.1% of full scale",
        Display: 'LED with 1" digits',
        Power: "Rechargeable lithium battery (80+ hours)",
        "Operating Temperature": "-10°C to +50°C",
        "Protection Rating": "IP65",
        Dimensions: "250 x 150 x 60mm",
        Weight: "2.5kg",
      },
      images: [
        {
          src: "/public/images/weighing/SB1.png",
          alt: "OCS SB1 Hanging Scale Front View",
          title: "Front View",
        },
        {
          src: "/images/hardware/OCS-10A.webp",
          alt: "LED Display Close-up",
          title: "LED Display",
        },
        {
          src: "/images/weighing/scale-in-use.jpg",
          alt: "Scale in Industrial Use",
          title: "In Use",
        },
      ],
      benefits: [
        "Portable and easy to use in any location",
        "Long battery life reduces downtime",
        "Weatherproof design for outdoor use",
        "Wireless data transfer eliminates cable clutter",
      ],
    },
    "ss-indicator-bluetooth": {
      name: "SS Indicator with Bluetooth",
      category: "Weighing Equipment",
      price: "$599",
      status: "In Stock",
      description:
        "Smart weighing indicator with wireless connectivity for data logging and remote monitoring.",
      longDescription:
        "The SS Indicator is a versatile display and controller for industrial scales. It features Bluetooth connectivity, allowing wireless data transfer to computers and mobile devices. The indicator supports multiple weighing units, data logging, and is compatible with printers for paper records.",
      features: [
        "Bluetooth connectivity for wireless data transfer",
        "Multiple unit display (kg, lb, oz, etc.)",
        "Internal memory for up to 1000 records",
        "Printer-compatible interface",
        "Backlit LCD display",
        "Rechargeable battery backup",
        "Tare and zero functions",
        "Remote calibration support",
      ],
      specifications: {
        Display: "LCD with backlight",
        Power: "AC adapter or rechargeable battery",
        Connectivity: "Bluetooth 4.0, USB, RS232",
        Units: "kg, lb, oz, and others",
        Memory: "Stores up to 1000 weight entries",
        "Operating Temperature": "-10°C to +40°C",
        Dimensions: "180 x 100 x 30mm",
        Weight: "0.5kg",
      },
      images: [
        {
          src: "/images/hardware/SS indicators with Bluetooth.png",
          alt: "SS Indicator Front Panel",
          title: "Front Panel",
        },
        {
          src: "/images/hardware/indicator-display.jpg",
          alt: "LCD Display Close-up",
          title: "Display",
        },
        {
          src: "/images/hardware/wireless-indicator.jpg",
          alt: "Bluetooth Indicator in Use",
          title: "Bluetooth Connectivity",
        },
      ],
      benefits: [
        "Provides real-time weight data to your systems",
        "Simplifies data collection with wireless transfer",
        "Versatile unit selection for international use",
        "Enhances documentation with built-in data logging",
      ],
    },
    "scs-pallet-truck-scale": {
      name: "SCS Pallet Truck Scale",
      category: "Weighing Equipment",
      price: "$3,499",
      status: "In Stock",
      description:
        "Mobile pallet truck with integrated weighing scale for efficient warehouse operations.",
      longDescription:
        "The SCS Pallet Truck Scale combines a heavy-duty pallet jack with an integrated scale, enabling material handling and weighing in a single step. It features a built-in thermal printer for instant labels, rechargeable battery power, and rugged stainless steel forks for reliability.",
      features: [
        "2000kg capacity heavy-duty pallet truck",
        "Built-in thermal label printer (58mm)",
        "Rechargeable battery with 80+ hour life",
        "Stainless steel construction",
        "Adjustable fork length",
        "Automatic sleep and wake mode",
        "Multiple unit calibration",
        "Large LCD backlit display",
      ],
      specifications: {
        Capacity: "2000kg / 4400lbs",
        Readability: "0.5kg",
        "Fork Length": "1200mm (adjustable)",
        Battery: "Rechargeable SLA battery",
        Printer: "Integrated 58mm thermal printer",
        Material: "Stainless steel forks and frame",
        Display: "LCD backlit with bright digits",
        Dimensions: "L 1800 x W 700 x H 1200mm",
        Weight: "150kg (approx.)",
      },
      images: [
        {
          src: "/images/weighing/SCS Pallet Truck Scale .webp",
          alt: "SCS Pallet Truck Scale Side View",
          title: "Side View",
        },
        {
          src: "/images/weighing/pallet-truck-printer.jpg",
          alt: "Built-In Thermal Printer",
          title: "Thermal Printer",
        },
        {
          src: "/images/weighing/pallet-truck-in-use.jpg",
          alt: "Pallet Truck Scale in Warehouse",
          title: "Warehouse Use",
        },
      ],
      benefits: [
        "Eliminates double handling by combining transport and weighing",
        "Increases efficiency in inventory and shipping processes",
        "Portable weighing solution without needing permanent scale",
        "On-the-spot label printing for process accuracy",
      ],
    },
    "checkered-plate-platform-scale": {
      name: "Checkered Plate Platform Scale",
      category: "Weighing Equipment",
      price: "$2,199",
      status: "In Stock",
      description:
        "Durable platform scale with anti-slip surface, suitable for heavy-duty applications.",
      longDescription:
        "This checkered plate platform scale is built to withstand harsh industrial use. Its anti-slip surface and weatherproof construction make it ideal for outdoor and heavy-duty environments. The digital indicator provides accurate readings and can connect to printers or computers for record-keeping.",
      features: [
        "5000kg heavy-duty capacity",
        "Textured anti-slip platform",
        "Weatherproof IP66 stainless steel housing",
        "Digital indicator with tare function",
        "Multiple power options (AC/DC)",
        "High-precision load cells",
        "Multiple size options available",
      ],
      specifications: {
        Capacity: "5000kg / 11000lbs",
        "Platform Size": "1200 x 1200mm (can be customized)",
        Accuracy: "±0.2% of full scale",
        Material: "Stainless steel platform, aluminum indicator",
        Power: "AC adapter or rechargeable battery",
        Display: "Large LED/LCD digital display",
        "Operating Temperature": "-10°C to +40°C",
        Dimensions: "Platform 1200x1200mm",
      },
      images: [
        {
          src: "/images/weighing/Checker-Plate-Platform-Floor-Weight-Scale.png",
          alt: "Checkered Plate Platform Scale Top View",
          title: "Top View",
        },
        {
          src: "/images/weighing/platform-indicator.jpg",
          alt: "Digital Indicator Close-up",
          title: "Indicator",
        },
        {
          src: "/images/weighing/industrial-scale.jpg",
          alt: "Platform Scale in Use",
          title: "Scale in Use",
        },
      ],
      benefits: [
        "Handles very heavy loads with ease",
        "Safe to use thanks to the anti-slip platform",
        "Suitable for any environment, including outdoors",
        "Provides accurate weight data for logistics and production",
      ],
    },
    "bench-scale": {
      name: "Bench Scale",
      category: "Weighing Equipment",
      price: "$399",
      status: "In Stock",
      description:
        "Compact precision scale for laboratory, retail, and industrial use.",
      longDescription:
        "This bench scale is designed for high-precision weighing in laboratories, retail environments, or production lines. It features a durable stainless steel weighing pan and offers easy operation with RS232 connectivity for data output.",
      features: [
        "High precision up to 0.1g",
        "Stainless steel weighing pan",
        "Dual power: AC adapter or rechargeable battery",
        "RS232 interface for data output",
        "Auto-tare and auto-zero functions",
        "Compact and portable design",
        "Overload protection with alert",
      ],
      specifications: {
        Capacity: "6kg / 13lb",
        Readability: "0.1g",
        "Pan Size": "210 x 210mm",
        Power: "AC adapter (included) or internal battery",
        Interface: "RS232 serial",
        Dimensions: "230 x 260 x 85mm",
        Weight: "2kg",
        "Operating Temperature": "0°C to +40°C",
      },
      images: [
        {
          src: "/images/weighing/Table Scale.jpg",
          alt: "Bench Scale Front View",
          title: "Bench Scale",
        },
        {
          src: "/images/weighing/precision-scale.jpg",
          alt: "High Precision Display",
          title: "Display",
        },
        {
          src: "/images/weighing/lab-scale.jpg",
          alt: "Bench Scale in Laboratory",
          title: "Lab Use",
        },
      ],
      benefits: [
        "Provides extremely precise measurements for quality control",
        "Compact size makes it ideal for small workspaces",
        "Flexible power options for any setting",
        "Easy data collection via RS232 interface",
      ],
    },
    "electronic-platform-scale": {
      name: "Electronic Platform Scale",
      category: "Weighing Equipment",
      price: "$899",
      status: "In Stock",
      description:
        "Versatile platform scale for general weighing applications with large display and tare function.",
      longDescription:
        "This electronic platform scale is ideal for a wide range of industries, from shipping to food processing. It features a robust platform, easy-to-read display, and built-in tare function for efficient weighing operations. Overload protection ensures durability.",
      features: [
        "500kg capacity with high accuracy",
        "Large LCD display with bright backlight",
        "Tare and auto-zero functions",
        "Overload protection indicator",
        "Stainless steel platform (optional)",
        "Low power consumption",
      ],
      specifications: {
        Capacity: "500kg / 1100lbs",
        Readability: "0.1kg",
        "Platform Size": "1000 x 1000mm",
        Power: "AC adapter or rechargeable battery",
        Display: "LCD with blue backlight, 25mm digits",
        Material: "Mild steel painted (optional stainless)",
        Protection: "IP65 when lid closed",
        Dimensions: "1100 x 1100 x 150mm",
      },
      images: [
        {
          src: "/images/weighing/Electronic Platform Scale.webp",
          alt: "Electronic Platform Scale Top View",
          title: "Top Platform",
        },
        {
          src: "/images/weighing/platform-lcd.jpg",
          alt: "Scale Display Unit",
          title: "LCD Display",
        },
        {
          src: "/images/weighing/warehouse-scale.jpg",
          alt: "Platform Scale in Warehouse",
          title: "Industry Use",
        },
      ],
      benefits: [
        "Handles a wide variety of general weighing tasks",
        "Easy to read display speeds up operations",
        "Built-in tare function simplifies net weight calculations",
        "Compact design allows placement in tight spaces",
      ],
    },
    "pallet-weighing-scale": {
      name: "Pallet Weighing Scale",
      category: "Weighing Equipment",
      price: "$1,799",
      status: "In Stock",
      description:
        "Specialized low-profile scale designed for weighing pallets with ease and portability.",
      longDescription:
        "This pallet weighing scale combines low-profile rollers and a heavy-duty frame to measure pallet weights accurately. It includes an integrated digital readout on a pole, making it easy to weigh loads without lifting. The wheels allow for moving the scale into position.",
      features: [
        "3000kg maximum capacity",
        "Low-profile design with transport wheels",
        "Integrated digital LCD readout on pole",
        "Portable and easy to position",
        "Rechargeable battery for cordless use",
        "High-strength steel frame",
      ],
      specifications: {
        Capacity: "3000kg / 6600lbs",
        Readability: "1kg",
        "Platform Size": "1140 x 690mm",
        Power: "Rechargeable battery (6V 4Ah)",
        Display: "Pole-mounted LCD with backlight",
        Material: "Painted steel",
        Resolution: "1000 divisions",
        Dimensions: "1150 x 800 x 60mm (approx.)",
      },
      images: [
        {
          src: "/public/images/weighing/Pallet scale.png",
          alt: "Pallet Weighing Scale Top View",
          title: "Top Platform",
        },
        {
          src: "/images/weighing/pallet-scale-display.jpg",
          alt: "Pallet Scale LCD Display",
          title: "Digital Readout",
        },
        {
          src: "/images/weighing/pallet-scale-wheels.jpg",
          alt: "Portable Pallet Scale with Wheels",
          title: "Portable Design",
        },
      ],
      benefits: [
        "Ideal for weighing heavy pallet loads without lifting",
        "Easy to move and place under pallets",
        "Built-in display provides quick weight readings",
        "Durable construction for long-term use",
      ],
    },
    "mini-bluetooth-thermal-printers": {
      name: "Mini Bluetooth Thermal Printer",
      category: "Hardware",
      price: "$299",
      status: "In Stock",
      description:
        "Compact wireless thermal printer for on-the-go receipt printing.",
      longDescription:
        "This mini Bluetooth thermal printer is designed for mobile printing needs. It's lightweight and features long battery life, making it perfect for retail, delivery, or any on-site printing requirement. It supports multiple paper sizes and easy Bluetooth pairing.",
      features: [
        "Bluetooth 4.0 connectivity",
        "Portable lightweight design",
        "High-capacity rechargeable battery",
        "Supports 58mm and 80mm paper rolls",
        "Fast thermal printing up to 90mm/s",
        "Built-in error alerts (paper end, low battery)",
      ],
      specifications: {
        Connectivity: "Bluetooth 4.0, USB",
        Battery: "1500mAh rechargeable",
        "Paper Size": "58mm (default) / 80mm compatible",
        "Printing Speed": "Up to 90mm/s",
        Dimensions: "80 x 80 x 40mm",
        Weight: "150g",
        "Support OS": "Windows, iOS, Android",
        Interfaces: "Mini USB, power button",
      },
      images: [
        {
          src: "/images/hardware/T12 BT printer.png",
          alt: "Mini Thermal Printer Front",
          title: "Front View",
        },
        {
          src: "/images/hardware/portable-printer.jpg",
          alt: "Portable Printer in Hand",
          title: "Portable Use",
        },
        {
          src: "/images/hardware/printing-receipt.jpg",
          alt: "Printer Printing Receipt",
          title: "Printing Example",
        },
      ],
      benefits: [
        "Convenient wireless printing for mobile businesses",
        "Easy setup and operation with any device",
        "Long-lasting battery for continuous use",
        "Print quality receipts and tickets on demand",
      ],
    },
    "ocs-10a-hanging-scale": {
      name: "OCS 10A Hanging Scale",
      category: "Weighing Equipment",
      price: "$1,299",
      status: "In Stock",
      description:
        "High-precision industrial hanging scale with Bluetooth connectivity and robust design.",
      longDescription:
        "The OCS 10A Hanging Scale is engineered for industrial and commercial use where accurate weight measurement and reliability are critical. With its rugged construction, advanced load cell technology, and wireless data transfer capabilities, this scale is built to perform in demanding environments. The bright LED display ensures easy readability in low-light conditions, while the long-lasting rechargeable battery provides extended operational hours. Ideal for warehouses, shipping, agriculture, and construction applications.",
      features: [
        "1000kg maximum weighing capacity",
        "High-brightness LED display for clear visibility",
        "Bluetooth connectivity for wireless data transfer",
        "Rechargeable lithium battery with up to 80 hours of use",
        "Durable and weather-resistant IP65-rated design",
        "Overload protection for safe operation",
        "Automatic power-saving and shutdown feature",
        "Compact and portable form factor",
      ],
      specifications: {
        Capacity: "1000kg / 2200lbs",
        Accuracy: "±0.1% of full scale",
        Display: 'LED with 1" high digits',
        Power: "Rechargeable lithium battery (up to 80 hours)",
        "Operating Temperature": "-10°C to +50°C",
        "Protection Rating": "IP65",
        Connectivity: "Bluetooth (wireless data transfer)",
        Dimensions: "250 x 150 x 60mm",
        Weight: "2.5kg",
      },
      images: [
        {
          src: "/images/weighing/10A.png",
          alt: "OCS 10A Hanging Scale Front View",
          title: "Front View",
        },
        {
          src: "/images/hardware/OCS-10A.webp",
          alt: "Close-up of OCS 10A Display",
          title: "LED Display",
        },
        {
          src: "/images/hardware/OCS SB1 Hanging Scale.jpg",
          alt: "OCS 10A in Industrial Use",
          title: "In Use",
        },
      ],
      benefits: [
        "Ensures precise weight measurement for industrial applications",
        "Wireless Bluetooth connectivity eliminates manual recording errors",
        "Portable and durable design for versatile use",
        "Extended battery life reduces downtime",
      ],
    },
    "cs30-android-pos": {
      name: "CS30 Android POS",
      category: "Hardware",
      price: "$899",
      status: "In Stock",
      description:
        "Versatile Android-based point-of-sale terminal with integrated thermal printer.",
      longDescription:
        "The CS30 Android POS system combines the flexibility of Android with robust POS functionality. It features a 15-inch touch screen and built-in receipt printer, making it an all-in-one solution for retail and hospitality businesses. Its modular design allows adding peripherals like barcode scanners and cash drawers.",
      features: [
        "Android 11 operating system",
        '15" capacitive touch screen',
        "Built-in 58mm thermal printer",
        "Multiple payment method support (card, cash, QR)",
        "Wi-Fi, Ethernet, and Bluetooth connectivity",
        "USB and serial ports for peripherals",
        "Customer display support",
        "Wall-mountable option",
      ],
      specifications: {
        OS: "Android 11",
        Screen: '15" LCD capacitive touch',
        Processor: "Quad-core Cortex-A55",
        RAM: "4GB",
        Storage: "64GB eMMC",
        Printer: "Built-in 58mm thermal, auto-cutter",
        Connectivity: "Wi-Fi 802.11ac, Gigabit Ethernet, Bluetooth 5.0",
        Power: "100-240V AC adapter",
      },
      images: [
        {
          src: "/images/hardware/POS.jpeg",
          alt: "CS30 Android POS Front View",
          title: "Front View",
        },
        {
          src: "/images/hardware/cs30-0.jpg",
          alt: "CS30 Side Profile",
          title: "Side Profile",
        },
        {
          src: "/images/hardware/cs30 ui.jpeg",
          alt: "POS Interface Screenshot",
          title: "UI Display",
        },
      ],
      benefits: [
        "All-in-one device saves counter space",
        "Android OS allows for custom apps and updates",
        "Built-in printer speeds up checkout process",
        "Multiple connectivity options ensure smooth operations",
      ],
    },
    "laptops-desktops": {
      name: "Laptops and Desktops",
      category: "Hardware",
      price: "Starting at $699",
      status: "In Stock",
      description: "Business-grade laptops and desktops for professional use.",
      longDescription:
        "Our selection of laptops and desktops includes reliable machines built for business use. They feature the latest Intel processors, fast SSD storage, and come with warranties. We can pre-install business software and provide ongoing support for deployment.",
      features: [
        "Latest generation Intel Core or AMD Ryzen processors",
        "Solid state drives (SSD) for fast performance",
        "Business warranty and support options",
        "Windows 10/11 Pro or Linux OS",
        "Multiple form factors (notebooks, towers, all-in-ones)",
        "Optional dedicated graphics cards",
        "Built-in Ethernet, Wi-Fi, and Bluetooth",
      ],
      specifications: {
        Processor: "Intel Core i5 (or better) / AMD Ryzen 5 (or better)",
        RAM: "8GB (upgradeable to 32GB)",
        Storage: "256GB SSD (upgradeable)",
        "Operating System": "Windows 11 Pro, Ubuntu Linux available",
        Graphics: "Integrated UHD Graphics (or optional NVIDIA/AMD)",
        Display: '13" to 27" options for laptops and desktops',
        Connectivity: "Wi-Fi 6, Bluetooth 5.1, Gigabit Ethernet",
        "Power Supply": "Standard 65W (laptops) or 300W+ (desktops)",
      },
      images: [
        {
          src: "/images/hardware/laptops.webp",
          alt: "Business Laptops and Desktops",
          title: "Computing Devices",
        },
        {
          src: "/images/hardware/office-laptop.jpg",
          alt: "Laptop in Office Setting",
          title: "Laptop Workplace",
        },
        {
          src: "/images/hardware/desktop-setup.jpg",
          alt: "Desktop Computer Setup",
          title: "Desktop Workspace",
        },
      ],
      benefits: [
        "High performance for demanding business applications",
        "Long-term reliability with enterprise-grade components",
        "Flexible configurations to match any workload",
        "Comprehensive support and warranty options",
      ],
    },
    smartphones: {
      name: "Business Smartphones",
      category: "Hardware",
      price: "Starting at $399",
      status: "In Stock",
      description:
        "Rugged business smartphones with enhanced security and long battery life.",
      longDescription:
        "These business-class smartphones are designed for enterprise environments. They run Android 12 with strong security features, are water-resistant, and come with extended battery life. Devices are compatible with mobile device management (MDM) platforms for centralized control.",
      features: [
        "Android 12 (or latest) operating system",
        "Enterprise-grade security features (secure boot, encryption)",
        "Long-life battery (4000mAh or larger)",
        "Rugged design (IP67 water/dust resistant)",
        'High-resolution display (5.5" or larger)',
        "Dual-SIM support and global LTE/5G",
        "Fast charging capability",
      ],
      specifications: {
        Display: '5.5" HD+ touchscreen',
        Processor: "Octa-core (up to 2.0 GHz)",
        RAM: "4GB",
        Storage: "64GB internal, expandable",
        Battery: "4200mAh lithium-ion",
        Connectivity: "4G LTE/5G, Wi-Fi, Bluetooth 5.0",
        Camera: "Rear 12MP, Front 5MP",
        Durability: "IP67 rated (water/dust protection)",
      },
      images: [
        {
          src: "/public/images/hardware/smartphones.jpg",
          alt: "Rugged Business Smartphone",
          title: "Business Smartphone",
        },
        {
          src: "/images/hardware/business-phone.jpg",
          alt: "Smartphone Front View",
          title: "Front View",
        },
        {
          src: "/images/hardware/smartphone-back.jpg",
          alt: "Smartphone Back Panel",
          title: "Back View",
        },
      ],
      benefits: [
        "Designed for reliability in tough working conditions",
        "Maintains long operation with extended battery life",
        "Secured with enterprise-level encryption and controls",
        "Compatible with corporate MDM solutions for management",
      ],
    },
    accessories: {
      name: "Accessories",
      category: "Hardware",
      price: "Various pricing",
      status: "In Stock",
      description:
        "Various accessories and peripheral devices including cables, adapters, and mounts.",
      longDescription:
        "Our accessories category includes everything you need to support your hardware: from communication cables and power adapters to protective cases and mounting solutions. All items are tested for quality and compatibility with our systems.",
      features: [
        "Cables and adapters for power, data, and networking",
        "Protective cases and covers",
        "Mounting hardware and stands",
        "Power supplies and backup batteries",
        "Chargers and docks",
        "USB hubs and docking stations",
      ],
      specifications: {
        Compatibility: "Various devices (Smartphones, POS, Computers)",
        Warranty: "1 year limited warranty on most items",
        Customization: "Custom cable assemblies available",
        Standards: "Meets industry standards (USB, HDMI, etc.)",
        Packaging: "Bulk and retail packaging options",
      },
      images: [
        {
          src: "/public/images/hardware/Accessories.jpg",
          alt: "Hardware Accessories Kit",
          title: "Accessory Overview",
        },
        {
          src: "/images/hardware/cables-adapters.jpg",
          alt: "Various Cables and Adapters",
          title: "Cables & Adapters",
        },
        {
          src: "/images/hardware/mounts-cases.jpg",
          alt: "Device Mounts and Cases",
          title: "Mounts & Cases",
        },
      ],
      benefits: [
        "Enhance functionality with the right peripherals",
        "Ensure compatibility and optimal performance",
        "Protect your investment with durable accessories",
        "Convenient one-stop shop for all hardware needs",
      ],
    },
  };

  const product = productData[productSlug];

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleImageError = (e) => {
    // Fallback to placeholder if image fails to load
    e.target.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjAgMTIwSDI4MFYyODBIMTIwVjEyMFoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTE2MCAxNjBIMjQwVjI0MEgxNjBWMTYwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
  };

  const ImageModal = ({ isOpen, onClose, image }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 z-10">
            ×
          </button>
          <img
            src={image?.src || "/placeholder.svg"}
            alt={image?.alt || "Product image"}
            className="max-w-full max-h-full object-contain"
            onError={handleImageError}
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
            {image?.title || "Product Image"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        image={product.images[selectedImageIndex]}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-green-900">
              Home
            </Link>
            <span>›</span>
            <Link to="/products" className="hover:text-green-900">
              Products
            </Link>
            <span>›</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild className="mb-6 hover:bg-green-900">
            <Link to="/products">
              <ArrowLeft className="mr-2" size={16} />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-200 rounded-lg mb-4 overflow-hidden group">
                <img
                  src={
                    product.images[selectedImageIndex]?.src ||
                    "/placeholder.svg"
                  }
                  alt={
                    product.images[selectedImageIndex]?.alt ||
                    `${product.name} main image`
                  }
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={handleImageError}
                />
                <button
                  onClick={() => setIsImageModalOpen(true)}
                  className="absolute top-4 right-4 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded cursor-pointer transition-all ${
                      selectedImageIndex === index
                        ? "ring-2 ring-green-900"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded"
                      onError={handleImageError}
                    />
                  </button>
                ))}
              </div>

              {/* Image Info */}
              <div className="mt-2 text-center">
                <span className="text-sm text-green-900">
                  {product.images[selectedImageIndex]?.title || "Product Image"}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{product.category}</Badge>
                <Badge
                  variant={
                    product.status === "Available" ||
                    product.status === "In Stock"
                      ? "default"
                      : "secondary"
                  }>
                  {product.status}
                </Badge>
              </div>

              <h1 className="text-3xl text-green-900 font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                {product.description}
              </p>

              <div className="text-3xl font-bold text-green-800 mb-6">
                {product.price}
              </div>

              <div className="space-y-3 mb-6 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 items-center">
                <Button
                  size="lg"
                  className="w-34 bg-green-800 text-black"
                  asChild>
                  <Link to="/quote">Get Quote</Link>
                </Button>
                <Button
                  size="lg"
                  className="w-34 bg-green-800 py-3 text-black"
                  asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 text-center py-4 border-t border-b">
                <div className="flex flex-col items-center">
                  <Shield className="h-6 w-6 text-green-800 mb-1" />
                  <span className="text-sm text-gray-600">Warranty</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="h-6 w-6 text-blue-600 mb-1" />
                  <span className="text-sm text-white">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="h-6 w-6 text-purple-600 mb-1" />
                  <span className="text-sm text-white">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description & Features */}
            <div>
              <Card>
                <CardHeader className="text-green-900">
                  <CardTitle>Product Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6 ">
                    {product.longDescription}
                  </p>

                  <h4 className="font-semibold text-green-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Specifications */}
            <div>
              <Card>
                <CardHeader className="text-green-900">
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-start ">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className=" py-2 border-b border-gray-400 bold">
                          <span className="font-extrabold text-gray-700 mr-2">
                            {key}:
                          </span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-900">
            Why Choose {product.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Star className="h-6 w-6 text-green-900 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact our experts to learn more about {product.name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              className="bg-green-900 w-34"
              size="lg"
              variant="secondary"
              asChild>
              <Link to="/quote">Request Quote</Link>
            </Button>
            <Button
              size="lg"
              className="text-white bg-green-900 w-34 hover:bg-white hover:text-blue-600"
              asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
