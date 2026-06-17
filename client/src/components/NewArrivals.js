export default function NewArrivals() {
  return (
    <section className="py-14 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-black mb-6 sm:mb-8">
            NEW ARRIVALS
          </h2>

          <div className="flex justify-start sm:justify-center gap-6 sm:gap-8 overflow-x-auto border-b border-black/10 pb-4 max-w-2xl mx-auto">
            <button className="shrink-0 text-sm font-medium text-black border-b-2 border-black -mb-[18px] pb-4">
              ALL
            </button>
            <button className="shrink-0 text-sm font-medium text-black/50 hover:text-black transition-colors pb-4">
              MEN
            </button>
            <button className="shrink-0 text-sm font-medium text-black/50 hover:text-black transition-colors pb-4">
              WOMEN
            </button>
            <button className="shrink-0 text-sm font-medium text-black/50 hover:text-black transition-colors pb-4">
              ACCESSORIES
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden mb-4 bg-neutral-100">
              <img
                alt="Cashmere Knitwear"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIuVHMrS50VNjMmwHsqoqjbAPaWwcBQmLjB9Ec3vJ6JW_ut-h3NkVg7uG4JITEXoo9zSBQ4NNkv8pbiQAz3R2hpzvRdwydwxB2xf41Zm2olAJ4Tti-OXfEGmNbIgEwm8bDVWO_UHqqF_vwf_35ZgPAyPXlGiVNAR1ifK694YJ_ZrX2qvhfPxCS6H1UyAPQrapJlyew_PJUz5xIELkLQbEuGXEuPH-5RLrZAkXG-tf0E5472AYOyBy0FEUAQI5rt1z-Hy0V8OzM"
              />
            </div>
            <h5 className="text-xs sm:text-sm font-medium text-black uppercase">
              Cashmere Knitwear
            </h5>
            <p className="text-xs sm:text-sm text-black/60">$340</p>
          </div>

          <div className="group cursor-pointer md:mt-12">
            <div className="aspect-[4/5] overflow-hidden mb-4 bg-neutral-100">
              <img
                alt="Seasonal Outerwear"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaEaoRiD_rTaIuer2GaU-uXM_BJ2-L8DY6X3zJlWlsmWxUpTW4oKX9kNQlFUmRkRcQGm4AsoycQ7SZO9GcI_nRGrNnZSzNhD6AVyGwO3_tIVEaj1VKazLPRi3QaVvHx9Y3nJeWy2pkx3KW25iKIOQtml08MQbomk0pi9tu7r-1ROvx0gh25UrKlFa_dQOuuIHkNELyvMrA1fl3de73C_YTVqQZ_W6aSouMVhlB4MKsoxMb_PGiIzgtahSOB2fBRaNOyw6ohQvA"
              />
            </div>
            <h5 className="text-xs sm:text-sm font-medium text-black uppercase">
              Seasonal Outerwear
            </h5>
            <p className="text-xs sm:text-sm text-black/60">$890</p>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden mb-4 bg-neutral-100">
              <img
                alt="Silk Evening Wear"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1uaieExXJQqZUvLWQJ5D3Weilh06F0yF3WdFXAkxClgd5Nx0PyJp5lBX4lsgY2CQ_7Rq6aNKHqDFgSFdAagUmcla5kuF1VVCxIas2DsKXOPTeTtzce4Qd5VwhjURq3qNNVJIdQFmLg--P4dJY6-emyGl6Jw-4iirGOz2CcShTkE_mFwp3wRUme5IT_vssj-tYyOke8BG3Sfy_fyUiZxNMYYCmnoxtzY9DwVyzsN1bupGG294XGAWfKgfpxEzec6jjq-gXEVI5"
              />
            </div>
            <h5 className="text-xs sm:text-sm font-medium text-black uppercase">
              Silk Evening Wear
            </h5>
            <p className="text-xs sm:text-sm text-black/60">$520</p>
          </div>

          <div className="group cursor-pointer md:mt-12">
            <div className="aspect-[4/5] overflow-hidden mb-4 bg-neutral-100">
              <img
                alt="Pointed Toe Heels"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmOqdDtg0gflHJpmkG-nhPt5iSB5IcVUCTbhr-mAXEb7We3RB8HDQV72SlEozHRH3eB9Nq4-Yx6gkRDVECA8QC4fQZlF0YmSjDnQxG7xVGUN0LMstsd5pcDyciEKRaYyXr6BphT7ogvpoTdsf6qD5E2Ju2DOd_fJyxulqxNdXPUpb6UC7e9qqMISd90uJWAsoVWP-vKOQL0e1ZLCGjdmE6_h68Ru9itvP_RJba_rfVxEUFu76tusC_wPYeedeHINcBDbeBQGdh"
              />
            </div>
            <h5 className="text-xs sm:text-sm font-medium text-black uppercase">
              Pointed Toe Heels
            </h5>
            <p className="text-xs sm:text-sm text-black/60">$410</p>
          </div>
        </div>
      </div>
    </section>
  );
}