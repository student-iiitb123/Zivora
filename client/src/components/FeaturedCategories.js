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
      img: "https://lh3.googleusercontent.com/aida/AP1WRLsHJFAHB9fLJlgsWqUsKy0At02GcP_goqpSkgA5VoJ0JnSFfbfE9XoEyafCCaO-pnvbJrJ_vCRyiivc17_XXVlxuKJd8SQqM3181OFCxCS83QzYD9UHVSyxWq8vBsdCq7BXb0fax63dfIViKZ-AU_KswXEnZHfuS8buGpvYLWTV1zGLFTHJzz_8w1w8ixCZNOswYMthsNOI9lXfeSwqciM26X46jpN0YMrH4En9HH2u1gi9wr-gEhH3",
      link: "/products?category=Accessories",
    },
    {
      title: "FOOTWEAR",
      img: "https://lh3.googleusercontent.com/aida/AP1WRLvbCBCwSCRR6qYMa_09UKFFqoBzwjiAPOomGLWyvKwEE4H857VoBVxNsdykoUUVwPvwJpuu4WT1ShbGeyMsUKhH9_9XPI5ePnq-OzuX4_2MgWtbYuw5QdA1MHpyZpymSw30klO3iD2B-1tsqLDpYMiICTqev83fs5wz8RdGLsw3qdsToNknlu_8dL4ZRM2Qg--pnh29tqS7eq7TTQB4Br7ZGdrhGcIemlPq6Tko_0wyOeTB3QTOGilt",
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