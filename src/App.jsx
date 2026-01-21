import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <Services />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
