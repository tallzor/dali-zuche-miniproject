import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";

const operatorLinks = [
  { label: "门店", to: "/operator/stores" },
  { label: "车型模板", to: "/operator/templates" },
  { label: "录入车辆", to: "/operator/vehicle-create" },
  { label: "GPS", to: "/operator/gps-bind" },
  { label: "上架", to: "/operator/publish-status" },
  { label: "车辆列表", to: "/operator/vehicles" }
];

export default function OperatorDashboardPage() {
  return (
    <PhoneShell>
      <TopBar title="运营演示入口" backTo="/" />
      <div className="page-body page-stack">
        <SectionCard title="隐藏运营入口">
          <p>用于门店、车型、交付和上架状态的演示流。</p>
        </SectionCard>
        <SectionCard title="快捷入口">
          <div className="quick-links operator-grid">
            {operatorLinks.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>
    </PhoneShell>
  );
}
