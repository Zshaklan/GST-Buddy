import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { scrollToSection } = useAppContext();

  return (
    <section id="home" className="pt-24 pb-16 bg-blue-50 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Trusted GST & Tax Solutions for Businesses
      </h1>
      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        Expert GST registration, return filing, and compliance services across
        India.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Get Free Consultation
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
