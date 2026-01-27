import { CheckCircle, Shield, TrendingUp, Headphones } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Us
            </h2>

            <p className="text-gray-600 mb-4">
              GST Buddy Consultancy is a leading GST and tax consultancy firm
              dedicated to providing comprehensive financial solutions to
              businesses across India. With over a decade of experience in
              taxation, compliance, and business consulting, we have helped
              thousands of businesses maintain seamless operations while staying
              fully compliant.
            </p>

            <p className="text-gray-600 mb-4">
              Our team comprises certified chartered accountants, tax
              practitioners, and financial advisors who bring expertise across
              GST, income tax, corporate law, and business structuring. We
              understand that every business is unique, which is why we offer
              personalized solutions tailored to your specific needs.
            </p>

            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">10+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                <span className="font-semibold">5000+ Clients</span>
              </div>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Shield className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Trusted & Certified
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Licensed professionals ensuring complete compliance and
                    accuracy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Growth Focused
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Strategic advice to optimize tax savings and business
                    growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Headphones className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Client-Centric
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Personalized attention and dedicated support for every
                    client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
