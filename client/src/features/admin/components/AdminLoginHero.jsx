function AdminLoginHero() {
  return (
    <section className="relative w-full h-[40vh] md:h-screen md:w-1/2 overflow-hidden bg-black">
      <img
        alt="Luxury Menswear Editorial"
        className="absolute inset-0 w-full h-full object-cover object-top"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_wNRc4vxGTwmO1c2sz9CJsk-3xFarDpxc_nOYvgQQg68jJ_XK0zZMm78DJ1f6VlGv8S9popAkWO8ItPXbkgIVxYGMygwH0wIEtbEKGnt76HpzGqdR35wp-OcveGwE8_Ol-htE3iydlQJKpn-gCSYjgeXIXZ3wATsg5JdQaxrn7SsqJFZXJRE6gwQsdxP2Ov3GWg5dzqD19t2U5F7qHlGWT8t1JLglpwXWJoTZXqlvIzZYNC3k2YJHzw31okd8bdBh1BuedwX"
      />

      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>

      <div className="absolute bottom-8 md:bottom-16 left-5 md:left-16 z-10 text-white">
        <span className="text-sm uppercase tracking-[4px] opacity-80 mb-2 block">
          Exclusive Access
        </span>

        <h1 className="text-5xl md:text-7xl font-bold leading-none">
          THE CURATED
          <br />
          EXPERIENCE.
        </h1>
      </div>
    </section>
  );
}

export default AdminLoginHero;