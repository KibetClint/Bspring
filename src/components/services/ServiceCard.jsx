import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const ServiceCard = ({ title, description, icon, features, benefits }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{icon}</div>
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-lg">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Features</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-green-600">Benefits</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {benefits.map((benefit, idx) => (
                <li key={idx}>✓ {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Button className="w-full bg-green-800 text-white">Learn More</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
