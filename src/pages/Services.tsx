import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

export function Services() {
  const services = [
    {
      id: "01",
      title: "Recycling for Cash",
      subtitle: "Drop off & get paid",
      description: "We are a multi-purpose recycling center that swaps basic recycling materials for cash. Bring in your paper, cardboard, plastics, and scrap metal. We weigh your materials on site and immediately pay you for what you've collected. It's a simple, straightforward way to make money while keeping the area clean.",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Immediate Cash Payouts", "Basic Recyclables Accepted", "Fair Weighing"]
    },
    {
      id: "02",
      title: "E-Waste & Bottles",
      subtitle: "Phones & Glass",
      description: "In an attempt to expand our operations, we now take in intact bottles and printed circuit boards of phones—all for an exchange of cash, of course. Don't throw away old electronics or glass bottles; bring them to us and earn something extra while helping reduce pollution.",
      image: "https://images.unsplash.com/photo-1595168060851-9dc3b4f620bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Printed Circuit Boards", "Intact Glass Bottles", "Fast Assessment"]
    },
    {
      id: "03",
      title: "Sorting & Collecting",
      subtitle: "Community Cleanup",
      description: "Aside from basic drop-offs, we provide various other services such as collecting, sorting, and reusing your recyclables. Getting rid of scrap helps free not just yourself but also the community from the ever-constant problem of pollution.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Local Collection", "Material Sorting", "Community Focused"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#f8f8f8] font-sans pb-24">
      
      {/* Services Header */}
      <div className="border-b border-[#1A1A1A]/10 dark:border-white/10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end pt-24 pb-16 px-8 md:px-16 gap-12"
        >
          <div>
            <div className="inline-block bg-[#e6fced] text-[#034b18] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-bold mb-6 rounded-sm w-max">
              What We Do
            </div>
            <h1 className="font-serif text-[50px] md:text-[70px] leading-[0.9] tracking-tighter max-w-3xl">
              Our <span className="text-[#05812A] italic">Services</span>.
            </h1>
          </div>
          <div className="text-sm text-[#4A4A4A] dark:text-[#a0a0a0] max-w-xs font-semibold leading-relaxed">
            Join us in freeing the community from pollution, while putting cash in your pocket.
          </div>
        </motion.div>
      </div>
      
      {/* Services List */}
      <div className="max-w-7xl mx-auto border-b border-[#1A1A1A]/10 dark:border-white/10">
        {services.map((service, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={service.id} 
            className="grid grid-cols-1 lg:grid-cols-12 group border-t border-[#1A1A1A]/10 dark:border-white/10 first:border-none"
          >
            
            {/* Number & Title */}
            <div className="lg:col-span-5 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10 dark:border-white/10 flex flex-col justify-between bg-white dark:bg-[#1c1c1c] group-hover:bg-[#FAFAF9] dark:bg-[#121212] transition-colors duration-500">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40 mb-4 block">
                  Operation {service.id}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl italic mb-4">
                  {service.title}
                </h2>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#05812A]">
                  {service.subtitle}
                </h3>
              </div>
              <div className="hidden lg:flex w-12 h-12 border border-[#1A1A1A]/20 dark:border-white/20 items-center justify-center rounded-full mt-auto group-hover:bg-[#05812A] group-hover:border-[#05812A] group-hover:text-white transition-all duration-300">
                <ArrowDown className="w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>

            {/* Content & Image */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row overflow-hidden min-h-[350px]">
              <div className="sm:w-1/2 p-8 md:p-16 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-[#1A1A1A]/10 dark:border-white/10 bg-white dark:bg-[#1c1c1c]">
                <p className="text-sm leading-relaxed text-[#4A4A4A] dark:text-[#a0a0a0] mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#f8f8f8]">
                      <span className="text-[#05812A] mr-3">——</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-1/2 relative bg-[#1A1A1A] min-h-[250px] sm:min-h-full overflow-hidden">
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
                 />
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Materials & Process Section */}
      <div className="max-w-7xl mx-auto border-b border-[#1A1A1A]/10 dark:border-white/10 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10 dark:border-white/10 bg-white dark:bg-[#1c1c1c] hover:bg-[#FAFAF9] dark:bg-[#121212] transition-colors duration-500">
          <h2 className="font-serif text-3xl mb-8">Typical Materials & Pricing</h2>
          <p className="text-sm text-[#4A4A4A] dark:text-[#a0a0a0] leading-relaxed mb-8">
            Scrap prices fluctuate based on global markets (like the London Metal Exchange), but we always offer competitive local rates for your goods. Here is what we typically buy:
          </p>
          <div className="space-y-6">
            <div className="group">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-2 mb-3 group-hover:border-[#05812A] transition-colors">High-Value Non-Ferrous Metals</h4>
              <p className="text-xs text-[#4A4A4A] dark:text-[#a0a0a0] leading-relaxed">
                <span className="font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Copper (Bright Wire, Tubing):</span> The most rewarding metal to recycle. Highest payouts.<br/>
                <span className="font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Brass (Taps, Fittings):</span> Excellent value, heavily sought after.<br/>
                <span className="font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Aluminum (Cans, Castings):</span> Consistently good cash returns per kilogram.
              </p>
            </div>
            <div className="group">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-2 mb-3 group-hover:border-[#05812A] transition-colors">Ferrous Metals & Iron</h4>
              <p className="text-xs text-[#4A4A4A] dark:text-[#a0a0a0] leading-relaxed">
                <span className="font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Steel & Iron:</span> Tin cans, old appliances, and heavy melting steel. Needs volume for high payouts, but always accepted.
              </p>
            </div>
            <div className="group">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black border-b border-[#1A1A1A]/10 dark:border-white/10 pb-2 mb-3 group-hover:border-[#05812A] transition-colors">Basic Recyclables & E-Waste</h4>
              <p className="text-xs text-[#4A4A4A] dark:text-[#a0a0a0] leading-relaxed">
                <span className="font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Plastics (PET, HDPE):</span> Milk jugs and bottles.<br/>
                <span className="font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Cardboard & Paper:</span> Excellent way to keep streets clean.<br/>
                <span className="font-bold text-[#1A1A1A] dark:text-[#f8f8f8]">Glass & E-Waste:</span> Intact bottles and circuit boards from phones yield immediate cash.
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-16 bg-[#FAFAF9] dark:bg-[#121212] hover:bg-white dark:bg-[#1c1c1c] transition-colors duration-500">
          <h2 className="font-serif text-3xl mb-8">How It Works</h2>
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 p-4 border border-transparent hover:border-[#1A1A1A]/10 dark:border-white/10 hover:shadow-sm transition-all rounded-sm bg-white dark:bg-[#1c1c1c]"
            >
              <div className="text-[#05812A] font-black font-serif italic text-2xl">01</div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-black mb-1">Bring it In</h4>
                <p className="text-xs text-[#4A4A4A] dark:text-[#a0a0a0] leading-relaxed">Collect your scrap metals, plastics, or boards and transport them to our Germiston or Boksburg yard. *Note: Under the Second-Hand Goods Act, bringing an ID may be required for large metal drop-offs to prevent theft.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4 p-4 border border-transparent hover:border-[#1A1A1A]/10 dark:border-white/10 hover:shadow-sm transition-all rounded-sm bg-white dark:bg-[#1c1c1c]"
            >
              <div className="text-[#05812A] font-black font-serif italic text-2xl">02</div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-black mb-1">We Weigh & Sort</h4>
                <p className="text-xs text-[#4A4A4A] dark:text-[#a0a0a0] leading-relaxed">Our staff will help you offload. We use calibrated industrial scales to ensure accurate weights for every category of scrap you provide.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 p-4 border border-transparent hover:border-[#1A1A1A]/10 dark:border-white/10 hover:shadow-sm transition-all rounded-sm bg-white dark:bg-[#1c1c1c]"
            >
              <div className="text-[#05812A] font-black font-serif italic text-2xl">03</div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-black mb-1">Get Paid Instantly</h4>
                <p className="text-xs text-[#4A4A4A] dark:text-[#a0a0a0] leading-relaxed">We calculate your payout based on the day's top rates and hand you cash directly. Simple, clean, and honest business.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-16 text-center"
      >
         <h2 className="font-serif text-4xl md:text-5xl mb-8">Got scrap? Come get paid.</h2>
         <NavLink to="/contact" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-[#05812A] transition-all rounded-sm shadow-xl shadow-green-900/10 hover:shadow-black/20 hover:-translate-y-0.5 duration-300">
            Drop Off Your Materials
            <ArrowRight className="w-4 h-4" />
         </NavLink>
      </motion.div>

    </div>
  );
}
