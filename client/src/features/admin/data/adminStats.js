import {
  Boxes,
  DollarSign,
  ShoppingCart,
  User,
} from "lucide-react";

export const adminStats = [
  {
    label: "Total Revenue",
    value: "$1,248,392",
    trend: "+12.5%",
    icon: DollarSign,
    trendType: "up",
  },
  {
    label: "Total Orders",
    value: "12,842",
    trend: "+8.2%",
    icon: ShoppingCart,
    trendType: "up",
  },
  {
    label: "Total Products",
    value: "824",
    trend: "Stable",
    icon: Boxes,
    trendType: "stable",
  },
  {
    label: "Total Users",
    value: "45,901",
    trend: "+24.1%",
    icon: User,
    trendType: "up",
  },
];