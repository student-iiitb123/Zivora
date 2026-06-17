export default function BestSellers() {
  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10 sm:mb-14">
          <div>
            <span className="text-xs sm:text-sm text-black/50 tracking-[3px] sm:tracking-[5px] uppercase mb-3 block">
              CURATED FAVORITES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-black">
              BEST SELLERS
            </h2>
          </div>

          <a
            className="w-fit text-xs sm:text-sm uppercase tracking-widest text-black border-b border-black pb-1 flex items-center gap-2 hover:opacity-70 transition-opacity"
            href="#"
          >
            VIEW ALL
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <ProductCard
            image="https://lh3.googleusercontent.com/aida-public/AB6AXuCbhfWtZtBOmO5HbWrQdr5JAGTsz31jVfbCS5Wy4caKUUeIaeaccTapz7U73Ft_mW9HBiHAy6cooIndFsmw8WAGx-wwn13KpTwvV7xTgzRcolKu4oYlSWBc2x03_z-czSpIJmwy9DerhDH-X5Lml4USKyrmXaP6uqsMVoyCzR48tSA21CO1YRnQr_KzVTHOgafpQ04jAmQSbPHt4G8w3Z88qBBQ9fLmPS2qGyKdgLvXh05rpLxYAa3Fy_lPWyv3cgO1A8rVIyBw"
            title="Tailored Wool Blazer"
            color="Charcoal Gray"
            price="$495"
          />

          <ProductCard
            image="https://lh3.googleusercontent.com/aida/AP1WRLsHJFAHB9fLJlgsWqUsKy0At02GcP_goqpSkgA5VoJ0JnSFfbfE9XoEyafCCaO-pnvbJrJ_vCRyiivc17_XXVlxuKJd8SQqM3181OFCxCS83QzYD9UHVSyxWq8vBsdCq7BXb0fax63dfIViKZ-AU_KswXEnZHfuS8buGpvYLWTV1zGLFTHJzz_8w1w8ixCZNOswYMthsNOI9lXfeSwqciM26X46jpN0YMrH4En9HH2u1gi9wr-gEhH3"
            title="Structured Mini Bag"
            color="Ivory Leather"
            price="$320"
          />

          <ProductCard
            image="https://lh3.googleusercontent.com/aida/AP1WRLvbCBCwSCRR6qYMa_09UKFFqoBzwjiAPOomGLWyvKwEE4H857VoBVxNsdykoUUVwPvwJpuu4WT1ShbGeyMsUKhH9_9XPI5ePnq-OzuX4_2MgWtbYuw5QdA1MHpyZpymSw30klO3iD2B-1tsqLDpYMiICTqev83fs5wz8RdGLsw3qdsToNknlu_8dL4ZRM2Qg--pnh29tqS7eq7TTQB4Br7ZGdrhGcIemlPq6Tko_0wyOeTB3QTOGilt"
            title="Handcrafted Loafers"
            color="Espresso Suede"
            price="$285"
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ image, title, color, price }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 sm:mb-5 aspect-[4/5] overflow-hidden bg-white">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
        />

        <button className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white">
          ADD TO BAG
        </button>

        <button className="absolute top-3 sm:top-4 right-3 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 bg-white/90 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-black text-[20px] sm:text-[24px]">
            favorite
          </span>
        </button>
      </div>

      <h4 className="text-sm sm:text-base font-medium text-black mb-1">
        {title}
      </h4>

      <p className="text-xs sm:text-sm text-black/50 mb-2">{color}</p>

      <p className="text-sm sm:text-base font-semibold text-black">{price}</p>
    </div>
  );
}