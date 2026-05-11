import { ArrowRight, Recycle, Leaf, TrendingUp, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9] text-[#1A1A1A] font-sans">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 flex-grow min-h-[85vh] border-b border-[#1A1A1A]/10 pb-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10"
        >
          <div className="inline-block bg-[#e6fced] text-[#034b18] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-bold mb-6 rounded-sm w-max">
            Germiston & Boksburg
          </div>
          <h1 className="font-serif text-5xl md:text-[80px] leading-[0.85] tracking-tighter mb-8 max-w-2xl text-[#1A1A1A]">
            Clean the community.<br/>
            <span className="text-[#05812A] italic">Get cash</span><br/>
            for your scrap.
          </h1>
          <p className="text-lg max-w-md leading-relaxed text-[#4A4A4A] mb-12">
             Siyabonga Recycling is a multi-purpose recycling center. We swap basic recycling materials for cash, and help free our community from pollution.
          </p>
          <div className="flex mb-12">
             <NavLink to="/contact" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-[#05812A] transition-colors rounded-sm shadow-xl shadow-green-900/10 hover:shadow-black/20 hover:-translate-y-0.5 duration-300">
               Find Our Yards
               <ArrowRight className="w-4 h-4" />
             </NavLink>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1A1A1A]/10 pt-10">
             {[
               { val: "Cash", label: "Immediate Payouts" },
               { val: "2", label: "Local Branches" },
               { val: "6", label: "Days a Week" },
               { val: "Community", label: "Always First" }
             ].map((stat, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
               >
                 <div className="font-serif text-3xl mb-1 text-[#05812A]">{stat.val}</div>
                 <div className="text-[10px] uppercase tracking-wider text-[#4A4A4A] font-bold">{stat.label}</div>
               </motion.div>
             ))}
          </div>
        </motion.div>

        {/* Content & Services Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col"
        >
          {/* Services Strip */}
          <div className="p-8 md:p-16 border-b border-[#1A1A1A]/10 bg-[#1A1A1A] text-white">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#05812A] animate-pulse"></span>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-black opacity-80">What We Buy</h3>
            </div>
            <ul className="space-y-6">
              {[
                { title: "Non-Ferrous Metals", desc: "Top rates for Copper, Brass, and Aluminum." },
                { title: "General Recyclables", desc: "Swap your plastics, steel, & paper for cash." },
                { title: "Intact Bottles", desc: "Bring in your unbroken glass bottles." },
                { title: "Circuit Boards", desc: "We buy printed circuit boards from old electronics." }
              ].map((service, idx) => (
                <li key={idx} className={`group cursor-pointer ${idx !== 0 ? 'border-t border-white/10 pt-6' : ''}`}>
                  <NavLink to="/services" className="block">
                    <div className="flex items-center justify-between mb-2 text-[#FAFAF9] group-hover:text-[#05812A] transition-colors">
                      <span className="text-2xl font-serif italic">{service.title}</span>
                      <ArrowRight className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                    <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{service.desc}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Replace */}
          <div className="flex-grow bg-[#1A1A1A] p-4 relative min-h-[300px] overflow-hidden">
             <img src="https://images.unsplash.com/photo-1558611997-3932a31eb183?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Scrap metal and recycling yard" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700" />
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-[#1A1A1A]/10 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex items-center gap-3 mb-16 relative">
             <div className="h-px bg-[#1A1A1A]/10 flex-grow"></div>
             <h2 className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A] px-4 whitespace-nowrap">Word on the street</h2>
             <div className="h-px bg-[#1A1A1A]/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Always get fair prices when I drop off my scrap copper and old pipes here. The guys are straightforward and pay cash quickly.",
                author: "Sipho M.",
                role: "Local Plumber"
              },
              {
                text: "I collect bottles around the neighborhood and bring them in every week. Easy process, no hassle, and good for the community.",
                author: "Thandi N.",
                role: "Community Member"
              },
              {
                text: "Good place to bring broken phones and circuit boards. They weighed it up and gave me cash on the spot. Will come back.",
                author: "David T.",
                role: "Scrap Collector"
              }
            ].map((testimonial, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="flex flex-col p-8 border border-[#1A1A1A]/10 hover:border-[#05812A] hover:bg-[#FAFAF9] transition-all duration-300 rounded-sm"
              >
                <div className="font-serif text-5xl text-[#05812A] mb-4 opacity-50">"</div>
                <p className="text-sm text-[#4A4A4A] leading-relaxed mb-8 flex-grow font-medium">
                  {testimonial.text}
                </p>
                <div className="pt-4 border-t border-[#1A1A1A]/10">
                  <h4 className="font-serif italic font-bold mb-1 text-[#1A1A1A]">{testimonial.author}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#05812A] font-bold">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
