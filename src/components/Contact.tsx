"use client";
import { motion } from "framer-motion";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconClock,
} from "@tabler/icons-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Contact Form - Spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-zinc-900 rounded-2xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-white focus:ring-2 focus:ring-zinc-600 transition-all duration-300"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-white focus:ring-2 focus:ring-zinc-600 transition-all duration-300"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-white focus:ring-2 focus:ring-zinc-600 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-white focus:ring-2 focus:ring-zinc-600 transition-all duration-300"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300"
              >
                Send Message
                <IconSend className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards - Spans 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IconMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-400">webgrovia@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IconPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+91 9995965348</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IconClock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Hours</h4>
                  <p className="text-gray-400">Mon-Fri: 9AM-6PM</p>
                  <p className="text-gray-400">Sat: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map - Spans 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 bg-zinc-900 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2008292.2472240678!2d74.81898144314678!3d10.544245568929972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1746765963492!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(100%) invert(92%) contrast(83%)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Webgrovia office location"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <IconMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-400">
                    Kerala,India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
