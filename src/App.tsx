/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  MessageSquare,
  Share2,
  ExternalLink,
  AtSign,
  Quote,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Zap,
  Server,
  CreditCard,
  BarChart3,
  Monitor,
  Users,
  Code2,
  ShoppingCart,
  Smartphone,
  Search,
  Palette,
  Megaphone,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline px-8 py-4 flex justify-between items-center max-w-full">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-8 h-8 bg-gradient-to-br from-[#FF2D55] to-[#FF9500] rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
        </div>
        <div className="text-xl font-black tracking-tighter text-on-surface uppercase">Zynapse Sys</div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onAction("Redirecting to onboarding...")}
        className="btn-gradient px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-secondary-accent/20"
      >
        Join Us
      </motion.button>
    </nav>
  );
};

const Hero = ({ onAction }: { onAction: (m: string) => void }) => {
  const slides = [
    {
      title: "BRING YOUR BUSINESS TO NEXT LEVEL OF EXCELLENCE",
      subtitle: "Driven by the passion to assist our clients build a robust IT fortress through innovations and agility",
      image: "https://picsum.photos/seed/excellence/1920/1080?blur=2",
      button: "Know More"
    },
    {
      title: "WE PROMOTE YOUR DREAM",
      subtitle: "Zynapse Sys will be a support and ever worthy partner for you to manage",
      image: "https://picsum.photos/seed/dream/1920/1080?blur=2",
      button: "Know More"
    },
    {
      title: "CLIENT SPECIFIC SOFTWARE MOULDING",
      subtitle: "A software should sync with the soul of a company and Zynapse Sys makes sure that it does",
      image: "https://picsum.photos/seed/software/1920/1080?blur=2",
      button: "Know More"
    },
    {
      title: "TRANSFORM YOUR BUSINESS WITH THE POWER OF WEB",
      subtitle: "We help you to attain an unbelievable transformation in your business",
      image: "https://picsum.photos/seed/web/1920/1080?blur=2",
      button: "Know More"
    },
    {
      title: "Transform your Business with world-class Software Development",
      subtitle: "Building data-driven, technology-powered digital solutions to create exceptional customer experiences, streamlined workflow and intelligent strategies that catalyse growth.",
      image: "https://picsum.photos/seed/team/1920/1080?blur=2",
      isComplex: true,
      features: [
        { icon: <Monitor className="w-10 h-10" />, title: "Digital Transformation", desc: "Smart, scalable, future-ready solutions for your business." },
        { icon: <Users className="w-10 h-10" />, title: "Software Development", desc: "Custom software tailored to your business needs." },
        { icon: <Cpu className="w-10 h-10" />, title: "Emerging Technologies", desc: "Harness AI, IoT, and blockchain for a future-ready business." }
      ]
    },
    {
      title: "INNOVATING FOR A DIGITAL FUTURE",
      subtitle: "Our deep multi-vertical expertise empowers your business to stay ahead in the rapidly evolving technological landscape.",
      image: "https://picsum.photos/seed/future/1920/1080?blur=2",
      button: "Start Free Trial"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with cross-fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={slide.image} 
            className="w-full h-full object-cover" 
            alt="background" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl w-full px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="max-w-4xl">
              <motion.h1 
                className={`font-black tracking-tight leading-[1.1] text-white uppercase ${slide.isComplex ? 'text-4xl md:text-6xl' : 'text-5xl md:text-8xl'}`}
              >
                {slide.title.split(' ').map((w, i) => (
                  <span key={i} className={w.toLowerCase() === 'software' || w.toLowerCase() === 'web' || w.toLowerCase() === 'excellence' ? 'text-primary-accent' : ''}>
                    {w}{" "}
                  </span>
                ))}
              </motion.h1>
              
              <motion.p className="text-lg md:text-xl text-white/80 font-medium max-w-2xl mt-6 leading-relaxed">
                {slide.subtitle}
              </motion.p>
            </div>

            {!slide.isComplex ? (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onAction("Redirecting to information page...")}
                className="bg-[#FF0000] hover:bg-[#CC0000] text-white px-10 py-4 font-bold text-lg transition-colors uppercase tracking-wider"
              >
                {slide.button}
              </motion.button>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
                {slide.features?.map((f, i) => (
                  <div key={i} className="flex flex-col gap-4 text-white">
                    <div className="flex items-center gap-4">
                      <div className="text-white/80">{f.icon}</div>
                      <h4 className="text-xl font-bold uppercase tracking-tight">{f.title}</h4>
                    </div>
                    <p className="text-sm text-white/60 font-medium">{f.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>


      {/* Navigation Arrows - Edge Placements */}
      <div className="absolute inset-y-0 left-0 items-center hidden md:flex z-30 px-8">
        <motion.button 
          whileHover={{ x: 5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="group flex flex-col items-center gap-6 text-white/30 hover:text-white transition-all"
        >
          <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all bg-white/[0.03] backdrop-blur-sm">
            <ChevronLeft className="w-8 h-8" />
          </div>
        </motion.button>
      </div>

      <div className="absolute inset-y-0 right-0 items-center hidden md:flex z-30 px-8">
        <motion.button 
          whileHover={{ x: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="group flex flex-col items-center gap-6 text-white/30 hover:text-white transition-all"
        >
          <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-all bg-white/[0.03] backdrop-blur-sm">
            <ChevronRight className="w-8 h-8" />
          </div>
        </motion.button>
      </div>

      {/* Floating Contact Bubble */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onAction("Opening contact form...")}
        className="fixed bottom-8 right-8 z-50 bg-[#FF0000] text-white px-8 py-5 rounded-2xl flex items-center gap-3 shadow-[0_20px_50px_rgba(255,0,0,0.3)] cursor-pointer hover:bg-[#CC0000] transition-all brutal-border border-white/20"
      >
        <Mail className="w-6 h-6" />
        <span className="font-black uppercase tracking-[0.2em] text-[12px]">Contact us</span>
      </motion.div>
    </section>
  );
};

const CoreServices = ({ onAction }: { onAction: (m: string) => void }) => {
  const services = [
    {
      id: "01",
      title: "Website Development",
      category: "MOST POPULAR",
      desc: "Fast, mobile-first websites that represent your brand and convert visitors into customers. WordPress, custom HTML & more.",
      features: ["Responsive Mobile Design", "WordPress / Custom Build", "SEO-Optimized Structure", "Fast Loading Speed", "1 Year Free Support"],
      icon: <Globe className="w-10 h-10" />,
      theme: "blue",
      cta: "Get Started"
    },
    {
      id: "02",
      title: "Online Store Development",
      category: "E-COMMERCE",
      desc: "Powerful WooCommerce & Shopify stores with payment integration, product management, and order tracking.",
      features: ["WooCommerce / Shopify", "Razorpay & Paytm Integration", "Product Catalogue Setup", "Inventory Management", "GST Invoice Automation"],
      icon: <ShoppingCart className="w-10 h-10" />,
      theme: "light",
      cta: "Explore"
    },
    {
      id: "03",
      title: "Digital Marketing",
      category: "MARKETING",
      desc: "Meta Ads, Google Ads, and SEO strategies that bring real leads and measurable ROI for your business.",
      features: ["Meta & Google Ads", "SEO & Local Rankings", "Lead Generation Campaigns", "Monthly Reports", "ROI-Focused Strategy"],
      icon: <Megaphone className="w-10 h-10" />,
      theme: "light",
      cta: "Explore"
    },
    {
      id: "04",
      title: "Social Media Management",
      category: "SOCIAL MEDIA",
      desc: "Content creation, Reels, and posting calendars that build your brand's authority on Instagram & Facebook.",
      features: ["Instagram & Facebook", "Reels & Graphic Design", "Content Calendar", "Engagement Management", "Monthly Analytics"],
      icon: <Smartphone className="w-10 h-10" />,
      theme: "light",
      cta: "Explore"
    },
    {
      id: "05",
      title: "SEO & Google Ranking",
      category: "SEO",
      desc: "Get your business to Google Page 1. Local SEO, GMB optimization, and backlink building for Tamil Nadu markets.",
      features: ["Google My Business Setup", "Local SEO Optimization", "On-Page & Off-Page SEO", "Keyword Research", "Monthly Ranking Reports"],
      icon: <Search className="w-10 h-10" />,
      theme: "light",
      cta: "Explore"
    },
    {
      id: "06",
      title: "Graphic & Brand Design",
      category: "DESIGN",
      desc: "Logo design, brand identity kits, and marketing creatives that make your business look professional and memorable.",
      features: ["Logo & Brand Identity", "Business Card & Flyer", "Social Media Templates", "Brochure Design", "Brand Style Guide"],
      icon: <Palette className="w-10 h-10" />,
      theme: "light",
      cta: "Explore"
    }
  ];

  return (
    <section className="py-24 bg-white px-6 lg:px-20 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#FF6B35] font-black tracking-[0.4em] uppercase text-xs mb-4"
        >
          What We Offer
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-[#1A2B56] mb-6"
        >
          Our <span className="text-[#4169E1]">Core Services</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant font-medium max-w-2xl mx-auto"
        >
          From building your first website to scaling your e-commerce store — we cover the full digital spectrum for Tamil Nadu businesses.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Row: Slide from Left */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative p-8 rounded-[2rem] border transition-all hover:shadow-2xl ${
                s.theme === 'blue' 
                  ? 'bg-[#1A2B56] text-white border-transparent' 
                  : 'bg-[#F8FAFC] border-slate-100 text-slate-900 hover:bg-white'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                s.theme === 'blue' ? 'bg-white/10' : 'bg-blue-50 text-blue-600'
              }`}>
                {s.icon}
              </div>
              <span className={`text-[10px] font-black tracking-widest px-3 py-1 rounded-md mb-4 inline-block ${
                s.theme === 'blue' ? 'bg-[#FF6B35] text-white' : 'bg-[#FFF2ED] text-[#FF6B35]'
              }`}>
                {s.category}
              </span>
              <h3 className="text-2xl font-black mb-4 leading-tight">{s.title}</h3>
              <p className={`text-sm mb-8 leading-relaxed font-medium ${
                s.theme === 'blue' ? 'text-white/80' : 'text-slate-500'
              }`}>
                {s.desc}
              </p>
              
              <ul className="space-y-3 mb-10">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className={`w-4 h-4 ${s.theme === 'blue' ? 'text-[#FF6B35]' : 'text-[#FF6B35]'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onAction(`Inquiry sent for ${s.title}`)}
                className={`inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest ${
                s.theme === 'blue' ? 'text-white' : 'text-blue-600'
              }`}>
                {s.cta} <ArrowRight className="w-4 h-4" />
              </button>

              <div className={`absolute bottom-6 right-8 text-7xl font-black opacity-5 pointer-events-none ${
                s.theme === 'blue' ? 'text-white' : 'text-slate-900'
              }`}>
                {s.id}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: Slide from Right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(3, 6).map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative p-8 rounded-[2rem] border border-slate-100 bg-[#F8FAFC] text-slate-900 hover:bg-white hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-md mb-4 inline-block bg-[#FFF2ED] text-[#FF6B35]">
                {s.category}
              </span>
              <h3 className="text-2xl font-black mb-4 leading-tight">{s.title}</h3>
              <p className="text-sm mb-8 leading-relaxed font-medium text-slate-500">
                {s.desc}
              </p>
              
              <ul className="space-y-3 mb-10">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                    {f}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onAction(`Inquiry sent for ${s.title}`)}
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600">
                {s.cta} <ArrowRight className="w-4 h-4" />
              </button>

              <div className="absolute bottom-6 right-8 text-7xl font-black opacity-5 pointer-events-none text-slate-900">
                {s.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-32 bg-surface-container-low px-6 lg:px-20" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full aspect-square bg-accent rounded-[3rem] brutal-border yellow-glow flex items-center justify-center overflow-hidden"
          >
            <div className="text-center space-y-4">
              <div className="text-8xl font-black text-black">5+</div>
              <div className="text-sm font-black uppercase tracking-[0.4em] text-black">Years of Excellence</div>
            </div>
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full brutal-border flex items-center justify-center yellow-glow hidden md:flex">
             <div className="text-center">
                <div className="text-xs font-black uppercase tracking-widest text-black">Est.</div>
                <div className="text-lg font-black text-black">2019</div>
             </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-black mb-4 bg-accent inline-block px-2 py-1 rounded-md">Our Story</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-tight">Founded on <br/><span className="text-gradient-ai">May 31st, 2019</span></h3>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed">
              Zynapse Sys was born from a vision to bridge the gap between technical complexity and editorial elegance. Since our inception in May 2019, we have been dedicated to crafting digital experiences that resonate.
            </p>
            <p className="text-lg text-on-surface-variant/80 font-medium leading-relaxed">
              What started as a small team of passionate engineers has evolved into a powerhouse of digital craftsmanship, serving clients globally with cutting-edge SaaS architecture and AI-driven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <div className="text-4xl font-black text-black mb-2">100+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black mb-2">50+</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Global Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = ({ onAction }: { onAction: (m: string) => void }) => {
  const products = [
    {
      id: "real-estate",
      title: "Real Estate Solutions",
      subtitle: "Find Your Dream Home",
      description: "Search from over 10,000+ properties for sale and rent.",
      accent: "#FF9500",
      categories: ["Buy", "Rent", "Sell"],
      heroImage: "https://i.postimg.cc/PxQyjGKG/Modern-real-estate-search-on-devices.png",
      items: [
        { name: "Modern Villa", price: "₹8.5 Cr", location: "Mumbai", img: "https://picsum.photos/seed/house1/400/300" },
        { name: "Sky Apartment", price: "₹12.5 Cr", location: "Bangalore", img: "https://picsum.photos/seed/house2/400/300" },
        { name: "Beach House", price: "₹9.7 Cr", location: "Goa", img: "https://picsum.photos/seed/house3/400/300" }
      ]
    },
    {
      id: "car-service",
      title: "Automotive Platforms",
      subtitle: "Keep Your Car Clean",
      description: "Find the best car wash and detailing services near you.",
      accent: "#007AFF",
      categories: ["Wash", "Detailing", "Oil Change"],
      heroImage: "https://i.postimg.cc/fL047FMN/Zynapse-Car-Wash-app-showcase.png",
      items: [
        { name: "Full Service Wash", price: "₹2,999", location: "Premium", img: "https://picsum.photos/seed/car1/400/300" },
        { name: "Express Detail", price: "₹14,699", location: "Interior", img: "https://picsum.photos/seed/car2/400/300" },
        { name: "Ceramic Coating", price: "₹49,999", location: "Exterior", img: "https://picsum.photos/seed/car3/400/300" }
      ]
    },
    {
      id: "food-delivery",
      title: "Food & Logistics",
      subtitle: "Gourmet at Your Door",
      description: "Discover the best cuisines from top-rated local restaurants.",
      accent: "#FF2D55",
      categories: ["Pizza", "Burgers", "Sushi", "Desserts"],
      heroImage: "https://i.postimg.cc/DZbVQD7F/Zynapse-food-delivery-app-mockup.png",
      items: [
        { name: "Burger Bistro", price: "₹599", location: "4.8 ★", img: "https://picsum.photos/seed/food1/400/300" },
        { name: "Sushi Master", price: "₹1,299", location: "4.9 ★", img: "https://picsum.photos/seed/food2/400/300" },
        { name: "Pasta Palace", price: "₹899", location: "4.7 ★", img: "https://picsum.photos/seed/food3/400/300" }
      ]
    },
    {
      id: "home-services",
      title: "Service Marketplaces",
      subtitle: "Professional Home Services",
      description: "Get top-rated professionals for your home service needs.",
      accent: "#34C759",
      categories: ["Cleaning", "Plumbing", "Electrical", "Moving"],
      heroImage: "https://i.postimg.cc/50Fc5Gfd/Zynapse-home-services-app-interface.png",
      items: [
        { name: "House Cleaning", price: "₹1,899", location: "Verified", img: "https://picsum.photos/seed/service1/400/300" },
        { name: "Plumbing Repair", price: "₹799", location: "Expert", img: "https://picsum.photos/seed/service2/400/300" },
        { name: "TV Mounting", price: "₹1,299", location: "Licensed", img: "https://picsum.photos/seed/service3/400/300" }
      ]
    },
    {
      id: "travel",
      title: "Travel & Hospitality",
      subtitle: "Explore the World",
      description: "Find the best deals on hotels, flights and car rentals for your next trip.",
      accent: "#7000FF",
      categories: ["Hotels", "Flights", "Cars", "Tours"],
      heroImage: "https://i.postimg.cc/ZRykPgJz/Zynapse-travel-platform-on-devices.png",
      items: [
        { name: "Honolulu, HI", price: "₹1,10,000", location: "Resort", img: "https://picsum.photos/seed/travel1/400/300" },
        { name: "Paris, France", price: "₹1,45,000", location: "Luxury", img: "https://picsum.photos/seed/travel2/400/300" },
        { name: "Cancun, Mexico", price: "₹95,000", location: "All-Inc", img: "https://picsum.photos/seed/travel3/400/300" }
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce Experience",
      subtitle: "Seamless Digital Retail",
      description: "Building next-generation retail experiences with integrated AI and AR.",
      accent: "#FF2D55",
      categories: ["Fashion", "Tech", "Home", "Beauty"],
      heroImage: "https://i.postimg.cc/Hn7N5741/E-commerce-website-mockup-for-Zynapse.png",
      items: [
        { name: "Luxe Fashion", price: "₹2,499", location: "Trending", img: "https://picsum.photos/seed/shop1/400/300" },
        { name: "Smart Gadgets", price: "₹14,999", location: "New", img: "https://picsum.photos/seed/shop2/400/300" },
        { name: "Beauty Kits", price: "₹899", location: "Top", img: "https://picsum.photos/seed/shop3/400/300" }
      ]
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = products[index];

  return (
    <section className="py-20 bg-white px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-black mb-2 bg-accent inline-block px-2 py-1 rounded-md">Our Ecosystem</h2>
            <h3 className="text-4xl font-black tracking-tight text-black uppercase">Multi-Vertical Expertise</h3>
          </div>
          <div className="flex gap-2">
            {products.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`w-12 h-1.5 rounded-full transition-all duration-500 ${i === index ? 'bg-black w-20' : 'bg-outline'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative bg-surface-container-low rounded-[3rem] brutal-border p-8 md:p-12 yellow-glow min-h-[700px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="flex flex-col h-full"
            >
              {/* Mock App Header */}
              <div className="flex justify-between items-center mb-10 border-b border-outline pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black" style={{ backgroundColor: current.accent }}>Z</div>
                  <span className="font-black uppercase tracking-tighter text-xl">Zynapse {current.id.split('-')[0]}</span>
                </div>
                <div className="flex-grow max-w-md mx-10 hidden md:block">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-outline"></div>
                    <div className="w-full bg-white brutal-border rounded-full py-2 px-10 text-[10px] font-bold text-on-surface-variant">Search for {current.id.replace('-', ' ')}...</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white brutal-border cursor-pointer hover:bg-accent transition-colors" onClick={() => onAction("Notifications: 0 new")}></div>
                  <div className="w-8 h-8 rounded-full bg-white brutal-border cursor-pointer hover:bg-accent transition-colors" onClick={() => onAction("User profile opening...")}></div>
                </div>
              </div>

              {/* Categories */}
              <div className="flex gap-4 mb-10 overflow-x-auto pb-2 no-scrollbar">
                {current.categories.map((cat, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group" onClick={() => onAction(`Filtering by ${cat}...`)}>
                    <div className="w-14 h-14 rounded-2xl bg-white brutal-border flex items-center justify-center shadow-sm group-hover:bg-accent transition-colors">
                       <div className="w-6 h-6 rounded-lg" style={{ backgroundColor: current.accent, opacity: 0.2 }}></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{cat}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow">
                <div className="lg:col-span-4 space-y-6">
                  <h4 className="text-4xl md:text-5xl font-black tracking-tight text-black leading-tight">
                    {current.subtitle}
                  </h4>
                  <p className="text-on-surface-variant font-medium text-lg leading-relaxed text-left">
                    {current.description}
                  </p>
                  <button 
                    onClick={() => onAction(`Launching ${current.title} demo...`)}
                    className="px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest text-white shadow-lg transition-all hover:scale-105"
                    style={{ backgroundColor: current.accent, boxShadow: `0 10px 20px -5px ${current.accent}66` }}
                  >
                    Explore Platform
                  </button>
                  
                  {/* Miniature features grid */}
                  <div className="grid grid-cols-1 gap-3 pt-4">
                    {current.items.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl brutal-border">
                        <img src={item.img} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-black">{item.name}</p>
                          <p className="text-sm font-black">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden brutal-border shadow-2xl"
                  >
                    <img 
                      src={current.heroImage} 
                      alt={current.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Expertise = ({ onAction }: { onAction: (m: string) => void }) => {
  const cards = [
    {
      icon: <LayoutDashboard className="w-10 h-10 text-black" />,
      title: "SaaS Architecture",
      description: "Scalable cloud-native platforms engineered for high-volume enterprise operations."
    },
    {
      icon: <Cpu className="w-10 h-10 text-black" />,
      title: "AI Integration",
      description: "Infusing products with machine learning to automate complex editorial workflows."
    },
    {
      icon: <Globe className="w-10 h-10 text-black" />,
      title: "Web Experience",
      description: "Immersive, high-performance web applications that redefine digital presence."
    }
  ];

  return (
    <section className="py-32 bg-white px-6 lg:px-20" id="expertise">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-black mb-4 bg-accent inline-block px-2 py-1 rounded-md">What We Do</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-tight uppercase">Digital Craftsmanship.</h3>
        </div>
        <div className="text-black text-lg font-mono font-bold">Starting from <span className="text-secondary-accent font-black">₹49,999</span></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            onClick={() => onAction(`Opening ${card.title} solutions...`)}
            className="group p-10 bg-surface-container-low rounded-3xl brutal-border yellow-glow transition-all duration-300 flex flex-col justify-between aspect-square cursor-pointer"
          >
            <div className="bg-white w-16 h-16 flex items-center justify-center rounded-2xl brutal-border mb-8">
              {card.icon}
            </div>
            <div>
              <h4 className="text-2xl font-black text-black mb-2 uppercase tracking-tight">{card.title}</h4>
              <p className="text-on-surface-variant leading-relaxed font-medium">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { id: "01", title: "Discovery", desc: "Deep dive into your brand's core DNA and user requirements." },
    { id: "02", title: "Planning", desc: "Architecting the logic and strategic roadmap for development." },
    { id: "03", title: "Design", desc: "Crafting high-fidelity editorial interfaces with precision." },
    { id: "04", title: "Dev", desc: "Building with cutting-edge stack for speed and security." },
    { id: "05", title: "Launch", desc: "Deploying excellence and scaling the impact globally." }
  ];

  return (
    <section className="py-32 bg-surface-container-low px-6 lg:px-20 overflow-hidden" id="process">
      <div className="text-center mb-24">
        <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-black mb-4 bg-accent inline-block px-2 py-1 brutal-border">The Methodology</h2>
        <h3 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter">How We Build</h3>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 text-center lg:text-left">
              <div className="w-16 h-16 bg-accent flex items-center justify-center mx-auto lg:mx-0 brutal-border yellow-glow">
                <span className="text-black font-mono text-xl font-black">{step.id}</span>
              </div>
              <h5 className="text-xl font-black uppercase tracking-tight text-black">{step.title}</h5>
              <p className="text-sm text-black/70 font-bold leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <section className="py-32 bg-white px-6 lg:px-20" id="packages">
      <div className="text-center mb-20">
        <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-black uppercase">Service Tiers</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Starter */}
        <div className="p-12 bg-white rounded-3xl brutal-border yellow-glow flex flex-col justify-between h-full">
          <div>
            <h4 className="text-[12px] font-black text-black uppercase tracking-[0.4em] mb-6 bg-accent inline-block px-2 rounded-md">Starter</h4>
            <div className="text-5xl font-black mb-10 tracking-tighter uppercase text-black">₹49,999<span className="text-sm text-black/50 font-normal lowercase">/project</span></div>
            <ul className="space-y-5 mb-12">
              <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-secondary-accent" /> Responsive Web Design</li>
              <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-secondary-accent" /> Core CMS Integration</li>
              <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-secondary-accent" /> 2 Weeks Support</li>
            </ul>
          </div>
          <button 
            onClick={() => onAction("Starter plan selected. Redirecting to checkout...")}
            className="w-full py-5 rounded-full brutal-border font-black uppercase text-xs tracking-widest hover:bg-accent transition-all"
          >
            Select Plan
          </button>
        </div>
        {/* Growth */}
        <div className="p-12 bg-white rounded-3xl brutal-border border-2 border-black flex flex-col justify-between h-full relative scale-105 yellow-glow">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 btn-gradient text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Recommended</div>
          <div>
            <h4 className="text-[12px] font-black text-black uppercase tracking-[0.4em] mb-6 bg-accent inline-block px-2 rounded-md">Growth</h4>
            <div className="text-5xl font-black mb-10 tracking-tighter uppercase text-black">₹1,49,999<span className="text-sm text-black/50 font-normal lowercase">/project</span></div>
            <ul className="space-y-5 mb-12">
              <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-secondary-accent" /> Custom Mobile App</li>
              <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-secondary-accent" /> AI-Driven Personalization</li>
              <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-secondary-accent" /> Advanced Analytics Hub</li>
              <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="w-5 h-5 text-secondary-accent" /> 1 Month Priority Support</li>
            </ul>
          </div>
          <button 
            onClick={() => onAction("Growth plan selected. Redirecting to checkout...")}
            className="w-full py-5 btn-gradient rounded-full text-white font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all"
          >
            Select Plan
          </button>
        </div>
        {/* Enterprise */}
        <div className="p-12 bg-white rounded-3xl brutal-border yellow-glow flex flex-col justify-between h-full">
          <div>
            <h4 className="text-[12px] font-black text-black uppercase tracking-[0.4em] mb-6 bg-accent inline-block px-2 rounded-md">Enterprise</h4>
            <div className="text-5xl font-black mb-10 tracking-tighter uppercase text-black">Custom</div>
            <p className="text-black/70 text-sm mb-12 font-bold leading-relaxed">Full-scale digital transformation including legacy migration and custom AI model training.</p>
          </div>
          <button 
            onClick={() => onAction("Enterprise inquiry sent. Our team will contact you.")}
            className="w-full py-5 rounded-full brutal-border font-black uppercase text-xs tracking-widest hover:bg-accent transition-all"
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onAction }: { onAction: (m: string) => void }) => {
  const projects = [
    {
      title: "NeXus Dashboard",
      category: "Fintech",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMTTJ4hMwt0r_imUh6yX0p027DlSBm5yEi22XoQhrb7scBsBiLqcCWJmNz-wztApnUsZf0g_FakuZWSmLOvOM8gNPwFCDDnbBR9_aVTSooGofhTCOijFFRjERaJcQmOtnlbQfFG4N0lJLvRqAOHrYMWkXoK0Tm3VqQj9UlatfiU1Wjp6-mBtpfRsD7gALBB99_-1PsjRfxUiHDJEgWaUWABEZ41qbJsgcoKGeP3wVpvYtCEbQ__bTi7nEppQMmsJ76pDqePUykUM3G",
      span: "md:col-span-8"
    },
    {
      title: "Luxe Retail",
      category: "E-Commerce",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqKyp_mdmWgFCfahhsS4Fwu9Svhaar2rQfX83Bx-pYKjKxCU-odyJyewH_2kcVBYClkja_fhMN3iS-U1eYWNJUXZ0bSGkgNSZScj1gA-Zsk14Js8Gw4UDH6qNHIAvVWsEo9WO7anD9c_Sv06fUMo-HflGQhRLF6umGPv3NIYA2A_x1zfsFZGvrdIV2KTRc2AbqZEoRjHo4r2i-O5jMMy-VaeMEcv-Ma1JUf1OLq-jL_mc1TP_lxui0JAn4dZR7gH0S9waXYmbXXdHP",
      span: "md:col-span-4"
    },
    {
      title: "DataStream",
      category: "Analytics",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqz1zC4OKv1MLbkdwVtnmROZq2gbd7DyheaJxFngWVOp-nmYRNfqA77sGKJ_YGb7YyHyc1ZQbIq5a-IX4si9SrWwaphlq5UzC6iBCVFVTEO0kyj0MPQXcdNHH1za3sHVcTAW9fWBqO-GbK33curJ-mqPVn4GZYtCHy01bFRyyVirQNFjH9F5tzdXnG7B9SCtHJugGSqYdD6wexogMY1XHlxw6YV_NgbIxifMfDbnkeKBpEMAmSegoqcXr2b33cHASrcNWqNokDmDj9",
      span: "md:col-span-4"
    },
    {
      title: "SwiftDeliver AI",
      category: "On-Demand",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUJWdywWHS_mHPeTo-i6NMHFFQ1xYHAXIQ742LKWr6VvZQYOchrfWJgF9hcfAW50_RDNNZ-mjN4JCCFicZfoKTKh3rBdEKLE12Scpwv5t4mPzzodIJhUmmCJiBTuVU0iU3daiqyShS2s4nqttB0SKM-prq2Ud7Is6TVlQiEBe0o6LvnLnTKYBHNBwvoZJgRHVG8bd2Tp4rwD1QnFThShat8szJh3U4OXQjvcniw-NykvtfxniJb5exmb3RwvhpDFjYvSvX3iEVTdl9",
      span: "md:col-span-8"
    }
  ];

  return (
    <section className="py-32 bg-white px-6 lg:px-20" id="portfolio">
      <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 uppercase text-black">The Portfolio</h3>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-auto md:h-[800px]">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover="hover"
            onClick={() => onAction(`Opening project: ${project.title}`)}
            className={`${project.span} group relative brutal-border cursor-pointer yellow-glow overflow-hidden`}
          >
            <motion.img 
              variants={{ hover: { scale: 1.05, filter: "grayscale(0%)" } }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover" 
              src={project.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute bottom-10 left-10 translate-y-10 group-hover:translate-y-0 transition-transform">
              <p className="bg-accent text-black text-[10px] font-black tracking-[0.4em] mb-2 uppercase px-2 brutal-border inline-block">{project.category}</p>
              <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">{project.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-white px-6 lg:px-20" id="testimonials">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-8">
          <div className="w-16 h-2 bg-black my-auto"></div>
          <h3 className="text-[12px] font-black tracking-[0.4em] uppercase text-black bg-accent px-2 brutal-border">Voices of Trust</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 p-12 bg-white brutal-border yellow-glow">
            <Quote className="w-10 h-10 text-black fill-accent" />
            <p className="text-xl font-bold leading-relaxed text-black">
              "Zynapse transformed our archaic e-commerce site into a high-performance engine. Their editorial eye for detail is unmatched."
            </p>
            <div>
              <p className="font-black uppercase tracking-tight text-black">Arun Kumar</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/50 font-black">CTO, Zenith Retail</p>
            </div>
          </div>
          <div className="space-y-6 p-12 bg-white brutal-border yellow-glow">
            <Quote className="w-10 h-10 text-black fill-accent" />
            <p className="text-xl font-bold leading-relaxed text-black">
              "The level of technical expertise and delivery speed surpassed all our expectations. They are true partners in innovation."
            </p>
            <div>
              <p className="font-black uppercase tracking-tight text-black">Priya Sharma</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/50 font-black">Founder, DataFlow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Careers = ({ onAction }: { onAction: (m: string) => void }) => {
  const benefits = [
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "Healthy work-life balance" },
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "5 days work week*" },
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "Leadership Development" },
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "No overtime, No Loss of Pay" },
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "Career growth opportunities" },
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "Paid leave on Birthday" },
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "Yearly Vacation" },
    { icon: <CheckCircle2 className="w-5 h-5 text-secondary-accent" />, text: "Get professional education" },
  ];

  return (
    <section className="py-32 bg-white px-6 lg:px-20" id="careers">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-[12px] font-black tracking-[0.4em] uppercase text-black mb-4 bg-accent inline-block px-2 py-1 rounded-md">Join Our Team</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-tight">Get Your <br/><span className="text-gradient-ai">Dream Job</span></h3>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
              New opportunities and exciting projects emerge every day due to the dynamic nature of our business. With your strongest abilities, you will be able to try new ideas and make contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl brutal-border">
                {benefit.icon}
                <span className="text-sm font-bold text-black">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low p-10 md:p-16 rounded-[3rem] brutal-border yellow-glow">
          <div className="text-center mb-10">
            <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Apply Now</h4>
            <p className="text-on-surface-variant text-sm font-medium">Upload your resume and join the future.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            onAction("Application submitted successfully! We'll be in touch.");
          }}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Position Interested In</label>
              <select className="w-full bg-white brutal-border p-5 rounded-2xl focus:ring-4 focus:ring-accent/50 text-black appearance-none font-mono text-sm font-bold">
                <option>Frontend Engineer</option>
                <option>Backend Architect</option>
                <option>AI Specialist</option>
                <option>UI/UX Designer</option>
                <option>Project Manager</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Resume / CV</label>
              <div className="relative group">
                <input 
                  type="file" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  accept=".pdf,.doc,.docx"
                />
                <div className="w-full bg-white brutal-border border-dashed border-2 p-10 rounded-2xl flex flex-col items-center justify-center gap-4 group-hover:bg-accent/5 transition-colors">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-secondary-accent" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-black">Click to upload or drag and drop</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-black tracking-widest mt-1">PDF, DOCX (Max 5MB)</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-6 btn-gradient rounded-full text-white font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-secondary-accent/20 hover:opacity-90 transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <section className="py-32 bg-surface-container-low px-6 lg:px-20" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-black">
            Ready to <br/><span className="accent-text-stroke">Scale?</span>
          </h3>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-accent p-3 brutal-border">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h5 className="font-black uppercase tracking-[0.4em] text-[10px] mb-1 text-black">Global HQ</h5>
                <p className="text-black/70 font-mono text-sm font-bold">Chennai, India — The Silicon Coast</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-accent p-3 brutal-border">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h5 className="font-black uppercase tracking-[0.4em] text-[10px] mb-1 text-black">Email Inquiry</h5>
                <p className="text-black/70 font-mono text-sm font-bold">intelligence@zynapse.io</p>
              </div>
            </div>
          </div>
          <div className="h-64 brutal-border overflow-hidden grayscale yellow-glow">
            <img 
              className="w-full h-full object-cover opacity-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjkeouyzaCVR3NvYYadH0mLtLOUytic3n5naS5sYf1lzXWHH29p9jaHYB_jWHTWbq9c5W9YJLj7o0tNOQns7l8QVC4RNx1cRrhGKQXWivynVMTNQ-emPhVt7RwJOcRkFAmE5QxaMaChQuIJYrQcg6fFiKkcmjzPOLdDXbJQylF2zu1pQD6EGP0EF7R0vZJtinBXoy4zx21a3ESLmQEncPyf2JvNVNVV-zoo0qlxgoaKoaa3dZb9npH9cAR8y5HfbeLesrQwGfvclDx" 
              referrerPolicy="no-referrer"
            />
          </div>
          <a 
            className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-black brutal-border font-black uppercase text-xs tracking-widest yellow-glow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onAction("Opening WhatsApp chat...");
            }}
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Quote
          </a>
        </div>
        <div className="bg-white p-10 md:p-16 brutal-border yellow-glow">
          <form className="space-y-8" onSubmit={(e) => {
            e.preventDefault();
            onAction("Message sent! Our team will respond shortly.");
          }}>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Full Name</label>
              <input className="w-full bg-white brutal-border p-5 focus:ring-4 focus:ring-accent/50 text-black placeholder:text-black/30 font-mono text-sm font-bold" placeholder="John Doe" type="text"/>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Email Address</label>
              <input className="w-full bg-white brutal-border p-5 focus:ring-4 focus:ring-accent/50 text-black placeholder:text-black/30 font-mono text-sm font-bold" placeholder="john@enterprise.com" type="email"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Project Type</label>
                <select className="w-full bg-white brutal-border p-5 focus:ring-4 focus:ring-accent/50 text-black appearance-none font-mono text-sm font-bold">
                  <option>SaaS Platform</option>
                  <option>Mobile App</option>
                  <option>Corporate Web</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Budget</label>
                <select className="w-full bg-white brutal-border p-5 focus:ring-4 focus:ring-accent/50 text-black appearance-none font-mono text-sm font-bold">
                  <option>₹50k - ₹1.5L</option>
                  <option>₹1.5L - ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Project Brief</label>
              <textarea className="w-full bg-white brutal-border p-5 focus:ring-4 focus:ring-accent/50 text-black placeholder:text-black/30 font-mono text-sm font-bold" placeholder="Tell us about your vision..." rows={4}></textarea>
            </div>
            <button className="w-full py-6 bg-black text-white font-black text-sm uppercase tracking-[0.2em] brutal-border hover:bg-accent hover:text-black transition-all">
              Send Intelligence
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <footer className="w-full pt-20 pb-10 bg-white flex flex-col items-center justify-center text-center px-10 border-t-4 border-black">
      <div className="text-2xl font-black text-black mb-4 uppercase tracking-tighter bg-accent px-4 brutal-border cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Zynapse Sys</div>
      <div className="flex flex-wrap justify-center gap-10 mb-8 font-sans text-[10px] uppercase font-black tracking-[0.2em] text-black/40">
        <a className="hover:text-black transition-all" href="#" onClick={(e) => { e.preventDefault(); onAction("Privacy Policy loading..."); }}>Privacy Policy</a>
        <a className="hover:text-black transition-all" href="#" onClick={(e) => { e.preventDefault(); onAction("Terms of Service loading..."); }}>Terms of Service</a>
        <a className="hover:text-black transition-all" href="#expertise">Expertise</a>
        <a className="hover:text-black transition-all" href="#contact">Contact</a>
      </div>
      <div className="flex gap-6 mb-12">
        <a className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-accent transition-colors yellow-glow" href="#" onClick={(e) => { e.preventDefault(); onAction("Sharing to LinkedIn..."); }}>
          <Share2 className="w-4 h-4 text-black" />
        </a>
        <a className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-accent transition-colors yellow-glow" href="#" onClick={(e) => { e.preventDefault(); onAction("Opening global network..."); }}>
          <Globe className="w-4 h-4 text-black" />
        </a>
        <a className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-accent transition-colors yellow-glow" href="#" onClick={(e) => { e.preventDefault(); onAction("Opening email client..."); }}>
          <AtSign className="w-4 h-4 text-black" />
        </a>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-4 h-4 bg-accent brutal-border"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black">Ready for deployment</span>
      </div>
      <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-black/30 font-bold">© 2024 Zynapse Sys Editorial Intelligence. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar onAction={showToast} />
      <main>
        <Hero onAction={showToast} />
        <CoreServices onAction={showToast} />
      </main>
      <Footer onAction={showToast} />

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-black text-white px-8 py-4 rounded-full font-bold shadow-2xl brutal-border flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
