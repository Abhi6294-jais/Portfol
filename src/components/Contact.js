import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/mqalkdbq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      console.log('Form submitted successfully');
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Get In Touch
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Contact Info Section */}
          <div className="lg:w-2/5">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8">
              I'm currently open to internship opportunities. Feel free to reach
              out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 transition-all transform hover:-translate-y-1 hover:scale-110">
                  <FaEnvelope className="text-indigo-600" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">smartabhishekiitp@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
               <div className="bg-indigo-100 p-3 rounded-full mr-4 transition-all transform hover:-translate-y-1 hover:scale-110">
                  <FaMapMarkerAlt className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Location</h4>
                  <p className="text-gray-600">IIT Patna</p>
                </div>
              </div>

              <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4 transition-all transform hover:-translate-y-1 hover:scale-110">
                  <FaPhone className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91-6294975338</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-bold text-gray-800 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/abhishek-jaiswal-a17646251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-all transform hover:-translate-y-1 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Abhi6294-jais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-all transform hover:-translate-y-1 hover:scale-110"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:w-3/5">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send me a message
              </h3>

              {isSubmitted && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  ✅ Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;