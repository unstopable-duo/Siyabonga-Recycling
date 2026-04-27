import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1A1A1A] font-sans pb-24">
      
      <div className="border-b border-[#1A1A1A]/10 max-w-7xl mx-auto">
        <h1 className="font-serif text-[60px] md:text-[80px] leading-[0.85] tracking-tighter pt-32 pb-16 px-8 md:px-16">
          Find us & <span className="text-[#05812A] italic">get paid</span>.
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-[#1A1A1A]/10 pb-24">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col space-y-16">
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 pb-4">Germiston Branch</h4>
            <div className="text-sm space-y-1 font-semibold text-[#4A4A4A]">
              <p className="text-[#1A1A1A]">Main Scrap Yard</p>
              <p className="opacity-70">24 Meyer St, North Germiston</p>
              <p className="opacity-70">Germiston, 1401</p>
              <p className="text-[#05812A] pt-1">+27 79 394 2061</p>
            </div>
            <div className="pt-4 mt-4 text-[#4A4A4A]">
               <h4 className="text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-[#1A1A1A]">Opening Hours</h4>
               <p className="text-xs">Mon — Sat<br/>08:00 – 17:30</p>
               <p className="text-xs text-red-500 mt-2 font-bold">Sunday: Closed</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 pb-4">Boksburg Branch</h4>
            <div className="text-sm space-y-1 font-semibold text-[#4A4A4A]">
              <p className="text-[#1A1A1A]">Secondary Yard</p>
              <p className="opacity-70">Vredebos, 42 R103, Mapleton</p>
              <p className="opacity-70">Boksburg, 1459</p>
              <p className="text-[#05812A] pt-1">+27 74 656 7209</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 pb-4">Direct Email</h4>
            <div className="text-sm space-y-1 font-semibold text-[#4A4A4A] flex flex-col">
              <a href="mailto:SiyabongaRecycling@gmail.com" className="text-[#05812A] hover:underline">SiyabongaRecycling@gmail.com</a>
              <a href="mailto:Ernestticha8@gmail.com" className="text-[#05812A] hover:underline">Ernestticha8@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Input Form & Map */}
        <div className="lg:col-span-7 flex flex-col space-y-16">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 border border-[#1A1A1A]/10 shadow-sm relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#05812A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <h3 className="text-2xl font-serif italic mb-8">Send an Inquiry</h3>
            <div className="space-y-4 text-sm text-[#4A4A4A]">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <label htmlFor="name" className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]">Full Name</label>
                   <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                     className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1A1A1A]/10 focus:border-[#05812A] outline-none transition-colors" />
                 </div>
                 <div className="space-y-1">
                   <label htmlFor="email" className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]">Email Address</label>
                   <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                     className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1A1A1A]/10 focus:border-[#05812A] outline-none transition-colors" />
                 </div>
               </div>
               <div className="space-y-1">
                 <label htmlFor="message" className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A]">Your Message</label>
                 <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5}
                   className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1A1A1A]/10 focus:border-[#05812A] outline-none transition-colors resize-none"></textarea>
               </div>
               <div className="pt-4">
                 <button type="submit" className="bg-[#1A1A1A] hover:bg-[#05812A] text-white px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-colors w-full md:w-auto">
                    Submit Message
                 </button>
               </div>
            </div>
          </form>

          {/* Map Box Minimalist */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 pb-4 mb-8">Location Ping</h4>
            <div className="h-[300px] border border-[#1A1A1A]/10 bg-white p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d-1852.5294084741306!2d28.15643644907448!3d-26.206387149004865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9511234bca70ef%3A0xe92e58ff7fa24eef!2sSiyabonga%20recycling!5e1!3m2!1sen!2sza!4v1719680803298!5m2!1sen!2sza"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                title="Siyabonga Recycling Location Focus"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    
    </div>
  );
}
