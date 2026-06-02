import { useEffect, useState } from 'react';
import { ArrowRight, Layers, Link, Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';   // remove if not using react-router

const heroImages = [
    'https://blog.plantwise.org/wp-content/uploads/sites/7/2025/09/CABI_GHANA-195.jpg',
    'https://blog.plantwise.org/wp-content/uploads/sites/7/2025/09/CABI_GHANA-195-1024x576.jpg',
    'https://www.borgenmagazine.com/wp-content/uploads/2021/01/Ghanaian-Women-in-Agriculture.jpg',
    'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1400&q=80',
    'https://climatepromise.undp.org/sites/default/files/styles/large_2x/public/single_callout_image/Open-Ghana-adaptation-Broadcasting-rice-among-maize-by-vugundaa-women-group-UNDP-AFCIA.jpg?itok=-Agh5WM_',
    'https://oneacrefund.org/sites/default/files/styles/banner_large_desktop/public/2024-10/DSC_5761.jpg?h=e2c7fd5a&itok=ko7VxGGw'
];

const stats = [
    { value: '12,000+', label: 'Farmers Reached' },
    { value: '6', label: 'Regions Covered' },
    { value: '200+', label: 'Farm Input Suppliers' },
    { value: 'Fair', label: 'Market Pricing' },
];

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Markets', to: '/markets' },
    { label: 'About', to: '/about' },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const id = setInterval(() =>
            setCurrentIndex(prev => (prev === heroImages.length - 1 ? 0 : prev + 1)),
            5000);
        return () => clearInterval(id);
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .agri-hero { font-family: 'DM Sans', sans-serif; }

        /* ── Navbar glass card ── */
        .agri-nav {
          position: absolute; top: 16px; left: 50%; transform: translateX(-50%);
          z-index: 50; width: calc(100% - 48px); max-width: 1160px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px; padding: 10px 20px;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          transition: background 0.3s ease;
        }
        .agri-nav:hover { background: rgba(255,255,255,0.10); }
        .agri-nav-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px; font-weight: 700; color: #fff; letter-spacing: 0.02em;
        }
        .agri-nav-link {
          font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.72);
          text-decoration: none; transition: color 0.2s ease;
        }
        .agri-nav-link:hover { color: #fff; }
        .agri-nav-cta {
          font-size: 12px; font-weight: 700; color: #1a3d0a;
          background: #F5C518; padding: 8px 18px;
          border-radius: 20px; border: none; cursor: pointer; text-decoration: none;
          display: inline-block;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .agri-nav-cta:hover { box-shadow: 0 4px 16px rgba(245,197,24,0.45); transform: translateY(-1px); }
        .agri-mobile-menu {
          position: absolute; top: calc(100% + 8px); left: 0; right: 0;
          background: rgba(10,40,10,0.96); border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px; padding: 8px 0; backdrop-filter: blur(16px);
          display: flex; flex-direction: column;
        }
        .agri-mobile-link {
          padding: 11px 20px; font-size: 14px; font-weight: 500;
          color: rgba(255,255,255,0.8); text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .agri-mobile-link:hover { background: rgba(255,255,255,0.06); color: #fff; }

        /* ── Images crossfade ── */
        .agri-img {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          opacity: 0; transform: scale(1.08);
          transition: opacity 1.6s cubic-bezier(0.4,0,0.2,1),
                      transform 6s cubic-bezier(0.4,0,0.2,1);
        }
        .agri-img.active { opacity: 1; transform: scale(1); }

        /* ── Overlays ── */
        .agri-overlay {
          background: linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(15,60,15,0.72) 50%, rgba(5,25,5,0.60) 100%);
        }
        .agri-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 200px; opacity: 0.5;
        }

        /* ── Ring animations ── */
        @keyframes agriRFwd   { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes agriRRev   { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes agriRPulse { 0%,100%{opacity:.15} 50%{opacity:.28} }
        @keyframes agriBDot   { 0%,100%{opacity:1}   50%{opacity:.4}  }
        @keyframes agriShimmer{ 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes agriScrollDrop {
          0%  {transform:scaleY(0);transform-origin:top;opacity:1}
          50% {transform:scaleY(1);transform-origin:top;opacity:1}
          51% {transform:scaleY(1);transform-origin:bottom;opacity:1}
          100%{transform:scaleY(0);transform-origin:bottom;opacity:0}
        }
        .agri-ring-fwd   { animation: agriRFwd   30s linear infinite; }
        .agri-ring-rev   { animation: agriRRev   45s linear infinite; }
        .agri-ring-pulse { animation: agriRPulse  5s ease-in-out infinite; }

        /* ── Entry animations ── */
        .agri-badge { opacity:0; transform:translateX(-16px); transition:opacity .7s ease .2s,transform .7s ease .2s; }
        .agri-hero.ready .agri-badge { opacity:1; transform:translateX(0); }

        .agri-word { display:inline-block; opacity:0; transform:translateY(36px) skewY(3deg); transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1); }
        .agri-hero.ready .agri-word { opacity:1; transform:translateY(0) skewY(0deg); }
        .agri-word:nth-child(1){transition-delay:.15s}
        .agri-word:nth-child(2){transition-delay:.32s}
        .agri-word:nth-child(3){transition-delay:.50s}

        .agri-sub { opacity:0; transform:translateY(20px); transition:opacity .9s ease 1s,transform .9s ease 1s; }
        .agri-hero.ready .agri-sub { opacity:1; transform:translateY(0); }

        .agri-cta-group { opacity:0; transform:translateY(22px); transition:opacity .8s ease 1.3s,transform .8s ease 1.3s; }
        .agri-hero.ready .agri-cta-group { opacity:1; transform:translateY(0); }

        .agri-stat { opacity:0; transform:translateY(20px); transition:opacity .7s ease,transform .7s ease; }
        .agri-hero.ready .agri-stat:nth-child(1){opacity:1;transform:translateY(0);transition-delay:1.5s}
        .agri-hero.ready .agri-stat:nth-child(2){opacity:1;transform:translateY(0);transition-delay:1.65s}
        .agri-hero.ready .agri-stat:nth-child(3){opacity:1;transform:translateY(0);transition-delay:1.8s}
        .agri-hero.ready .agri-stat:nth-child(4){opacity:1;transform:translateY(0);transition-delay:1.95s}

        .agri-scroll-hint { opacity:0; transition:opacity .8s ease 2s; }
        .agri-hero.ready .agri-scroll-hint { opacity:.5; }

        /* ── Gold shimmer accent ── */
        .agri-accent {
          position:relative; display:inline-block;
          background:linear-gradient(90deg,#F5C518 0%,#ffe77a 35%,#fff 52%,#ffe77a 70%,#F5C518 100%);
          background-size:200% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          animation:agriShimmer 3.5s linear 1s infinite;
        }
        .agri-accent::after {
          content:''; position:absolute; bottom:-4px; left:0;
          height:2px; width:0;
          background:linear-gradient(90deg,#F5C518,#ffe77a);
          border-radius:2px;
          transition:width 1s cubic-bezier(.22,1,.36,1) 1.2s;
        }
        .agri-hero.ready .agri-accent::after { width:100%; }

        /* ── Buttons ── */
        .agri-btn-gold {
          display:inline-flex; align-items:center; gap:9px; padding:14px 30px;
          background:#F5C518; color:#1a3d0a;
          font-family:'DM Sans',sans-serif; font-weight:700; font-size:15px;
          border-radius:50px; border:none; cursor:pointer; text-decoration:none;
          box-shadow:0 4px 22px rgba(245,197,24,.4);
          transition:transform .25s,box-shadow .25s;
        }
        .agri-btn-gold:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(245,197,24,.55);}
        .agri-btn-gold .arrow-icon{transition:transform .3s;}
        .agri-btn-gold:hover .arrow-icon{transform:translateX(4px);}

        .agri-btn-ghost {
          display:inline-flex; align-items:center; gap:9px; padding:13px 26px;
          background:rgba(255,255,255,.08); color:rgba(255,255,255,.88);
          font-family:'DM Sans',sans-serif; font-weight:500; font-size:15px;
          border-radius:50px; border:1px solid rgba(255,255,255,.22); text-decoration:none;
          backdrop-filter:blur(10px);
          transition:background .25s,border-color .25s,transform .25s;
        }
        .agri-btn-ghost:hover{background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.45);transform:translateY(-2px);}

        /* ── Dots ── */
        .agri-dot {
          width:6px; height:6px; border-radius:50%;
          background:rgba(255,255,255,.35); cursor:pointer; border:none; padding:0;
          transition:background .3s,transform .3s;
        }
        .agri-dot.active{background:#fff;transform:scale(1.4);}

        .agri-scroll-line {
          width:1px; height:44px;
          background:linear-gradient(to bottom,rgba(255,255,255,.6),transparent);
          animation:agriScrollDrop 1.8s ease infinite 2.2s; margin:0 auto;
        }
        .agri-wave path { fill:white; }
        .agri-badge-dot { animation:agriBDot 2s ease-in-out infinite; }
      `}</style>

            <section
                className={`agri-hero relative overflow-hidden flex flex-col ${mounted ? 'ready' : ''}`}
                style={{ minHeight: '92vh' }}
            >
                {/* Background images */}
                <div className="absolute inset-0">
                    {heroImages.map((src, i) => (
                        <img key={src} src={src} alt="AgriConnect Ghana" className={`agri-img ${i === currentIndex ? 'active' : ''}`} />
                    ))}
                    <div className="agri-overlay absolute inset-0" />
                    <div className="agri-noise absolute inset-0 pointer-events-none" />
                </div>

                {/* Ambient glows */}
                <div className="absolute pointer-events-none" style={{ top: -60, left: '18%', width: 340, height: 340, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,120,34,0.2) 0%, transparent 70%)' }} />
                <div className="absolute pointer-events-none" style={{ bottom: 40, right: '10%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,0.1) 0%, transparent 70%)' }} />

                {/* Ring 1 — top-right */}
                <div className="absolute pointer-events-none" style={{ top: -90, right: -90, width: 460, height: 460, opacity: 0.2 }}>
                    <svg viewBox="0 0 460 460" fill="none" className="agri-ring-fwd w-full h-full">
                        <circle cx="230" cy="230" r="218" stroke="white" strokeWidth="1.2" strokeDasharray="14 8" />
                        <circle cx="230" cy="230" r="178" stroke="white" strokeWidth="0.6" strokeDasharray="4 10" />
                        <circle cx="230" cy="230" r="138" stroke="rgba(163,214,92,0.75)" strokeWidth="0.9" />
                        <circle cx="230" cy="230" r="98" stroke="rgba(163,214,92,0.4)" strokeWidth="0.4" strokeDasharray="6 6" />
                        <line x1="230" y1="12" x2="230" y2="28" stroke="white" strokeWidth="1.5" opacity="0.7" />
                        <line x1="230" y1="432" x2="230" y2="448" stroke="white" strokeWidth="1.5" opacity="0.7" />
                        <line x1="12" y1="230" x2="28" y2="230" stroke="white" strokeWidth="1.5" opacity="0.7" />
                        <line x1="432" y1="230" x2="448" y2="230" stroke="white" strokeWidth="1.5" opacity="0.7" />
                        <circle cx="384" cy="76" r="3" fill="rgba(163,214,92,0.9)" />
                        <circle cx="76" cy="384" r="3" fill="rgba(163,214,92,0.9)" />
                        <circle cx="76" cy="76" r="2" fill="rgba(255,255,255,0.5)" />
                        <circle cx="384" cy="384" r="2" fill="rgba(255,255,255,0.5)" />
                        <circle cx="230" cy="12" r="3" fill="rgba(245,197,24,0.85)" />
                    </svg>
                </div>

                {/* Ring 2 — bottom-left */}
                <div className="absolute pointer-events-none" style={{ bottom: -120, left: -100, width: 380, height: 380, opacity: 0.12 }}>
                    <svg viewBox="0 0 380 380" fill="none" className="agri-ring-rev w-full h-full">
                        <circle cx="190" cy="190" r="178" stroke="white" strokeWidth="1" strokeDasharray="8 12" />
                        <circle cx="190" cy="190" r="140" stroke="rgba(163,214,92,0.5)" strokeWidth="0.5" />
                        <circle cx="190" cy="190" r="102" stroke="white" strokeWidth="0.3" strokeDasharray="3 8" />
                        <line x1="190" y1="12" x2="190" y2="24" stroke="white" strokeWidth="1" opacity="0.5" />
                        <line x1="190" y1="356" x2="190" y2="368" stroke="white" strokeWidth="1" opacity="0.5" />
                        <line x1="12" y1="190" x2="24" y2="190" stroke="white" strokeWidth="1" opacity="0.5" />
                        <line x1="356" y1="190" x2="368" y2="190" stroke="white" strokeWidth="1" opacity="0.5" />
                    </svg>
                </div>

                {/* Ring 3 — mid-left pulse */}
                <div className="absolute pointer-events-none" style={{ top: '50%', left: -65, transform: 'translateY(-50%)', width: 230, height: 230, opacity: 0.08 }}>
                    <svg viewBox="0 0 230 230" fill="none" className="agri-ring-pulse w-full h-full">
                        <circle cx="115" cy="115" r="105" stroke="rgba(163,214,92,0.7)" strokeWidth="0.8" strokeDasharray="5 7" />
                        <circle cx="115" cy="115" r="72" stroke="white" strokeWidth="0.4" />
                    </svg>
                </div>



                {/* Content */}
                <div className="relative z-10 flex-1 flex items-center" style={{ paddingTop: 100, paddingBottom: 80 }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2rem', width: '100%' }}>

                        

                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(44px,7vw,80px)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: 22, letterSpacing: '-0.01em' }}>
                            <span className="agri-word" style={{ marginRight: '0.2em' }}>Transforming</span>
                            <span className="agri-word" style={{ marginRight: '0.2em' }}>Agriculture,</span>
                            <br />
                            <span className="agri-word"><span className="agri-accent">Empowering Farmers</span></span>
                        </h1>

                        <p className="agri-sub" style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, maxWidth: 500, marginBottom: 40, fontWeight: 300 }}>
                            Access quality farm inputs, mechanization services, and fair-price markets —
                            all in one platform built for Ghana's farmers.
                        </p>
                    </div>
                </div>

              

                {/* Bottom bar */}
                <div className="relative z-10 flex justify-between items-end" style={{ padding: '6px 2rem 18px', maxWidth: 1280, margin: '0 auto', width: '100%' }}>
                    <div className="agri-scroll-hint text-center">
                        <div style={{ fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', marginBottom: 8, fontWeight: 500 }}>Scroll</div>
                        <div className="agri-scroll-line" />
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', paddingBottom: 8 }}>
                        {heroImages.map((_, i) => (
                            <button key={i} className={`agri-dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)} aria-label={`Slide ${i + 1}`} />
                        ))}
                    </div>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 right-0 agri-wave">
                    <svg viewBox="0 0 1440 72" fill="none" preserveAspectRatio="none" className="w-full block" style={{ display: 'block' }}>
                        <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,12 1440,36 L1440,72 L0,72 Z" />
                    </svg>
                </div>
            </section>
        </>
    );
}