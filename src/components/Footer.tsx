import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t border-[#1A1A1A]/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <h3 className="font-serif text-white text-2xl mb-6">Siyabonga Recycling</h3>
            <p className="text-sm leading-relaxed mb-6 opacity-70">
              Join us in freeing not just yourself but also the community from the ever-constant problem of pollution. Drop off, get paid.
            </p>
            <div className="flex space-x-4 opacity-70">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#05812A] hover:border-[#05812A] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#05812A] hover:border-[#05812A] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#05812A] hover:border-[#05812A] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#05812A] hover:border-[#05812A] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-black mb-6">Quick Links</h3>
            <ul className="space-y-3 opacity-80">
              <li><a href="/" className="text-sm hover:text-[#05812A] transition-colors">Home</a></li>
              <li><a href="/contact" className="text-sm hover:text-[#05812A] transition-colors">Contact Us</a></li>
              <li><a href="https://share.google/UyhjH6DHsx0ZAEr5u" target="_blank" rel="noreferrer" className="text-sm hover:text-[#05812A] transition-colors">Branch 1 Info</a></li>
              <li><a href="https://share.google/jRYArJmNHshHI6zDA" target="_blank" rel="noreferrer" className="text-sm hover:text-[#05812A] transition-colors">Branch 2 Info</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-black mb-6">Contact Us</h3>
            <ul className="space-y-4 opacity-80">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#05812A] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm">
                  <a href="tel:+27793942061" className="hover:text-[#05812A] transition-colors">+27 79 394 2061 (Germiston)</a>
                  <a href="tel:+27746567209" className="hover:text-[#05812A] transition-colors">+27 74 656 7209 (Boksburg)</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#05812A] flex-shrink-0 mt-0.5" />
                <span className="text-sm">Germiston & Boksburg, SA</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#05812A] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm space-y-1">
                  <a href="mailto:SiyabongaRecycling@gmail.com" className="hover:text-[#05812A] transition-colors break-all">SiyabongaRecycling@gmail.com</a>
                  <a href="mailto:Ernestticha8@gmail.com" className="hover:text-[#05812A] transition-colors break-all">Ernestticha8@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-black mb-6">Operating Hours</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Sat</span>
                <span>08:00 - 17:30</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Sunday</span>
                <span className="text-[#05812A] font-bold">Closed</span>
              </li>
            </ul>
            <p className="text-[10px] opacity-60 mt-4 italic">Public holiday times may vary.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/60">
          <p>&copy; {new Date().getFullYear()} Siyabonga Recycling. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
