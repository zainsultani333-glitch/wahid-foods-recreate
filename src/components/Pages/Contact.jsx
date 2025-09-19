import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      {/* Header */}
      <div className="flex justify-center items-center mb-5 mt-10">
        <div className="lg:w-[30%] text-center">
          <h1
            data-aos="zoom-in"
            className="text-3xl font-bold mb-5 text-[#00809d]"
          >
            Contact Us
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000">
            Have a question, feedback, or need help? Fill out the form below and
            our team will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div
        data-aos="zoom-in"
        className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-[#00809d] pt-10 pb-10"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-lg font-medium text-[#00809d]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-[#00809d] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#00809d]"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-[#00809d] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#00809d] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#00809d]"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-medium text-[#00809d] mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-[#00809d] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#00809d]"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#00809d] text-white px-6 py-2 rounded-lg hover:bg-[#006d80] transition-colors w-full"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
