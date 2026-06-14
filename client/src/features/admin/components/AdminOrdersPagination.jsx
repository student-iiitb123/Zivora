function AdminOrdersPagination() {
  return (
    <div className="px-6 py-4 bg-white flex items-center justify-between border-t border-black/10">
      <span className="text-xs text-black/50">
        Showing 1 to 10 of 4,291 orders
      </span>

      <div className="flex items-center gap-2">
        <PageButton label="‹" />
        <PageButton label="1" active />
        <PageButton label="2" />
        <PageButton label="3" />
        <PageButton label="›" />
      </div>
    </div>
  );
}

function PageButton({ label, active }) {
  return (
    <button
      className={`w-8 h-8 flex items-center justify-center rounded-lg border text-xs ${
        active
          ? "bg-black text-white border-black"
          : "border-black/10 text-black/50 hover:bg-neutral-100"
      }`}
    >
      {label}
    </button>
  );
}

export default AdminOrdersPagination;