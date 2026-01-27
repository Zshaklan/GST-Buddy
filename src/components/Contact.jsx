import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const services = [
    "GST Registration",
    "GST Return Filing",
    "GST Cancellation & Amendment",
    "Income Tax Return Filing",
    "Accounting & Bookkeeping",
    "Business Registration",
    "Other",
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_email: "CMAANKITSAINI@GMAIL.COM",
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        alert("Thank you! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setLoading(false);
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
        setLoading(false);
      },
    );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 border rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            placeholder="Phone"
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 border rounded"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 border rounded bg-white text-gray-700"
          >
            <option value="" disabled>
              Select Service
            </option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            rows="4"
            className="w-full mb-3 p-3 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
