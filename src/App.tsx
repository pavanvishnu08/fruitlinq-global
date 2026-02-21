import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
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
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Colors & Theme Configuration ---
// Primary Orange: #FF8C00
// Secondary Green: #2ECC71
// Background: #FFF7E6
// Text Dark: #333333
// Vibrant Purple: #9D4EDD

const COLORS = {
  primary: '#FF8C00',
  secondary: '#2ECC71',
  background: '#FFF7E6',
  text: '#333333',
  purple: '#9D4EDD',
};

const Section = ({ children, className = "", id = "", style = {} }: { children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties }) => (
  <section id={id} className={`w-full ${className}`} style={style}>
    {children}
  </section>
);

const Button = ({ children, variant = 'primary', className = "" }: { children: React.ReactNode; variant?: 'primary' | 'outline' | 'white' | 'secondary'; className?: string }) => {
  const baseStyle = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg";
  const variants = {
    primary: `bg-[#FF8C00] text-white hover:bg-orange-600`,
    secondary: `bg-[#2ECC71] text-white hover:bg-green-600`,
    outline: `border-2 border-white text-white hover:bg-white hover:text-[#FF8C00]`,
    white: `bg-white text-[#FF8C00] hover:bg-gray-100`,
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  ];

  return (
    <div className="font-sans text-[#333333] bg-[#FFF7E6] overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/logo1.png" 
              alt="Fruitlinq Logo" 
              className="h-30 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium tracking-wide hover:text-[#FF8C00] transition-colors ${isScrolled ? 'text-[#333333]' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#FF8C00]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#FF8C00' : 'white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 gap-4 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-[#333333] py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 bg-[#FF8C00] text-white rounded-lg font-bold mt-2">
                Partner With Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- 1. Hero Section --- */}
      <Section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/homeban.jpeg" 
            alt="Fresh Oranges" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#FF8C00]/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            Farm to Cup in <br />
            <span className="text-[#FF8C00]">55 Seconds</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto font-light"
          >
            Premium oranges from South Africa & Egypt. <br className="hidden md:block" />
            Freshly squeezed in front of you.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10 text-lg font-semibold"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF8C00]"></div>
              <span>No water</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF8C00]"></div>
              <span>No sugar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF8C00]"></div>
              <span>No ice</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary">Explore Franchise</Button>
            <Button variant="outline">Request Call Back</Button>
          </motion.div>
        </div>
      </Section>

      {/* --- 1.5. About Information Section --- */}
      <Section className="py-24 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square"
          >
            <img 
              src="home2.jpeg" 
              alt="Fresh Juice Pouring" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <p className="text-white font-medium text-lg">100% Pure Nature</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-[#FF8C00]"></div>
              <span className="text-[#2ECC71] font-bold uppercase tracking-wider text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333]">Redefining Freshness in India</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fruitlinq brings the orchard to the city. We source the finest locally grown oranges and deliver them through our state-of-the-art smart juicers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              No preservatives, no added sugar, and absolutely no waiting. Just pure, vitamin-rich juice squeezed right before your eyes in under a minute. It's not just juice; it's a lifestyle of health and convenience.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#FF8C00]">55s</span>
                <span className="text-gray-500">Juicing Time</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#FF8C00]">100%</span>
                <span className="text-gray-500">Natural</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- 1.6. Corporate Backing Section --- */}
      <Section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#FFF7E6] rounded-3xl p-8 md:p-12 border border-orange-100 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md text-[#2ECC71]">
                <Building2 size={48} />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#333333] mb-4">Corporate Backing</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fruitlinq operates as a wholly owned subsidiary of <span className="font-semibold text-[#FF8C00]">Hortgro Fresh Private Limited</span>, a globally established fresh produce company with operations across multiple countries and a strong track record in international fruit exports.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* --- 2. Business Snapshot Section --- */}
      <Section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">Business Snapshot</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Why partner with Fruitlinq? The numbers speak for themselves.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building2, label: "25+ yrs exp.", sub: "Strong Background", color: "text-[#4FC3F7]", bg: "bg-blue-50" },
              { icon: CheckCircle2, label: "High", sub: "Gross Margins", color: "text-[#2ECC71]", bg: "bg-green-50" },
              { icon: ShoppingBag, label: "Stable", sub: "Supply Cost", color: "text-[#FF8C00]", bg: "bg-orange-50" },
              { icon: Clock, label: "24/7", sub: "Automated Sales", color: "text-[#9D4EDD]", bg: "bg-purple-50" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto ${item.bg} rounded-full flex items-center justify-center mb-4 ${item.color} transition-transform group-hover:scale-110`}>
                  <item.icon size={32} />
                </div>
                <div className="font-bold text-2xl text-[#333333] mb-1">{item.label}</div>
                <div className="text-gray-500 font-medium">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- 3. 5th Gen Smart Juicer Section --- */}
      <Section id="features" className="py-24 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-4">Meet the 5th Gen Smart Juicer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Precision engineering meets nature's bounty. The most advanced automated juicing technology in India.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Machine Image Placeholder */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-[#2ECC71] rounded-full blur-[100px] opacity-20"></div>
              <img 
                src="juicer.jpeg" 
                alt="5th Gen Smart Juicer" 
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[600px]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Droplets, title: "Cold Chain", desc: "Temp controlled environment for maximum freshness.", color: "text-[#4FC3F7]", bg: "bg-blue-50" },
                { icon: Smartphone, title: "UPI Enabled", desc: "Scan & Pay instantly with any UPI app.", color: "text-[#FFE066]", bg: "bg-yellow-50" },
                { icon: Zap, title: "Fully Automatic", desc: "100% Touchless operation for hygiene.", color: "text-[#2ECC71]", bg: "bg-green-50" },
                { icon: Leaf, title: "100% Fresh Juice", desc: "No additives, no preservatives, just fruit.", color: "text-[#FF8C00]", bg: "bg-orange-50" },
                { icon: ShieldCheck, title: "IoT Enabled", desc: "Real-time stats and remote monitoring.", color: "text-[#9D4EDD]", bg: "bg-purple-50" },
                { icon: Clock, title: "55 Second Service", desc: "From order to full cup in under a minute.", color: "text-[#FF6B6B]", bg: "bg-red-50" },
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#333333]">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>


      {/* --- 5. Pure Immunity Section --- */}
      <Section className="py-24 bg-[#FFF7E6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#FF8C00] font-bold uppercase tracking-wider text-sm">Health Benefits</span>
            <h2 className="text-4xl font-bold text-[#333333] mt-2">Pure Immunity in Every Cup</h2>
            <p className="text-gray-600 mt-2 text-lg">More than just a drink, it's your daily dose of health.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Vitamin C Powerhouse", 
                desc: "One cup meets 80% of your daily Vitamin C requirement, boosting immunity instantly.",
                icon: Zap,
                color: "text-[#FF8C00]",
                bg: "bg-orange-50"
              },
              { 
                title: "100% Natural", 
                desc: "Absolutely no added sugar, water, preservatives, or artificial colors. Just 3-4 whole oranges.",
                icon: Leaf,
                color: "text-[#2ECC71]",
                bg: "bg-green-50"
              },
              { 
                title: "Heart Healthy", 
                desc: "Rich in antioxidants and hesperidin, known to improve heart health and lower blood pressure.",
                icon: CheckCircle2, // Using CheckCircle2 as a generic health icon since Heart isn't imported
                color: "text-[#FF6B6B]",
                bg: "bg-red-50"
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 mx-auto ${item.bg} rounded-full flex items-center justify-center mb-6 ${item.color}`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#333333]">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- 5.5. The Complete Franchise Package --- */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#333333]">The Complete Franchise Package</h2>
            <p className="text-gray-600 mt-2 text-lg">We provide everything you need to succeed.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Machine & Setup", 
                items: ["5th-Gen Smart Juicer", "Professional Installation", "1 Year Warranty", "Complete Branding"],
                color: "text-[#FF8C00]",
                border: "border-[#FF8C00]",
                icon: Wrench
              },
              { 
                title: "Operations", 
                items: ["Monthly Fruit Supply", "QC Protocols", "Predictive Maintenance", "Spare Parts Support"],
                color: "text-[#2ECC71]",
                border: "border-[#2ECC71]",
                icon: Truck
              },
              { 
                title: "Business Support", 
                items: ["Location Assistance", "Staff Training", "Marketing Assets", "Dedicated Account Manager"],
                color: "text-[#9D4EDD]",
                border: "border-[#9D4EDD]",
                icon: Users
              }
            ].map((pkg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gray-50 ${pkg.color}`}>
                    <pkg.icon size={28} />
                  </div>
                  <h3 className={`font-bold text-xl ${pkg.color} border-b-2 ${pkg.border} pb-1`}>{pkg.title}</h3>
                </div>
                <ul className="space-y-4">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                      <span className="text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>



      {/* --- 7. Franchise Benefits Section --- */}
      <Section id="franchise" className="py-24 bg-[#F5F7F2]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#333333] mb-6">What's In It for the Franchise</h2>
            <p className="text-gray-600 text-lg mb-10">Discover the benefits of partnering with Fruitlinq.</p>
            
            <div className="space-y-8">
              {[
                { title: "Turnkey Solution", desc: "Fruitlinq provides, installs, and operationalizes the vending machine with automated refills", icon: Wrench, color: "text-[#FF8C00]", bg: "bg-orange-50" },
                { title: "Zero Staff Required", desc: "No barista training, no maintenance burden, automated cleaning performed", icon: Users, color: "text-[#2ECC71]", bg: "bg-green-50" },
                { title: "Real-Time Insights", desc: "Live stats and reports with funds deposited seamlessly into your account", icon: Smartphone, color: "text-[#9D4EDD]", bg: "bg-purple-50" },
                { title: "Maximum Uptime", desc: "99.2% uptime with remote monitoring, dedicated support, and advanced telemetry", icon: ShieldCheck, color: "text-orange-600", bg: "bg-red-50" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center shrink-0`}>
                    <item.icon className={item.color} size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#333333]">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
              alt="Franchise Benefits" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* --- 8. Contact Section --- */}
      <Section id="contact" className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-[#333333] mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-10 text-lg">Have questions about franchising, partnerships, or just want to say hi?</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                    <Building2 className="text-[#2ECC71]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#333333]">Head Office</h3>
                    <p className="text-gray-600 mt-1">FRUITLINQ AGRO PRIVATE LIMITED</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-[#FF8C00]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#333333]">Phone / WhatsApp</h3>
                    <p className="text-gray-600 mt-1 text-lg font-medium">+91 93478 38756</p>
                    <p className="text-sm text-gray-400">Mon-Sat, 9am - 7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="text-[#4FC3F7]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#333333]">Email</h3>
                    <p className="text-gray-600 mt-1">hello@fruitlinq.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-lg mb-2 text-[#333333]">Quick Support</h3>
                <p className="text-gray-600 mb-4">Need immediate assistance with a vending machine?</p>
                <Button variant="secondary" className="flex items-center gap-2 w-full justify-center">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-[#FFF7E6] p-8 md:p-10 rounded-3xl border border-orange-100">
              <h3 className="font-bold text-2xl mb-6 text-[#333333]">Send us a Message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="10-digit mobile number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="Where do you want to start?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I am interested in</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#FF8C00] focus:ring-2 focus:ring-orange-100 outline-none transition-all">
                    <option>Franchise Opportunity</option>
                    <option>Location Partnership</option>
                    <option>Customer Support</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-gradient-to-r from-[#FF8C00] to-orange-600 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg transform hover:-translate-y-1">
                  Request Call Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* --- 9. Footer --- */}
      <footer className="bg-[#333333] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/logo1.png" 
              alt="Fruitlinq Logo" 
              className="h-[600px] w-auto mb-14"
            />
            <p className="text-gray-400 max-w-sm">
              India's first farm-controlled orange juice vending franchise. Freshly squeezed in 55 seconds.
            </p>
          </div>
          
          

          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF8C00] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Fruitlinq Agro Private Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
