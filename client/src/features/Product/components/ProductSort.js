//add sort button


function SortButton() {
  return (
    <button className="group flex items-center gap-2 text-[13px] uppercase tracking-[3px] text-black/70 hover:text-black transition-all">
      <span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-180">
        swap_vert
      </span>

      <span>Sort</span>
    </button>
  );
}

export default SortButton;