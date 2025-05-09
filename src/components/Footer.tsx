
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">WEBGROVIA</h3>
            <p className="text-white/70 mb-4">
              Transforming ideas into digital excellence. We build software that makes a difference.
            </p>
            <div className="flex space-x-4">

            <a href="https://www.facebook.com/share/16YpFMH4M4/" className="text-white hover:opacity-70 transition-opacity">
  <img
    src="https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_40/facebook_qnlli5.png"
    alt="Facebook"
    width="20"
    height="20"
    className="object-contain"
  />
</a>


 
  <a href="https://www.instagram.com/webgrovia?igsh=MWpwMG1ocjJ0NmR6cA==" className="text-white hover:opacity-70 transition-opacity">
  <img
    src="https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_40/instagram_tjraec.png"
    alt="Instagram"
    width="20"
    height="20"
    className="object-contain"
  />
</a>


 <a href="https://youtube.com/@webgrovia?si=fnZQdUA_vH2nNndG" className="text-white hover:opacity-70 transition-opacity">
 
 <img
 src="https://res.cloudinary.com/dsfwyhwfy/image/upload/f_auto,q_auto,w_40/youtube_pgmb9c.png"
 alt="YouTube"
 width="20"
 height="20"
 className="object-contain"
/>
</a>
 
</div>

          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about-us" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Poster & Billboard Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Branding & Identity Design</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Video Ads & Commercial Creation</a></li>

            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 rounded-l-md px-4 py-2 w-full text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button 
                type="submit"
                className="bg-white text-black px-4 rounded-r-md hover:bg-white/90 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Webgrovia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
