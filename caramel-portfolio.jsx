import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Star,
  Sparkles,
  PenTool,
  Camera,
  Lightbulb,
  Film,
  Palette,
  Mic,
  Send,
  Award,
} from "lucide-react";
import {
  bartersStorefront,
  bartersHalongBay,
  bartersGiftCards,
  bartersTote,
  bartersCupcakes,
} from "./caramel-assets.js";

/* ----------------------------------------------------------------------------
   CARAMEL — personal portfolio for Inês Caramelo
   Brand palette: cream, lavender, hot pink, orange, lime, black
   Aesthetic: Y2K / experimental — hand-drawn marks, tape, sticker stickers,
   chunky display type, grainy color blocks, asymmetric layouts.
---------------------------------------------------------------------------- */

const C = {
  cream: "#F5F1E8",
  lavender: "#D6CFF8",
  pink: "#ED0086",
  orange: "#F25823",
  lime: "#BCDE3F",
  black: "#1A1A1A",
};

/* ---------- global font + keyframe injection (runs once) ------------------ */
function useGlobalAssets() {
  useEffect(() => {
    if (!document.getElementById("caramel-fonts")) {
      const link = document.createElement("link");
      link.id = "caramel-fonts";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;700&family=Bowlby+One+SC&family=Permanent+Marker&display=swap";
      document.head.appendChild(link);
    }
    if (!document.getElementById("caramel-style")) {
      const style = document.createElement("style");
      style.id = "caramel-style";
      style.innerHTML = `
        @keyframes caramel-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes caramel-spin-slow { to { transform: rotate(360deg); } }
        @keyframes caramel-wiggle {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes caramel-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes caramel-pop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .caramel-marquee-track { animation: caramel-marquee 40s linear infinite; will-change: transform; }
        .caramel-spin-slow { animation: caramel-spin-slow 18s linear infinite; }
        .caramel-wiggle { animation: caramel-wiggle 3.5s ease-in-out infinite; transform-origin: center; }
        .caramel-float { animation: caramel-float 4s ease-in-out infinite; }
        .caramel-pop { animation: caramel-pop 2.5s ease-in-out infinite; }
        .caramel-grain {
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }
        .caramel-card { transition: transform .25s ease, box-shadow .25s ease; }
        .caramel-card:hover { transform: translate(-4px,-4px) rotate(0deg) !important; box-shadow: 10px 10px 0 #1A1A1A; }
        .caramel-btn { transition: transform .15s ease, box-shadow .15s ease; }
        .caramel-btn:hover { transform: translate(-2px,-2px); box-shadow: 6px 6px 0 #1A1A1A; }
        .caramel-btn:active { transform: translate(0,0); box-shadow: 2px 2px 0 #1A1A1A; }
        .font-display { font-family: 'Bowlby One SC', sans-serif; letter-spacing: -0.01em; }
        .font-serif-i { font-family: 'Instrument Serif', serif; font-style: italic; letter-spacing: -0.02em; }
        .font-hand { font-family: 'Caveat', cursive; }
        .font-marker { font-family: 'Permanent Marker', cursive; letter-spacing: 0.02em; }
        .font-body { font-family: 'Space Grotesk', sans-serif; }
        html { scroll-behavior: smooth; }
      `;
      document.head.appendChild(style);
    }
  }, []);
}

/* ---------- decorative inline svgs ---------------------------------------- */
/* CaramelMark — hand-drawn approximation of Inês's logo: squiggly cat face
   with closed/lash eyes, ^ nose, scribble whiskers, and "CARAMEL" wordmark.
   Replace with the real PNG/SVG export when available — see <CaramelLogo />. */
