import { Navigate, Link, useParams } from "react-router-dom";
import PhoneShell from "../components/phone-shell";
import BottomNav from "../components/bottom-nav";
import TopBar from "../components/top-bar";
import { SectionCard } from "../components/section-card";
import { vehicleCategories } from "../mock/data";
import { makeBookingRouteState } from "../components/booking-flow-state";

const navItems = [
  { label: "首页", to: "/" },
  { label: "选车", to: "/vehicles", matchPatterns: ["/vehicles", "/vehicle/:id"] },
  { label: "预约", to: "/booking" },
  { label: "订单", to: "/order" }
];

export default function VehicleDetailPage() {
  const { id } = useParams();
  const vehicle = vehicleCategories.find((item) => item.id === id);

  if (!vehicle) {
    return <Navigate to="/vehicles" replace />;
  }

  return (
    <PhoneShell footer={<BottomNav items={navItems} />}>
      <TopBar title={vehicle.name} backTo="/vehicles" />
      <div className="detail-banner" />
      <div className="page-body page-stack">
        <SectionCard title="车型亮点">
          <p>{vehicle.summary}</p>
          <p>适合路线：{vehicle.detailRoute}</p>
          <p>可租日期：4 月 20 日 - 4 月 28 日</p>
        </SectionCard>
        <SectionCard title="费用说明">
          <p>基础日租已含标准交付、基础客服支持与路线建议。</p>
          <p>不含违章、超时、特殊清洁与额外增值项。</p>
        </SectionCard>
        <Link
          className="primary-button"
          to="/booking"
          state={makeBookingRouteState({ vehicleId: vehicle.id, vehicleName: vehicle.name })}
        >
          选择该车型并申请
        </Link>
      </div>
    </PhoneShell>
  );
}
