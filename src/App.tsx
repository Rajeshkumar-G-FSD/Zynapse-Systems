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
  ChevronDown,
  Zap,
  Server,
  CreditCard,
  BarChart3
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline px-8 py-4 flex justify-between items-center max-w-full">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-[#FF2D55] to-[#FF9500] rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
        </div>
        <div className="text-xl font-black tracking-tighter text-on-surface uppercase">zynapse systems</div>
      </div>
      
      <div className="hidden md:flex gap-8 items-center font-sans text-[14px] font-bold">
        <div className="flex items-center gap-1 cursor-pointer hover:text-secondary-accent transition-colors">
          Company <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-secondary-accent transition-colors">
          Products <ChevronDown className="w-4 h-4" />
        </div>
        <a href="#careers" className="cursor-pointer hover:text-secondary-accent transition-colors">Careers</a>
        <div className="cursor-pointer hover:text-secondary-accent transition-colors">Customers</div>
        <div className="cursor-pointer hover:text-secondary-accent transition-colors">Support</div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-gradient px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-secondary-accent/20"
      >
        Join Us
      </motion.button>
    </nav>
  );
};

const Hero = () => {
  const [word, setWord] = useState("Products");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWord((prev) => (prev === "Products" ? "Software" : "Products"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden px-6 soft-gradient-bg">
      {/* Floating Decorative Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[15%] p-4 bg-[#FF9500]/20 rounded-xl brutal-border hidden lg:block"
      >
        <Server className="w-10 h-10 text-[#FF9500]" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] p-4 bg-[#7000FF]/10 rounded-xl brutal-border hidden lg:block"
      >
        <CreditCard className="w-10 h-10 text-[#7000FF]" />
      </motion.div>

      <motion.div 
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[10%] p-4 bg-[#007AFF]/10 rounded-xl brutal-border hidden lg:block"
      >
        <Zap className="w-10 h-10 text-[#007AFF]" />
      </motion.div>

      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] right-[12%] p-4 bg-[#34C759]/10 rounded-xl brutal-border hidden lg:block"
      >
        <BarChart3 className="w-10 h-10 text-[#34C759]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] text-black"
        >
          Exceptional{" "}
          <span className="inline-block min-w-[300px] md:min-w-[450px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </AnimatePresence>
          </span>
          <br/>
          charged with <br/>
          <span className="text-gradient-ai">AI Superpowers</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-3xl mx-auto leading-relaxed"
        >
          Best-in-class Azure management, and documentation software. Now amped up with AI.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 pt-4"
        >
          <button className="btn-gradient px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-secondary-accent/20">Get Started</button>
          <button className="bg-white brutal-border px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-low transition-colors">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};

const Expertise = () => {
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
            className="group p-10 bg-surface-container-low rounded-3xl brutal-border yellow-glow transition-all duration-300 flex flex-col justify-between aspect-square"
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

const Pricing = () => {
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
          <button className="w-full py-5 rounded-full brutal-border font-black uppercase text-xs tracking-widest hover:bg-accent transition-all">Select Plan</button>
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
          <button className="w-full py-5 btn-gradient rounded-full text-white font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all">Select Plan</button>
        </div>
        {/* Enterprise */}
        <div className="p-12 bg-white rounded-3xl brutal-border yellow-glow flex flex-col justify-between h-full">
          <div>
            <h4 className="text-[12px] font-black text-black uppercase tracking-[0.4em] mb-6 bg-accent inline-block px-2 rounded-md">Enterprise</h4>
            <div className="text-5xl font-black mb-10 tracking-tighter uppercase text-black">Custom</div>
            <p className="text-black/70 text-sm mb-12 font-bold leading-relaxed">Full-scale digital transformation including legacy migration and custom AI model training.</p>
          </div>
          <button className="w-full py-5 rounded-full brutal-border font-black uppercase text-xs tracking-widest hover:bg-accent transition-all">Get Quote</button>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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

const Careers = () => {
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
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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

const Contact = () => {
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
          <a className="inline-flex items-center gap-4 px-10 py-5 bg-accent text-black brutal-border font-black uppercase text-xs tracking-widest yellow-glow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" href="#">
            <MessageSquare className="w-4 h-4" />
            WhatsApp Quote
          </a>
        </div>
        <div className="bg-white p-10 md:p-16 brutal-border yellow-glow">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
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

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-white flex flex-col items-center justify-center text-center px-10 border-t-4 border-black">
      <div className="text-2xl font-black text-black mb-4 uppercase tracking-tighter bg-accent px-4 brutal-border">zynapse systems</div>
      <div className="flex flex-wrap justify-center gap-10 mb-8 font-sans text-[10px] uppercase font-black tracking-[0.2em] text-black/40">
        <a className="hover:text-black transition-all" href="#">Privacy Policy</a>
        <a className="hover:text-black transition-all" href="#">Terms of Service</a>
        <a className="hover:text-black transition-all" href="#">Expertise</a>
        <a className="hover:text-black transition-all" href="#">Contact</a>
      </div>
      <div className="flex gap-6 mb-12">
        <a className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-accent transition-colors yellow-glow" href="#">
          <Share2 className="w-4 h-4 text-black" />
        </a>
        <a className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-accent transition-colors yellow-glow" href="#">
          <Globe className="w-4 h-4 text-black" />
        </a>
        <a className="w-12 h-12 bg-white brutal-border flex items-center justify-center hover:bg-accent transition-colors yellow-glow" href="#">
          <AtSign className="w-4 h-4 text-black" />
        </a>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-4 h-4 bg-accent brutal-border"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black">Ready for deployment</span>
      </div>
      <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-black/30 font-bold">© 2024 zynapse systems Editorial Intelligence. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Process />
        <Pricing />
        <Portfolio />
        <Careers />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