function CaramelMark({ size = 96, color = "#6B4A66", showWordmark = true }) {
  const w = size;
  const h = showWordmark ? size * 1.15 : size * 0.85;
  return (
    <svg width={w} height={h} viewBox="0 0 200 230" fill="none" aria-hidden>
      <g stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* top squiggle hair / ears — loops and curls */}
        <path d="M55 60 q -6 -14, 4 -22 q 8 -6, 10 4 q 2 8 -6 10" />
        <path d="M75 50 q -2 -16, 10 -18 q 10 0, 8 12 q -2 8 -10 8" />
        <path d="M100 42 q 2 -16, 14 -14 q 12 4, 6 16 q -4 8 -12 6" />
        <path d="M130 50 q 8 -14, 18 -8 q 8 6, 0 16 q -6 6 -14 2" />
        {/* outer face squiggly outline (left side - whiskers/wisps) */}
        <path d="M40 90 q -10 4, -14 14 q -2 10, 8 8" />
        <path d="M30 110 q -8 6, -2 16" />
        <path d="M40 130 q -6 4, 0 12" />
        {/* outer face right side */}
        <path d="M165 90 q 12 2, 16 14 q 2 12, -10 10" />
        <path d="M175 112 q 8 8, 0 18" />
        <path d="M165 132 q 8 4, 2 12" />
        {/* eyes — closed with lashes (sleepy/coy) */}
        <path d="M65 100 q 12 -10, 26 0" />
        <path d="M65 100 l -3 -6" />
        <path d="M72 96 l -2 -7" />
        <path d="M80 94 l 0 -7" />
        <path d="M88 96 l 2 -7" />
        <path d="M91 100 l 3 -6" />
        <path d="M110 100 q 12 -10, 26 0" />
        <path d="M110 100 l -3 -6" />
        <path d="M117 96 l -2 -7" />
        <path d="M125 94 l 0 -7" />
        <path d="M133 96 l 2 -7" />
        <path d="M136 100 l 3 -6" />
        {/* small ^ nose */}
        <path d="M95 120 l 5 -8 l 5 8" />
      </g>
      {showWordmark && (
        <g fill={color}>
          {/* hand-drawn "CARAMEL" — chunky bubble letters */}
          <text
            x="100"
            y="190"
            textAnchor="middle"
            fontFamily="Permanent Marker, cursive"
            fontSize="42"
            fontWeight="700"
            letterSpacing="2"
          >
            CARAMEL
          </text>
        </g>
      )}
    </svg>
  );
}

/* Compact version (no wordmark) — for nav, hero medallion, etc. */
function CaramelFace({ size = 48, color = "#6B4A66" }) {
  return <CaramelMark size={size} color={color} showWordmark={false} />;
}

