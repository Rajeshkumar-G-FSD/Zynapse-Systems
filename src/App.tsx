/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant px-8 py-6 flex justify-between items-center max-w-full">
      <div className="text-2xl font-black tracking-tighter text-on-surface uppercase">zynapse systems</div>
      <div className="hidden md:flex gap-10 items-center font-sans text-[12px] uppercase font-semibold tracking-[0.1em]">
        <a className="text-on-surface hover:opacity-100 transition-opacity" href="#expertise">Expertise</a>
        <a className="text-on-surface/60 hover:opacity-100 transition-opacity" href="#process">Process</a>
        <a className="text-on-surface/60 hover:opacity-100 transition-opacity" href="#packages">Packages</a>
        <a className="text-on-surface/60 hover:opacity-100 transition-opacity" href="#portfolio">Portfolio</a>
        <a className="text-on-surface/60 hover:opacity-100 transition-opacity" href="#testimonials">Testimonials</a>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider"
      >
        Start Project
      </motion.button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden px-6">
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] visual-accent-blur rounded-full z-0"></div>
      <div className="relative z-10 max-w-7xl w-full text-left space-y-4">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-accent text-[12px] font-bold tracking-[0.4em] uppercase"
        >
          Future of Interfaces
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[100px] md:text-[180px] font-black tracking-[-0.06em] leading-[0.82] uppercase -ml-2"
        >
          Digital <br/>
          <span className="accent-text-stroke">Senses</span>
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-on-surface-variant font-light leading-relaxed"
          >
            Pushing the boundaries of human-computer interaction through bold aesthetics and spatial computing architecture.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-10 items-end"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.1em] opacity-40">Version</span>
              <span className="font-mono text-sm font-bold">04.22.9</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.1em] opacity-40">Core</span>
              <span className="font-mono text-sm font-bold">NEURAL_OS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const cards = [
    {
      icon: <LayoutDashboard className="w-10 h-10 text-accent" />,
      title: "SaaS Architecture",
      description: "Scalable cloud-native platforms engineered for high-volume enterprise operations."
    },
    {
      icon: <Cpu className="w-10 h-10 text-accent" />,
      title: "AI Integration",
      description: "Infusing products with machine learning to automate complex editorial workflows."
    },
    {
      icon: <Globe className="w-10 h-10 text-accent" />,
      title: "Web Experience",
      description: "Immersive, high-performance web applications that redefine digital presence."
    }
  ];

  return (
    <section className="py-32 bg-background px-6 lg:px-20" id="expertise">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-[12px] font-bold tracking-[0.4em] uppercase text-accent mb-4">What We Do</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-tight uppercase">Digital Craftsmanship.</h3>
        </div>
        <div className="text-on-surface-variant text-lg font-mono">Starting from <span className="text-white font-bold">₹49,999</span></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="group p-10 rounded-3xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-500 flex flex-col justify-between aspect-square border border-outline-variant"
          >
            {card.icon}
            <div>
              <h4 className="text-2xl font-black text-on-surface mb-2 uppercase tracking-tight">{card.title}</h4>
              <p className="text-on-surface-variant leading-relaxed font-light">{card.description}</p>
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
        <h2 className="text-[12px] font-bold tracking-[0.4em] uppercase text-accent mb-4">The Methodology</h2>
        <h3 className="text-5xl md:text-8xl font-black text-on-surface uppercase tracking-tighter">How We Build</h3>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 text-center lg:text-left">
              <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center mx-auto lg:mx-0 border border-outline">
                <span className="text-accent font-mono text-lg font-bold">{step.id}</span>
              </div>
              <h5 className="text-xl font-black uppercase tracking-tight">{step.title}</h5>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-32 bg-background px-6 lg:px-20" id="packages">
      <div className="text-center mb-20">
        <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-on-surface uppercase">Service Tiers</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="p-12 rounded-3xl bg-surface-container-low border border-outline-variant flex flex-col justify-between h-full">
          <div>
            <h4 className="text-[12px] font-bold text-accent uppercase tracking-[0.4em] mb-6">Starter</h4>
            <div className="text-5xl font-black mb-10 tracking-tighter uppercase">₹49,999<span className="text-sm text-on-surface-variant font-normal lowercase">/project</span></div>
            <ul className="space-y-5 mb-12">
              <li className="flex items-center gap-3 text-sm font-light"><CheckCircle2 className="w-5 h-5 text-accent" /> Responsive Web Design</li>
              <li className="flex items-center gap-3 text-sm font-light"><CheckCircle2 className="w-5 h-5 text-accent" /> Core CMS Integration</li>
              <li className="flex items-center gap-3 text-sm font-light"><CheckCircle2 className="w-5 h-5 text-accent" /> 2 Weeks Support</li>
            </ul>
          </div>
          <button className="w-full py-5 rounded-full border border-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Select Plan</button>
        </div>
        {/* Growth */}
        <div className="p-12 rounded-3xl bg-surface-container-high border-2 border-accent flex flex-col justify-between h-full relative scale-105 shadow-2xl shadow-accent/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Recommended</div>
          <div>
            <h4 className="text-[12px] font-bold text-accent uppercase tracking-[0.4em] mb-6">Growth</h4>
            <div className="text-5xl font-black mb-10 tracking-tighter uppercase">₹1,49,999<span className="text-sm text-on-surface-variant font-normal lowercase">/project</span></div>
            <ul className="space-y-5 mb-12">
              <li className="flex items-center gap-3 text-sm font-light"><CheckCircle2 className="w-5 h-5 text-accent" /> Custom Mobile App</li>
              <li className="flex items-center gap-3 text-sm font-light"><CheckCircle2 className="w-5 h-5 text-accent" /> AI-Driven Personalization</li>
              <li className="flex items-center gap-3 text-sm font-light"><CheckCircle2 className="w-5 h-5 text-accent" /> Advanced Analytics Hub</li>
              <li className="flex items-center gap-3 text-sm font-light"><CheckCircle2 className="w-5 h-5 text-accent" /> 1 Month Priority Support</li>
            </ul>
          </div>
          <button className="w-full py-5 rounded-full bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-all">Select Plan</button>
        </div>
        {/* Enterprise */}
        <div className="p-12 rounded-3xl bg-surface-container-low border border-outline-variant flex flex-col justify-between h-full">
          <div>
            <h4 className="text-[12px] font-bold text-accent uppercase tracking-[0.4em] mb-6">Enterprise</h4>
            <div className="text-5xl font-black mb-10 tracking-tighter uppercase">Custom</div>
            <p className="text-on-surface-variant text-sm mb-12 font-light leading-relaxed">Full-scale digital transformation including legacy migration and custom AI model training.</p>
          </div>
          <button className="w-full py-5 rounded-full border border-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">Get Quote</button>
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
    <section className="py-32 bg-background px-6 lg:px-20" id="portfolio">
      <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 uppercase">The Portfolio</h3>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover="hover"
            className={`${project.span} group relative rounded-3xl overflow-hidden cursor-pointer border border-outline-variant`}
          >
            <motion.img 
              variants={{ hover: { scale: 1.05, filter: "grayscale(0%)" } }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover" 
              src={project.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute bottom-10 left-10">
              <p className="text-accent text-[10px] font-bold tracking-[0.4em] mb-2 uppercase">{project.category}</p>
              <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight">{project.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-background px-6 lg:px-20" id="testimonials">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-8">
          <div className="w-16 h-[2px] bg-accent my-auto"></div>
          <h3 className="text-[12px] font-bold tracking-[0.4em] uppercase text-accent">Voices of Trust</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 p-12 rounded-[3rem] bg-surface-container-low border border-outline-variant">
            <Quote className="w-10 h-10 text-accent" />
            <p className="text-xl font-light leading-relaxed text-on-surface">
              "Zynapse transformed our archaic e-commerce site into a high-performance engine. Their editorial eye for detail is unmatched."
            </p>
            <div>
              <p className="font-black uppercase tracking-tight text-on-surface">Arun Kumar</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">CTO, Zenith Retail</p>
            </div>
          </div>
          <div className="space-y-6 p-12 rounded-[3rem] bg-surface-container-low border border-outline-variant">
            <Quote className="w-10 h-10 text-accent" />
            <p className="text-xl font-light leading-relaxed text-on-surface">
              "The level of technical expertise and delivery speed surpassed all our expectations. They are true partners in innovation."
            </p>
            <div>
              <p className="font-black uppercase tracking-tight text-on-surface">Priya Sharma</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Founder, DataFlow</p>
            </div>
          </div>
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
          <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">
            Ready to <br/><span className="accent-text-stroke">Scale?</span>
          </h3>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <MapPin className="w-6 h-6 text-accent" />
              <div>
                <h5 className="font-bold uppercase tracking-[0.4em] text-[10px] mb-1 text-accent">Global HQ</h5>
                <p className="text-on-surface-variant font-mono text-sm">Chennai, India — The Silicon Coast</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <Mail className="w-6 h-6 text-accent" />
              <div>
                <h5 className="font-bold uppercase tracking-[0.4em] text-[10px] mb-1 text-accent">Email Inquiry</h5>
                <p className="text-on-surface-variant font-mono text-sm">intelligence@zynapse.io</p>
              </div>
            </div>
          </div>
          <div className="h-64 rounded-3xl overflow-hidden grayscale border border-outline-variant">
            <img 
              className="w-full h-full object-cover opacity-30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjkeouyzaCVR3NvYYadH0mLtLOUytic3n5naS5sYf1lzXWHH29p9jaHYB_jWHTWbq9c5W9YJLj7o0tNOQns7l8QVC4RNx1cRrhGKQXWivynVMTNQ-emPhVt7RwJOcRkFAmE5QxaMaChQuIJYrQcg6fFiKkcmjzPOLdDXbJQylF2zu1pQD6EGP0EF7R0vZJtinBXoy4zx21a3ESLmQEncPyf2JvNVNVV-zoo0qlxgoaKoaa3dZb9npH9cAR8y5HfbeLesrQwGfvclDx" 
              referrerPolicy="no-referrer"
            />
          </div>
          <a className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black uppercase text-xs tracking-widest hover:bg-accent hover:text-white transition-all" href="#">
            <MessageSquare className="w-4 h-4" />
            WhatsApp Quote
          </a>
        </div>
        <div className="bg-surface-container-lowest p-10 md:p-16 rounded-[4rem] border border-outline-variant shadow-2xl">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Full Name</label>
              <input className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent/20 text-on-surface placeholder:text-outline/40 font-mono text-sm" placeholder="John Doe" type="text"/>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Email Address</label>
              <input className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent/20 text-on-surface placeholder:text-outline/40 font-mono text-sm" placeholder="john@enterprise.com" type="email"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Project Type</label>
                <select className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent/20 text-on-surface appearance-none font-mono text-sm">
                  <option>SaaS Platform</option>
                  <option>Mobile App</option>
                  <option>Corporate Web</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Budget</label>
                <select className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent/20 text-on-surface appearance-none font-mono text-sm">
                  <option>₹50k - ₹1.5L</option>
                  <option>₹1.5L - ₹5L</option>
                  <option>₹5L+</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Project Brief</label>
              <textarea className="w-full bg-surface-container-low border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent/20 text-on-surface placeholder:text-outline/40 font-mono text-sm" placeholder="Tell us about your vision..." rows={4}></textarea>
            </div>
            <button className="w-full py-6 rounded-full bg-white text-black font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-accent/20 hover:translate-y-[-2px] active:translate-y-[0] transition-all">
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
    <footer className="w-full pt-20 pb-10 bg-background flex flex-col items-center justify-center text-center px-10 border-top border-outline-variant">
      <div className="text-2xl font-black text-on-surface mb-4 uppercase tracking-tighter">zynapse systems</div>
      <div className="flex flex-wrap justify-center gap-10 mb-8 font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface/40">
        <a className="hover:text-on-surface transition-all" href="#">Privacy Policy</a>
        <a className="hover:text-on-surface transition-all" href="#">Terms of Service</a>
        <a className="hover:text-on-surface transition-all" href="#">Expertise</a>
        <a className="hover:text-on-surface transition-all" href="#">Contact</a>
      </div>
      <div className="flex gap-6 mb-12">
        <a className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity border border-outline-variant" href="#">
          <Share2 className="w-4 h-4 text-on-surface" />
        </a>
        <a className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity border border-outline-variant" href="#">
          <Globe className="w-4 h-4 text-on-surface" />
        </a>
        <a className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity border border-outline-variant" href="#">
          <AtSign className="w-4 h-4 text-on-surface" />
        </a>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">Ready for deployment</span>
      </div>
      <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface/30">© 2024 zynapse systems Editorial Intelligence. All rights reserved.</p>
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
