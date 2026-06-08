function BenefitItem({ benefit }) {
  const Icon = benefit.icon;

  return (
    <div className="flex items-center gap-4 p-4 bg-neutral-100 rounded-lg">
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
        <Icon size={18} />
      </div>

      <div>
        <p className="text-sm uppercase tracking-[2px] font-medium">
          {benefit.title}
        </p>

        <p className="text-xs text-black/50">
          {benefit.subtitle}
        </p>
      </div>
    </div>
  );
}

export default BenefitItem;