function ScribbleLoop({ size = 100, color = C.orange, stroke = 7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden>
      <path
        d="M10 70 Q 18 30, 45 55 Q 65 75, 70 40 Q 72 22, 55 28 Q 45 32, 55 55 Q 70 80, 95 65 Q 110 56, 105 80 Q 100 95, 80 95"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function StarShape({ size = 48, color = C.pink }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M12 1 L14.5 8.5 L22 9 L16 14 L18 22 L12 17.5 L6 22 L8 14 L2 9 L9.5 8.5 Z" />
    </svg>
  );
}

function Squiggle({ width = 200, color = C.black, stroke = 3 }) {
  return (
    <svg width={width} height="20" viewBox="0 0 200 20" fill="none" aria-hidden>
      <path
        d="M2 10 Q 12 2, 22 10 T 42 10 T 62 10 T 82 10 T 102 10 T 122 10 T 142 10 T 162 10 T 182 10 T 198 10"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/* ---------- small pieces ---------------------------------------------------*/
function Tape({ color = C.lime, rotate = -8, width = 90, top, left, right, bottom }) {
  return (
    <span
      className="absolute caramel-grain pointer-events-none"
      style={{
        background: color,
        width,
        height: 24,
        top, left, right, bottom,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
        opacity: 0.85,
      }}
    />
  );
}

function Sticker({ children, color = C.pink, textColor = "#fff", rotate = 0, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-bold uppercase rounded-full px-4 py-1.5 text-xs tracking-wider font-body ${className}`}
      style={{
        background: color,
        color: textColor,
        transform: `rotate(${rotate}deg)`,
        border: `2px solid ${C.black}`,
        boxShadow: `3px 3px 0 ${C.black}`,
      }}
    >
      {children}
    </span>
  );
}

function Chip({ children, color = C.lavender, textColor = C.black }) {
  return (
    <span
      className="inline-block px-4 py-2 rounded-full font-body text-sm font-medium"
      style={{
        background: color,
        color: textColor,
        border: `1.5px solid ${C.black}`,
      }}
    >
      {children}
    </span>
  );
}

/* ---------- nav ---------------------------------------------------------- */
function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 w-full backdrop-blur-sm"
      style={{ background: `${C.cream}E6`, borderBottom: `1.5px solid ${C.black}` }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <CaramelFace size={36} color={C.black} />
          <span className="font-marker text-xl" style={{ color: C.black }}>
            caramel
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium" style={{ color: C.black }}>
          <a href="#work" className="hover:underline underline-offset-4">work</a>
          <a href="#about" className="hover:underline underline-offset-4">about</a>
          <a href="#services" className="hover:underline underline-offset-4">services</a>
          <a href="#contact" className="hover:underline underline-offset-4">contact</a>
        </div>

        <a
          href="#contact"
          className="caramel-btn inline-flex items-center gap-1.5 font-body font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-full"
          style={{
            background: C.pink,
            color: "#fff",
            border: `2px solid ${C.black}`,
            boxShadow: `3px 3px 0 ${C.black}`,
          }}
        >
          let's collaborate
          <ArrowUpRight size={14} strokeWidth={3} />
        </a>
      </div>
    </nav>
  );
}

/* ---------- top marquee --------------------------------------------------- */
function Marquee({ items, color, textColor = C.cream, separator = "★" }) {
  const row = (
    <div className="flex shrink-0 items-center gap-8 px-4 font-body font-bold uppercase tracking-widest text-sm">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <span>{it}</span>
          <span aria-hidden>{separator}</span>
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div
      className="overflow-hidden border-y-2 py-3"
      style={{ background: color, color: textColor, borderColor: C.black }}
    >
      <div className="flex caramel-marquee-track" style={{ width: "max-content" }}>
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}

/* ---------- hero ---------------------------------------------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: C.cream }}>
      <div className="absolute inset-0 caramel-grain opacity-40 pointer-events-none" />

      {/* floating decorative elements */}
      <div className="hidden lg:block absolute top-24 right-10 caramel-float">
        <Sticker color={C.pink} rotate={12}>since 2018</Sticker>
      </div>
      <div className="hidden lg:block absolute top-44 left-12 caramel-float" style={{ animationDelay: "1s" }}>
        <Sticker color={C.lime} textColor={C.black} rotate={-8}>cork · ireland</Sticker>
      </div>
      <div className="hidden lg:block absolute bottom-40 right-32 caramel-float" style={{ animationDelay: "1.8s" }}>
        <Sticker color={C.orange} rotate={6}>azorean by heart</Sticker>
      </div>

      <div className="absolute top-32 right-1/4 caramel-spin-slow opacity-90 hidden md:block">
        <StarShape size={36} color={C.orange} />
      </div>
      <div className="absolute bottom-24 left-1/3 caramel-wiggle opacity-90 hidden md:block">
        <StarShape size={28} color={C.pink} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* left — headline */}
          <div className="lg:col-span-7 relative">
            <p className="font-hand text-2xl mb-2" style={{ color: C.pink }}>
              hello, hi —
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]" style={{ color: C.black }}>
              I'm{" "}
              <span style={{ color: C.orange }}>Inês</span>
              <br />
              Caramelo,
              <br />
              <span className="font-serif-i" style={{ color: C.pink }}>
                a creative
              </span>
              <br />
              <span className="relative inline-block">
                strategist
                <span className="absolute -right-6 -top-2 text-5xl" style={{ color: C.lime }}>*</span>
              </span>
            </h1>
            <p className="mt-6 font-body text-lg sm:text-xl max-w-xl" style={{ color: C.black }}>
              shaping brands through illustration, story &amp; campaigns that
              actually stop the scroll.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <a
                href="#work"
                className="caramel-btn inline-flex items-center gap-2 font-body font-bold uppercase text-sm tracking-wider px-6 py-3 rounded-full"
                style={{
                  background: C.black,
                  color: C.cream,
                  border: `2px solid ${C.black}`,
                  boxShadow: `4px 4px 0 ${C.pink}`,
                }}
              >
                see the work
                <ArrowDown size={16} strokeWidth={3} />
              </a>
              <a
                href="#contact"
                className="caramel-btn inline-flex items-center gap-2 font-body font-bold uppercase text-sm tracking-wider px-6 py-3 rounded-full"
                style={{
                  background: C.lavender,
                  color: C.black,
                  border: `2px solid ${C.black}`,
                  boxShadow: `4px 4px 0 ${C.black}`,
                }}
              >
                say hi
                <Send size={14} strokeWidth={3} />
              </a>
            </div>
          </div>

          {/* right — caramel mark medallion */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center caramel-grain"
              style={{
                background: C.lavender,
                border: `3px solid ${C.black}`,
                boxShadow: `12px 12px 0 ${C.pink}`,
              }}
            >
              <div className="caramel-spin-slow absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="caramel-circle"
                      d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text
                    fontFamily="Permanent Marker, cursive"
                    fontSize="14"
                    fill={C.black}
                    letterSpacing="3"
                  >
                    <textPath href="#caramel-circle">
                      ★ illustration ★ branding ★ storytelling ★ campaigns ★ illustration ★ branding ★ storytelling ★ campaigns ★
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="caramel-pop">
                <CaramelFace size={140} color={C.black} />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 sm:-left-2 caramel-wiggle">
              <ScribbleLoop size={90} color={C.orange} stroke={8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- about --------------------------------------------------------- */
function About() {
  const stats = [
    { value: "363K", label: "facebook followers grown", color: C.pink },
    { value: "TTG", label: "top agency 2023", color: C.orange },
    { value: "DRAWN", label: "best illustrators feature", color: C.lime },
    { value: "1×", label: "published children's book", color: C.lavender },
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: C.lavender }}>
      <div className="absolute inset-0 caramel-grain opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex items-end gap-3 mb-12">
          <h2 className="font-marker text-5xl sm:text-6xl" style={{ color: C.black }}>
            about
          </h2>
          <Squiggle width={140} color={C.pink} stroke={4} />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* photo placeholder card */}
          <div className="lg:col-span-5 relative">
            <Tape color={C.lime} rotate={-12} width={110} top={-12} left={20} />
            <Tape color={C.orange} rotate={9} width={90} top={-14} right={30} />
            <div
              className="relative aspect-[4/5] rounded-md overflow-hidden caramel-grain"
              style={{
                background: `linear-gradient(135deg, ${C.orange} 0%, ${C.pink} 100%)`,
                border: `3px solid ${C.black}`,
                boxShadow: `10px 10px 0 ${C.black}`,
                transform: "rotate(-2deg)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <CaramelFace size={120} color={C.cream} />
                <p className="mt-4 font-marker text-2xl" style={{ color: C.cream }}>
                  drop your photo here
                </p>
                <p className="mt-2 font-body text-sm opacity-80" style={{ color: C.cream }}>
                  swap this gradient block with a portrait
                </p>
              </div>
            </div>
          </div>

          {/* bio + stats */}
          <div className="lg:col-span-7">
            <p className="font-serif-i text-3xl sm:text-4xl leading-tight mb-6" style={{ color: C.black }}>
              "a portfolio of illustration, branding &amp; creative projects."
            </p>
            <div className="space-y-4 font-body text-base sm:text-lg" style={{ color: C.black }}>
              <p>
                I'm a creative strategist and illustrator born in <strong>Ponta Delgada,
                São Miguel</strong> and based in <strong>Cork, Ireland</strong>. I've spent the
                last few years moving between agency life, freelance projects and
                publishing — leading rebrands, drawing characters, building campaigns,
                and occasionally co-hosting a podcast.
              </p>
              <p>
                My work sits at the intersection of <em>illustration, branding and
                storytelling</em>. I'm happiest when a project lets me do all three at once
                — designing a mascot that becomes a podcast host, or turning a beauty
                brand's launch into a series of hand-drawn social posts.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 caramel-grain"
                  style={{
                    background: s.color,
                    border: `2px solid ${C.black}`,
                    boxShadow: `4px 4px 0 ${C.black}`,
                    transform: `rotate(${i % 2 === 0 ? -1 : 1.5}deg)`,
                  }}
                >
                  <div className="font-display text-2xl sm:text-3xl" style={{ color: C.black }}>
                    {s.value}
                  </div>
                  <div className="font-body text-xs uppercase tracking-wide mt-1" style={{ color: C.black }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- services ------------------------------------------------------ */
function Services() {
  const services = [
    { name: "Online branding", icon: Sparkles, color: C.pink },
    { name: "Illustrations", icon: PenTool, color: C.orange },
    { name: "Content creation", icon: Camera, color: C.lime },
    { name: "Strategy", icon: Lightbulb, color: C.lavender },
    { name: "Video production", icon: Film, color: C.pink },
    { name: "Graphic design", icon: Palette, color: C.orange },
  ];

  return (
    <section id="services" className="relative overflow-hidden" style={{ background: C.black }}>
      <div className="absolute inset-0 caramel-grain opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="font-hand text-2xl mb-2" style={{ color: C.lime }}>
              what's in the toolkit —
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" style={{ color: C.cream }}>
              services I <span style={{ color: C.pink }}>play</span> with
            </h2>
          </div>
          <p className="font-body max-w-md" style={{ color: C.cream }}>
            One person, six lanes. I'll happily own a project from strategy
            through to the final caption — or jump in for the bit you actually
            need help with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="caramel-card relative rounded-2xl p-6 caramel-grain"
                style={{
                  background: s.color,
                  border: `2.5px solid ${C.cream}`,
                  boxShadow: `6px 6px 0 ${C.cream}`,
                  transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.8}deg)`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: C.black }}
                >
                  <Icon size={26} color={C.cream} strokeWidth={2.4} />
                </div>
                <h3 className="font-marker text-2xl mb-2" style={{ color: C.black }}>
                  {s.name}
                </h3>
                <span
                  className="inline-block font-body text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ background: C.black, color: C.cream }}
                >
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- project image gallery (polaroid-style with rotation + tape) -- */
function ProjectGallery({ images }) {
  // Rotation seeds for a hand-pinned, scrapbook feel
  const rotations = [-3, 2.5, -1.5, 3, -2];
  return (
    <div className="mt-8 pt-6" style={{ borderTop: `1.5px dashed ${C.black}` }}>
      <p className="font-hand text-xl mb-5" style={{ color: C.black }}>
        the receipts ↓
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {images.map((img, i) => (
          <figure
            key={i}
            className="caramel-card relative group"
            style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
          >
            {/* tape strip */}
            <span
              className="absolute z-10 caramel-grain pointer-events-none"
              style={{
                background: img.color || C.lavender,
                width: 70,
                height: 20,
                top: -10,
                left: "50%",
                transform: "translateX(-50%) rotate(-4deg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                opacity: 0.92,
              }}
            />
            <div
              className="relative overflow-hidden rounded-md"
              style={{
                background: C.cream,
                border: `2px solid ${C.black}`,
                boxShadow: `5px 5px 0 ${C.black}`,
                padding: 6,
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full h-44 sm:h-48 object-cover rounded-sm"
                style={{ display: "block" }}
              />
              <figcaption
                className="font-body text-[11px] uppercase tracking-wide mt-2 px-1 pb-1"
                style={{ color: C.black, lineHeight: 1.3 }}
              >
                {img.caption}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ---------- selected work ------------------------------------------------- */
function Work() {
  const projects = [
    {
      title: "Barter's Travelnet",
      kicker: "Full rebrand · mascot · podcast · merch",
      year: "2023",
      tags: ["Branding", "Strategy", "Podcast", "Mascot", "Content"],
      copy:
        "Led the full rebrand of Ireland's oldest travel agency — logo redesign, brand identity, and website. Created Bartie, the agency's mascot, and launched Bartie's Wanderlogue, a travel podcast I co-host, produce and edit. The work extended into merch (totes, retirement cupcakes!) and a content series across Instagram and YouTube. Following the rebrand, the agency was named Republic of Ireland's Top Agency at the TTG Top 50 Travel Agencies 2023.",
      bg: C.pink,
      span: "lg:col-span-12",
      rotate: -0.5,
      images: [
        { src: bartersStorefront, caption: "A new chapter — the rebranded Patrick's Street storefront", color: C.lime },
        { src: bartersTote, caption: "Branded tote with the new Bartie character mark", color: C.lavender },
        { src: bartersCupcakes, caption: "Bartie cupcakes for the retirement party", color: C.orange },
        { src: bartersHalongBay, caption: "Gift cards series — Halong Bay (video)", color: C.lime },
        { src: bartersGiftCards, caption: "Gift cards series — \"Give the gift of travel\"", color: C.lavender },
      ],
    },
    {
      title: "The Girl & the Bird",
      kicker: "Children's book — written & illustrated",
      year: "2020",
      tags: ["Illustration", "Publishing", "Authoring"],
      copy:
        "My first published work — a handmade children's book I both wrote and illustrated, told primarily through visuals. Featured in DRAWN: The Best Illustrators in the World, alongside international talent.",
      bg: C.orange,
      span: "lg:col-span-5",
      rotate: 1.4,
      images: [],
    },
    {
      title: "Oscar Season — Cinemas",
      kicker: "Character design · 363K community",
      year: "2019",
      tags: ["Illustration", "Campaign", "Social"],
      copy:
        "Designed a character for the Oscar season campaign that ran across buses, billboards and cinemas. The illustrated content drove the Facebook community to over 363K followers.",
      bg: C.lime,
      span: "lg:col-span-7",
      rotate: -1.2,
      images: [],
    },
    {
      title: "Help James find Maria",
      kicker: "Cork Airport — interactive campaign",
      year: "2021",
      tags: ["Concept", "Scripting", "Production"],
      copy:
        "Created an interactive Facebook campaign for Cork Airport promoting Lisbon. Users followed video clues to solve a suitcase mix-up story for the chance to win a trip. Concept, scripts, game mechanics and on-location filming, all from Lisbon.",
      bg: C.lavender,
      span: "lg:col-span-7",
      rotate: 1.1,
      images: [],
    },
    {
      title: "GOSH Copenhagen",
      kicker: "Illustrated content for PT social",
      year: "2018–20",
      tags: ["Illustration", "Content", "Brand"],
      copy:
        "While at Social Animals, I collaborated with GOSH Copenhagen — a Nordic makeup brand. For their Portuguese channels, I created illustrated content that translated the brand's visual identity into engaging digital storytelling.",
      bg: C.orange,
      span: "lg:col-span-5",
      rotate: -1.8,
      images: [],
    },
  ];

  return (
    <section id="work" className="relative overflow-hidden" style={{ background: C.cream }}>
      <div className="absolute inset-0 caramel-grain opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="font-hand text-2xl mb-2" style={{ color: C.orange }}>
              the greatest hits —
            </p>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" style={{ color: C.black }}>
              selected <span style={{ color: C.pink }}>work</span>
            </h2>
          </div>
          <Sticker color={C.lime} textColor={C.black} rotate={4}>
            <Star size={12} fill={C.black} stroke={C.black} /> 5 case studies
          </Sticker>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`caramel-card relative rounded-2xl overflow-hidden ${p.span}`}
              style={{
                background: p.bg,
                border: `2.5px solid ${C.black}`,
                boxShadow: `8px 8px 0 ${C.black}`,
                transform: `rotate(${p.rotate}deg)`,
              }}
            >
              <div className="absolute inset-0 caramel-grain opacity-40 pointer-events-none" />
              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest mb-2" style={{ color: C.black, opacity: 0.8 }}>
                      {p.kicker}
                    </p>
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.95]" style={{ color: C.black }}>
                      {p.title}
                    </h3>
                  </div>
                  <span
                    className="shrink-0 font-marker text-lg px-3 py-1 rounded-full"
                    style={{ background: C.black, color: C.cream }}
                  >
                    {p.year}
                  </span>
                </div>

                <p className="mt-5 font-body text-sm sm:text-base max-w-2xl" style={{ color: C.black }}>
                  {p.copy}
                </p>

                <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t, j) => (
                      <span
                        key={j}
                        className="font-body text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          background: C.cream,
                          color: C.black,
                          border: `1.5px solid ${C.black}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    className="caramel-btn inline-flex items-center gap-1.5 font-body font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full"
                    style={{
                      background: C.black,
                      color: C.cream,
                      border: `2px solid ${C.black}`,
                      boxShadow: `3px 3px 0 ${C.cream}`,
                    }}
                  >
                    see more
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </button>
                </div>

                {p.images && p.images.length > 0 && (
                  <ProjectGallery images={p.images} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- recognition marquee ------------------------------------------ */
function Recognition() {
  const items = [
    "DRAWN — Best Illustrators in the World",
    "TTG Top 50 Travel Agencies · Top Agency 2023",
    "Cork Airport · Featured Campaign",
    "Social Animals · Senior Creative",
    "Bartie's Wanderlogue · Co-host & Producer",
    "GOSH Copenhagen · Illustrated Series",
  ];
  return (
    <Marquee items={items} color={C.orange} textColor={C.cream} separator="✦" />
  );
}

/* ---------- contact ------------------------------------------------------- */
function Contact() {
  const links = [
    { icon: Mail, label: "ines.caramelo6@gmail.com", href: "mailto:ines.caramelo6@gmail.com" },
    { icon: Phone, label: "+353 085 130 1508", href: "tel:+353851301508" },
    { icon: MapPin, label: "Cork, Ireland", href: "#" },
    { icon: Instagram, label: "@caramelo.ines", href: "#" },
    { icon: Linkedin, label: "in/inescaramelo", href: "#" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: C.lime }}>
      <div className="absolute inset-0 caramel-grain opacity-50 pointer-events-none" />
      <div className="absolute top-10 right-10 caramel-spin-slow opacity-90 hidden md:block">
        <ScribbleLoop size={140} color={C.pink} stroke={9} />
      </div>
      <div className="absolute bottom-16 left-12 caramel-wiggle hidden md:block">
        <StarShape size={42} color={C.orange} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="font-hand text-2xl mb-2" style={{ color: C.pink }}>
              wanna make something sweet?
            </p>
            <h2 className="font-marker text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mb-6" style={{ color: C.black }}>
              chat with me
            </h2>
            <p className="font-body text-lg max-w-xl mb-8" style={{ color: C.black }}>
              Open to brand projects, illustration commissions, podcast guesting,
              and the occasional left-field idea. Drop me a line — I read
              everything.
            </p>

            <a
              href="mailto:ines.caramelo6@gmail.com"
              className="caramel-btn inline-flex items-center gap-2 font-display text-2xl px-8 py-5 rounded-full"
              style={{
                background: C.pink,
                color: C.cream,
                border: `3px solid ${C.black}`,
                boxShadow: `6px 6px 0 ${C.black}`,
              }}
            >
              start a project
              <ArrowUpRight size={28} strokeWidth={3} />
            </a>
          </div>

          <div className="lg:col-span-5 relative">
            <Tape color={C.orange} rotate={-10} width={120} top={-14} left={20} />
            <div
              className="rounded-2xl p-6 caramel-grain"
              style={{
                background: C.cream,
                border: `2.5px solid ${C.black}`,
                boxShadow: `8px 8px 0 ${C.black}`,
                transform: "rotate(1.5deg)",
              }}
            >
              <h3 className="font-marker text-2xl mb-4" style={{ color: C.black }}>
                the basics
              </h3>
              <ul className="space-y-3 font-body" style={{ color: C.black }}>
                {links.map((l, i) => {
                  const Icon = l.icon;
                  return (
                    <li key={i}>
                      <a
                        href={l.href}
                        className="flex items-center gap-3 group"
                      >
                        <span
                          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: [C.pink, C.orange, C.lime, C.lavender, C.black][i % 5] }}
                        >
                          <Icon size={16} color={i === 4 ? C.cream : C.black} strokeWidth={2.4} />
                        </span>
                        <span className="group-hover:underline underline-offset-4">{l.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- footer -------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: C.black }}>
      <div className="absolute inset-0 caramel-grain opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <CaramelFace size={48} color={C.cream} />
            <div>
              <div className="font-marker text-2xl" style={{ color: C.cream }}>
                caramel
              </div>
              <div className="font-body text-xs uppercase tracking-widest opacity-70" style={{ color: C.cream }}>
                inês caramelo · creative studio of one
              </div>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <Sticker color={C.pink} rotate={-4}>made with ♥ in cork</Sticker>
            <Sticker color={C.lime} textColor={C.black} rotate={3}>© {new Date().getFullYear()}</Sticker>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between" style={{ borderTop: `1.5px solid ${C.cream}33` }}>
          <p className="font-body text-xs opacity-70" style={{ color: C.cream }}>
            illustration · branding · storytelling · campaigns · strategy · graphic design
          </p>
          <p className="font-body text-xs opacity-70" style={{ color: C.cream }}>
            ines.caramelo6@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- root ---------------------------------------------------------- */
export default function CaramelPortfolio() {
  useGlobalAssets();

  const heroMarqueeItems = [
    "illustration",
    "branding",
    "storytelling",
    "campaigns",
    "strategy",
    "podcasting",
    "character design",
  ];

  return (
    <div className="font-body min-h-screen" style={{ background: C.cream, color: C.black }}>
      <Nav />
      <Marquee items={heroMarqueeItems} color={C.pink} textColor={C.cream} />
      <Hero />
      <About />
      <Services />
      <Work />
      <Recognition />
      <Contact />
      <Footer />
    </div>
  );
}
