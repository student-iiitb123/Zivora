function EditorialPanel() {
  return (
    <section className="hidden md:block w-1/2 h-screen relative overflow-hidden">
      <img
        alt="High-end editorial fashion photography"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="https://i.pinimg.com/736x/e7/8b/13/e78b13fdd15fb82d27c1a16d125475f8.jpg"
      />

      <div className="absolute inset-0 bg-black/25"></div>

      {/* <h1 className="absolute top-10 left-10 text-4xl font-semibold tracking-tight text-white">
        ZIVORA
      </h1> */}

      <p className="absolute bottom-10 left-10 max-w-sm text-white/90 text-lg leading-relaxed">
        Elevated essentials for the modern silhouette. Discover the new
        collection.
      </p>
    </section>
  );
}

export default EditorialPanel;