function PerformanceChart() {
  return (
    <div className="lg:col-span-2 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-sm">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-semibold">
          Product Performance
        </h3>

        <select className="bg-transparent border-none text-sm text-black/50 focus:ring-0">
          <option>Last 30 Days</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="relative h-64 w-full">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
          <defs>
            <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="black" stopOpacity="0.1" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0,250 Q100,200 200,220 T400,150 T600,100 T800,130 T1000,50"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />

          <path
            d="M0,250 Q100,200 200,220 T400,150 T600,100 T800,130 T1000,50 V300 H0 Z"
            fill="url(#gradient)"
          />
        </svg>

        <div className="flex justify-between mt-4 text-[10px] font-bold text-black/50 uppercase tracking-[3px]">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  );
}

export default PerformanceChart;