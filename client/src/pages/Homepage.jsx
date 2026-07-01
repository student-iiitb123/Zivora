import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories";
import BestSellers from "../components/BestSellers";
import Editorial from "../components/Editorial";
import NewArrivals from "../components/NewArrivals";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function ZivoraHome() {
useEffect(() => {
    document.title = "ZIVORA | Elevate Your Everyday Style";

    const links = [
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
      "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:wght@100..900&display=swap",
    ];

    const createdLinks = links.map((href) => {
      const link = document.createElement("link");
      link.href = href;
      link.rel = "stylesheet";
      document.head.appendChild(link);
      return link;
    });

    let lastScroll = 0;
    const nav = document.getElementById("main-nav");

      const handleNavScroll = () => {
      const currentScroll = window.pageYOffset;
  
      if (currentScroll <= 0) {
        nav?.classList.remove("shadow-xl", "py-2");
        nav?.classList.add("py-4");
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 100) {
        if (nav) nav.style.transform = "translateY(-100%)";
      } else {
        if (nav) nav.style.transform = "translateY(0)";
        nav?.classList.add("shadow-xl", "py-2");
        nav?.classList.remove("py-4");
      }

      lastScroll = currentScroll;
    };

    const handleHeroParallax = () => {
      const heroImage = document.querySelector("section img");
      const scrolled = window.pageYOffset;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
      }
    };

    window.addEventListener("scroll", handleNavScroll);
    window.addEventListener("scroll", handleHeroParallax);

    return () => {
      window.removeEventListener("scroll", handleNavScroll);
      window.removeEventListener("scroll", handleHeroParallax);
      createdLinks.forEach((link) => link.remove());
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
    
      <Navbar />
      <main className="pt-0">
        <Hero />
        <FeaturedCategories />
        <BestSellers />
        {/* <Editorial /> */}
        <NewArrivals />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
