import { FileText, Calculator, TrendingUp, Building } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "GST Registration",
      description:
        "Quick and hassle-free GST registration for new businesses with complete documentation support.",
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "GST Return Filing",
      description:
        "Timely filing of GSTR-1, GSTR-3B, and annual returns with accuracy and compliance.",
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "GST Cancellation & Amendment",
      description:
        "Expert assistance in GST cancellation procedures and amendments to existing registrations.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Income Tax Return Filing",
      description:
        "Professional ITR filing for individuals, businesses, and organizations with maximum refunds.",
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Accounting & Bookkeeping",
      description:
        "Comprehensive bookkeeping and accounting services to maintain financial clarity and compliance.",
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Business Registration",
      description:
        "Complete support for Proprietorship, LLP, Private Limited, and OPC company registration.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive tax and compliance solutions tailored for your
            business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
