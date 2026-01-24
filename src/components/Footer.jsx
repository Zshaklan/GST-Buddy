import { useAppContext } from "../context/AppContext";
import Logo from "../assets/GST-Buddy-Logo.jpeg";

export default function Footer() {
  const { scrollToSection } = useAppContext();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">GST Buddy</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for GST, taxation, and business compliance
              services across India.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
              <li>Phone: +91 7015120946</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          © 2026 GST Buddy Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
