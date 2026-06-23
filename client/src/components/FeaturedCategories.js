import { Link } from "react-router-dom";

export default function FeaturedCategories() {
  const categories = [
    {
      title: "MEN",
      label: "COLLECTION 01",
      img: "./assets/man.png",
      large: true,
      link: "/products?category=Men",
    },
    {
      title: "WOMEN",
      img: "./assets/women.png",
      link: "/products?category=Women",
    },
    {
      title: "ACCESSORIES",
      img: "./assets/ashish.jpg",
      link: "/products?category=Accessories",
    },
    {
      title: "FOOTWEAR",
      img: "https://i.pinimg.com/736x/11/8a/23/118a23e1dd2d02a94683a00c7e185c3f.jpg",
      wide: true,
      link: "/products?category=Footwear",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mb-10 sm:mb-12">
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-black/50 mb-3">
            Shop by Category
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black">
            FEATURED COLLECTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] sm:auto-rows-[320px] lg:auto-rows-[360px] gap-4 sm:gap-6">
          {categories.map((item) => (
            <Link
              to={item.link}
              key={item.title}
              className={`
                group relative overflow-hidden cursor-pointer bg-neutral-100 block
                ${item.large ? "lg:col-span-2 lg:row-span-2" : ""}
                ${item.wide ? "lg:col-span-2" : ""}
              `}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 lg:left-8 lg:bottom-8">
                {item.label && (
                  <span className="text-[10px] sm:text-xs uppercase tracking-[4px] sm:tracking-[5px] text-white/70 block mb-2 sm:mb-3">
                    {item.label}
                  </span>
                )}

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}