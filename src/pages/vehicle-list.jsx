import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import VehicleCard from "../components/vehicle-card";
import { vehicleCategories } from "../mock/data";

const navItems = [
  { label: "首页", to: "/" },
  { label: "选车", to: "/vehicles", matchPatterns: ["/vehicles", "/vehicle/:id"] },
  { label: "预约", to: "/booking" },
  { label: "订单", to: "/order" }
];

export default function VehicleListPage() {
  return (
    <PhoneShell footer={<BottomNav items={navItems} />}>
      <TopBar title="按场景选车" />
      <div className="page-body page-stack">
        {vehicleCategories.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} to={`/vehicle/${vehicle.id}`} />
        ))}
      </div>
    </PhoneShell>
  );
}
