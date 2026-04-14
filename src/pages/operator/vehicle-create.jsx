import { Link } from "react-router-dom";
import PhoneShell from "../../components/phone-shell";
import TopBar from "../../components/top-bar";
import { SectionCard } from "../../components/section-card";
import { stores, vehicleCategories } from "../../mock/data";

const store = stores.find((item) => item.id === "ancient-town") ?? stores[0];
const template = vehicleCategories.find((item) => item.id === "family-suv") ?? vehicleCategories[0];

const vehicleDraft = {
  store,
  template,
  plate: "云L A3288",
  vin: "LBV5A1234D20260414",
  mileage: "12,480 km"
};

export default function OperatorVehicleCreatePage() {
  return (
    <PhoneShell>
      <TopBar title="录入车辆" backTo="/operator" />
      <div className="page-body page-stack">
        <SectionCard title="车辆信息">
          <div className="operator-summary-grid">
            <div className="operator-summary-row">
              <span>门店</span>
              <strong>{vehicleDraft.store.name}</strong>
            </div>
            <div className="operator-summary-row">
              <span>车型模板</span>
              <strong>{vehicleDraft.template.name}</strong>
            </div>
            <div className="operator-summary-row">
              <span>车牌</span>
              <strong>{vehicleDraft.plate}</strong>
            </div>
            <div className="operator-summary-row">
              <span>VIN</span>
              <strong>{vehicleDraft.vin}</strong>
            </div>
            <div className="operator-summary-row">
              <span>里程</span>
              <strong>{vehicleDraft.mileage}</strong>
            </div>
          </div>
        </SectionCard>
        <SectionCard title="录入说明">
          <p>这是一组只读演示数据，用于串起车辆建档到交付资料上传的流程。</p>
        </SectionCard>
        <Link className="primary-button" to="/operator/doc-upload">
          去上传资料
        </Link>
      </div>
    </PhoneShell>
  );
}
