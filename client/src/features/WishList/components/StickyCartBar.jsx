function StickyCartBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full p-5 z-50">
      <button className="w-full h-16 bg-black text-white uppercase tracking-[4px] shadow-2xl">
        Add All To Cart ($2,140)
      </button>
    </div>
  );
}

export default StickyCartBar;