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
      <Section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/Gemini_Generated_Image_4z37hg4z37hg4z37.png" alt="Fresh Oranges" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#FF8C00]/40" />
          <FloatingShape className="w-20 h-20 sm:w-32 sm:h-32 bg-[#FF8C00] top-1/4 left-1/4" delay={0} />
          <FloatingShape className="w-12 h-12 sm:w-20 sm:h-20 bg-[#2ECC71] bottom-1/3 right-1/4" delay={1} />
          <FloatingShape className="w-10 h-10 sm:w-16 sm:h-16 bg-white top-1/2 right-1/3" delay={2} />
        </div>
        <motion.div style={{ y: heroY }} className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-0">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white">
            Farm to Cup in<br />
            <span className="text-[#FF8C00]">55 Seconds</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Premium export-grade oranges sourced directly from South Africa and Egypt, with full control across our supply chain.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 px-2">
            {[{ icon: Droplets, label: "No Ice" }, { icon: ShieldCheck, label: "No Water" }, { icon: Zap, label: "No Sugar" }].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                <item.icon size={14} className="text-white sm:size-16" />
                <span className="font-medium text-white text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <a href="#about" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#2ECC71] text-white font-semibold rounded-full hover:bg-[#27ae60] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
              Explore More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </Section>


      {/* About Section */}
      <Section id="about" className="py-16 sm:py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] max-h-[400px] sm:max-h-[500px] shadow-2xl">
                <img src="/Premium Orange Box.png" alt="Premium Orange Box" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-xl shadow-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="text-center"><div className="text-xl sm:text-2xl md:text-4xl font-bold text-[#FF8C00]">55s</div><div className="text-xs sm:text-sm text-gray-500">Juicing Time</div></div>
                    <div className="text-center"><div className="text-xl sm:text-2xl md:text-4xl font-bold text-[#2ECC71]">100%</div><div className="text-xs sm:text-sm text-gray-500">Natural</div></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 sm:w-12 h-1 bg-[#FF8C00]" />
                <span className="text-[#2ECC71] font-bold uppercase tracking-wider text-xs sm:text-sm">Our Story</span>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900">Premier Fresh Grocery & <span className="text-[#FF8C00]">Food Technology</span> Company</h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">Fruitful Global is a leading exporter and dedicated supplier of premium-quality fresh fruits, committed to excellence at every stage of the supply chain. With over two decades of industry expertise, we combine deep market knowledge, strategic sourcing, and a strong global network to ensure consistent, year-round availability of superior produce from renowned growing regions worldwide.</p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Our service is distinctly customer-focused, defined by 24/7 responsiveness, reliability, and tailored solutions to meet dynamic market demands. In addition to our export operations, we offer state-of-the-art freshly squeezed juice vending machines, delivering innovation, convenience, and farm-fresh quality directly to consumers.</p>
            </motion.div>
          </div>
        </div>
      </Section>


      {/* Smart Juicer */}
      <Section className="py-16 sm:py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF8C00]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Meet the <span className="text-[#FF8C00]">5th Gen</span> Smart Juicer</h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Precision engineering meets nature's bounty. The most advanced automated juicing technology in SOUTH AFRICA.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/10 to-[#2ECC71]/10 rounded-3xl blur-3xl" />
              <div className="relative"><img src="Fruitful1.png" alt="5th Gen Smart Juicer" className="w-full rounded-2xl sm:rounded-3xl shadow-2xl" /></div>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[{ icon: Droplets, title: "Cold Chain", desc: "Temp controlled", color: "bg-blue-50" }, { icon: Smartphone, title: "Payments", desc: "QR, Apple pay, Card payments", color: "bg-purple-50" }, { icon: Zap, title: "Automatic", desc: "Touchless", color: "bg-green-50" }, { icon: Leaf, title: "100% Fresh", desc: "No additives", color: "bg-orange-50" }, { icon: ShieldCheck, title: "IoT Enabled", desc: "Remote monitor", color: "bg-cyan-50" }, { icon: Clock, title: "55 Seconds", desc: "Fast service", color: "bg-red-50" }].map((feature, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -5 }} className={`${feature.color} border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-all`}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center mb-2 sm:mb-3"><feature.icon size={16} className="text-gray-700 sm:size-20" /></div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>


      {/* Pure Immunity */}
      <Section className="py-16 sm:py-20 md:py-32 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16 px-2">
            <span className="text-[#FF8C00] font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-4 block">Health Benefits</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">Pure Immunity in Every Cup</h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg">More than just a drink, it's your daily dose of health.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[{ title: "Vitamin C Powerhouse", desc: "One cup meets 80% of your daily Vitamin C requirement.", detail: "Boosts immune system, promotes collagen production for healthy skin, and enhances iron absorption for better energy levels.", icon: Zap, color: "bg-orange-50" }, { title: "100% Natural", desc: "Absolutely no added sugar, water, or preservatives.", detail: "Pure orange juice squeezed fresh from export-grade oranges. No artificial additives, colors, or flavors—just nature's goodness.", icon: Leaf, color: "bg-green-50" }, { title: "Heart Healthy", desc: "Rich in antioxidants known to improve heart health.", detail: "Contains potassium to regulate blood pressure and flavonoids that reduce inflammation and support cardiovascular wellness.", icon: ShieldCheck, color: "bg-red-50" }].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} whileHover={{ y: -10 }} className={`${item.color} border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all`}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center`}><item.icon size={20} className="text-gray-700 sm:size-28" /></div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-gray-700 font-medium text-xs sm:text-sm mb-1 sm:mb-2">{item.desc}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>


      {/* Franchise Benefits */}
      <Section className="py-16 sm:py-20 md:py-32 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-[#FF8C00]/10 text-[#FF8C00] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 sm:mb-4">Own the Future</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Start with one machine and scale to 50+</h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">A high-margin, automated business model designed for passive income.</p>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">What's In It for the Franchise</h3>
            <div className="space-y-3 sm:space-y-4">
              {[{ title: "Turnkey Solution", desc: "We provide, install, and operationalize", icon: Wrench, color: "text-orange-500" }, { title: "Zero Staff Required", desc: "No maintenance burden, automated cleaning", icon: Users, color: "text-green-500" }, { title: "Real-Time Insights", desc: "Live stats with funds deposited seamlessly", icon: Smartphone, color: "text-purple-500" }, { title: "Maximum Uptime", desc: "99.2% uptime with remote monitoring", icon: ShieldCheck, color: "text-red-500" }].map((item, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-sm">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-50 flex items-center justify-center shrink-0`}><item.icon size={20} className={`${item.color} sm:size-24`} /></div>
                  <div><h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.title}</h4><p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img src="/Business Meeting v2.png" alt="Franchise Benefits" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>
      </Section>


      {/* Contact */}
      <Section className="py-16 sm:py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">Have questions about franchising or partnerships?</p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"><Building2 size={20} className="text-[#FF8C00] sm:size-24" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Head Office</h3>
                    <p className="text-gray-900 font-semibold text-xs sm:text-sm">FRUITFUL GLOBAL (PTY) LTD</p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">2nd Floor, New Link Centre, 1 New Street, Paarl, Western Cape 7646. South Africa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"><Phone size={20} className="text-[#2ECC71] sm:size-24" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Phone / WhatsApp</h3>
                    <p className="text-gray-500 font-medium text-xs sm:text-sm">+27 71 883 3045, +27 72 902 6632</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"><Mail size={20} className="text-blue-500 sm:size-24" /></div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">Email</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">sales@fruitfulglobal.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF7E6] border border-orange-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h3>
              <form className="space-y-3 sm:space-y-4" onSubmit={(e) => { e.preventDefault(); handleWhatsAppSubmit(); }}>
                <div><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm sm:text-base" /></div>
                <div><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your Mobile Number" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm sm:text-base" /></div>
                <div><input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Where do you want to start?" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm sm:text-base" /></div>
                <div><select name="interest" value={formData.interest} onChange={handleInputChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-gray-200 text-gray-900 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm sm:text-base"><option className="text-black">Franchise Opportunity</option><option className="text-black">Location Partnership</option><option className="text-black">Customer Support</option></select></div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#FF8C00] to-[#FF6B00] text-white font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg text-sm sm:text-base">Request Call Back</button>
              </form>
            </div>

          </div>
        </div>
      </Section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="md:col-span-2">
              <img src="/logo1.png" alt="Fruitlinq Logo" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto mb-4 sm:mb-6" />
              <p className="text-gray-400 text-xs sm:text-sm max-w-sm">South africa first farm-controlled orange juice vending franchise. Freshly squeezed in 55 seconds.</p>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Connect</h4>
              <div className="flex gap-2 sm:gap-3">
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"><Instagram size={18} className="sm:size-20" /></a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"><Facebook size={18} className="sm:size-20" /></a>
                <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF8C00] transition-colors"><Linkedin size={18} className="sm:size-20" /></a>
              </div>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">© 2026 Fruitlinq Agro Private Limited. All rights reserved. developed by <a href="https://exelusinfotech.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF8C00] hover:underline">Exelus Infotech Private Limited</a></div>
        </div>
      </footer>

    </div>
  );
}
