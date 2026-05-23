import { useState, useRef, useEffect } from 'react'


// ─── SCROLL HELPER ───────────────────────────────────────────────────────────

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

function ProductModal({ product, onClose }) {
  
  if (!product) return null
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-sm sm:max-w-md overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-full h-[290px] sm:h-[440px] bg-cover bg-[#765341]"
          style={{ backgroundImage: `url(${product.image})` }}
        >
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[#402C2C] text-[24px]  font-bold text-lg">{product.name}</h3>
            <span className="text-[#402C2C] text-[24px]  font-bold text-lg">{product.price}</span>
          </div>
          <p className="text-[#402C2C] text-[13px] leading-relaxed mb-6">{product.desc}</p>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 border border-red-500 hover:bg-red-500 hover:text-white text-red-600 text-sm py-2 rounded-full transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => { onClose(); scrollToSection('contact') }}
              className="flex-1 bg-[#c8813a] hover:bg-[#a8611a] text-white text-sm py-2 rounded-full transition-colors font-semibold"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar({ mobileOpen, setMobileOpen }) {
  const links = [
    { label: 'Home',     id: 'hero'     },
    { label: 'Menu',     id: 'featured' },
    { label: 'Contact',  id: 'contact'  },
    { label: 'About Us', id: 'about'    },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#402C2C]/95 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-10 md:px-20 flex items-center justify-between h-14">   
        <div className="flex items-center gap-2">
          {/* image part */}
          <div className="w-14 h-14 rounded-full bg-[url('/logo.png')] bg-cover bg-center flex items-center justify-center flex-shrink-0">
          </div>
          <span className="text-[20px] font-montserrat-alt text-white leading-none">
            BitterSweet <span className="text-[#c8813a]">Coffee</span>
          </span>
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 text-[16px] text-white/90 font-medium">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollToSection(l.id)}
                className="hover:text-[#c8813a] transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#402C2C] px-4 sm:px-10 md:px-20 pb-4 border-t border-white/10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => { scrollToSection(l.id); setMobileOpen(false) }}
              className="block w-full text-left text-white py-3 text-sm hover:text-[#c8813a] transition-colors border-b border-white/5"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[900px] sm:min-h-[900px] lg:min-h-[700px] flex items-center justify-center bg-[url('/bg-intro.png')] bg-cover bg-center bg-no-repeat pt-14 drop-shadow-lg sm:pb-[50px]"
    >
      <div className="absolute inset-0 bg-black/5" />
      <div className="relative z-10 text-center px-5 sm:px-10 md:px-20 max-w-10xl -mt-[220px] sm:-m-0">  
      
        <h1 className="font-nothing text-[70px] sm:text-[80px] lg:text-8xl text-white drop-shadow-lg leading-[70px] sm:leading-[100px] lg:leading-tight">
          Every cup brings comfort
        </h1>
        
        <p className="mt-[25px] font-neuton text-[26px] lg:text-[30px] sm:text-[29px] italic text-white/90 max-w-[390px] sm:max-w-[490px] lg:max-w-none mx-auto leading-relaxed">
          Embracing both the bitter and sweet moments of life.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 max-w-[194px] sm:max-w-none mx-auto">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-[#E27B22] hover:bg-[#a8611a] text-white px-6 py-2 rounded-full text-[17px] font-bold transition-colors w-full sm:w-auto"
          >
            Visit Us
          </button>
          <button
            onClick={() => scrollToSection('featured')}
            className="bg-[#E8E4D8] hover:bg-[#a8611a] hover:text-white text-[#402C2C] px-6 py-2 rounded-full text-[17px] font-bold transition-colors w-full sm:w-auto"
          >
            View Full Menu
          </button>
          <button
            onClick={() => scrollToSection('featured')}
            className="bg-[#E8E4D8] hover:bg-[#a8611a] hover:text-white text-[#402C2C] px-6 py-2 rounded-full text-[17px] font-bold transition-colors w-full sm:w-auto "
          >
            Featured Products
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── SPECIALTY SECTION ───────────────────────────────────────────────────────

function SpecialtySection() {
  const items = [
    { id: 1, name: 'Espresso Coffee' },
    { id: 2, name: "Bewley's Coffee" },
    { id: 3, name: 'Vittoria Coffee' },
  ]
  return (
    <section className="bg-[#402C2C]/95 py-8 px-4 sm:px-10 md:px-20">
      <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-6 md:gap-[100px]">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-start sm:items-start justify-center sm:justify-normal">
            <span className="p-5 bg-[url('cofee.png')] bg-cover bg-center "></span>
            <div className="text-left sm:text-left">
              <p className="text-[10px] text-white/60 uppercase tracking-widest mb-0.2">Specialty Coffee</p>
              <h3 className="text-white font-semibold text-[23px] mb-1">{item.name}</h3>
              <p className="text-white/60 text-[13px] leading-relaxed w-[265px] sm:w-auto">
                Best coffee when it comes to Aroma and Charming design. Best coffee when it comes to Aroma and Charming design.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────

function ProductCard({ name, shortDesc, price, desc, image, onCardClick, customWidth }) { 
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:brightness-110 active:brightness-75 transition-all select-none relative h-[360px] bg-[#765342]"
      style={{ width: customWidth }}
      onClick={() => onCardClick({ name, price, desc, image })}
    >
      <img src={image} className="w-full h-[260px] -mt-1 " />
      <div className="p-2 pr-4 pl-4 absolute bottom-0 left-0 right-0 bg-white">
        <h4 className="text-[#402C2C] text-[24px] font-semibold mb-1 leading-tight line-clamp-1">{name}</h4>
        <p className="text-[#402C2C]/50 text-[12px] font-bold leading-relaxed mb-3 line-clamp-2">{shortDesc}</p>
        <div className="flex justify-end">
          <button
            className="bg-[#402C2C] border-2 border-orange-400 rounded-sm hover:bg-[#a8611a] text-white text-[13px] px-5 py-1 transition-colors -mt-3"
            onClick={(e) => { e.stopPropagation(); onCardClick({ name, price, desc, image }) }}
          >
            More
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── HORIZONTAL SCROLL ROW COMPONENT ─────────────────────────────────────────

function HorizontalScrollRow({ products, titleWidth, onCardClick }) {
  const scrollRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  function onMouseDown(e) {
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }
  
  function onMouseLeave() {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }
  
  function onMouseUp() {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }
  
  function onMouseMove(e) {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.2
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto mb-4"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        cursor: 'grab',
        WebkitOverflowScrolling: 'touch',
      }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div className="flex gap-3 pb-2">
        {products.map((p) => (
          <div key={p.id} className="flex-shrink-0" style={{ width: titleWidth }}>
            <ProductCard {...p} onCardClick={onCardClick} customWidth="100%" />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── FEATURED PRODUCTS ────────────────────────────────────────────────────────

function FeaturedProducts({ onCardClick }) {
  const products = [
    { id: 1, name: 'Biscoff Vanilla Crème', image: 'Biscoff-Vanilla-Crème.png', shortDesc: "Coffee's creamy white jost gets a Biscoff twist.", price: '₱150', desc: 'A rich and creamy blend of Biscoff cookie butter and smooth vanilla, layered over velvety milk and espresso.' },
    { id: 2, name: 'Americano',             image: 'Americano.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱100', desc: 'A classic Americano made with a double shot of espresso diluted with hot water. Clean, strong, and full of bold flavor.' },
    { id: 3, name: 'Brownies',          image: 'brownies.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 4, name: 'Dark Mocha Latte',          image: 'Dark-mocha-latte.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 5, name: 'Dirty Matcha Latte',          image: 'Dirty-Matcha-Latte.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 6, name: 'Hot Americano',          image: 'Hot-americano.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 7, name: 'Hot Dark Mocha',          image: 'Hot-dark-mocha.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 8, name: 'Hot Spanish Latte',          image: 'Hot-spanish-latte.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 9, name: 'Hot Thai Latte',          image: 'Hot-thai-latte.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 10, name: 'Spanish Latte',          image: 'Spanish-Latte.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 11, name: 'Thai Latte',          image: 'Thai-Latte.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
    { id: 12, name: 'Vanilla Latte',          image: 'Vanilla-latte.png', shortDesc: 'Black Coffee is a hot coffee beverage simply made.',   price: '₱80',  desc: 'Pure and simple black coffee brewed fresh every morning. No frills — just rich, deep flavor.' },
  ]

  // Ref for the title to measure its width
  const titleRef = useRef(null)
  const [titleWidth, setTitleWidth] = useState('auto')

  // Effect to measure title width
  useEffect(() => {
    const updateTitleWidth = () => {
      if (titleRef.current) {
        // Get the exact width of the "Featured Products" text
        const width = titleRef.current.offsetWidth
        setTitleWidth(`${width}px`)
      }
    }
    
    updateTitleWidth()
    // Update on window resize
    window.addEventListener('resize', updateTitleWidth)
    return () => window.removeEventListener('resize', updateTitleWidth)
  }, [])

  // Split products into rows for tablet/mobile (2 rows)
  const firstRow = products.slice(0, 4)
  const secondRow = products.slice(4)

  return (
    <section id="featured" className="bg-[#402C2C]/95 py-10 px-4 sm:px-10 md:px-20">
      <div className="max-w-[1440px] mx-auto mb-10">
       
        <div className="mb-6 flex justify-center sm:justify-start">
          <h2 
            ref={titleRef}
            className="text-white font-bold text-[25px] sm:text-[29px] tracking-wide"
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            Featured Products
          </h2>
        </div>


        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard 
              key={p.id} 
              {...p} 
              onCardClick={onCardClick}
              customWidth="100%"
            />
          ))}
        </div>

        {/* Tablet & Mobile: 2 rows with horizontal drag-to-scroll animation */}
        <div className="lg:hidden">
          {/* Row 1 - First 4 products */}
          <HorizontalScrollRow 
            products={firstRow} 
            titleWidth={titleWidth} 
            onCardClick={onCardClick} 
          />
          
          {/* Row 2 - Remaining 3 products */}
          <HorizontalScrollRow 
            products={secondRow} 
            titleWidth={titleWidth} 
            onCardClick={onCardClick} 
          />
        </div>

      </div>
    </section>
  )
}

// ─── TICKER ───────────────────────────────────────────────────────────────────

function Ticker() {
  const items = ['Espresso', 'Americano', 'Mocca', 'Latte', 'Cappuccino']
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items]

  return (
    <div className="bg-[#221E1A]/50 py-4 overflow-hidden border-y border-[#221E1A]">
      <style>{`
        @keyframes ticker-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          white-space: nowrap;
          animation: ticker-left 22s linear infinite;
        }
      `}</style>
      <div className="ticker-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-10 mx-6 text-white text-[20px] sm:text-[25px] font-bold uppercase tracking-widest"
          >
            <span className=""><div className="w-9 h-9 bg-[url('/beans.png')] bg-cover bg-center"></div></span>{item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── MISSION & VISION ────────────────────────────────────────────────────────

function MissionVision() {
  return (
    <section className="bg-[#402C2C]/95 py-20 px-5 sm:px-10 md:px-20 sm:py-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-[50px] sm:gap-[30px] lg:gap-[50px] sm:w-full">
        <div className="bg-[#221E1A]/80 rounded-xl p-10 sm:p-12 lg:p-14 m-0 ml-10 mr-10 pt-[90px] sm:pt-[120px] lg:pt-[140px] pb-[90px] sm:pb-[120px] lg:pb-[140px] text-center lg:mr-0 lg:ml-0 sm:mr-0 sm:ml-0 shadow-lg">
          <h3 className="text-white font-extrabold text-[35px] sm:text-[45px] mb-4 uppercase tracking-widest">
            Our Mission
          </h3>
          <p className="font-neuton text-white/70 text-[22px] sm:text-[25px] italic leading-relaxed">
            To serve quality coffee and heartfelt food in a cozy space where people can relax,
            connect, and create meaningful moments.
          </p>
        </div>
        <div className="bg-[#221E1A]/80 rounded-xl p-8 sm:p-12 lg:p-14 m-0 ml-10 mr-10  pt-[90px] sm:pt-[120px] lg:pt-[140px] pb-[90px] sm:pb-[120px] lg:pb-[140px] text-center lg:mr-0 lg:ml-0 sm:mr-0 sm:ml-0 shadow-lg">
          <h3 className="text-white font-extrabold text-[35px] sm:text-[45px] mb-4 uppercase tracking-widest">
            Our Vision
          </h3>
          <p className="font-neuton text-white/70 text-[22px] sm:text-[25px] italic leading-relaxed">
            To be a place where every cup brings comfort, and every visit feels like home
            embracing both the bitter and sweet moments of life.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="w-full h-screen">
      <picture className="block w-full h-full">
        {/* Mobile - default */}
        <source 
          srcSet="smartab.png" 
          media="(max-width: 440px)" 
        />
        {/* Tablet */}
        <source 
          srcSet="tabletab.png" 
          media="(min-width: 441px) and (max-width: 1023px)" 
        />
        {/* Desktop (lg and above) - same size */}
        <source 
          srcSet="aboutus.png" 
          media="(min-width: 1024px)" 
         
        />
        {/* Fallback */}
        <img
          src="aboutus.png"
          alt="About BitterSweet Caffe"
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  )
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#402C2C]/95 py-10 px-5 sm:py-12 sm:px-8 md:py-14 md:px-20 "
    >
      {/* Title */}
      <div className="mb-[80px] mt-[60px] text-left md:text-center ">
        <h2 className="text-white font-black uppercase tracking-widest leading-[1.45]
          text-[28px] text-center sm:text-[40px] md:text-[22px]">

          {/* Mobile: left, 3 lines, label+value stacked */}
          <span className="block sm:hidden ">
            Contact Us and Join to<br />
            Our Comfy{' '}
            <span className="text-[#c8813a] font-neuton text-[32px]">Caffe</span>!
          </span>

          {/* Tablet: left, 3 lines */}
          <span className="hidden sm:block md:hidden">
            Contact Us and<br />
            Join to Our Comfy<br />
            <span className="text-[#c8813a] font-neuton text-[45px]">Caffe</span>!
          </span>

          {/* Desktop: centered, 2 lines */}
          <span className="hidden md:block text-[35px]">
            Contact Us and Join to Our<br />
            Comfy <span className="text-[#c8813a] font-neuton text-[40px]">Caffe</span>!
          </span>
        </h2>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-5 max-w-[1440px] md:mx-auto items-stretch">

        {/* Contact Info Card */}
        <div className="bg-[#1a0e0a]/70 rounded-xl p-6 flex flex-col gap-5 md:flex-[0_0_28%] sm:pl-[40px] lg:text-start sm:mr-[70px] sm:ml-[70px] sm:pb-[180px] lg:pl-10 shadow-xl lg:ml-0">

          {/* Mobile: label block. Tablet+Desktop: label inline */}
          <div className="text-white text-[20px] leading-relaxed sm:text-[25px] lg:text-[20px]">
            <span className="font-bold block sm:inline ">Contact No.:</span>
            <span className="block sm:inline sm:ml-1">09549941868</span>
          </div>
          <div className="text-white text-[20px] leading-relaxed sm:text-[25px] lg:text-[20px]">
            <span className="font-bold block sm:inline">Address:</span>
            <span className="block sm:inline sm:ml-1">Lugod St., Gingoog City, Philippines, 9014</span>
          </div>
          <div className="text-white text-[20px] leading-relaxed sm:text-[25px] lg:text-[20px]">
            <span className="font-bold block sm:inline">Email:</span>
            <span className="block sm:inline sm:ml-1">kapenglumad@.com</span>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full md:flex-1 rounded-xl overflow-hidden
          h-[360px] sm:h-[490px] md:h-auto md:min-h-[350px] sm:mr-16 sm:ml-[70px] sm:mr-[70px] lg:mr-0 md:mr-0 md:ml-0 lg:-ml-[60px] sm:w-[460px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.6351050457773!2d125.0986321824745!3d8.829171385821576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33002ef6a87eab57%3A0xf7bb9f45c882069f!2sKapenglumad%20%26%20Coffeeteria!5e0!3m2!1sen!2sph!4v1777689091078!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: '200px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bitter Sweet CDO Map"
          />
        </div>
      </div>
      
    </section>
    
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#402C2C]/95 pb-5 pt-20">

      <div className="bg-[#221E1A] w-full h-10 mb-5"></div>
      <div className="pt-10 pb-6 px-4 sm:px-10 md:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-col lg:flex-row gap-8">

          <div className="max-w-xs mx-auto sm:max-w-sm sm:mx-auto lg:max-w-xs lg:mx-0 text-center lg:text-left">
            <h3 className="font-nothing text-white mb-3 text-[29px]">
              BitterSweet Caffè
            </h3>
            <p className="font-neuton text-white/90 text-xs leading-relaxed">
              Caffè is the Italian word for coffee. "Caffè" refers to both the beverage
              specifically espresso and the cafe establishment where it is served. It is used interchangeably with
              "bar" in Italy like a coffee shop and is also used in coffee-based drinks like cafe macchiato.
            </p>
          </div>

          <div className="mx-auto lg:mx-0 lg:ml-[100px] lg:pt-1 flex flex-col items-center lg:items-start">
            <h4 className="text-white font-bold text-[15px] mb-3 uppercase tracking-widest">Links</h4>

            {/* Mobile: icons stacked with text below — Tablet/Desktop: icon + text side by side */}
            <ul className="space-y-3 w-full">
              <li>
                <a href="#" className="text-white/90 text-xs hover:text-[#c8813a] transition-colors flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                  <span className="w-8 h-8 rounded-[50px] bg-blue-600 flex items-center justify-center text-white font-bold text-xs"><img src="fb.png" alt="" /></span>
                  Bittersweet Cafe - Gingoog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 text-xs hover:text-[#c8813a] transition-colors flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                  <span className="w-8 h-8 rounded-[50px] flex items-center justify-center text-white text-xs"><img src="insta.png" alt="" /></span>
                  BitterSweet Cafe - Gingoog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 text-xs hover:text-[#c8813a] transition-colors flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs"><img src="web.png" alt="" /></span>
                  [ Coming Soon ]
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </footer>
  );
}

function Landingpage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-[#1e1008] font-sans">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <main>
        <Hero />
        <SpecialtySection />
        <FeaturedProducts onCardClick={setSelectedProduct} />
        <Ticker />
        <MissionVision />
        <About />
        <Contact />
      </main>
    
      <Footer />
    </div>
  )
}

export default Landingpage