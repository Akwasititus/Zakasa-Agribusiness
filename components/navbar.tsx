'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';


interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { label: 'About',        href: '#about'    },
  { label: 'Services',     href: '#services' },
  { label: 'Why Us',       href: '#why'      },
  { label: 'How It Works', href: '#how'      },
  { label: 'Contact',      href: '#contact'  },
];

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .zk-nav {
          position: fixed; top: 0; width: 100%; z-index: 50;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        /* ── Floating over hero — pure glass ── */
        .zk-nav.top {
          background: rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        /* ── Scrolled — dark frosted glass ── */
        .zk-nav.scrolled {
          background: rgba(14, 44, 14, 0.88);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 28px rgba(0, 0, 0, 0.28);
        }

        /* ── Nav links ── */
        .zk-link {
          font-size: 13.5px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          letter-spacing: 0.01em;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .zk-link:hover {
          color: #F5C518;
          border-bottom-color: rgba(245, 197, 24, 0.6);
        }

        /* ── CTA pill ── */
        .zk-cta {
          font-size: 12.5px;
          font-weight: 700;
          color: #1a3d0a;
          background: #F5C518;
          padding: 8px 20px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .zk-cta:hover {
          box-shadow: 0 4px 18px rgba(245, 197, 24, 0.45);
          transform: translateY(-1px);
        }

        /* ── Mobile menu ── */
        .zk-mobile-menu {
          background: rgba(10, 34, 10, 0.97);
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .zk-mobile-link {
          display: block;
          padding: 11px 16px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.80);
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.2s, color 0.2s;
        }
        .zk-mobile-link:hover {
          background: rgba(255, 255, 255, 0.07);
          color: #F5C518;
        }

        /* Hamburger button */
        .zk-hamburger {
          display: flex; align-items: center; justify-content: center;
          background: rgba(255, 255, 255, 0.09);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 8px;
          padding: 6px;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .zk-hamburger:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.35);
        }

        @media (min-width: 768px) {
  .zk-hamburger { display: none !important; }
  .zk-desktop-links { display: flex !important; }
  .zk-desktop-cta { display: inline-block !important; }
}

@media (max-width: 767px) {
  .zk-desktop-links { display: none !important; }
  .zk-desktop-cta { display: none !important; }
}
      `}</style>

      <nav className={`zk-nav ${isScrolled ? 'scrolled' : 'top'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2.5 no-underline">
            {/*
              Replace the div below with your real logo image:
              <img src="/images/zakasa-logo.png" alt="Zakasa" className="h-8 w-auto" />
            */}
            <div
              style={{
                width: 36, height: 36, borderRadius: 9,
                background: 'linear-gradient(135deg, #3a8a1a, #a3d65c)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Leaf SVG placeholder — swap for your <img> */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '0.03em' }}>
              Zakasa
            </span>
          </a>

{/* Desktop links */}
<div className="zk-desktop-links" style={{ alignItems: 'center', gap: 28 }}>
  {navLinks.map(link => (
    <a key={link.href} href={link.href} className="zk-link">{link.label}</a>
  ))}
</div>

{/* CTA + mobile toggle */}
<div className="flex items-center gap-3">
  <a href="#contact" className="zk-cta zk-desktop-cta">Get Started</a>
  <button className="zk-hamburger" onClick={() => setIsOpen(v => !v)} aria-label="Toggle menu">
    {isOpen ? <X size={18} /> : <Menu size={18} />}
  </button>
</div>
        </div>

        {/* ── Mobile dropdown ── */}
        {isOpen && (
         <div className="zk-mobile-menu" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="zk-mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '6px 0' }} />
              {/* Mobile CTA */}
              <a
                href="#contact"
                className="zk-cta"
                style={{ textAlign: 'center', borderRadius: 10, padding: '10px' }}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}