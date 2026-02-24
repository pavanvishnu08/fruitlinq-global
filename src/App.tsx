import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Droplets, 
  Zap, 
  ShieldCheck, 
  Building2, 
  ShoppingBag, 
  Clock, 
  Leaf, 
  Smartphone, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  Wrench,
  Truck,
  Users,
  Play
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const Section = ({ children, className = "", id = "", style = {} }: { children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties }) => (
  <section id={id} className={`w-full ${className}`} style={style}>
    {children}
  </section>
);

const FloatingShape = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute rounded-full opacity-20 ${className}`}
  />
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    interest: 'Franchise Opportunity'
  });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = () => {
    const message = `Hello Fruitful Global,\n\nI am interested in: ${formData.interest}\n\nMy Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\n\nPlease contact me.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/27718833045?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };


  return (
    <div className="font-sans text-[#1a1a1a] bg-white overflow-x-hidden">
      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f5f5f5; }
        ::-webkit-scrollbar-thumb { background: #FF8C00; border-radius: 4px; }
        html { scroll-behavior: smooth; }
      `}</style>

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8C00] to-[#2ECC71] z-[100]" style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} />

      {/* Navigation - Simplified without nav links and CTA */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
              <img src="/logo1.png" alt="Fruitlinq Logo" className="h-20 sm:h-24 md:h-32 w-auto" />

            </motion.div>
            <button className="md:hidden text-gray-700 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-100">
              <div className="px-4 py-6">
                <p className="text-lg font-medium text-gray-700 py-2">Menu</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
<img src="/Cup Splash Background.png" alt="Fresh Oranges" className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#FF8C00]/30" />
          <FloatingShape className="w-32 h-32 bg-[#FF8C00] top-1/4 left-1/4" delay={0} />
          <FloatingShape className="w-20 h-20 bg-[#2ECC71] bottom-1/3 right-1/4" delay={1} />
          <FloatingShape className="w-16 h-16 bg-white top-1/2 right-1/3" delay={2} />
        </div>
        <motion.div style={{ y: heroY }} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-white">
           After Farm to Cup in<br />
            <span className="text-[#FF8C00]">55 Seconds</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium export-grade oranges sourced directly from South Africa and Egypt, with full control across our supply chain.
As a South African company, we eliminate wholesale dependency to deliver uncompromising quality that meets the highest international standards.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {[{ icon: Droplets, label: "No Ice" }, { icon: ShieldCheck, label: "No Water" }, { icon: Zap, label: "No Sugar" }].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                <item.icon size={16} className="text-white" />
                <span className="font-medium text-white text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <a href="#about" className="inline-flex items-center gap-2 px-8 py-4 bg-[#2ECC71] text-white font-semibold rounded-full hover:bg-[#27ae60] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Explore More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-20 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[500px] shadow-2xl">
                <img src="home2.jpeg" alt="Fresh Juice Pouring" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center"><div className="text-2xl sm:text-4xl font-bold text-[#FF8C00]">55s</div><div className="text-xs sm:text-sm text-gray-500">Juicing Time</div></div>
                    <div className="text-center"><div className="text-2xl sm:text-4xl font-bold text-[#2ECC71]">100%</div><div className="text-xs sm:text-sm text-gray-500">Natural</div></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-[#FF8C00]" />
                <span className="text-[#2ECC71] font-bold uppercase tracking-widest text-sm">Our Story</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">Premier Fresh Grocery & <span className="text-[#FF8C00]">Food Technology</span> Company</h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">Fruitful Global is a leading exporter and dedicated supplier of premium-quality fresh fruits, committed to excellence at every stage of the supply chain. With over two decades of industry expertise, we combine deep market knowledge, strategic sourcing, and a strong global network to ensure consistent, year-round availability of superior produce from renowned growing regions worldwide.</p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Our service is distinctly customer-focused, defined by 24/7 responsiveness, reliability, and tailored solutions to meet dynamic market demands. In addition to our export operations, we offer state-of-the-art freshly squeezed juice vending machines, delivering innovation, convenience, and farm-fresh quality directly to consumers.</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Fresh Fruits E-Commerce */}

      <Section className="py-20 sm:py-32 bg-[#FFF7E6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#2ECC71] font-bold uppercase tracking-widest text-sm mb-4 block">Fresh Juice Through vending machine</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Premium Quality Fruits <span className="text-[#FF8C00]">Delivered Fresh</span></h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">Buy fresh, high-quality juice online through the vending machine. We source fruits directly from trusted farmers and maintain freshness through strict quality checks, professional packaging, and efficient juice.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img src="/South African Orange Farm.png" alt="South African Orange Farm" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF8C00]" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              {[{ icon: Leaf, title: "Direct Farm Sourcing", desc: "We establish direct partnerships with trusted growers in South Africa and Egypt, ensuring full traceability, consistent supply, and uncompromising quality from farm to market.", detail: "By eliminating middlemen, we ensure farmers get fair prices while customers receive the freshest produce within 24-48 hours of harvest.", color: "bg-green-50" }, { icon: ShoppingBag, title: "Professional Grade Packaging", desc: "Expert packaging with temperature-controlled materials ensures perfect condition.", detail: "Each fruit is individually inspected, cleaned, and packed in eco-friendly materials that maintain optimal freshness during transit.", color: "bg-orange-50" }, { icon: Truck, title: "Fast & Efficient", desc: "straight from farm to your hand.", detail: "Our cold chain logistics network ensures fruits arrive at peak ripeness, retaining maximum nutrition and flavor.", color: "bg-blue-50" }].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} className={`flex gap-4 p-5 ${item.color} rounded-2xl shadow-sm`}>
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0"><item.icon size={28} className="text-gray-700" /></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 text-sm font-medium mb-1">{item.desc}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>


      {/* Smart Juicer */}
      <Section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8C00]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Meet the <span className="text-[#FF8C00]">5th Gen</span> Smart Juicer</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Precision engineering meets nature's bounty. The most advanced automated juicing technology in SOUTH AFRICA.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/10 to-[#2ECC71]/10 rounded-3xl blur-3xl" />
              <div className="relative"><img src="juicer.jpeg" alt="5th Gen Smart Juicer" className="w-full rounded-3xl shadow-2xl" /></div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[{ icon: Droplets, title: "Cold Chain", desc: "Temp controlled", color: "bg-blue-50" }, { icon: Smartphone, title: "Payments", desc: "QR, Apple pay, Card payments", color: "bg-purple-50" }, { icon: Zap, title: "Automatic", desc: "Touchless", color: "bg-green-50" }, { icon: Leaf, title: "100% Fresh", desc: "No additives", color: "bg-orange-50" }, { icon: ShieldCheck, title: "IoT Enabled", desc: "Remote monitor", color: "bg-cyan-50" }, { icon: Clock, title: "55 Seconds", desc: "Fast service", color: "bg-red-50" }].map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }} className={`${feature.color} border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3"><feature.icon size={20} className="text-gray-700" /></div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pure Immunity */}
      <Section className="py-20 sm:py-32 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#FF8C00] font-bold uppercase tracking-widest text-sm mb-4 block">Health Benefits</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Pure Immunity in Every Cup</h2>
            <p className="text-gray-500 text-lg">More than just a drink, it's your daily dose of health.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[{ title: "Vitamin C Powerhouse", desc: "One cup meets 80% of your daily Vitamin C requirement.", detail: "Boosts immune system, promotes collagen production for healthy skin, and enhances iron absorption for better energy levels.", icon: Zap, color: "bg-orange-50" }, { title: "100% Natural", desc: "Absolutely no added sugar, water, or preservatives.", detail: "Pure orange juice squeezed fresh from export-grade oranges. No artificial additives, colors, or flavors—just nature's goodness.", icon: Leaf, color: "bg-green-50" }, { title: "Heart Healthy", desc: "Rich in antioxidants known to improve heart health.", detail: "Contains potassium to regulate blood pressure and flavonoids that reduce inflammation and support cardiovascular wellness.", icon: ShieldCheck, color: "bg-red-50" }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} whileHover={{ y: -10 }} className={`${item.color} border border-gray-100 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-all`}>
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-white shadow-sm flex items-center justify-center`}><item.icon size={28} className="text-gray-700" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium text-sm mb-2">{item.desc}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </Section>

      {/* Business Snapshot */}
      <Section className="py-20 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Why Partner with <span className="text-[#FF8C00]">Fruitful?</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The numbers speak for themselves.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-2 gap-6">
              {[{ icon: Building2, label: "25+ yrs", sub: "Strong Background", desc: "Decades of expertise in global fruit supply chains and export operations", color: "bg-blue-50", iconColor: "text-blue-500" }, { icon: CheckCircle2, label: "High", sub: "Gross Margins", desc: "Premium pricing with direct farm sourcing eliminates middlemen costs", color: "bg-green-50", iconColor: "text-green-500" }, { icon: ShoppingBag, label: "Stable", sub: "Supply Cost", desc: "Orchards in South Africa & Egypt ensure consistent fruit pricing year-round", color: "bg-orange-50", iconColor: "text-orange-500" }, { icon: Clock, label: "24/7", sub: "Automated Sales", desc: "Smart vending machines generate revenue round-the-clock without staff", color: "bg-purple-50", iconColor: "text-purple-500" }].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.05, shadow: "xl" }} className={`${item.color} border border-gray-100 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-all`}>
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-white shadow-sm flex items-center justify-center ${item.iconColor}`}><item.icon size={28} /></div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{item.label}</div>
                  <div className="text-gray-700 font-semibold text-sm mb-2">{item.sub}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl">
                <img src="/Campus Scene v3.png" alt="Fruitlinq Business" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Franchise Package */}

      <Section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[#FF8C00] font-bold uppercase tracking-widest text-sm mb-4 block">Everything Included</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">The Complete Franchise Package</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We provide everything you need to succeed.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[{ title: "Machine & Setup", icon: Wrench, items: ["5th-Gen Smart Juicer", "Professional Installation", "1 Year Warranty", "Complete Branding"], color: "from-orange-50 to-orange-100" }, { title: "Operations", icon: Truck, items: ["Monthly Fruit Supply", "QC Protocols", "Predictive Maintenance", "Spare Parts Support"], color: "from-green-50 to-green-100" }, { title: "Business Support", icon: Users, items: ["Location Assistance", "Staff Training", "Marketing Assets", "Account Manager"], color: "from-purple-50 to-purple-100" }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8 }} className={`bg-gradient-to-br ${item.color} border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all`}>
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4`}><item.icon size={28} className="text-gray-700" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 size={16} className="text-[#2ECC71]" /> {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Franchise Benefits */}
      <Section className="py-20 sm:py-32 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="mb-6">
              <span className="inline-block bg-[#FF8C00]/10 text-[#FF8C00] px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-4">Own the Future</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Start with one machine and scale to 50+</h2>
              <p className="text-gray-600 text-lg">A high-margin, automated business model designed for passive income.</p>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">What's In It for the Franchise</h3>
            <div className="space-y-4">
              {[{ title: "Turnkey Solution", desc: "We provide, install, and operationalize", icon: Wrench, color: "text-orange-500" }, { title: "Zero Staff Required", desc: "No maintenance burden, automated cleaning", icon: Users, color: "text-green-500" }, { title: "Real-Time Insights", desc: "Live stats with funds deposited seamlessly", icon: Smartphone, color: "text-purple-500" }, { title: "Maximum Uptime", desc: "99.2% uptime with remote monitoring", icon: ShieldCheck, color: "text-red-500" }].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className={`w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0`}><item.icon size={24} className={item.color} /></div>
                  <div><h4 className="font-bold text-gray-900">{item.title}</h4><p className="text-gray-500 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img src="/Business Meeting v2.png" alt="Franchise Benefits" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>
      </Section>

      {/* Contact */}
      <Section className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-500 text-lg mb-8">Have questions about franchising or partnerships?</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0"><Building2 size={24} className="text-[#FF8C00]" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-900 font-semibold">FRUITFUL GLOBAL (PTY) LTD</p>
                    <p className="text-gray-500 text-sm mt-1">2nd Floor, New Link Centre, 1 New Street, Paarl, Western Cape 7646. South Africa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0"><Phone size={24} className="text-[#2ECC71]" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone / WhatsApp</h3>
                    <p className="text-gray-500 font-medium">+27 71 883 3045, +27 72 902 6632</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0"><Mail size={24} className="text-blue-500" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-500">sales@fruitfulglobal.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF7E6] border border-orange-100 rounded-3xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleWhatsAppSubmit(); }}>
                <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all" /></div>
                <div><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your Mobile Number" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all" /></div>
                <div><input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Where do you want to start?" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all" /></div>
                <div><select name="interest" value={formData.interest} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all"><option className="text-black">Franchise Opportunity</option><option className="text-black">Location Partnership</option><option className="text-black">Customer Support</option></select></div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#FF8C00] to-[#FF6B00] text-white font-bold py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">Request Call Back</button>
              </form>
            </div>

          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <img src="/logo1.png" alt="Fruitlinq Logo" className="h-20 sm:h-24 md:h-28 w-auto mb-6" />

              <p className="text-gray-400 max-w-sm">South africa first farm-controlled orange juice vending franchise. Freshly squeezed in 55 seconds.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">© 2026 Fruitlinq Agro Private Limited. All rights reserved. developed by <a href="https://exelusinfotech.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF8C00] hover:underline">Exelus Infotech Private Limited</a></div>

        </div>
      </footer>
    </div>
  );
}
