import { Edit, ImagePlus, Plus } from "lucide-react";

function ProductMediaSection({ images, setImages }) {

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages((prev) => [...prev, ...files].slice(0, 5));
  };

  return (
    <section className="space-y-6">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-semibold">
          Media
        </h2>

        <span className="text-xs text-black/50">
          Recommended: 4:5 Aspect Ratio
        </span>
      </div>

      <input
        type="file"
        multiple
        hidden
        id="images"
        onChange={handleImageChange}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* Primary Image */}
        <label
          htmlFor="images"
          className="col-span-2 row-span-2 aspect-[4/5] bg-neutral-100 border border-dashed border-black/20 flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
        >
          {images.length > 0 ? (
            <img
              src={URL.createObjectURL(images[0])}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <ImagePlus
                size={38}
                className="text-black/40 group-hover:text-black"
              />

              <span className="mt-4 text-sm uppercase tracking-[3px] text-black/50">
                Primary Image
              </span>
            </>
          )}
        </label>

        {/* Remaining Images */}
        {[1, 2, 3, 4].map((index) => (
          <label
            key={index}
            htmlFor="images"
            className="aspect-[4/5] bg-neutral-100 border border-dashed border-black/20 overflow-hidden relative cursor-pointer group"
          >
            {images[index] ? (
              <>
                <img
                  src={URL.createObjectURL(images[index])}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <Edit
                    size={22}
                    className="text-white"
                  />
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center hover:bg-neutral-200 transition">
                <Plus
                  size={20}
                  className="text-black/40"
                />
              </div>
            )}
          </label>
        ))}
      </div>
    </section>
  );
}

export default ProductMediaSection;