// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <section className="relative min-h-[750px] md:h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//   src="./assets/models.png"
//   alt="Editorial Fashion"
//   className="
//     w-full
//     h-full
//     object-contain
//     md:object-cover
//     bg-[#b8b2aa]
//   "
// />

//         <div className="absolute inset-0 bg-black/35" />
//       </div>

//       {/* Content */}
//       <div
//         className="
//           relative
//           z-10
//           h-full
//           max-w-[1440px]
//           mx-auto
//           px-4
//           sm:px-6
//           lg:px-12
//           flex
//           flex-col
//           justify-start
//           md:justify-center
//           items-center
//           text-center
//           pt-32
//           md:pt-0
//         "
//       >
//         <span
//           className="
//             uppercase
//             tracking-[4px]
//             sm:tracking-[6px]
//             text-white/80
//             text-xs
//             sm:text-sm
//             mb-5
//           "
//         >
//           Luxury Collection 2026
//         </span>

//         <h1
//           className="
//             text-white
//             font-bold
//             tracking-tight
//             leading-none
//             text-5xl
//             sm:text-6xl
//             md:text-7xl
//             lg:text-8xl
//             max-w-5xl
//           "
//         >
//           ELEVATE YOUR
//           <br />
//           EVERYDAY STYLE
//         </h1>

//         <p
//           className="
//             mt-6
//             sm:mt-8
//             text-white/80
//             text-base
//             sm:text-lg
//             max-w-xl
//           "
//         >
//           Discover timeless essentials crafted for modern living.
//         </p>

//         <div
//           className="
//             flex
//             flex-col
//             sm:flex-row
//             gap-4
//             sm:gap-5
//             mt-10
//             sm:mt-12
//             w-full
//             sm:w-auto
//           "
//         >
//        <Link
//   to="/products?category=Men"
//   className="
//     w-full
//     sm:w-auto
//     bg-white
//     text-black
//     px-10
//     py-4
//     uppercase
//     tracking-widest
//     font-medium
//     hover:scale-105
//     transition
//     text-center
//   "
// >
//   Shop Men
// </Link>

//         <Link
//   to="/products?category=Women"
//   className="
//     w-full
//     sm:w-auto
//     border
//     border-white
//     text-white
//     px-10
//     py-4
//     uppercase
//     tracking-widest
//     font-medium
//     hover:bg-white
//     hover:text-black
//     transition
//     text-center
//   "
// >
//   Shop Women
// </Link>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
//         <span className="material-symbols-outlined text-3xl md:text-4xl">
//           expand_more
//         </span>
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="./assets/models.png"
          alt="Katchy Collection"
          className="w-full h-full object-cover"
        />

        {/* Premium Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto h-full px-6 lg:px-14 flex items-center">
        <div className="max-w-2xl">

          {/* Badge */}
          <span className="inline-block border border-white/40 text-white text-xs uppercase tracking-[4px] px-4 py-2 rounded-full backdrop-blur-sm">
            New Collection • 2026
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-white font-black leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl">
            Wear
            <br />
            Confidence.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-lg leading-relaxed">
            Designed for everyday confidence.
            Minimal silhouettes. Premium fabrics.
            Inspired by modern streetwear.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/products"
              className="bg-white text-black px-10 py-4 uppercase tracking-[3px] text-sm font-semibold rounded-full hover:bg-[#D4AF37] hover:text-white transition duration-300"
            >
              Shop Collection
            </Link>

            <Link
              to="/new-arrivals"
              className="border border-white text-white px-10 py-4 uppercase tracking-[3px] text-sm rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              New In
            </Link>

          </div>

          {/* Collection Chips */}
          <div className="flex flex-wrap gap-3 mt-10">

            {[
              "Oversized",
              "Korean",
              "Summer Edit",
              "Streetwear",
            ].map((item) => (
              <Link
                key={item}
                to={`/products?collection=${item}`}
                className="px-5 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white hover:text-black transition"
              >
                {item}
              </Link>
            ))}

          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 text-white">

            <div>
              <h3 className="text-2xl font-bold">25K+</h3>
              <p className="text-white/70 text-sm">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-white/70 text-sm">
                Premium Styles
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4.9★</h3>
              <p className="text-white/70 text-sm">
                Customer Rating
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={34} />
      </div>
    </section>
  );
}