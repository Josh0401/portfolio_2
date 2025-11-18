
'use client';

import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesSlide, setServicesSlide] = useState(0);
  const [portfolioSlide, setPortfolioSlide] = useState(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Icon components
  const MoonIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2"  className="bg-[#00eeff] rounded-full p-1">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );

  const SunIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#00eeff]">
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );

  const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "white" : "#00eeff"} strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={darkMode ? "white" : "#00eeff"} strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

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
                className={`p-2 rounded-full ${darkMode ? 'bg-white' : 'bg-[#00eeff]'}`}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <button className="orange-gradient text-[#323946] px-6 py-2 rounded-full font-medium">
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
              <button className="orange-gradient text-[#323946] px-6 py-2 rounded-full font-medium w-full">
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
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>HIRE</span>
              </div>
              <h1 className={`text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                I'm <span style={{color: '#00eeff'}}>Joshua</span>,
              </h1>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                FullStack Developer and Graphic Designer
              </h2>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="orange-gradient text-[#323946] px-8 py-3 rounded-full font-medium flex items-center space-x-2">
                <span>Portfolio</span>
                <ArrowRightIcon />
              </button>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full" style={{background: '#00eeff', opacity: 0.2}}></div>
                <div className="absolute inset-8 rounded-full overflow-hidden" style={{background: '#00eeff'}}>
                  <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>4+ Years</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            My <span style={{color: '#00eeff'}}>Services</span>
          </h2>
          <p className={`mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${servicesSlide * 100}%)` }}
              >
                {['Graphic Design', 'Web Development', 'Brand Design'].map((service, idx) => (
                  <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-4">
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-3xl p-6 shadow-lg relative overflow-hidden group hover:scale-105 transition-transform h-full`}>
                      <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{service}</h3>
                      <div className={`${darkMode ? 'bg-gray-600' : 'bg-gray-100'} rounded-2xl p-4 mb-4 h-48 flex items-center justify-center`}>
                        <div className="grid grid-cols-2 gap-2 w-full">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className={`${darkMode ? 'bg-gray-500' : 'bg-white'} rounded-lg p-3 shadow`}>
                              <div style={{background: '#00eeff'}} className="w-8 h-8 rounded mb-2"></div>
                              <div className={`h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-300'} rounded mb-1`}></div>
                              <div className={`h-2 ${darkMode ? 'bg-gray-400' : 'bg-gray-300'} rounded w-3/4`}></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button className={`absolute bottom-6 right-6 ${darkMode ? 'bg-gray-600' : 'bg-gray-900'} text-white p-3 rounded-full group-hover:bg-[#00eeff] transition-colors`}>
                        <ArrowRightIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Swiper Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setServicesSlide(index)}
                  className={`h-3 rounded-full transition-all ${
                    servicesSlide === index ? 'bg-[#00eeff] w-8' : 'bg-gray-400 w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
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
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1" style={{background: 'linear-gradient(to bottom, #00eeff, #545454, #00eeff, #545454, #00eeff, #545454)'}}></div>
              
              <div className="space-y-16">
                {/* Item 1 - Left */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-r-4 inline-block`} style={{borderColor: '#00eeff'}}>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>C&I Leasing Plc, Nigeria</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Jan 2018 - Sep 2018</p>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>IT Support Intern</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{background: '#00eeff', boxShadow: '0 0 0 4px rgba(0, 238, 255, 0.2)'}}></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Item 2 - Right */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{boxShadow: '0 0 0 4px rgba(84, 84, 84, 0.2)'}}></div>
                  <div className="w-1/2 pl-8">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-l-4 inline-block`} style={{borderColor: '#545454'}}>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Malachy Microfinance Bank, Nigeria</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>June 2023 - Present</p>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>IT Consultant</p>
                    </div>
                  </div>
                </div>

                {/* Item 3 - Left */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-r-4 inline-block`} style={{borderColor: '#00eeff'}}>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Wootlab Foundation, Nigeria</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Oct 2023 - Nov 2023</p>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Web Dev Tutor</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{background: '#00eeff', boxShadow: '0 0 0 4px rgba(0, 238, 255, 0.2)'}}></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Item 4 - Right */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{boxShadow: '0 0 0 4px rgba(84, 84, 84, 0.2)'}}></div>
                  <div className="w-1/2 pl-8">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-l-4 inline-block`} style={{borderColor: '#545454'}}>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Agroease Ltd, Nigeria</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Oct 2023 - Present</p>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Chief Digital Officer</p>
                    </div>
                  </div>
                </div>

                {/* Item 5 - Left */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-r-4 inline-block`} style={{borderColor: '#00eeff'}}>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>TBI, Mauritius</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>June 2025 - Aug 2025</p>
                      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Content Writer & Wordpress Developer</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{background: '#00eeff', boxShadow: '0 0 0 4px rgba(0, 238, 255, 0.2)'}}></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Item 6 - Right */}
                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full absolute left-1/2 transform -translate-x-1/2" style={{boxShadow: '0 0 0 4px rgba(84, 84, 84, 0.2)'}}></div>
                  <div className="w-1/2 pl-8">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-2xl shadow-lg border-l-4 inline-block`} style={{borderColor: '#545454'}}>
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>StevenHills Limited, Mauritius</h3>
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
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
              <div className="relative w-80 h-96 mx-auto">
                <div className="absolute inset-0 rounded-full" style={{background: '#00eeff', opacity: 0.2}}></div>
                <div className="absolute inset-8 rounded-t-full overflow-hidden" style={{background: '#00eeff'}}>
                  <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Why <span style={{color: '#00eeff'}}>Hire me</span>?
              </h2>
              <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>450+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Project Completed</div>
                </div>
                <div>
                  <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>450+</div>
                  <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Happy Clients</div>
                </div>
              </div>
              
              <button className="orange-gradient text-[#323946] px-8 py-3 rounded-full font-medium">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Lets have a look at my <span style={{color: '#00eeff'}}>Portfolio</span>
            </h2>
            <button className="orange-gradient text-white px-6 py-2 rounded-full font-medium hidden md:block">
              See All
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[1, 2].map((item) => (
              <div key={item} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl overflow-hidden shadow-xl`}>
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} h-64 relative`}>
                  <div className="absolute inset-4 grid grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className={`${darkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-lg`}></div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lirante</h3>
                  <p style={{color: '#00eeff'}} className="font-medium">Food Delivery Solution</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-4 mb-8">
              {['Landing Page', 'Product Design', 'Animation', 'Illustration', 'UI/UX'].map((cat) => (
                <button key={cat} className={`px-4 py-2 rounded-full border ${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-700'} hover:bg-[#00eeff] hover:text-white hover:border-[#00eeff] transition-colors`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-8 shadow-xl`}>
            <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Lirante - Food Delivery Solution
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="orange-gradient text-white px-6 py-2 rounded-full font-medium">
              View Project
            </button>
          </div>
        </div>
      </section>

      {/* Project CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-3xl p-12 text-center`}>
            <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Have an Awesome Project Idea? <span style={{color: '#00eeff'}}>Let's Discuss</span>
            </h2>
                          <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className={`flex items-center space-x-2 px-6 py-3 rounded-full ${darkMode ? 'bg-[gray-700]' : 'bg-white'} shadow`}>
                <MailIcon  />
                <span className={darkMode ? 'text-white' : 'text-[#00eeff]'}>Email me at Email.com</span>
              </div>
              <div className={`flex items-center space-x-2 px-6 py-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow`}>
                <PhoneIcon />
                <span className={darkMode ? 'text-white' : 'text-[#00eeff]'}>+91 0000000000</span>
              </div>
            </div>
            <button className="orange-gradient text-white px-8 py-3 rounded-full font-medium">
              Send me a message
            </button>
          </div>
        </div>
      </section>

      {/* Skills Banner */}
      <div className="orange-gradient py-4 overflow-hidden">
        <div className="flex animate-scroll">
          {['UX Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research'].map((skill, idx) => (
            <span key={idx} className="text-white text-xl font-bold mx-8 whitespace-nowrap">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-16 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="orange-gradient text-white px-6 py-3 rounded-full font-semibold text-xl">
              JIYOHA
            </div>
            <button className="orange-gradient text-white px-8 py-3 rounded-full font-medium">
              Contact Me
            </button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-[#fff] hover:text-white">Home</a></li>
                <li><a href="#services" className="text-[##fff] hover:text-white">About Us</a></li>
                <li><a href="#portfolio" className="text-[##fff] hover:text-white">Services</a></li>
                <li><a href="#blog" className="text-[##fff] hover:text-white">Resume</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-[##fff]">+91 0000000000</li>
                <li className="text-[##fff]">hello@email.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Get the latest information</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className={`flex-1 px-4 py-2 rounded-l-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} outline-none`}
                />
                <button className="orange-gradient text-white px-6 py-2 rounded-r-full font-medium">
                  →
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors">
                  in
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors">
                  tw
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-[#00eeff] transition-colors">
                  ig
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#00eeff] text-sm mb-4 md:mb-0">
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