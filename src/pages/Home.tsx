import { ArrowRight, Recycle, Leaf, TrendingUp, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAF9] text-[#1A1A1A] font-sans">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 flex-grow min-h-[85vh] border-b border-[#1A1A1A]/10 pb-0">
        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10">
          <h1 className="font-serif text-5xl md:text-[80px] leading-[0.85] tracking-tighter mb-8 max-w-2xl">
            Clean the community.<br/>
            <span className="text-[#05812A]">Get cash</span><br/>
            for your scrap.
          </h1>
          <p className="text-lg max-w-md leading-relaxed text-[#4A4A4A] mb-12">
             Siyabonga Recycling is a multi-purpose recycling center in Germiston and Boksburg. We swap basic recycling materials for cash, and help free our community from pollution.
          </p>
          <div className="flex mb-12">
             <NavLink to="/contact" className="inline-block bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.2em] px-8 py-4 font-bold hover:bg-[#05812A] transition-colors">
               Find Our Yards
             </NavLink>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1A1A1A]/10 pt-10">
             <div>
               <div className="font-serif text-3xl mb-1">Cash</div>
               <div className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">Immediate Payouts</div>
             </div>
             <div>
               <div className="font-serif text-3xl mb-1">2</div>
               <div className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">Local Branches</div>
             </div>
             <div>
               <div className="font-serif text-3xl mb-1">6</div>
               <div className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">Days a Week</div>
             </div>
             <div>
               <div className="font-serif text-3xl mb-1">Community</div>
               <div className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">First</div>
             </div>
          </div>
        </div>

        {/* Content & Services Section */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Services Strip */}
          <div className="p-8 md:p-16 border-b border-[#1A1A1A]/10 bg-[#05812A] text-white">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-black mb-8 opacity-80">What We Take</h3>
            <ul className="space-y-6">
              {[
                { title: "Basic Recyclables", desc: "Swap your plastics, metals & paper for cash." },
                { title: "Intact Bottles", desc: "Bring in your unbroken glass bottles." },
                { title: "E-Waste & Boards", desc: "We buy printed circuit boards from old phones." }
              ].map((service, idx) => (
                <li key={idx} className={`group cursor-pointer ${idx !== 0 ? 'border-t border-white/20 pt-6' : ''}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-serif italic">{service.title}</span>
                    <span className="text-sm italic transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                  <p className="text-sm opacity-80">{service.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Image Replace */}
          <div className="flex-grow bg-[#1A1A1A] p-4 relative min-h-[300px]">
             <img src="https://images.unsplash.com/photo-1558611997-3932a31eb183?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Scrap metal and recycling yard" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-black mb-16">Word on the street</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[#1A1A1A]">
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
              <div key={i} className="flex flex-col">
                <div className="font-serif text-5xl text-[#05812A] mb-4">"</div>
                <p className="text-base text-[#4A4A4A] leading-relaxed mb-8 flex-grow">
                  {testimonial.text}
                </p>
                <div className="pt-4 border-t border-[#1A1A1A]/10">
                  <h4 className="font-serif italic font-bold mb-1">{testimonial.author}</h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
