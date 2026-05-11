import React, { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/SiyabongaRecycling@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Inquiry from ${formData.name}`,
            _cc: "Ernestticha8@gmail.com",
            _template: "table"
        })
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Inquiry sent successfully! We will get back to you shortly.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: 'There was an issue sending your inquiry. Please try again.' });
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#f8f8f8] font-sans pb-24">
      
      <div className="border-b border-[#1A1A1A]/10 dark:border-white/10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-32 pb-16 px-8 md:px-16"
        >
          <div className="inline-block bg-[#e6fced] text-[#034b18] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-bold mb-6 rounded-sm w-max">
            Reach Out
          </div>
          <h1 className="font-serif text-[60px] md:text-[80px] leading-[0.85] tracking-tighter">
            Find us & <span className="text-[#05812A] italic">get paid</span>.
          </h1>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-[#1A1A1A]/10 dark:border-white/10 pb-24">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 bg-white dark:bg-[#1c1c1c] p-8 border border-[#1A1A1A]/10 dark:border-white/10 hover:border-[#05812A] transition-colors rounded-sm"
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-4 text-[#05812A]">Germiston Branch</h4>
            <div className="text-sm space-y-2 font-semibold text-[#4A4A4A] dark:text-[#a0a0a0]">
              <p className="text-[#1A1A1A] dark:text-[#f8f8f8] text-lg font-serif">Main Scrap Yard</p>
              <p className="opacity-70">24 Meyer St, North Germiston</p>
              <p className="opacity-70">Germiston, 1401</p>
              <p className="text-[#05812A] pt-1 font-bold">+27 79 394 2061</p>
            </div>
            <div className="pt-4 mt-4 text-[#4A4A4A] dark:text-[#a0a0a0] border-t border-[#1A1A1A]/10 dark:border-white/10 mt-4 rounded-sm">
               <h4 className="text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-[#1A1A1A] dark:text-[#f8f8f8]">Opening Hours</h4>
               <p className="text-xs">Mon — Sat<br/>08:00 – 17:30</p>
               <p className="text-xs text-red-500 mt-2 font-bold">Sunday: Closed</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 bg-white dark:bg-[#1c1c1c] p-8 border border-[#1A1A1A]/10 dark:border-white/10 hover:border-[#05812A] transition-colors rounded-sm"
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-4 text-[#05812A]">Boksburg Branch</h4>
            <div className="text-sm space-y-2 font-semibold text-[#4A4A4A] dark:text-[#a0a0a0]">
              <p className="text-[#1A1A1A] dark:text-[#f8f8f8] text-lg font-serif">Secondary Yard</p>
              <p className="opacity-70">Vredebos, 42 R103, Mapleton</p>
              <p className="opacity-70">Boksburg, 1459</p>
              <p className="text-[#05812A] pt-1 font-bold">+27 74 656 7209</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-4">Direct Email</h4>
            <div className="text-sm space-y-2 font-semibold text-[#4A4A4A] dark:text-[#a0a0a0] flex flex-col">
              <a href="mailto:SiyabongaRecycling@gmail.com" className="hover:text-[#05812A] transition-colors text-lg">SiyabongaRecycling@gmail.com</a>
              <a href="mailto:Ernestticha8@gmail.com" className="hover:text-[#05812A] transition-colors text-lg">Ernestticha8@gmail.com</a>
            </div>
          </motion.div>
        </div>

        {/* Input Form & Map */}
        <div className="lg:col-span-7 flex flex-col space-y-16">
          <motion.form 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white dark:bg-[#1c1c1c] p-8 md:p-12 border border-[#1A1A1A]/10 dark:border-white/10 shadow-lg relative group rounded-sm hover:border-[#1A1A1A]/20 dark:border-white/20 transition-all"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#05812A] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-t-sm"></div>
            <h3 className="text-2xl font-serif italic mb-8">Send an Inquiry</h3>
            <div className="space-y-4 text-sm text-[#4A4A4A] dark:text-[#a0a0a0]">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <label htmlFor="name" className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Full Name</label>
                   <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required
                     className="w-full px-4 py-3 bg-[#FAFAF9] dark:bg-[#121212] border border-[#1A1A1A]/10 dark:border-white/10 focus:border-[#05812A] focus:bg-white dark:bg-[#1c1c1c] outline-none transition-colors rounded-sm" />
                 </div>
                 <div className="space-y-1">
                   <label htmlFor="email" className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Email Address</label>
                   <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required
                     className="w-full px-4 py-3 bg-[#FAFAF9] dark:bg-[#121212] border border-[#1A1A1A]/10 dark:border-white/10 focus:border-[#05812A] focus:bg-white dark:bg-[#1c1c1c] outline-none transition-colors rounded-sm" />
                 </div>
               </div>
               <div className="space-y-1">
                 <label htmlFor="message" className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Your Message</label>
                 <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5}
                   className="w-full px-4 py-3 bg-[#FAFAF9] dark:bg-[#121212] border border-[#1A1A1A]/10 dark:border-white/10 focus:border-[#05812A] focus:bg-white dark:bg-[#1c1c1c] outline-none transition-colors resize-none rounded-sm"></textarea>
               </div>
               <div className="pt-4">
                 <button type="submit" disabled={isSubmitting} className="bg-[#1A1A1A] hover:bg-[#05812A] text-white px-8 py-3 text-[10px] uppercase tracking-widest font-bold transition-all w-full md:w-auto disabled:opacity-50 hover:-translate-y-0.5 rounded-sm shadow-md hover:shadow-lg">
                    {isSubmitting ? 'Sending...' : 'Submit Message'}
                 </button>
               </div>
               {submitStatus.type && (
                 <div className={`mt-4 p-4 text-sm border rounded-sm ${submitStatus.type === 'success' ? 'bg-[#05812A]/10 border-[#05812A] text-[#05812A]' : 'bg-red-50 border-red-500 text-red-600'}`}>
                   {submitStatus.message}
                 </div>
               )}
            </div>
          </motion.form>

          {/* Map Box Minimalist */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-4 mb-4">Location: Germiston</h4>
              <div className="h-[300px] border border-[#1A1A1A]/10 dark:border-white/10 bg-white dark:bg-[#1c1c1c] p-2 rounded-sm shadow-sm group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d-1852.5294084741306!2d28.15643644907448!3d-26.206387149004865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9511234bca70ef%3A0xe92e58ff7fa24eef!2sSiyabonga%20recycling!5e1!3m2!1sen!2sza!4v1719680803298!5m2!1sen!2sza"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rounded-sm"
                  title="Siyabonga Recycling Location Focus"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-4 mb-4">Location: Boksburg</h4>
              <div className="h-[300px] border border-[#1A1A1A]/10 dark:border-white/10 bg-white dark:bg-[#1c1c1c] p-2 rounded-sm shadow-sm group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.1741753207675!2d28.213671174007946!3d-26.3208589687326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9519d58e5cf181%3A0x3b593b78f130e326!2sSiyabonga%20Recycling%20-%20Boksburg%20branch!5e0!3m2!1sen!2sza!4v1778439188006!5m2!1sen!2sza"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 rounded-sm"
                  title="Siyabonga Recycling - Boksburg branch"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    
    </div>
  );
}
