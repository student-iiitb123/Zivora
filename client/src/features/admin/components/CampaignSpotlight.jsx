function CampaignSpotlight() {
  return (
    <div className="bg-black relative group overflow-hidden rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] min-h-[280px] sm:min-h-[320px] lg:min-h-[350px]">
      <img
        alt="Luxury Store"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA174e6tTD7QfIEVt9UE1OD94Y2hOCW4GgydTRWICbD5dyrpO50KjM_X_3wLaneBKgdUGEWjFcNALCnD2ISKv8C7bzCXCADKrn8J8Pc2he82ebQWyyeP588vxZ2ozvksxTdhm0lqE-5R1ST8Z7dAVgENPD0V5dn8Z7xZKR0DZa-ggBztYA2Cx85Gz9unvmO3zxNRld_WtVHfQvGeSFPT3RrXkzA-8-D7PQwPXNoCN_-ODcFktYKAl2F-wnGohXgI87RF6qyi2eg"
      />

      <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-end">
        <span className="text-white/60 text-[9px] sm:text-[10px] font-bold uppercase tracking-[2px] sm:tracking-[3px] mb-2">
          Campaign Spotlight
        </span>

        <h4 className="text-xl sm:text-2xl font-semibold text-white mb-4 max-w-md">
          Summer Collection Launch 2024
        </h4>

        <button className="w-full sm:w-max bg-white text-black px-5 py-3 uppercase text-xs sm:text-sm font-medium transition-transform active:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
}

export default CampaignSpotlight;