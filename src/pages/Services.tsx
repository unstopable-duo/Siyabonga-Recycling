import { ArrowDown } from 'lucide-react';

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
    <div className="min-h-screen bg-[#FAFAF9] text-[#1A1A1A] font-sans pb-24">
      
      {/* Services Header */}
      <div className="border-b border-[#1A1A1A]/10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-24 pb-16 px-8 md:px-16 gap-12">
          <h1 className="font-serif text-[50px] md:text-[70px] leading-[0.9] tracking-tighter max-w-3xl">
            Our <span className="text-[#05812A] italic">Services</span>.
          </h1>
          <div className="text-sm text-[#4A4A4A] max-w-xs font-semibold leading-relaxed">
            Join us in freeing the community from pollution, while putting cash in your pocket.
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#1A1A1A]/10 group">
            
            {/* Number & Title */}
            <div className="lg:col-span-5 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10 flex flex-col justify-between">
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
              <div className="hidden lg:flex w-12 h-12 border border-[#1A1A1A]/20 items-center justify-center rounded-full mt-auto group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300">
                <ArrowDown className="w-5 h-5 transform -rotate-45" />
              </div>
            </div>

            {/* Content & Image */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row overflow-hidden min-h-[350px]">
              <div className="sm:w-1/2 p-8 md:p-16 flex flex-col justify-center border-b sm:border-b-0 sm:border-r border-[#1A1A1A]/10 bg-white">
                <p className="text-sm leading-relaxed text-[#4A4A4A] mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
                      <span className="text-[#05812A] mr-3">——</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-1/2 relative bg-[#1A1A1A] min-h-[250px] sm:min-h-full">
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" 
                 />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-16 text-center">
         <h2 className="font-serif text-4xl md:text-5xl mb-8">Got scrap? Come get paid.</h2>
         <a href="/contact" className="inline-block bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.2em] px-8 py-4 font-bold hover:bg-[#05812A] transition-colors">
            Drop Off Your Materials
         </a>
      </div>

    </div>
  );
}
