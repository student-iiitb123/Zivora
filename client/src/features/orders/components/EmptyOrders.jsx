function EmptyOrders() {
  return (
    <section className="flex flex-col items-center text-center py-32 max-w-md mx-auto">
      <div className="text-6xl mb-8">🛍️</div>

      <h3 className="text-3xl font-semibold mb-4">
        A Blank Canvas
      </h3>

      <p className="text-black/50 mb-8">
        Your journey with Zivora is just beginning.
      </p>

      <button className="bg-black text-white px-10 py-4 uppercase tracking-[3px]">
        Shop New Arrivals
      </button>
    </section>
  );
}

export default EmptyOrders;