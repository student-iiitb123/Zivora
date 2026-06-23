import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { customers } from "../data/customers";

function AdminCustomersPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = customers.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || c.status === filter;
    return matchesSearch && matchesFilter;
  });

  const totalCustomers = customers.length;
  const activeCustomers = customers.filter((c) => c.status === "Active").length;
  const totalRevenue = "$30,660.50";

  return (
    <AdminLayout>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-6 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-6">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Customers
            </h2>
            <p className="text-sm text-black/50 mt-1">
              Manage and view all registered customers.
            </p>
          </div>
          <button className="w-full sm:w-auto bg-black text-white px-5 py-3 flex items-center justify-center gap-2 uppercase tracking-[2px] text-xs active:scale-95 transition-transform">
            <UserPlus size={15} />
            Add Customer
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Total Customers", value: totalCustomers },
            { label: "Active Customers", value: activeCustomers },
            { label: "Total Revenue", value: totalRevenue },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] p-5 rounded-sm"
            >
              <p className="text-xs uppercase tracking-[3px] text-black/40 mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
            />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-black/10 bg-white rounded-sm focus:outline-none focus:border-black/30 transition"
            />
          </div>

          <div className="flex gap-2">
            {["All", "Active", "Inactive"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2.5 text-xs uppercase tracking-[2px] border transition rounded-sm ${
                  filter === f
                    ? "bg-black text-white border-black"
                    : "bg-white text-black/50 border-black/10 hover:border-black/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-sm p-4 sm:p-6 lg:p-8">

          {/* Mobile cards */}
          <div className="block lg:hidden space-y-4">
            {filtered.length === 0 ? (
              <p className="text-center text-black/40 py-12 text-sm">
                No customers found.
              </p>
            ) : (
              filtered.map((c) => (
                <div
                  key={c.id}
                  className="border border-black/10 rounded-sm p-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {c.initials}
                    </div>
                    <div>
                      <p className="font-semibold">{c.name}</p>
                      <p className="text-xs text-black/50">{c.email}</p>
                    </div>
                    <span
                      className={`ml-auto px-3 py-1 text-[10px] font-bold uppercase rounded-full ${
                        c.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-neutral-100 text-black/40"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-black/50">Location</span>
                      <span>{c.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/50">Joined</span>
                      <span>{c.joined}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/50">Orders</span>
                      <span className="font-semibold">{c.totalOrders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black/50">Total Spent</span>
                      <span className="font-bold">{c.totalSpent}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-black/10">
                  {["Customer", "Location", "Joined", "Orders", "Total Spent", "Status", ""].map(
                    (h) => (
                      <th
                        key={h}
                        className="py-4 text-xs uppercase text-black/50 tracking-[3px] pr-6 last:pr-0"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-12 text-center text-black/40 text-sm"
                    >
                      No customers found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((c) => (
                    <tr
                      key={c.id}
                      className="hover:bg-neutral-50 transition-colors group"
                    >
                      <td className="py-6 pr-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {c.initials}
                          </div>
                          <div>
                            <p className="font-bold">{c.name}</p>
                            <p className="text-xs text-black/50">{c.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 pr-6 text-black/50 text-sm">{c.location}</td>
                      <td className="py-6 pr-6 text-black/50 text-sm">{c.joined}</td>
                      <td className="py-6 pr-6 font-semibold">{c.totalOrders}</td>
                      <td className="py-6 pr-6 font-bold">{c.totalSpent}</td>
                      <td className="py-6 pr-6">
                        <span
                          className={`px-3 py-1 text-[10px] font-bold uppercase rounded-full ${
                            c.status === "Active"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-neutral-100 text-black/40"
                          }`}
                        >
                          {c.status}
                        </span>
                      </td>
                      <td className="py-6 text-right text-black/40 opacity-0 group-hover:opacity-100 transition text-sm cursor-pointer">
                        •••
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
}

export default AdminCustomersPage;