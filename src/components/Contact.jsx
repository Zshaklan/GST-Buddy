import { useState } from "react";
import { Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("Thank you! We will contact you soon.");
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mb-3 p-3 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-3 border rounded"
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="w-full mb-3 p-3 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Submit
        </button>

        <a
          href="tel:+919876543210"
          className="mt-4 flex justify-center items-center text-blue-600"
        >
          <Phone className="mr-2" /> Call Now
        </a>
      </div>
    </section>
  );
}
