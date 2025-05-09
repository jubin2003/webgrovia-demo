import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Contact,
  User,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface InquiryPopupProps {
  isInitial?: boolean;
}

const InquiryPopup = ({ isInitial = false }: InquiryPopupProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    projectDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }));
  };

  const showPopup = useCallback(() => {
    // Check if user has already seen the popup in this session
    if (isInitial && sessionStorage.getItem("popupShown")) return;

    setOpen(true);

    if (isInitial) {
      sessionStorage.setItem("popupShown", "true");
    }
  }, [isInitial]);

  const handleSubmit = () => {
    console.log("Inquiry submitted:", formData);

    toast({
      title: "Inquiry received!",
      description: "Our team will get back to you shortly.",
    });

    setOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      projectDetails: "",
    });
  };

  useEffect(() => {
    // For initial popup, show after 3 seconds delay
    if (isInitial) {
      const timer = setTimeout(() => {
        showPopup();
      }, 3000);

      return () => clearTimeout(timer);
    }
    // For recurring popup, show every 60 seconds
    else {
      const interval = setInterval(() => {
        showPopup();
      }, 120000);

      return () => clearInterval(interval);
    }
  }, [isInitial, showPopup]);

  // Modern service offerings with visual cues
  const services = [
    {
      icon: <MessageCircle size={20} />,
      name: "Web Development",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      icon: <Contact size={20} />,
      name: "Mobile App Development",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      icon: <User size={20} />,
      name: "UI/UX Design",
      color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    },
    {
      icon: <MessageCircle size={20} />,
      name: "Cloud Solutions",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
  ];

  // Contact information
  const contactInfo = [
    { icon: <Mail size={18} />, text: "hello@webgrovia.com" },
    { icon: <Phone size={18} />, text: "+1 (555) 123-4567" },
    { icon: <MapPin size={18} />, text: "San Francisco, CA" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden border-0 shadow-xl sm:max-w-4xl w-[95vw] md:w-auto rounded-xl">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left side - Modern bento grid */}
          <div className="bg-gradient-to-br from-black to-gray-900 text-white p-6 md:p-8 md:w-2/5 relative overflow-hidden">
            {/* Abstract background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-5 text-white flex items-center gap-2">
                <MessageCircle size={20} className="text-blue-400" />
                Our Services
              </h3>

              {/* Services bento grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className={`${service.color} p-3 rounded-lg border backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <span className="text-sm font-medium">
                        {service.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Phone size={20} className="text-blue-400" />
                Contact Us
              </h3>

              {/* Contact info cards */}
              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-white/90 group transition-all hover:text-white"
                  >
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 hidden md:block">
                <p className="text-sm text-white/70 leading-relaxed">
                  Let's transform your ideas into reality. Our team of experts
                  is ready to help you build exceptional digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form with improved UI */}
          <div className="p-6 md:p-8 md:w-3/5 bg-white dark:bg-gray-950">
            <DialogHeader className="relative">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-0 top-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
              <DialogTitle className="text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                  Tell Us About Your Project
                </span>
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <User size={16} className="text-muted-foreground" />
                    <span>Name</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus-within:border-black dark:focus-within:border-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Mail size={16} className="text-muted-foreground" />
                    <span>Email</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus-within:border-black dark:focus-within:border-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <Phone size={16} className="text-muted-foreground" />
                    <span>Phone</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus-within:border-black dark:focus-within:border-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="serviceType"
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <MessageCircle
                      size={16}
                      className="text-muted-foreground"
                    />
                    <span>Service</span>
                  </label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger
                      id="serviceType"
                      className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus:border-black dark:focus:border-white"
                    >
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webDev">Web Development</SelectItem>
                      <SelectItem value="mobileDev">
                        Mobile App Development
                      </SelectItem>
                      <SelectItem value="uiuxDesign">UI/UX Design</SelectItem>
                      <SelectItem value="cloud">Cloud Solutions</SelectItem>
                      <SelectItem value="ai">AI & Machine Learning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="projectDetails"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <MessageCircle size={16} className="text-muted-foreground" />
                  <span>Project Details</span>
                </label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 focus-within:border-black dark:focus-within:border-white transition-all min-h-24 resize-none"
                />
              </div>
            </div>

            <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-0">
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="border-gray-300 dark:border-gray-700 w-full sm:w-auto"
              >
                Later
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 text-white dark:text-black w-full sm:w-auto transition-colors"
              >
                Submit Inquiry
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryPopup;
