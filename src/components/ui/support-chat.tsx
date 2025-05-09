"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, ArrowLeft, Home } from "lucide-react";
import { Button } from "./button";

const presetQuestions = [
  "What services do you offer?",
  "How can I get started?",
  "What are your pricing plans?",
  "Do you offer custom solutions?",
  "How can I contact support?",
];

const presetAnswers: { [key: string]: string } = {
  "What services do you offer?":
    "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to your business needs.",
  "How can I get started?":
    "Getting started is easy! Simply click the 'Get Started' button on our homepage, and our team will guide you through the process of transforming your digital presence.",
  "What are your pricing plans?":
    "Our pricing is customized based on your specific requirements. We offer flexible plans to accommodate businesses of all sizes. Contact us for a detailed quote.",
  "Do you offer custom solutions?":
    "Yes, we specialize in creating custom digital solutions that are tailored to your unique business needs and objectives.",
  "How can I contact support?":
    "You can reach our support team through email at webgrovia@gmail.com, call at +919995965348 or use this chat interface. We're available 24/7 to assist you.",
};

interface Message {
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (assuming it's 100vh)
      const heroHeight = window.innerHeight;
      // Show chat icon after scrolling past the hero section
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset form and errors
  const resetForm = () => {
    setContactInfo({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setFormErrors({});
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;

    if (!contactInfo.name.trim()) {
      errors.name = "Name is required";
    } else if (contactInfo.name.length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!contactInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(contactInfo.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!contactInfo.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(contactInfo.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!contactInfo.service) {
      errors.service = "Please select a service";
    }

    if (!contactInfo.message.trim()) {
      errors.message = "Message is required";
    } else if (contactInfo.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle preset question selection
  const handleQuestionSelect = (question: string) => {
    setSelectedQuestion(question);
    setMessages([
      {
        type: "user",
        content: question,
        timestamp: new Date(),
      },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: presetAnswers[question],
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  // Handle custom message submission
  const handleCustomMessage = () => {
    if (customMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          type: "user",
          content: customMessage,
          timestamp: new Date(),
        },
      ]);
      setCustomMessage("");
      setShowContactForm(true);
    }
  };

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Send message to WhatsApp
        const response = await fetch("/api/send-whatsapp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: contactInfo.name,
            email: contactInfo.email,
            phone: contactInfo.phone,
            service: contactInfo.service,
            message: contactInfo.message,
            originalQuestion: customMessage,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        // Reset form and show confirmation
        setShowContactForm(false);
        resetForm();
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content:
              "Thank you for your message! Our team will contact you shortly on WhatsApp.",
            timestamp: new Date(),
          },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            content:
              "Sorry, there was an error sending your message. Please try again later.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Handle back to home
  const handleBackToHome = () => {
    setShowContactForm(false);
    setSelectedQuestion(null);
    setMessages([]);
    resetForm();
  };

  return (
    <>
      {/* Chat Icon Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageCircle className="w-6 h-6 text-black" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-50 w-96 bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                {(showContactForm || selectedQuestion) && (
                  <button
                    onClick={handleBackToHome}
                    className="hover:bg-white/10 p-1 rounded-full transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <h3 className="font-semibold">Webgrovia Support</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-96 overflow-y-auto">
              <div className="space-y-4">
                {showContactForm ? (
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={contactInfo.name}
                        onChange={(e) => {
                          setContactInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }));
                          if (formErrors.name) {
                            setFormErrors((prev) => ({
                              ...prev,
                              name: undefined,
                            }));
                          }
                        }}
                        placeholder="Enter your full name"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                          formErrors.name ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={contactInfo.email}
                        onChange={(e) => {
                          setContactInfo((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }));
                          if (formErrors.email) {
                            setFormErrors((prev) => ({
                              ...prev,
                              email: undefined,
                            }));
                          }
                        }}
                        placeholder="Enter your email address"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                          formErrors.email ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactInfo.phone}
                        onChange={(e) => {
                          setContactInfo((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }));
                          if (formErrors.phone) {
                            setFormErrors((prev) => ({
                              ...prev,
                              phone: undefined,
                            }));
                          }
                        }}
                        placeholder="Enter your phone number"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                          formErrors.phone ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        required
                        value={contactInfo.service}
                        onChange={(e) => {
                          setContactInfo((prev) => ({
                            ...prev,
                            service: e.target.value,
                          }));
                          if (formErrors.service) {
                            setFormErrors((prev) => ({
                              ...prev,
                              service: undefined,
                            }));
                          }
                        }}
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                          formErrors.service ? "border-red-500" : ""
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">
                          Mobile Development
                        </option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                      </select>
                      {formErrors.service && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.service}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        required
                        value={contactInfo.message}
                        onChange={(e) => {
                          setContactInfo((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }));
                          if (formErrors.message) {
                            setFormErrors((prev) => ({
                              ...prev,
                              message: undefined,
                            }));
                          }
                        }}
                        placeholder="Tell us more about your requirements..."
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black ${
                          formErrors.message ? "border-red-500" : ""
                        }`}
                        rows={3}
                      />
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black hover:bg-gray-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <>
                    {/* Messages */}
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${
                          message.type === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`rounded-lg p-3 max-w-[80%] ${
                            message.type === "user"
                              ? "bg-black text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          {message.content}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-gray-100 rounded-lg p-3">
                          <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                        </div>
                      </motion.div>
                    )}

                    {/* Preset Questions */}
                    {!selectedQuestion && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                      >
                        <div className="text-center mb-6">
                          <h4 className="font-semibold mb-2">
                            How can we help you?
                          </h4>
                          <p className="text-sm text-gray-500">
                            Select a question or type your own
                          </p>
                        </div>
                        {presetQuestions.map((question) => (
                          <motion.button
                            key={question}
                            onClick={() => handleQuestionSelect(question)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            {question}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Chat Input */}
            {!showContactForm && (
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleCustomMessage()
                    }
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <Button
                    onClick={handleCustomMessage}
                    className="bg-black hover:bg-gray-800"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
