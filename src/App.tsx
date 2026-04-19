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
  ArrowRight,
  Phone,
  Settings,
  ClipboardCheck,
  Rocket,
  FileText,
  Clock,
  MessageCircle,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = ({ onAction, setView, currentView }: { onAction: (m: string) => void, setView: (v: any) => void, currentView: string }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-12 py-6 flex justify-between items-center bg-transparent backdrop-blur-[2px] border-b border-white/10">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView("main")}>
        <div className="relative group">
          <div className="w-10 h-10 bg-white rotate-45 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-[135deg]">
            <div className="w-6 h-6 border-4 border-slate-900 -rotate-45"></div>
          </div>
        </div>
        <div className="text-2xl font-black tracking-tight text-white uppercase italic">Zynapse</div>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        {[
          { name: 'HOME', section: 'hero' },
          { name: 'ABOUT', section: 'services' },
          { name: 'WE OFFER', section: 'services' },
          { name: 'PORTFOLIO', section: 'process' },
          { name: 'RECENT WORK', section: 'team' },
          { name: 'CONTACT', section: 'contact' }
        ].map((item) => (
          <button 
            key={item.name}
            onClick={() => {
              if (item.name === 'HOME') {
                setView("main");
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setView("main");
                setTimeout(() => {
                  const element = document.getElementById(item.section);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="text-[11px] font-black tracking-[0.25em] text-white/80 hover:text-white transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all"
          >
            {item.name}
          </button>
        ))}
        <div className="flex items-center gap-1 text-[11px] font-black tracking-[0.25em] text-white/80 cursor-pointer hover:text-white transition-all">
          PAGES <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      <div className="lg:hidden">
        <button className="text-white">
          <ChevronDown className="w-6 h-6 rotate-90" />
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover" 
          alt="Modern Office" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white font-black tracking-[0.4em] uppercase text-[12px] mb-6 drop-shadow-lg"
        >
          DISCOVER THE COLORFUL WORLD
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-8 drop-shadow-2xl"
        >
          BUILD YOUR DREAM
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-white/90 font-medium max-w-2xl mb-12 leading-relaxed drop-shadow-md"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
          or incididunt ut labore et dolore magna aliqua. Ut enim ad minim..
        </motion.p>

        {/* CTA Button */}
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-10 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white rounded-full font-black uppercase tracking-[0.2em] text-[12px] transition-all shadow-xl shadow-purple-500/20"
        >
          DISCOVER NOW
        </motion.button>
      </div>

      {/* Social Icons Vertical Rail */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4"
      >
        {[
          { icon: Facebook, label: "Facebook" },
          { icon: Linkedin, label: "LinkedIn" },
          { icon: Twitter, label: "Twitter" },
          { icon: Youtube, label: "YouTube" },
          { icon: Instagram, label: "Instagram" }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={`#${social.label.toLowerCase()}`}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white transition-all hover:border-white shadow-lg backdrop-blur-sm"
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Floating Contact Bubble */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onAction("Opening contact form...")}
        className="fixed bottom-8 right-8 z-50 bg-[#3ACBB1] text-white px-8 py-5 rounded-2xl flex items-center gap-3 shadow-[0_20px_50px_rgba(58,203,177,0.3)] cursor-pointer hover:bg-[#2CA08A] transition-all brutal-border border-white/20"
      >
        <Mail className="w-6 h-6" />
        <span className="font-black uppercase tracking-[0.2em] text-[12px]">Contact us</span>
      </motion.div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      id: 1,
      category: "DISCOVERY",
      title: "Market Research",
      desc: "We analyze your competition and industry trends to find your unique edge in the digital landscape.",
      icon: <Search className="w-8 h-8" />
    },
    {
      id: 2,
      category: "START HERE",
      title: "Free Consultation",
      desc: "Tell us about your business and goals. We listen, understand, and recommend the right plan for you — zero pressure.",
      icon: <Phone className="w-8 h-8" />
    },
    {
      id: 3,
      category: "PLANNING",
      title: "Strategic Roadmap",
      desc: "We define the user journey, tech stack, and project architecture to ensure a solid foundation for growth.",
      icon: <LayoutDashboard className="w-8 h-8" />
    },
    {
      id: 4,
      category: "AGREEMENT",
      title: "Proposal & Approval",
      desc: "We send a clear proposal with scope, timeline, and pricing. Just full clarity before we begin.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: 5,
      category: "CREATIVE",
      title: "Design & Wireframing",
      desc: "Our designers craft a bespoke UI that aligns with your brand identity and ensures a premium user experience.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      id: 6,
      category: "BUILDING",
      title: "Code Development",
      desc: "Our engineers bring the designs to life with clean, scalable code and high-performance server architecture.",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      id: 7,
      category: "GO LIVE",
      title: "Review & Testing",
      desc: "You review the final version, we perform rigorous QA, and then launch your website with full confidence.",
      icon: <ClipboardCheck className="w-8 h-8" />
    },
    {
      id: 8,
      category: "ALWAYS ON",
      title: "Support & Growth",
      desc: "Ongoing support, training, and growth strategies keep your business thriving in the digital economy.",
      icon: <Rocket className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] px-6 lg:px-20 overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#3ACBB1] font-black tracking-[0.4em] uppercase text-xs mb-4"
        >
          How it Works
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-[#1A2B56] mb-6"
        >
          Our Simple <span className="text-[#3ACBB1]">Process</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-on-surface-variant font-medium max-w-2xl mx-auto leading-relaxed"
        >
          A more comprehensive, 8-step journey designed to take your business from concept to market leader.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative px-4">
        {/* Connection Line - Row 1 */}
        <div className="absolute top-12 left-12 right-12 h-[2px] bg-[#3ACBB1]/20 hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {/* Numbered Circle and Icon Group */}
              <div className="relative mb-12">
                <div className="w-24 h-24 bg-[#3ACBB1] rounded-full flex items-center justify-center text-white text-3xl font-black shadow-[0_10px_30px_rgba(58,203,177,0.3)] border-4 border-white z-10 relative">
                  {step.id}
                  <div className="absolute top-0 right-0 -translate-x-1 translate-y-2">
                     <div className="w-6 h-6 bg-[#1A2B56] rounded-full flex items-center justify-center">
                        <ArrowRight className="text-white w-3 h-3" />
                     </div>
                  </div>
                </div>
                
                {/* Decoration under circle */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[#1A2B56]/40">
                  {step.icon}
                </div>
              </div>

              {/* Step Card */}
              <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center w-full h-full hover:border-[#3ACBB1]/30 transition-colors">
                <span className="text-[10px] font-black tracking-widest px-4 py-1 rounded-full mb-4 inline-block bg-[#E6FFFA] text-[#3ACBB1]">
                  {step.category}
                </span>
                <h3 className="text-xl font-black text-[#1A2B56] mb-4 leading-tight">{step.title}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const members = [
    {
      id: 1,
      name: "Doug Williams",
      role: "Product Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      company: "Visualy",
      responsibility: "Overseeing product vision and roadmap to ensure we deliver market-leading solutions.",
      quote: "Our product philosophy is simple: build for the user, and the market will follow."
    },
    {
      id: 2,
      name: "Ken Scott",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      company: "Xylo",
      responsibility: "Driving brand growth and user engagement through data-driven digital strategies.",
      quote: "Marketing isn't about selling products; it's about telling a story that resonates."
    },
    {
      id: 3,
      name: "George Dlubal",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      company: "Global Software",
      responsibility: "Leading the organization toward innovation and sustainable digital transformation.",
      quote: "The future belongs to those who see possibilities before they become obvious."
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      company: "Nexus",
      responsibility: "Architecting scalable systems and leading our engineering team to excellence.",
      quote: "Complexity is the enemy of reliability. We build clean, robust, and scalable code."
    },
    {
      id: 5,
      name: "Alex Rivers",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
      company: "River Inc",
      responsibility: "Crafting bespoke user experiences that balance aesthetics with peak functionality.",
      quote: "Design is not just what it looks like and feels like. Design is how it works."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [members.length]);

  const currentMember = members[currentIndex];

  return (
    <section className="py-32 bg-white overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight"
          >
            Meet the minds <br />
            <span className="text-slate-400">behind Zynapse</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
          {/* Static Left Card with Dynamic Content */}
          <div className="w-full lg:w-[400px] h-[580px] bg-gradient-to-br from-[#1A2B56] to-[#2CA08A] rounded-[2rem] p-10 flex flex-col justify-between text-white shadow-2xl relative shrink-0">
            <div className="relative">
              <Quote className="w-10 h-10 opacity-30 mb-8" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6 italic">
                    "{currentMember.quote}"
                  </p>
                  <div className="space-y-4">
                    <div className="h-px w-12 bg-[#3ACBB1]" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3ACBB1] mb-2">Core Responsibility</p>
                      <p className="text-sm font-medium text-white/80 leading-relaxed">
                        {currentMember.responsibility}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="flex items-center gap-4 mt-auto pt-8 border-t border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#3ACBB1] shrink-0">
                  <img src={currentMember.image} alt={currentMember.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-black text-lg tracking-tight">{currentMember.name}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#3ACBB1]">{currentMember.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scrolling Right Section */}
          <div className="flex-1 overflow-hidden relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6 shrink-0"
                animate={{ x: -(currentIndex * 344) }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {/* Member Cards */}
                {members.map((member, idx) => (
                  <motion.div 
                    key={member.id} 
                    onClick={() => setCurrentIndex(idx)}
                    className={`min-w-[320px] h-[580px] rounded-[2rem] overflow-hidden relative group shrink-0 cursor-pointer transition-all duration-500 ${
                      currentIndex === idx ? 'ring-4 ring-[#3ACBB1] ring-offset-4 ring-offset-white' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={member.image} 
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        currentIndex === idx ? 'scale-110 grayscale-0' : 'grayscale group-hover:grayscale-0'
                      }`} 
                      alt={member.name}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10 text-white">
                      <div className="font-black text-2xl mb-2 tracking-tight">{member.name}</div>
                      <div className="text-xs font-black uppercase tracking-[0.2em] text-[#3ACBB1]">{member.role}</div>
                    </div>
                    
                    {currentIndex === idx && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="absolute top-8 right-8 bg-[#3ACBB1] text-[#1A2B56] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest"
                      >
                        Highlight
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-16 flex justify-end">
          <div className="flex gap-3">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)}
              className="w-14 h-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center hover:bg-[#1A2B56] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % members.length)}
              className="w-14 h-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center hover:bg-[#1A2B56] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
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
          className="text-[#3ACBB1] font-black tracking-[0.4em] uppercase text-xs mb-4"
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
          Our <span className="text-[#3ACBB1]">Core Services</span>
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
                s.theme === 'blue' ? 'bg-[#3ACBB1] text-white' : 'bg-[#E6FFFA] text-[#3ACBB1]'
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
                    <CheckCircle2 className={`w-4 h-4 ${s.theme === 'blue' ? 'text-[#3ACBB1]' : 'text-[#3ACBB1]'}`} />
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
              <span className="text-[10px] font-black tracking-widest px-3 py-1 rounded-md mb-4 inline-block bg-[#E6FFFA] text-[#3ACBB1]">
                {s.category}
              </span>
              <h3 className="text-2xl font-black mb-4 leading-tight">{s.title}</h3>
              <p className="text-sm mb-8 leading-relaxed font-medium text-slate-500">
                {s.desc}
              </p>
              
              <ul className="space-y-3 mb-10">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4 text-[#3ACBB1]" />
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
      accent: "#3ACBB1",
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
      accent: "#059669",
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
      accent: "#3ACBB1",
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
                  <option>Zynapse Web</option>
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

const TeamFeatures = () => {
  return (
    <section className="py-24 bg-white px-6 lg:px-20 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="relative w-12 h-12">
               <div className="absolute inset-0 bg-[#A855F7]/20 rotate-45 rounded-xl blur-lg" />
               <div className="relative w-full h-full bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rotate-45 flex items-center justify-center shadow-lg">
                 <div className="w-5 h-5 border-[3px] border-white -rotate-45" />
               </div>
            </div>
            <p className="text-slate-400 font-black tracking-[0.4em] uppercase text-[10px]">
              DISCOVER THE FEATURES
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-[#1A2B56] leading-[1] tracking-tighter">
              We build a strong team <br />
              of great people
            </h2>
          </div>
          
          <p className="text-slate-500 font-medium leading-relaxed max-w-xl text-lg">
            Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {[
              "Nunc nec maximus dui,",
              "Aenean pellentesque elit vitae",
              "Aenean pellentesque elit vitae",
              "Ex mauris, ornare eget pretium",
              "Cras ex mauris, ornare eget preti"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-2 h-2 rounded-full bg-[#3ACBB1] group-hover:scale-150 transition-transform duration-300" />
                <span className="text-slate-700 font-bold text-sm tracking-tight">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Side: Image Grid */}
        <div className="grid grid-cols-2 gap-6 h-[700px]">
          <div className="space-y-6 flex flex-col justify-end">
            <div className="h-[60%] rounded-[3rem] overflow-hidden group shadow-2xl relative">
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                alt="Team working" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-[35%] rounded-[3rem] overflow-hidden group shadow-xl relative">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                alt="Office culture" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-6">
             <div className="h-[35%] rounded-[3rem] overflow-hidden group shadow-xl relative">
              <img 
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                alt="Strategic Planning" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-[60%] rounded-[3rem] overflow-hidden group shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1512428559083-a40ce7ba6e91?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                alt="Mobile Innovation" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OfficeMap = () => {
  return (
    <section className="relative py-48 bg-white overflow-hidden flex items-center justify-center" id="location">
      {/* Schematic Dotted Map Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.2]" 
          style={{ 
            backgroundImage: 'radial-gradient(#8B5CF6 1.5px, transparent 1.5px)', 
            backgroundSize: '24px 24px' 
          }} 
        />
        {/* World Map Shape Overlay - Semi Abstract */}
        <div className="w-[80%] h-[60%] relative opacity-[0.4]">
          <svg viewBox="0 0 1000 500" className="w-full h-full fill-[#8B5CF6]">
             <path d="M150,150 Q200,100 250,150 T350,150 M450,120 Q500,80 550,120 T650,120 M750,130 Q800,100 850,130 T950,130 M100,300 Q150,250 200,300 T300,300 M400,350 Q450,300 500,350 T600,350 M700,320 Q750,280 800,320 T900,320" 
                   stroke="#8B5CF6" strokeWidth="60" strokeLinecap="round" strokeDasharray="1 100" />
             <path d="M200,200 Q250,150 300,200 T400,200 M500,170 Q550,130 600,170 T700,170 M800,180 Q850,150 900,180 T1000,180 M150,350 Q200,300 250,350 T350,350 M450,400 Q500,350 550,400 T650,400 M750,370 Q800,330 850,370 T950,370" 
                   stroke="#8B5CF6" strokeWidth="60" strokeLinecap="round" strokeDasharray="1 80" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] max-w-3xl border border-slate-100 group overflow-hidden"
        >
          {/* Vertical Gradient Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-b from-[#8B5CF6] via-[#A855F7] to-[#3ACBB1]" />
          
          <div className="space-y-12">
            <h3 className="text-4xl font-black text-[#1A2B56] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#3ACBB1] transition-all duration-500">
              Gibraltar Office
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-3">
                <p className="text-slate-400 font-black uppercase text-[11px] tracking-[0.3em]">Location</p>
                <div className="text-[#1A2B56] font-extrabold text-xl leading-relaxed">
                  Casemates Square, no253 <br />
                  United kingdom
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-slate-400 font-black uppercase text-[11px] tracking-[0.3em]">Direct Line</p>
                  <p className="text-[#1A2B56] font-extrabold text-xl">+453678 9283 559</p>
                </div>
                <div className="space-y-3">
                  <p className="text-slate-400 font-black uppercase text-[11px] tracking-[0.3em]">Email Support</p>
                  <p className="text-[#1A2B56] font-extrabold text-xl break-all">contact@template.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Corner Element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3ACBB1]/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ onAction, setView }: { onAction: (m: string) => void, setView?: (v: any) => void }) => {
  return (
    <footer className="w-full bg-[#030712] pt-24 pb-12 px-6 lg:px-20 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Column 1: Design Services */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-[2px] bg-[#3B82F6]" />
              <h3 className="text-[#3B82F6] text-xs font-black tracking-[0.2em] uppercase">Design Services</h3>
            </div>
            <ul className="space-y-6">
              {[
                { name: "Web Designing", section: "services" },
                { name: "Web Development", section: "services" },
                { name: "Logo / Graphic Design", section: "services" },
                { name: "Ecommerce Website Development", section: "services" }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (setView) {
                        setView("main");
                        setTimeout(() => document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' }), 100);
                      }
                    }}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Digital Marketing & Policies */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-[2px] bg-[#3B82F6]" />
              <h3 className="text-[#3B82F6] text-xs font-black tracking-[0.2em] uppercase">Services & Policies</h3>
            </div>
            <ul className="space-y-6">
              {[
                { name: "Search Engine Optimization", type: "scroll", target: "services" },
                { name: "Social Media Marketing", type: "scroll", target: "services" },
                { name: "Our Process", type: "scroll", target: "process" },
                { name: "How it Works", type: "view", target: "journey" },
                { name: "Refund Policy", type: "view", target: "refund" },
                { name: "Privacy Policy", type: "view", target: "privacy" }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      if (setView) {
                        if (item.type === 'view') setView(item.target);
                        else {
                          setView("main");
                          setTimeout(() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' }), 100);
                        }
                      }
                    }}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-6 h-[2px] bg-[#3B82F6]" />
              <h3 className="text-[#3B82F6] text-xs font-black tracking-[0.2em] uppercase">Contact Us</h3>
            </div>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2">Address</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Coimbatore & Erode, Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2">Phone</p>
                  <p className="text-slate-300 text-sm font-bold">+91 8072117912</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2">Email</p>
                  <p className="text-slate-300 text-sm font-bold">zynapse@gmail.com</p>
                </div>
              </div>

              {/* Schedule Widget */}
              <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-medium">Mon – Sat</span>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-bold text-sm tracking-tight">9 AM – 6 PM</span>
                    <span className="px-3 py-1 bg-[#10B981]/20 text-[#10B981] text-[10px] font-black rounded-lg">OPEN</span>
                  </div>
                </div>
                <div className="h-[1px] bg-white/5" />
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm font-medium">Sunday</span>
                  <div className="flex items-center gap-4">
                    <span className="text-white font-bold text-sm tracking-tight">Closed</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-500 text-[10px] font-black rounded-lg">HOLIDAY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#3ACBB1] to-[#1A2B56] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
            </div>
            <div className="text-xl font-black tracking-tighter text-white uppercase italic">Zynapse</div>
          </div>
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            © 2024 Zynapse Sys. All rights reserved. Professional IT Fortress.
          </p>
          <div className="flex gap-6">
            <Share2 className="w-4 h-4 text-slate-600 hover:text-white cursor-pointer transition-colors" />
            <Globe className="w-4 h-4 text-slate-600 hover:text-white cursor-pointer transition-colors" />
            <AtSign className="w-4 h-4 text-slate-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const ProcessJourneyView = () => {
  const steps = [
    {
      id: 1,
      title: "Market Research",
      desc: "We analyze your competition and industry trends to find your unique edge in the digital landscape.",
    },
    {
      id: 2,
      title: "Free Consultation",
      desc: "Tell us about your business and goals. We listen, understand, and recommend the right plan for you — zero pressure."
    },
    {
      id: 3,
      title: "Strategic Roadmap",
      desc: "We define the user journey, tech stack, and project architecture to ensure a solid foundation for growth."
    },
    {
      id: 4,
      title: "Proposal & Approval",
      desc: "We send a clear proposal with scope, timeline, and pricing. Just full clarity before we begin."
    },
    {
      id: 5,
      title: "Design & Wireframing",
      desc: "Our designers craft a bespoke UI that aligns with your brand identity and ensures a premium user experience."
    },
    {
      id: 6,
      title: "Code Development",
      desc: "Our engineers bring the designs to life with clean, scalable code and high-performance server architecture."
    },
    {
      id: 7,
      title: "Review & Testing",
      desc: "You review the final version, we perform rigorous QA, and then launch your website with full confidence."
    },
    {
      id: 8,
      title: "Support & Growth",
      desc: "Ongoing support, training, and growth strategies keep your business thriving in the digital economy."
    }
  ];

  return (
    <section className="pt-40 pb-32 bg-white px-6 lg:px-20 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#3ACBB1] font-black tracking-[0.4em] uppercase text-xs mb-6"
        >
          How it Works
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black text-[#1A2B56] mb-8 tracking-tighter"
        >
          THE <span className="text-[#3ACBB1]">8-STEP</span> JOURNEY
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-slate-500 font-medium leading-relaxed"
        >
          A more comprehensive, 8-step journey designed to take your business from concept to market leader.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-8 md:gap-12"
          >
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#3ACBB1] flex items-center justify-center text-[#3ACBB1] text-2xl font-black shadow-[0_10px_30px_rgba(58,203,177,0.1)]">
              {step.id}
            </div>
            
            <div className="flex-grow p-8 md:p-12 rounded-[2.5rem] border-2 border-[#3ACBB1]/20 bg-white shadow-xl shadow-slate-100/50 hover:border-[#3ACBB1] transition-all duration-500 group">
              <h3 className="text-2xl md:text-3xl font-black text-[#1A2B56] mb-4 group-hover:text-[#3ACBB1] transition-colors">
                {step.title}
              </h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ReadyToGrow = ({ onAction }: { onAction: (m: string) => void }) => {
  return (
    <section className="py-24 bg-[#1A2B56] text-white overflow-hidden relative" id="contact">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3ACBB1] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3ACBB1] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-[#3ACBB1] animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase">Free Consultation Available</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          Ready to Grow Your <br />
          <span className="text-[#3ACBB1]">Business Online?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium"
        >
          Talk to our team today — free consultation, transparent pricing, and guaranteed delivery. Join 1500+ Tamil Nadu businesses who trust us.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
        >
          <button 
            onClick={() => onAction("Redirecting to WhatsApp...")}
            className="w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-green-500/20"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp Us Now
          </button>
          <button 
            onClick={() => onAction("Initiating call...")}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 hover:border-[#3ACBB1] hover:bg-[#3ACBB1]/10 text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest text-sm transition-all"
          >
            <Phone className="w-6 h-6" />
            Call +91 8072117912
          </button>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left mb-20 border-t border-white/10 pt-20">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#3ACBB1] flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">Location</p>
              <p className="font-bold text-white">Coimbatore & Erode, Tamil Nadu</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#3ACBB1] flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">Email</p>
              <p className="font-bold text-white">zynapse@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#3ACBB1] flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">Phone</p>
              <p className="font-bold text-white">+91 8072117912</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#3ACBB1] flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-white/40 uppercase mb-1">Working Hours</p>
              <p className="font-bold text-white">Mon–Sat, 9AM – 7PM</p>
            </div>
          </div>
        </div>

        {/* Mini Features */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[
            "Free Consultation",
            "No Hidden Charges",
            "On-Time Delivery",
            "1500+ Clients Served",
            "Post-Support Included"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/50">
              <CheckCircle2 className="w-4 h-4 text-[#3ACBB1]" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Loader = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] bg-[#1A2B56] flex flex-col items-center justify-center"
  >
    <div className="w-20 h-20 relative">
      <div className="absolute inset-0 border-4 border-[#3ACBB1]/20 rounded-full" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-4 border-t-[#3ACBB1] rounded-full"
      />
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="mt-8 text-[#3ACBB1] font-black uppercase tracking-[0.4em] text-xs"
    >
      Loading Zynapse
    </motion.div>
  </motion.div>
);

const RefundPolicyView = () => {
  return (
    <div className="pt-32 pb-24 bg-white px-6 lg:px-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#3ACBB1] font-black tracking-[0.4em] uppercase text-xs mb-4"
        >
          Customer Satisfaction
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-[#1A2B56] mb-12"
        >
          Refund & <span className="text-[#3ACBB1]">Policy</span>
        </motion.h1>

        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              At Tamilnadu Digital, we prioritize customer satisfaction and are committed to delivering the best possible web solutions. However, in situations where a client is dissatisfied, we have outlined a transparent and fair Refund & Cancellation Policy.
            </p>
          </section>

          <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h3 className="text-2xl font-black text-[#1A2B56] mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#3ACBB1] rounded-full" />
              Cancellation Policy
            </h3>
            <p className="text-slate-600 mb-6 font-medium">If a client wishes to cancel an ongoing project or service, they must send an official request to:</p>
            <div className="bg-[#1A2B56] p-6 rounded-2xl inline-block mb-6">
              <p className="text-[#3ACBB1] font-black tracking-widest text-lg">📧 contact@tamilnadudigital.com</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold mb-6">
              <span className="text-xl">⚠️</span>
              <p>Please note: Cancellation requests made via phone calls, WhatsApp, or any other medium will not be accepted or processed.</p>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Once we receive your email request, our team will carefully review your concern and respond with the next steps. If the issue is found to be on our end, we will provide a resolution or initiate internal action within 7 working days.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-black text-[#1A2B56] mb-8">Refund Eligibility Table</h3>
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1A2B56] text-white">
                    <th className="px-8 py-6 font-black uppercase tracking-widest text-xs">Reason</th>
                    <th className="px-8 py-6 font-black uppercase tracking-widest text-xs">Refund Policy</th>
                    <th className="px-8 py-6 font-black uppercase tracking-widest text-xs">Explanation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="px-8 py-6 font-bold text-slate-700">Within 24 hours of payment</td>
                    <td className="px-8 py-6"><span className="px-3 py-1 bg-[#E6FFFA] text-[#3ACBB1] rounded-lg font-black text-[10px]">✅ 90% REFUND</span></td>
                    <td className="px-8 py-6 text-slate-500 text-sm">10% deducted for gateway/accounting</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 font-bold text-slate-700">Within 2–3 days</td>
                    <td className="px-8 py-6"><span className="px-3 py-1 bg-[#E6FFFA] text-[#3ACBB1] rounded-lg font-black text-[10px]">✅ 50% REFUND</span></td>
                    <td className="px-8 py-6 text-slate-500 text-sm">Resource allocation starts immediately</td>
                  </tr>
                  <tr>
                    <td className="px-8 py-6 font-bold text-slate-700">After 3 days of payment</td>
                    <td className="px-8 py-6"><span className="px-3 py-1 bg-red-50 text-red-500 rounded-lg font-black text-[10px]">❌ NO REFUND</span></td>
                    <td className="px-8 py-6 text-slate-500 text-sm">Work initiation makes refund ineligible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-2xl font-black text-[#1A2B56]">Acceptable Grounds For Refund</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Extra Payment", status: "100% Refund", color: "green", desc: "After gateway charges." },
                { title: "Design Disinterest", status: "No Refund", color: "red", desc: "We provide multiple revisions." },
                { title: "Delivery Delay", status: "Up to 50%", color: "green", desc: "After internal review of delay." },
                { title: "SEO Performance", status: "No Refund", color: "red", desc: "We offer 2 months extra service instead." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-lg shadow-slate-100">
                  <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-2">{item.title}</p>
                  <p className={`text-xl font-black mb-2 ${item.color === 'green' ? 'text-[#3ACBB1]' : 'text-red-500'}`}>{item.status}</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[#3ACBB1] p-12 rounded-[3rem] text-white">
            <h3 className="text-3xl font-black mb-6">How to Request a Refund</h3>
            <p className="font-bold mb-8 text-white/90">Email us at contact@tamilnadudigital.com include your reason, service name, and payment details.</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">Original Source Only</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">Verified Terms</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicyView = () => {
  return (
    <div className="pt-32 pb-24 bg-white px-6 lg:px-20 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#3ACBB1] font-black tracking-[0.4em] uppercase text-xs mb-4"
        >
          Data Protection
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-[#1A2B56] mb-12"
        >
          Privacy & <span className="text-[#3ACBB1]">Policy</span>
        </motion.h1>

        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Introduction: This Privacy Policy (“Policy”) explains the privacy practices of Tamilnadu Digital regarding the collection, use, and sharing of your personal and organizational data.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-[#1A2B56] mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#3ACBB1] rounded-full" />
                Information We Collect
              </h3>
              <ul className="space-y-4">
                {[
                  "Name and job title",
                  "Contact information (email/phone)",
                  "Demographic details (location)",
                  "Business-related information",
                  "Survey & feedback details"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#3ACBB1]" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#1A2B56] mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#3ACBB1] rounded-full" />
                How We Use Data
              </h3>
              <ul className="space-y-4">
                {[
                  "Internal record keeping",
                  "Improving services & offerings",
                  "Promotional communications",
                  "Market research & surveys",
                  "Personalizing web experience"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#3ACBB1]" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-inner">
            <h3 className="text-2xl font-black text-[#1A2B56] mb-6">Data Security & Trust</h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-8">
              We implement a combination of physical, electronic, and administrative procedures to safeguard the information we collect. Tamilnadu Digital never sells or shares your information with third parties without your explicit consent.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-200">
               <div className="w-12 h-12 bg-[#3ACBB1]/10 rounded-2xl flex items-center justify-center text-[#3ACBB1]">
                 <AtSign className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inquiries</p>
                 <p className="text-[#1A2B56] font-black">support@tamilnadudigital.com</p>
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<"main" | "journey" | "refund" | "privacy">("main");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false });

  const handleSetView = (newView: "main" | "journey" | "refund" | "privacy") => {
    setLoading(true);
    setTimeout(() => {
      setView(newView);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => setLoading(false), 500);
    }, 800);
  };

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <Navbar onAction={showToast} setView={handleSetView} currentView={view} />
      <main>
        <AnimatePresence mode="wait">
          {view === "main" ? (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onAction={showToast} />
              <CoreServices onAction={showToast} />
              <Process />
              <TeamSection />
              <ReadyToGrow onAction={showToast} />
              <TeamFeatures />
              <OfficeMap />
            </motion.div>
          ) : view === "journey" ? (
            <motion.div
              key="journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProcessJourneyView />
            </motion.div>
          ) : view === "refund" ? (
            <motion.div
              key="refund"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RefundPolicyView />
            </motion.div>
          ) : view === "privacy" ? (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PrivacyPolicyView />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
      <Footer onAction={showToast} setView={handleSetView} />

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
