import { useEffect, useState } from "react";

import AdminLayout from "../components/AdminLayout";
import AdminOrdersTopbar from "../components/AdminOrdersTopbar";
import AdminOrdersStats from "../components/AdminOrdersStats";
import AdminOrdersFilters from "../components/AdminOrdersFilters";
import AdminOrdersTable from "../components/AdminOrdersTable";
import AdminMobileNav from "../components/AdminMobileNav";

import { getAllOrders } from "../../../services/orderService";

function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await getAllOrders();

      setOrders(res.data.orders || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminLayout>
      <AdminOrdersTopbar />

      <div className="px-5 md:px-16 py-8 max-w-[1440px] mx-auto">
        <AdminOrdersStats orders={orders} />

        <AdminOrdersFilters />

        <AdminOrdersTable orders={orders} />
      </div>

      <AdminMobileNav />
    </AdminLayout>
  );
}

export default AdminOrdersPage;