'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clipRadius, setClipRadius] = useState(0);
  const [clipCenter, setClipCenter] = useState('50% 50%');
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      
      // Small delay to ensure menu element is rendered and positioned
      setTimeout(() => {
        if (!menuRef.current) return;
        
        const menuRect = menuRef.current.getBoundingClientRect();
        
        // Get hamburger position from right sidebar (desktop) or top nav (mobile)
        const getHamburgerPosition = () => {
          // Try to find hamburger in right sidebar first (desktop)
          const rightSidebarHamburger = document.querySelector('[data-hamburger="true"]') as HTMLElement;
          if (rightSidebarHamburger) {
            const rect = rightSidebarHamburger.getBoundingClientRect();
            // Calculate position relative to menu element
            return {
              x: rect.left + rect.width / 2 - menuRect.left,
              y: rect.top + rect.height / 2 - menuRect.top,
            };
          }
          // Fallback to mobile hamburger
          const mobileHamburger = document.querySelector('[data-mobile-hamburger="true"]') as HTMLElement;
          if (mobileHamburger) {
            const rect = mobileHamburger.getBoundingClientRect();
            return {
              x: rect.left + rect.width / 2 - menuRect.left,
              y: rect.top + rect.height / 2 - menuRect.top,
            };
          }
          // Default to top right (relative to menu)
          return { x: menuRect.width - 40, y: 40 };
        };

        const pos = getHamburgerPosition();
        setClipCenter(`${pos.x}px ${pos.y}px`);
        
        const menuWidth = menuRect.width;
        const menuHeight = menuRect.height;
        
        const maxDistance = Math.sqrt(
          Math.max(
            Math.pow(pos.x, 2) + Math.pow(pos.y, 2),
            Math.pow(menuWidth - pos.x, 2) + Math.pow(pos.y, 2),
            Math.pow(pos.x, 2) + Math.pow(menuHeight - pos.y, 2),
            Math.pow(menuWidth - pos.x, 2) + Math.pow(menuHeight - pos.y, 2)
          )
        );

        // Animate from 0 to maxDistance
        let radius = 0;
        const duration = 800;
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Use easing function for smooth animation
          const eased = 1 - Math.pow(1 - progress, 3);
          radius = maxDistance * eased;
          setClipRadius(radius);
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setClipRadius(maxDistance + 100); // Ensure full coverage
          }
        };
        animate();
      }, 10);
    } else {
      document.body.style.overflow = 'unset';
      setClipRadius(0);
    }
  }, [isSidebarOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>

      {/* Mobile Hamburger - Top Right for Mobile */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:hidden ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-20">
            <button
              data-mobile-hamburger="true"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-14 h-14 flex items-center justify-center z-50 group"
              aria-label="Toggle menu"
            >
              {/* Top line - shorter by default, full width on hover */}
              <motion.span 
                className="absolute h-0.5 bg-white origin-center" 
                style={{ width: '2.5rem' }}
                animate={{
                  y: isSidebarOpen ? 0 : -10,
                  opacity: isSidebarOpen ? 0 : 1,
                  scale: isSidebarOpen ? 0 : 1,
                  scaleX: isSidebarOpen ? 0 : (isHovered ? 1 : 0.67)
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Middle line - full width always, becomes the single line when open */}
              <motion.span 
                className="absolute w-10 h-0.5 bg-white" 
                animate={{
                  scale: isSidebarOpen ? 1.2 : 1,
                  opacity: 1
                }}
                transition={{ duration: 0.3 }}
              />
              {/* Bottom line - shorter by default, full width on hover */}
              <motion.span 
                className="absolute h-0.5 bg-white origin-center" 
                style={{ width: '2.5rem' }}
                animate={{
                  y: isSidebarOpen ? 0 : 10,
                  opacity: isSidebarOpen ? 0 : 1,
                  scale: isSidebarOpen ? 0 : 1,
                  scaleX: isSidebarOpen ? 0 : (isHovered ? 1 : 0.67)
                }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* SVG ClipPath for Circular Reveal */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="menuClipPath" clipPathUnits="userSpaceOnUse">
            <circle
              id="menuClipCircle"
              cx="0"
              cy="0"
              r={clipRadius}
              style={{
                transition: isSidebarOpen ? 'r 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'r 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </clipPath>
        </defs>
      </svg>

      {/* Sidebar Menu Overlay with Circular Reveal */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Full Screen Menu with Circular Clip - Only covers central area on desktop */}
            <motion.aside
              ref={menuRef}
              className="fixed top-0 bottom-0 left-0 right-0 lg:left-32 lg:right-32 bg-black z-30 overflow-y-auto"
              style={{
                clipPath: `circle(${clipRadius}px at ${clipCenter})`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col h-full p-8 max-w-7xl mx-auto pt-32 lg:pt-36">
                {/* Navigation Links */}
                <nav className="flex-1">
                  <motion.ul
                    className="space-y-1"
                    initial="hidden"
                    animate="visible"
                  >
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: 30 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.4 + index * 0.08, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
                          },
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsSidebarOpen(false)}
                          className="block py-6 text-white hover:text-gray-300 transition-colors text-2xl md:text-3xl font-semibold border-b border-white/5"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>

                {/* CTA Button */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsSidebarOpen(false)}
                    className="inline-block px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors text-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

