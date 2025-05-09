"use client";
import { motion } from "framer-motion";
import { IconTarget, IconRocket, IconUsers } from "@tabler/icons-react";

export default function AboutModern() {
  return (
    <section id="about" className="bg-white text-gray-900 py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Empowering Brands to Grow Digitally
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mx-auto md:mx-0 max-w-xl">
              At Webgrovia, we blend innovation with strategy to deliver
              outstanding digital experiences. Our team thrives on pushing
              boundaries to create digital products that elevate businesses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
              {[
                {
                  title: "Targeted Strategy",
                  icon: <IconTarget className="w-6 h-6 text-blue-600" />,
                },
                {
                  title: "Innovative Launches",
                  icon: <IconRocket className="w-6 h-6 text-green-600" />,
                },
                {
                  title: "User-Centric Approach",
                  icon: <IconUsers className="w-6 h-6 text-purple-600" />,
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-start gap-3 bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="p-2 rounded-full bg-white shadow">
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-medium text-gray-800">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-first md:order-last mb-8 md:mb-0"
          >
            <div className="overflow-hidden rounded-3xl shadow-lg aspect-video">
              <img
                src="https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_1080/v1746771096/0621be3b-2264-4226-9269-85269b8e85cb_ayu04k.png"
                alt="Webgrovia team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
