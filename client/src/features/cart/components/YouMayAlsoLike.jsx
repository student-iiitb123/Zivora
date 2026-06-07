import { ChevronLeft, ChevronRight } from "lucide-react";
import SuggestionCard from "./SuggestionCard";

const suggestions = [
  {
    id: 1,
    name: "Arch Leather Clutch",
    price: "$1,250",
    rating: 4.5,
    reviews: 24,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBui0TTzGiWiAc3cBlDCCMxziLIsD4KA4he5G5FeOfvUJpaJpL2eRZcj7sDQoW8L9ZDgRo2klEX0BEEjx1ac1e-IEBFg9ZJW2n2Ur-Bbwdf4q-jZTxEe-_Sd1l-x_H4400ANii7hAncCI7eKZIwzs7B5B05W0OjnZ87JV9dA1iGuTkBvlBegPwXHKPlHIdlFJ4Ln_OSEfao-wv3bwnpOFIFtdGkWOlxQhatA_VJ0RSusSEXwHmKk19o1DwK-b_SGrUiQyfjJNuc",
  },
  {
    id: 2,
    name: "Pointed Loafers",
    price: "$340",
    rating: 5,
    reviews: 56,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXD0FTPABGLEdQpK1oODkvh8xehY3-KPZiGPfb1Kz0-Yv_lJa8IbPPOCHN14z4lf0a23G4cQQRr0gFwA9P51X1PhajrLcVk2mSp0T-MtlbD1cKPBmgtNH_9XOgqLEuLgG6XSqPbraRG3d1gjOaBEDxVcC7gLR9e6oDTHrDVed8G1WALmJxt89TbhA6fvJdWgVHU7iCH_Di392K8LZCGJZSReq5vqY9BndJ-eeNiUeSvNq9C6HcUPQmqmlMPpSZgq3PE1s1r-FW",
  },
  {
    id: 3,
    name: "Silk Geometric Scarf",
    price: "$185",
    rating: 4,
    reviews: 12,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBR6pX5y3i2EjOgcfE7IZnUSsJoZqFSFoHhe-RKS49el9idQ7kM7ExJ8Dj9BvgCa4Ep_N0-MfLh3j-itS_AeRQeldSunrYRM7b1gqvtCeOsAUuf3nqBztUyl73145ZYc38FxYsddqKwMiv_als4oizChDA5MvDsgvRm71MdDpYbuhGiscqzJmYNTUI_usTJsk2xHO57lD63w0aEVvGNPG72W7CF-jta9uzNVNUZXNGCQLXy6xvNZRJflR7TpcusTevDlpB7bDu",
  },
];

function YouMayAlsoLike() {
  return (
    <section className="mt-32">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-xs uppercase tracking-[5px] text-black/50 mb-3">
            Curation
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            You May Also Like
          </h2>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:border-black transition">
            <ChevronLeft size={20} />
          </button>

          <button className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:border-black transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
  {suggestions.map((item) => (
    <SuggestionCard key={item.id} item={item} />
  ))}
</div>
    </section>
  );
}

export default YouMayAlsoLike;