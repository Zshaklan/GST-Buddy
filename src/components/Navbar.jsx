import { Menu, X, Calculator } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Navbar() {
  const { activeSection, isMenuOpen, setIsMenuOpen, scrollToSection } =
    useAppContext();

  const links = ["home", "services", "why-us", "about", "contact"];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Calculator className="h-8 w-8 text-blue-600" />
          <span className="ml-2 font-bold text-xl">GST Buddy</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize ${
                activeSection === item
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item === "why-us" ? "Why Choose Us" : item}
            </button>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
