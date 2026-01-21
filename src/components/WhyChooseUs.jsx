import { Users, DollarSign, Clock, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Experienced Professionals",
      description:
        "Team of certified chartered accountants and tax experts with years of experience.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-green-600" />,
      title: "Affordable Pricing",
      description:
        "Transparent and competitive pricing with no hidden charges for all services.",
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-600" />,
      title: "Quick Turnaround Time",
      description:
        "Fast processing and timely delivery of all filings and registrations.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-purple-600" />,
      title: "Dedicated Support",
      description:
        "24/7 customer support to address all your queries and concerns promptly.",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for all tax and compliance needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
