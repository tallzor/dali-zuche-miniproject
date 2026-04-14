import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import StatusPill from "../../components/status-pill";
import { operatorVehicles } from "../../mock/data";

function getGpsTone(gps) {
  return gps === "在线" ? "safe" : "warn";
}

export default function OperatorVehicleListPage() {
  return (
    <PhoneShell>
      <TopBar title="车辆列表" backTo="/operator" />
      <div className="page-body page-stack">
        {operatorVehicles.map((vehicle) => (
          <SectionCard
            key={vehicle.id}
            title={vehicle.plate}
            extra={<StatusPill tone={getGpsTone(vehicle.gps)}>{vehicle.gps}</StatusPill>}
          >
            <p>门店：{vehicle.store}</p>
            <p>模板：{vehicle.template}</p>
            <p>状态：{vehicle.status}</p>
          </SectionCard>
        ))}
      </div>
    </PhoneShell>
  );
}
