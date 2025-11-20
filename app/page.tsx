'use client';

import React, { useState, useEffect } from 'react';
import { FaBehance, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaInstagram  } from "react-icons/fa6";


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesSlide, setServicesSlide] = useState(0);
  const [portfolioSlide, setPortfolioSlide] = useState(0);
  const [portfolioFilter, setPortfolioFilter] = useState("All");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  useEffect(() => {
    if (!isMobile) return; // only mobile
    const interval = setInterval(() => {
      setServicesSlide((prev) =>
        prev + 1 > 2 ? 0 : prev + 1 // because you have 3 service slides
      );
    }, 3500);
  
    return () => clearInterval(interval);
  }, [isMobile]);
  



  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Icon components
  const MoonIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#323946" stroke="#323946" strokeWidth="2"  className="bg-[#00eeff] rounded-full p-1">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const SunIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#323946" stroke="#323946" strokeWidth="2" className="bg-[#] rounded-full p-1">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );

  const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#00eeff" stroke="#00eeff" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#00eeff" stroke="#00eeff" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "white" : "#323946"} strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "white" : "#323946"} strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
  const portfolioItems = [
    {
      id: "card1",
      title: "AON Studios",
      subtitle: "Architecture/Design Website",
      image: "/Img/design1.png",
      category: "Product Design",
    },
    {
      id: "card2",
      title: "Agroease",
      subtitle: "Agro E-commerce Website",
      image: "/Img/e-commerce1.png",
      category: "Web Development",
    },
    {
      id: "card3",
      title: "Starserv Agro",
      subtitle: "Agricultural Empowerment Website",
      image: "/Img/Screenshot (60).png",
      category: "Web Development",
    },
    {
      id: "card4",
      title: "Agroease",
      subtitle: "Agricultural Firm Website",
      image: "/Img/agro-website1 (1).png",
      category: "Graphic Design",
    },
  ];
  
  const filteredPortfolio = portfolioItems.filter(
    (item) => portfolioFilter === "All" || item.category === portfolioFilter
  );
  
  const totalPortfolioSlides =
    filteredPortfolio.length <= 2
      ? 1
      : Math.ceil(filteredPortfolio.length / 2);
  
  // IMPORTANT — This must be at top level
  useEffect(() => {
    if (filteredPortfolio.length <= 2) return; // don't auto-slide if no real carousel
  
    const interval = setInterval(() => {
      setPortfolioSlide((prev) =>
        prev + 1 >= totalPortfolioSlides ? 0 : prev + 1
      );
    }, 4000);
  
    return () => clearInterval(interval);
  }, [filteredPortfolio, totalPortfolioSlides]);
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        .orange-gradient {
          background: linear-gradient(135deg, #b2f9ff 0%, #00eeff 100%);
        }
        
        .dark .orange-gradient {
          background: linear-gradient(135deg, #b2f9ff 0%, #00eeff 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="orange-gradient text-[#323946] px-4 py-2 rounded-full font-semibold">
                JIYOHA
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`${darkMode ? 'text-[#00eeff] hover:text-white' : 'text-[#00eeff] hover:text-[#323946]'}`}>Home</a>
              <a href="#services" className={`${darkMode ? 'text-[#00eeff] hover:text-white' : 'text-[#00eeff] hover:text-gray-900'}`}>Services</a>
              <a href="#portfolio" className={`${darkMode ? 'text-[#00eeff] hover:text-white' : 'text-[#00eeff] hover:text-gray-900'}`}>Portfolio</a>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-[#00eeff]' : 'bg-[#00eeff]'}`}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
  className="orange-gradient text-[#323946] px-6 py-2 rounded-full font-medium"
  onClick={() => window.location.href = "mailto:jiyoha79@gmail.com"}
>
  Contact
</button>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t`}>
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#home" className={`block px-3 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Home</a>
              <a href="#services" className={`block px-3 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Services</a>
              <a href="#portfolio" className={`block px-3 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Portfolio</a>
              <button
  className="orange-gradient text-[#323946] px-6 py-2 rounded-full font-medium"
  onClick={() => window.location.href = "mailto:jiyoha79@gmail.com"}
>
  Contact
</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="inline-block mb-4 px-4 py-1 border-2 border-gray-300 dark:border-gray-600 rounded-full">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>HI</span>
              </div>
              <h1 className={`text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                I'm <span style={{color: '#00eeff'}}>Joshua</span>,
              </h1>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                A FullStack Developer and Graphic Designer
              </h2>
              <a href="/IYOHA_JOSHUA_CV.pdf" download>
  <button className="orange-gradient text-[#323946] px-8 py-3 rounded-full font-medium flex items-center space-x-2">
    <span>Download CV</span>
    <ArrowRightIcon />
  </button>
</a>

            </div>
            <div className="lg:w-1/2 relative">
  <div className="relative w-80 h-80 mx-auto">
    {/* Outer glow circle */}
    <div
      className="absolute inset-0 rounded-full"
      style={{ background: "#00eeff", opacity: 0.2 }}
    ></div>

    {/* Inner clipped circle */}
    <div
      className="absolute inset-8 rounded-full overflow-hidden"
      style={{ background: "#00eeff" }}
    >
      {/* Clipped Image */}
      <img
        src="/Img/Award.png"
        alt="Background"
        className="w-full h-full object-cover object-center rounded-full"
      />

      {/* Gray overlay & content */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          darkMode ? "bg-gray-700/60" : "bg-gray-200/70"
        }`}
      >
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
          </div>

          <div
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            4+ Years
          </div>

          <div
            className={`text-sm ${
              darkMode ? "text-white" : "text-gray-600"
            }`}
          >
            Experience
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
  id="services"
  className={`py-16 px-4 sm:px-6 lg:px-8 ${
    darkMode ? "bg-gray-800" : "bg-gray-900"
  } relative overflow-hidden`}
>
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <h2 className="text-4xl font-bold mb-4 text-white">
      My <span className="text-cyan-400">Services</span>
    </h2>
    <p className="mb-12 text-white max-w-2xl">
    High-quality design and development services built to elevate your brand and create meaningful digital impact.
    </p>

    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${servicesSlide * 100}%)` }}
        >
          {[
            {
              title: "Web Development",
              image: "/Img/Agroconnect.png",
            },
            {
              title: "Graphic Design",
              image: "/Img/New One.png",
            },
            {
              title: "Brand Design",
              image: "/Img/Bay.png",
            },
          ].map((service, idx) => (
            <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-4">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:scale-105 transition-all h-full">

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 text-white">{service.title}</h3>

                {/* Image Preview (Single Image Per Card) */}
                <div className="backdrop-blur-sm bg-white/10 rounded-2xl mb-4 overflow-hidden h-64 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Button */}
                <button className="absolute bottom-6 right-6 bg-gray-800/80 text-white p-4 rounded-full group-hover:bg-cyan-500 transition-colors border border-white/10">
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Work Experience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className={`text-4xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      My <span style={{color: '#00eeff'}}>Work Experience</span>
    </h2>

    <div className="flex justify-center">
      <div className="relative max-w-4xl w-full">

        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
          style={{background: 'linear-gradient(to bottom, #00eeff, #545454, #00eeff, #545454, #00eeff, #545454)'}}>
        </div>

        <div className="space-y-16">

          {/* ===========================
               ITEM 1 (LEFT)
               =========================== */}
          <div className="relative md:flex items-center">
            
            {/* Card */}
            <div className="md:w-1/2 pr-8 text-right">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-r-4 inline-block`}
                style={{borderColor: '#00eeff'}}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  C&I Leasing Plc, Nigeria
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  Jan 2018 - Sep 2018
                </p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  IT Support Intern
                </p>
              </div>
            </div>

            {/* Dot */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
              style={{background: '#00eeff', boxShadow: '0 0 0 4px rgba(0, 238, 255, 0.2)'}}
            ></div>

            <div className="md:w-1/2 pl-8"></div>
          </div>


          {/* ===========================
               ITEM 2 (RIGHT)
               =========================== */}
          <div className="relative md:flex items-center">

            <div className="md:w-1/2 pr-8"></div>

            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
              style={{background:'#545454', boxShadow:'0 0 0 4px rgba(84, 84, 84, 0.2)'}}
            ></div>

            <div className="md:w-1/2 pl-8">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-l-4 inline-block`}
                style={{borderColor: '#545454'}}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Malachy Microfinance Bank, Nigeria</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>June 2023 - Present</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>IT Consultant</p>
              </div>
            </div>

          </div>


          {/* ===========================
               ITEM 3 (LEFT)
               =========================== */}
          <div className="relative md:flex items-center">
            
            <div className="md:w-1/2 pr-8 text-right">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-r-4 inline-block`}
                style={{borderColor: '#00eeff'}}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Wootlab Foundation, Nigeria</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Oct 2023 - Nov 2023</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Web Dev Tutor</p>
              </div>
            </div>

            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
              style={{background:'#00eeff', boxShadow:'0 0 0 4px rgba(0,238,255,0.2)'}}
            ></div>

            <div className="md:w-1/2 pl-8"></div>
          </div>


          {/* ===========================
               ITEM 4 (RIGHT)
               =========================== */}
          <div className="relative md:flex items-center">

            <div className="md:w-1/2 pr-8"></div>

            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
              style={{background:'#545454', boxShadow:'0 0 0 4px rgba(84, 84, 84, 0.2)'}}
            ></div>

            <div className="md:w-1/2 pl-8">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-l-4 inline-block`}
                style={{borderColor: '#545454'}}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Agroease Ltd, Nigeria</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Oct 2023 - Present</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Chief Digital Officer</p>
              </div>
            </div>

          </div>


          {/* ===========================
               ITEM 5 (LEFT)
               =========================== */}
          <div className="relative md:flex items-center">
            
            <div className="md:w-1/2 pr-8 text-right">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-r-4 inline-block`}
                style={{borderColor: '#00eeff'}}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>TBI, Mauritius</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>June 2025 - Aug 2025</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Content Writer & Wordpress Developer</p>
              </div>
            </div>

            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
              style={{background:'#00eeff', boxShadow:'0 0 0 4px rgba(0,238,255,0.2)'}}
            ></div>

            <div className="md:w-1/2 pl-8"></div>
          </div>


          {/* ===========================
               ITEM 6 (RIGHT)
               =========================== */}
          <div className="relative md:flex items-center">

            <div className="md:w-1/2 pr-8"></div>

            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
              style={{background:'#545454', boxShadow:'0 0 0 4px rgba(84,84,84,0.2)'}}
            ></div>

            <div className="md:w-1/2 pl-8">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-l-4 inline-block`}
                style={{borderColor: '#545454'}}>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Kirawa Limited, Mauritius</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Sep 2025 - Present</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>IT Administrator & Graphic Designer</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</section>


      {/* Why Hire Me */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'} relative overflow-hidden`}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
              <div className="relative w-80 h-96 mx-auto">
                <div className="absolute inset-0 rounded-full" style={{background: '#00eeff', opacity: 0.2}}></div>
                <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center" style={{ background: '#00eeff' }}>
                <img src="/Img/Half.png" alt="Profile" className="w-full h-full object-cover object-[40%_center]"/>
              </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-white'}`}>
                Why <span style={{color: '#00eeff'}}>Hire me</span>?
              </h2>
              <p className={`mb-8 ${darkMode ? 'text-white' : 'text-white'}`}>
              I’m an enthusiastic problem-solver with a deep love for technology and lifelong learning. I believe in doing things the right way — with integrity, accountability, and a strong work ethic.

My skill set spans JavaScript, CSS, and Adobe Photoshop, and I enjoy building digital experiences that are both functional and visually engaging. I’m always looking for opportunities that challenge me and allow me to refine my craft.

What sets me apart is my commitment to follow-through. When I take on a task, I give it my full attention and ensure it’s completed with care, creativity, and intention.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>20+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-white'}>Project Completed</div>
                </div>
                <div>
                  <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>20+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-white'}>Happy Clients</div>
                </div>
              </div>
              
              <button className="orange-gradient text-[#323946] px-8 py-3 rounded-full font-medium" onClick={() => window.location.href = "mailto:jiyoha79@gmail.com"}>
                Hire me
              </button>
            </div>
          </div>
        </div>
      </section>

 {/* Portfolio */}
<section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
        Let's have a look at my <span className="text-cyan-400">Portfolio</span>
      </h2>
    </div>

    {/* Category Filters */}
    <div className="text-center mb-8">
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {["All", "Web Development", "Product Design", "Graphic Design"].map((cat) => (
          <button
            key={cat}
            onClick={() => setPortfolioFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              darkMode
                ? "border-gray-600 text-gray-300 hover:bg-cyan-400 hover:text-white"
                : "border-gray-300 text-gray-700 hover:bg-cyan-400 hover:text-white"
            } ${portfolioFilter === cat ? "bg-cyan-400 text-white" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    {/* Logic */}
    {(() => {
  const items = [
    {
      id: "card1",
      title: "AON Studios",
      subtitle: "Architecture/Design Website",
      image: "/Img/design1.png",
      category: "Product Design",
    },
    {
      id: "card2",
      title: "Agroease",
      subtitle: "Agro E-commerce Website",
      image: "/Img/e-commerce1.png",
      category: "Web Development",
    },
    {
      id: "card3",
      title: "Starserv Agro",
      subtitle: "Agricultural Empowerment Website",
      image: "/Img/Screenshot (60).png",
      category: "Web Development",
    },
    {
      id: "card4",
      title: "Agroease",
      subtitle: "Agricultural Firm Website",
      image: "/Img/agro-website1 (1).png",
      category: "Graphic Design",
    },
  ];

  const filteredItems = items.filter(
    (item) => portfolioFilter === "All" || item.category === portfolioFilter
  );

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(filteredItems.length / itemsPerSlide);

  // Reset slide on filter change
  useEffect(() => {
    setPortfolioSlide(0);
  }, [portfolioFilter]);

  // --- AUTOPLAY FIX ---
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioSlide((prev) => {
        if (prev + 1 >= totalSlides) return 0;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, isMobile]);

  return (
    <>
      {/* Slider */}
      <div className="relative mb-12">
        <div className="overflow-hidden py-8">
          <div
            className="flex transition-transform duration-[700ms] ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{
              transform: `translateX(-${portfolioSlide * 100}%)`,
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`${isMobile ? "w-full" : "w-1/2"} flex-shrink-0 px-4`}
              >
                <div
                  className={`${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow`}
                >
                  <div className="w-full h-48 sm:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3
                      className={`text-xl sm:text-2xl font-bold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="font-medium text-cyan-400 text-sm sm:text-base">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPortfolioSlide(index)}
              className={`h-3 rounded-full transition-all ${
                portfolioSlide === index ? "bg-cyan-400 w-8" : "bg-gray-500 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
})()}

  </div>
</section>

      {/* Project CTA */}
      <section  className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'} relative overflow-hidden`}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} rounded-3xl p-12 text-center`}>
            <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-white'}`}>
              Have an Awesome Project Idea? <span style={{color: '#00eeff'}}>Let's Discuss</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className={`flex items-center space-x-2 px-6 py-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                <MailIcon  />
                <span className={darkMode ? 'text-white' : 'text-[#323946]'}>Email me at jiyoha79@gmail.com</span>
              </div>
              <div className={`flex items-center space-x-2 px-6 py-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                <PhoneIcon />
                <span className={darkMode ? 'text-white' : 'text-[#323946]'}>+230 5502 7213</span>
              </div>
            </div>
            <button className="orange-gradient text-[#323946] px-8 py-3 rounded-full font-medium" onClick={() => window.location.href = "mailto:jiyoha79@gmail.com"}>
              Send me a message
            </button>
          </div>
        </div>
      </section>

      {/* Work Skills Section */}
<section 
  className={`py-20 px-4 sm:px-6 lg:px-8 ${
    darkMode ? 'bg-gray-800' : 'bg-white'
  }`}
>
  <div className="max-w-7xl mx-auto text-center">

    {/* Top Label */}
    <div className="inline-block mb-4 px-4 py-1 border border-gray-300 rounded-full">
      <span className={darkMode ? 'text-white' : 'text-gray-700'}>
        Skills
      </span>
    </div>

    {/* Heading */}
    <h2
      className={`text-xl sm:text-2xl mb-12 ${
        darkMode ? 'text-white' : 'text-gray-600'
      }`}
    >
      The skills, tools and technologies I am really good at:
    </h2>

    {/* Skills Grid */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">

      {[
        { name: 'Javascript', src: '/skills/JavaScript.svg' },
        { name: 'Typescript', src: '/skills/TypeScript.svg' },
        { name: 'React', src: '/skills/React.svg' },
        { name: 'Next.js', src: '/skills/Next.js.svg' },
        { name: 'Node.js', src: '/skills/Node.js.svg' },
        { name: 'Vue.js', src: '/skills/Vue.js.svg' },
        { name: 'MongoDB', src: '/skills/MongoDB.svg' },
        { name: 'Sass/Scss', src: '/skills/Sass.svg' },
        { name: 'TailwindCSS', src: '/skills/TypeScript.svg' },
        { name: 'Figma', src: '/skills/Figma.svg' },
        { name: 'Adobe Photoshop', src: '/skills/Adobe Photoshop.svg' },
        { name: 'Git', src: '/skills/Git.svg' },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img 
            src={item.src} 
            alt={item.name} 
            className="w-14 h-14 object-contain"
          />
          <p className={`mt-2 text-sm ${
            darkMode ? 'text-white' : 'text-gray-700'
          }`}>
            {item.name}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>




{/* Soft Skills Section */}
<section 
  className={`py-20 px-4 sm:px-6 lg:px-8 ${
    darkMode ? 'bg-gray-900' : 'bg-gray-50'
  }`}
>
  <div className="max-w-7xl mx-auto text-center">

    {/* Soft Skills Label */}
    <div className="inline-block mb-4 px-4 py-1 border border-gray-400 rounded-full">
      <span className={darkMode ? 'text-white' : 'text-gray-700'}>
        Soft Skills
      </span>
    </div>

    <h2
      className={`text-xl sm:text-2xl mb-12 ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}
    >
      Personal qualities that help me excel:
    </h2>

    {/* Soft Skills Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12">

    {[
        { name: 'Time Management', src: '/skills/time.png' },
        { name: 'Collaboration', src: '/skills/partners.png' },
        { name: 'Communication', src: '/skills/interaction.png' },
        { name: 'Flexibility', src: '/skills/flexibility.png' },
        { name: 'Project Management', src: '/skills/project.png' },
        { name: 'Problem Solving', src: '/skills/idea.png' },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img 
            src={item.src} 
            alt={item.name} 
            className="w-14 h-14 object-contain mb-2"
          />
          <p className={`text-sm ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {item.name}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


      {/* Footer */}
      <footer  className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-900'} relative overflow-hidden`}>
        {/* Background decorative elements */}
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl opacity-20"></div> */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="orange-gradient text-[#323946] px-6 py-3 rounded-full font-semibold text-xl">
              JIYOHA
            </div>
           
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-white hover:text-[#00eeff]">Home</a></li>
                <li><a href="#services" className="text-white hover:text-[#00eeff]">Services</a></li>
                <li><a href="#portfolio" className="text-white hover:text-[#00eeff]">Portfolio</a></li>

              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-white hover:text-[#00eeff]">
  <a href="tel:+23055027213">+230 5502 7213</a>
</li>

<li className="text-white hover:text-[#00eeff]">
  <a href="mailto:jiyoha79@gmail.com">jiyoha79@gmail.com</a>
</li>

              </ul>
            </div>
            
            <div>
              
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Social</h4>
              <div className="flex space-x-4">
  <a
    href="https://www.behance.net/joshuaiyoha"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors"
  >
    <FaBehance size={20} />
  </a>

  <a
    href="https://www.linkedin.com/in/joshua-iyoha-908683184/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors"
  >
    <FaLinkedinIn size={20} />
  </a>

  <a
    href="https://www.instagram.com/designsby.jay_/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors"
  >
    <FaInstagram  size={20} />
  </a>

  <a
    href="https://github.com/Josh0401"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors"
  >
    <FaGithub size={20} />
  </a>
</div>

            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#fff] text-sm mb-4 md:mb-0">
              Copyright © 2025, Joshua Iyoha. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
        }
      `}</style>
    </div>
  );
}